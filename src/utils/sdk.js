// 接口
// const BASE_URL = 'http://testwxopapi.yqj.cn'
const BASE_URL = process.env.NODE_ENV === 'production' ? 'http://wxopapi.yqj.cn' : 'http://172.17.6.10:8848'
const URL_PUSH_EVENT = BASE_URL + '/api/ads/push/advertLog' // 上报访问数据
const URL_PUSH_USER = BASE_URL + '/api/ads/push/userLog' // 上报用户数据
const URL_GET_USER_ADS_LIST = BASE_URL + '/api/ads/user/plan/list'
// 封装原生ajax，避免依赖第三方包
const _http = (options) => {
  // json转url
  const jsonToUrl = (json) => {
    let arr = []
    Object.keys(json).forEach(item => {
      arr.push(item + '=' + encodeURIComponent(json[item]))
    })
    return arr.join('&')
  }
  return new Promise((resolve, reject) => {
    options = options || {}
    // if (!options.url) return;
    options.method = options.method || 'get'
    const xhr = new XMLHttpRequest()
    const str = jsonToUrl(options.data)
    if (options.method === 'get') {
      xhr.open('get', `${options.url}?${str}`, true)
      xhr.send()
    } else {
      xhr.open('post', options.url, true)
      xhr.setRequestHeader('Content-Type', 'application/json')
      xhr.send(JSON.stringify(options.data))
    }
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
          try {
            resolve(JSON.parse(xhr.responseText))
          } catch (e) {
            reject(e)
          }
        } else {
          reject(new Error('Request was failed: ' + xhr.status))
        }
      }
    }
  })
}
// 生成用户uuid
const _generateUuid = () => {
  if (localStorage && localStorage.uuid) return JSON.parse(localStorage.uuid)
  else {
    const _uuid = {
      id: n() + n() + n() + n() + n() + n() + n() + n(),
      isSend: false
    }
    localStorage.uuid = JSON.stringify(_uuid)
    return _uuid
  }
  function n () {
    return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
  }
  // return JSON.parse(localStorage.uuid)
}
// 当前时间时间戳
const _generateNowTime = () => {
  console.log(Date.parse(new Date()), 'Date.parse(new Date())')
  return Date.parse(new Date())
}
// 获取系统信息
const _getOsInfo = () => {
  let osInfo = navigator.userAgent
  if (osInfo.indexOf('Android') > -1 || navigator.userAgent.indexOf('Linux') > -1) return 'Android'
  if (osInfo.indexOf('iPhone') > -1) return 'iOS'
  if (osInfo.indexOf('Windows') > -1) return 'Windows'
  if (osInfo.indexOf('Mac') > -1) return 'Mac'
  else return 'Other'
}
const _getEquipmentInfo = () => {
  // 如果
  if (!window) return {}
  const equipment = window.navigator
  return {
    SDKVersion: '1.0.0',
    language: equipment.language,
    screenHeight: screen.height,
    screenWidth: screen.width,
    platform: equipment.platform,
    system: _getOsInfo(),
    // 'version': '7.0.8',
    windowWidth: document.body.clientWidth, // 可使用窗口宽度，单位px
    windowHeight: document.body.clientHeight
  }
}
const sendEvent = (_this, ads_id, type) => {
  console.log('----------------------------', _this.uuid)
  // if(!  !Array.isArray[ads_id] || !!typeof ads_id === 'string') throw new Error('广告id类型非法')
  if (typeof ads_id.ads_id === 'string') ads_id = [ads_id]
  let data = ads_id.map(item => {
    return {
      project_id: _this.project_id,
      ctime: _generateNowTime(),
      type, // 固定值 展示：2
      uuid: _this.uuid,
      materiaId: item.materiaId,
      ads_id: item.ads_id
    }
  })
  return _http({
    url: URL_PUSH_EVENT,
    method: 'post',
    data: data
  })
}
const timingSendAdvert = (_this) => {
  setInterval(() => {
    const ads_id = (localStorage.getItem('adsList') && JSON.parse(localStorage.getItem('adsList'))) || []
    if (!ads_id.length) return
    sendEvent(_this, ads_id, 1).then(res => {
      localStorage.setItem('adsList', [])
      if (res.Code === 0) console.info('上报访问数据成功1')
      else console.warn('上报访问数据失败13')
    })
  }, 30 * 1000)
}
const checkIsNotSendAdvert = (_this) => {
  const ads_id = (localStorage.getItem('adsList') && JSON.parse(localStorage.getItem('adsList'))) || []
  if (ads_id.length) {
    sendEvent(_this, ads_id, 1).then(res => {
      localStorage.setItem('adsList', [])
      if (res.Code === 0) console.info('上报访问数据成功')
      else console.warn('上报访问数据失败')
    })
  }
}
class AdvertSdk {
  constructor (project_id) {
    this.uuid = undefined // 通用平台用户
    this.equipment = undefined
    this.userId = undefined // 使用平台用户id
    this.project_id = undefined // 项目id
    // this.adsList = []
    this._init(project_id)
    console.log(this.uuid, 'this.uuid')
  }
  // 初始化执行方法
  _init (project_id) {
    this.project_id = project_id
    this.uuid = _generateUuid().id
    this.equipment = _getEquipmentInfo()
    timingSendAdvert(this)
    checkIsNotSendAdvert(this)
  }
  // 上报访问数据
  sendAdvert (ads_id, cb) {
    let adsList = (localStorage.getItem('adsList') && JSON.parse(localStorage.getItem('adsList'))) || []
    // adsList = adsList.split(',')
    if (typeof adsList === 'string') adsList = JSON.parse(adsList)
    ads_id = [ads_id]
    adsList = adsList.concat(ads_id)
    console.log(adsList, typeof adsList)
    localStorage.setItem('adsList', JSON.stringify(adsList))
    cb && cb()
  }
  // 上报广告显示
  sendAdsShow (ads_id) {
    console.log(ads_id, '上报广告显示')
    sendEvent(this, ads_id, 2).then(res => {
      if (res.Code === 0) console.info('上报广告显示成功')
      else console.warn('报广告显示失败')
    })
  }
  getUserAdsList (slot_id) {
    return new Promise((resolve, reject) => {
      this.sendUser('', () => {
        _http({
          url: URL_GET_USER_ADS_LIST,
          data: {
            slot_id: slot_id || '',
            userid: this.uuid,
            project_id: this.project_id
          }
        }).then(res => {
          resolve(res)
        }).catch(err => {
          reject(err)
        })
      })
    })
  }
  // 上报用户数据
  sendUser (userId, cb) {
    if (JSON.parse(localStorage.getItem('uuid')).isSend && !userId) {
      cb && cb()
      return
    }
    this.userId = userId
    _http({
      method: 'post',
      url: URL_PUSH_USER,
      data: [{
        project_id: this.project_id, // 项目id
        uuid: this.uuid, // 用户ID
        userid: this.userId || this.uuid, // 来源用户ID 由使用方传入
        equipment: this.equipment,
        ctime: _generateNowTime()
      }]
    }).then(res => {
      if (res.Code === 0) {
        console.log(2)
        cb && cb()
        localStorage.uuid = JSON.stringify({
          id: this.uuid,
          isSend: true
        })
        console.info('上报用户数据成功')
      } else {
        console.warn('上报用户数据失败')
      }
    })
  }
  install (Vue) {
    Vue.prototype.$advert = this
  }
}
export default AdvertSdk
