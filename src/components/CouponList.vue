<template>
	<div>
		<section class="main">
			<div class="space"></div>
			<div class="my-coupon">
				<div class="mp-title"><i class="fa fa-clock-o"></i> 最近领取(共38张)</div>
				<div class="coupon-already">
					<ul id="" class="clearfix">
						<li>
							<a href="">
								<div class="pull-left logo"><img src="/static/images/shop-logo.png" alt="" /></div>
								<div class="pull-left info">
									<h3 class="over-hidden">8.8折蛋糕超级大优惠</h3>
									<p class="over-hidden">2017.12.12 - 2017.12.12</p>
								</div>
							</a>
							
						</li>
						<li></li>
					</ul>
				</div>
			</div>
		</section>
		<div class="content">
			<div class="item clearfix">
				<span class="circle-t circle"></span>
				<span class="circle-b circle"></span>
				<div class="pull-left i-left">
					<router-link to="/coupon-info">
						<div class="logo clearfix">
							<img class="pull-left" src="/static/images/shop-logo.png" alt="" /> 
							<span class="pull-left">&nbsp;123456蛋糕店</span>
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
					<div class="i-get">10人已领</div>
				</div>
			</div>
			
		</div>
	</div>
</template>
<script>
	export default {
		data() {

		},
		mounted() {
			this.$advert.sendUser('5a06f6d300000acf28f40c73')
		}
	}
</script>
<style scoped>
	@import '../assets/css/coupon-list.css'
</style>