<template>
  <div id="app">
  	<CommonHeader  class="header-wraper header animate" :class="{'header-wraper header animate header-active':header==false}"></CommonHeader>
    <router-view/>
    <FooterNav v-show="footer"></FooterNav>
  </div>
</template>
<script>
import CommonHeader from '@/components/CommonHeader';
import FooterNav from '@/components/FooterNav';
import {mapGetters,mapMutations} from 'vuex'
console.log(mapMutations,'mapMutations');

export default {
  name: 'app',
  computed:mapGetters(['header','footer']),
  mounted(){
    console.log(this.$store.commit,'state');
    this.footerStatus();
    this.headerStatus();
    this.headerScroll();
        console.log(mapGetters([
    'footer',
    'header'
  ]))
  },
  watch:{
    $route(to,from){
      this.footerStatus();
      this.headerStatus();
      this.headerScroll();
    }
  },
  methods:{
    ...mapMutations(['headerShow','headerHide','footerShow','footerHide']),
    footerStatus(){
      if(this.$route.path=='/bill' || this.$route.path=='/my-coupon'|| this.$route.path=='/coupon-list'){
        this.footerHide();
      }else{
        this.footerShow();
      }
    },
    headerStatus(){
      console.log(this.$route.path);
      if(this.$route.path=='/my-coupon' || this.$route.path=='/bill/info' ||this.$route.path=='/balance'){
        this.headerHide();
      }else{
        this.headerShow();
      }
    },
    headerScroll(){
      var doc=document;
      var getScrollTop=()=>{  
              var scrollPos;  
              if (window.pageYOffset) {  
              scrollPos = window.pageYOffset; }  
              else if (doc.compatMode && doc.compatMode != 'BackCompat')  
              { scrollPos = doc.documentElement.scrollTop; }  
              else if (doc.body) { scrollPos = doc.body.scrollTop; }   
              return scrollPos;   
      } 
      window.onscroll=()=>{
        var a=getScrollTop();
        if(a>40){
          this.$store.dispatch('headerActive');
        }else{
          this.$store.dispatch('headerCommon');
        }
      }
    }

  },
  components:{
  	CommonHeader,
  	FooterNav
  }
  
}
</script>

