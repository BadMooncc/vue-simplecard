import Vue from 'vue';
import Router from 'vue-router';
//import Index from '@/components/Index';
//import Balance from '@/components/Balance';
// import Bill from '@/components/Bill';
import BillInfo from '@/components/BillInfo';
import HomeGrade from '@/components/HomeGrade';
import HomeInfo from '@/components/HomeInfo';
import CouponList from '@/components/CouponList';
//import MyCoupon from '@/components/MyCoupon';
import Wallet from '@/components/Wallet';
import CouponInfo from '@/components/CouponInfo';
import parent from '@/components/parent';
import child from '@/components/child';



Vue.use(Router);
const Index = (reslove) => require.ensure([], () => { reslove(require('@/components/Index.vue')) }, 'Index');
const MyCoupon = (reslove) => require.ensure([], () => { reslove(require('@/components/MyCoupon.vue')) }, 'MyCoupon');
const Balance = reslove => require.ensure([], () => { reslove(require('@/components/Balance.vue')) }, 'Balance');
const Bill = reslove => require.ensure([], () => { reslove (require('@/components/Bill.vue')) }, 'Bill')



export default new Router({
  //scrollBehavior: () => ({ y: 0 }), //滚动条滚动的行为，不加这个默认就会记忆原来滚动条的位置
  routes: [{
      path: '/',
      name: 'Index',
      component: Index,
      beforeEnter: (to, form, next) => { //独享钩子函数
        //alert(2);
        next();
      },
      beforeLeave: (to, form, next) => {

        next();
      }
    },
    {
      path: '/parent',
      name: 'parent',
      component: parent
    },
    {
      path: '/balance',
      name: 'Balance',
      component: Balance
    },
    {
      path: '/bill',
      name: 'Bill',
      component: Bill
    },
    {
      path: '/bill/info',
      name: 'BillInfo',
      component: BillInfo
    },
    {
      path: '/home-grade',
      name: 'HomeGrade',
      component: HomeGrade
    },
    {
      path: '/home-info',
      name: 'HomeInfo',
      component: HomeInfo
    },
    {
      path: '/coupon-list',
      name: 'CouponList',
      component: CouponList
    },
    {
      path: '/my-coupon',
      name: 'MyCoupon',
      component: MyCoupon
    },
    {
      path: '/wallet',
      name: 'Wallet',
      component: Wallet
    },
    {
      path: '/coupon-info',
      name: 'CouponInfo',
      component: CouponInfo
    }

  ]
})
