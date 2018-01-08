<template>
	<div>
		<div class="space"></div>
		<div class="nav clearfix">
			<div class="nav-item" @click="without()" :class="{'nav-item nav-active':NavActive==true}"><a href="javascript:void(0);">未使用</a></div>
			<div class="nav-item" @click="already()" :class="{'nav-item nav-active':NavActive==false}"><a href="javascript:void(0);">已使用</a></div>
		</div>
		<div class="content">
			<div v-for="item in couponList" class="item clearfix">
				<router-link to="/coupon-info">	
				<span class="circle-t circle"></span>
				<span class="circle-b circle"></span>
				<div class="pull-left i-left">
					<div class="logo clearfix">
						<img class="pull-left" :src="item.img_logo" alt="" /> 
						<span class="pull-left">&nbsp;{{item.name}}</span>
					</div>
					<div class="clearfix item-info">
						<div class="pull-left item-info-des">
							<template v-if="item.status==true">
								<p class="over-hidden">有效期：可使用</p>
							</template>
							<template v-else="item.status==false">
								<p class="over-hidden">有效期：已失效</p>
							</template>
							<p class="over-hidden">地址：{{item.local}}</p>
						</div>
					</div>
				</div>
				<div class="pull-left i-right">
					<div class="i-discount"><i>{{item.discounts}}</i></div>
					<template v-if="item.status==true">
						<div class="i-btn"><button class="btn btn-primary">立即领取</button></div>
					</template>
					<template v-else="item.status==false">
						<div class="i-btn"><button class="btn btn-defeat">无法使用</button></div>
					</template>
					
				</div>
				<template v-if="item.status==true">
					<img src="/static/images/none.png" class="sign" alt="" />
				</template>
				<template v-else="item.status==false">
					<img src="/static/images/already.png" class="sign" alt="" />
				</template>
				</router-link>
			</div>
		</div>
	</div>
</template>
<style scoped>
	@import '../assets/css/my-coupon.css'
</style>
<script>
	export default{
		data(){
			return {
				NavActive:true,
				couponList:[]
			}
		},
		mounted(){
			this.without();
		},
		methods:{
			without(){
				this.NavActive=true;
				this.$http.post('http://result.eolinker.com/iPu4V1g5cfb3a7e3e423185dcd6b16cb5756f0351c19494?uri=www.card.com/mycouponwithout')
				.then((res)=>{
					if(res.status==200){
						this.couponList=res.data;

					}else{
						alert('request defeat');
					}
				});
			},
			already(){
				this.NavActive=false;
				this.$http.post('http://result.eolinker.com/iPu4V1g5cfb3a7e3e423185dcd6b16cb5756f0351c19494?uri=www.card.com/alreadycoupon').then((res)=>{
					if(res.status==200){
						this.couponList=res.data;

					}else{
						alert('request defeat');
					}
				})
			}
		}
	}
</script>