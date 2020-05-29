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
			<list :msg="list" :name="name" @changelist="changelist"></list>
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