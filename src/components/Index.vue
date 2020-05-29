<template>
	<div>
		<div class="person">
			<div id="active-space"></div>
			<div class="person-info clearfix">
				<div class="person-tx pull-left"><img src="../assets/images/portairt.png"/></div>
				<div class="pull-left info">
					<div class="row clearfix">
						<div class="name pull-left">Admin</div>
						<div class="grade pull-right"><span class="tab-icon">Lv3</span> <i>铜牌会员</i></div>
					</div>
					<div class="row progress-wraper">
						<div class="already">已使用200天</div>
						<div class="progress-all">
							<div class="progress-true"></div>
						</div>
					</div>
				</div>
			</div>
			<div class="person-b clearfix">
				<div class="pull-left clearfix person-box">
					<router-link to="">
						<div class="pull-left">
							<i class="person-box-icon person-box-data"></i>
						</div>
						<div class="pull-left">
							<p>积分 180</p>
							<p>如何获取积分？</p>
						</div>
					</router-link>
					
				</div>
				<div class="person-box pull-left">
					<router-link to="">
						<div class="pull-left">
							<i class="person-box-icon person-box-card"></i>
						</div>
						<div class="pull-left person-num">
							<p>积分 180</p>
							<p>123456781000</p>
						</div>
					</router-link>
				</div>
			</div>
		</div>
		<nav>
			<ul class="clearfix">
				<li class="home-info border-r border-b">
					<router-link to="/home-info">
						<i></i>
						<p>家庭信息</p>
					</router-link>
					
				</li>
				<li class="home-grade border-r border-b">
					<router-link to="/home-grade">
						<i></i>
						<p>家庭等级</p>
					</router-link>
					
				</li>
				<li class="home-bill border-b">
					<router-link to="/bill">
						<i></i>
						<p>家庭账单</p>
					</router-link>
					
				</li>
				<li class="coupon-center border-r">
					<router-link to="/coupon-list">
						<i></i>
						<p>卡券中心</p>
					</router-link>
					
				</li>
				<li class="my-coupon border-r">
					<router-link to="/my-coupon">
						<i></i>
						<p>我的卡券</p>
					</router-link>
				</li>
				<li class="my-wallet">
					<router-link to="/wallet">
						<i></i>
						<p>我的钱包</p>
					</router-link>
				</li>
			</ul>
		</nav>
		<section class="activity">
			<div class="title clearfix">
				<div class="pull-left">
					<i class="fa fa-clock-o"></i>
					最新优惠活动
				</div>
				<div class="pull-right">
					<router-link to="/coupon-list">全部 <i class="fa fa-angle-right"></i></router-link>
				</div>
			</div>
			<!-- <div v-for="(item,index) in advertList" :key="index" class="advert">
				<img @click="handleClickAdsBanner(item.id, item.target)"  :src="item.picUrl"/>
			</div> -->
      <div class="adver" v-if="advert">
        <template v-for="(item, index) in advertList">
          <img
            v-if="item.type===1"
            @click="handleClickAdsBanner({ads_id: item.id,materiaId: item.materiaId}, item.targetUrl)"
            :key="index"  
            :src="item.picUrl"
          />
          <h4 class="txt_advert" @click="handleClickAdsBanner({ads_id: item.id,materiaId: item.materiaId}, item.targetUrl)" :key="index"  v-else>{{item.content}}</h4>
        </template>
			</div>
		</section>
	</div>
</template>
<script>
	export default{
		data(){
			return {
        advertList: [],
        advert: false,
        ads_id: ''
      }
    },
    // watch: {
    //   advert(val) {
    //     let ads = []
    //     this.$http.get('https://www.fastmock.site/mock/1a9199b70f7f972f4ea242de125df4e9/api/getId').then(res => {
    //       this.ads_id = res.data.ads_id
    //       if(val) this.$advert.sendAdsShow(res.data.ads_id)
    //     })
    //   }
    // },
    methods: {
      handleClickAdsBanner(id, targetUrl) {
        console.log(123)
        this.$advert.sendAdvert(id, () => {
          console.log(this.$router)
          // if(targetUrl) window.open(targetUrl)
        })
      }
    },
    mounted(){
      // this.$http.get('https://www.fastmock.site/mock/1a9199b70f7f972f4ea242de125df4e9/api/getId').then(result => {
        this.advert = true
        this.$advert.getUserAdsList('5ecc85a02ef5d461272527d3').then(res =>{
          console.log(1)
          this.advertList = res.data
          let ids = this.advertList.map(item => {
            return {
              ads_id: item.id,
              materiaId: item.materiaId
            }
          })
          
          this.$advert.sendAdsShow(ids)
        })
      console.log(this.$advert)
      
    },
		// beforeRouteLeave(to, from, next) {
    //     // ....
    //     //alert('local')
    //     next();
    // }
	}
</script>
<style lang="css" scoped>
body {
  background: #f3f3f3;
}
#active-space {
  height: 2rem;
}
.person {
  height: 10rem;
  background: url(/static/images/card-bg.jpg) center no-repeat;
  background-size: 100% 100%;
}
.person .person-info {
  height: 3rem;
  margin-top: 1rem;
  padding: 0 1.6rem;
}
.person .person-info .person-tx {
  width: 3rem;
}
.txt_advert {
  text-align: center;
  line-height: 60px;
}
.person-box-icon {
  position: absolute;
  width: 2rem;
  height: 2rem;
  background: url(/static/images/nav-icon.png) center no-repeat;
  background-size: cover;
  left: 0.2rem;
  top: 0rem;
}
.person-box-data {
  background-position: -11.8rem 0;
}
.person-box-card {
  background-position: -13.9rem 0;
}
.person .person-info .person-tx img {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  overflow: hidden;
}
.person .person-info .info {
  width: 8rem;
  margin-left: 0.8rem;
}
.person .person-info .info div {
  color: #fff;
}
.person .person-info .info .grade i {
  font-size: 0.6rem;
  color: #fff;
}
.person .person-info .info .tab-icon {
  height: 0.64rem;
  width: 1.6rem;
  display: inline-block;
  border-radius: 0.2rem;
  background: #fff;
  line-height: 0.64rem;
  text-align: center;
  font-size: 0.6rem;
  color: #2f64ee;
}
.person .person-info .info .already {
  font-size: 0.6rem;
}
.person .person-info .info .progress-wraper {
  position: relative;
}
.person .person-info .info .progress-wraper .progress-all {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 7.5rem;
  border-radius: 0.2rem;
  height: 0.14rem;
  background: rgba(255, 255, 255, 0.5);
}
.person .person-info .info .progress-wraper .progress-true {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 20%;
  border-radius: 0.2rem;
  height: 0.14rem;
  background: #ffffff;
}
.person .person-info .row {
  height: 1.5rem;
  line-height: 1.5rem;
}
.person .person-b {
  background: rgba(0, 0, 0, 0.35);
  height: 2rem;
  margin-top: 2rem;
}
.person .person-b .person-box {
  width: 50%;
  height: 2rem;
  padding: 0.28rem 1rem;
  line-height: 2rem;
  position: relative;
}
.person .person-b .person-box p {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 5.38rem;
  height: 0.74rem;
  color: #fff;
  font-size: 0.5rem;
  line-height: 0.7rem;
  text-indent: 1.3rem;
}
.person .person-b .person-box .fa-bookmark-o {
  font-size: 1.5rem;
  color: #fff;
}
.person .person-b .person-box:first-child {
  border-right: 1px solid #ccc;
}
.header-wraper {
  height: 2rem;
  padding: 0 0.5rem;
}
.header-wraper .header {
  line-height: 2rem;
  text-align: center;
  color: #fff;
}
.header-wraper .header .back {
  width: 2rem;
  height: 2rem;
  position: absolute;
  left: 0;
}
.header-wraper .header .back a {
  display: block;
  width: 100%;
  height: 100%;
  font-size: 1rem;
  text-align: center;
  line-height: 2rem;
}
.header-wraper .header .back a i {
  color: #fff;
}
nav {
  margin: 0.5rem 0;
  background: #fff;
}
nav .border-r {
  border-right: 1px solid #eee;
}
nav .border-b {
  border-bottom: 1px solid #eee;
}
nav li {
  float: left;
  width: 33.333333333%;
  height: 3.4rem;
  text-align: center;
  padding: 0.1rem 0;
}
nav li i {
  width: 2rem;
  height: 2rem;
  display: block;
  margin: 0 auto;
  background: url(/static/images/nav-icon.png) center no-repeat;
  background-size: cover;
}
nav li p {
  font-size: 0.55rem;
}
nav .home-info i {
  background-position: 0 0;
}
nav .home-grade i {
  background-position: -2rem 0;
}
nav .home-bill i {
  background-position: -4rem 0;
}
nav .coupon-center i {
  background-position: -6rem 0;
}
nav .my-coupon i {
  background-position: -8rem 0;
}
nav .my-wallet i {
  background-position: -10rem 0;
}
.activity .title {
  padding: 0.3rem 0.6rem;
  background: #fff;
}
.activity .title div {
  font-size: 0.55rem;
  line-height: 1rem;
}
.activity .title .fa-clock-o {
  color: #ff825c;
  font-size: 0.7rem;
}
.activity .title a {
  font-size: 0.55rem;
  color: #2c82fd;
}
.activity .title .fa-angle-right {
  color: #2c82fd;
  font-size: 0.8rem;
}
.adver img {
  height: 4.8rem;
  width: 100%;
}
</style>