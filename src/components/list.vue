<template>
	<div>
		<div v-for="(item,index) in msg" class="item clearfix">
			<span class="circle-t circle"></span>
			<span class="circle-b circle"></span>
			<div class="pull-left i-left">
				<router-link to="/coupon-info">
					<div class="logo clearfix">
						<img class="pull-left" src="/static/images/shop-logo.png" alt="" /> 
						<span class="pull-left">&nbsp;{{item.name}}</span>
					</div>
					<div class="clearfix item-info">
						<div class="pull-left item-info-img">
							<img src="/static/images/shop-list.png" alt="" />
						</div>
						<div class="pull-left item-info-des">
							<h3 class="over-hidden">8.8折优惠券</h3>
							<p class="over-hidden">数量：30张</p>
							<p class="over-hidden">地址：河南农业大学大学</p>
						</div>
					</div>
				</router-link>
			</div>
			<div class="pull-left i-right">
				<div class="i-discount"><i>8.8折</i></div>
				<div class="i-btn"><button class="btn btn-primary">立即领取</button></div>
				<div class="i-get">dsadas</div>
			</div>
		</div>
		<div class="">{{name}}</div>
		<p><br></p>
		<button @click="changelist" class="btn btn-primary">
			点击我
		</button>
	</div>
	
</template>
<style scoped>
	@import '../assets/css/coupon-list.css';

</style>
<script>
	export default{
		methods:{
			changelist(){
				this.$emit('changelist')
			}

		},
		props:{
			msg:{
				type:Array
			},
			name:{
				type:String
			}
		}
	}
</script>


