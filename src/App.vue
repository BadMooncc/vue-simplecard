<template>
  <div id="app">
    <transition name="fade">
      <CommonHeader v-demo2="{color: 'red',text: 'hello'}" v-demo:a="123" class="header-wraper header animate" :class="{'header-wraper header animate header-active':header==false}"></CommonHeader>
    </transition>
    <transition name="fade">
      <router-view/>
    </transition>
    <transition>
      <FooterNav v-show="footer"></FooterNav>
    </transition>
    <Loader v-show="loader"></Loader>
  </div>
</template>
<style>
.fade-enter-active {
  transition: all 0.4s;
}

.fade-leave-active {
  transition: all 0.4s;
}

.fade-enter {
  opacity: 0;
}

.fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
<script>
import CommonHeader from '@/components/CommonHeader';
import FooterNav from '@/components/FooterNav';
import Loader from '@/components/loading';
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'app',
  components: {
    CommonHeader,
    FooterNav,
    Loader
  },
  computed: mapGetters(['header', 'footer', 'loader']),
  mounted () {
    this.footerStatus();
    this.headerStatus();
    this.headerScroll();
  },
  watch: {
    // 监控每次路由变化，做出对应的操作
    $route (to, from) {
      this.footerStatus();
      this.headerStatus();
      this.headerScroll();
    }
  },
  methods: {
    ...mapMutations(['headerShow', 'headerHide', 'footerShow', 'footerHide']), // 将mutations的方法映射到methos，以便于我们在下边可以直接使用this.headershow等方法，当然，如果你对es6比较生疏，那么这个可以删除，在下边使用this.$store.func来取代
    footerStatus () {
      if (
        this.$route.path === '/bill' ||
        this.$route.path === '/my-coupon' ||
        this.$route.path === '/coupon-list'
      ) {
        // 判断指定路由是否显示底部tabbar
        this.footerHide();
      } else {
        this.footerShow();
      }
    },
    headerStatus () {
      if (
        this.$route.path === '/my-coupon' ||
        this.$route.path === '/bill/info' ||
        this.$route.path === '/balance'
      ) {
        // 判断指定路由是否显示头部
        this.headerHide();
      } else {
        this.headerShow();
      }
    },
    headerScroll () {
      // 上拉一定高度时，改变header变色
      var doc = document
      var getScrollTop = () => {
        var scrollPos
        if (window.pageYOffset) {
          scrollPos = window.pageYOffset
        } else if (doc.compatMode && doc.compatMode != 'BackCompat') {
          scrollPos = doc.documentElement.scrollTop
        } else if (doc.body) {
          scrollPos = doc.body.scrollTop
        }
        return scrollPos
      }
      window.onscroll = () => {
        var a = getScrollTop()
        if (a > 40) {
          this.$store.commit('headerHide')
        } else {
          this.$store.commit('headerShow')
        }
      }
    }
  }
}
</script>

