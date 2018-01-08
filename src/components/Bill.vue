<template>
	<div>
		<section class="bill">
			<div class="select-time">2017 - 02 <i class="fa fa-caret-down"></i></div>
			<div class="time-picker">
				<div class="pull-left">本月</div>
				<div class="pull-right">
					<a class="time-btn" href="">
						<i class="fa fa-calendar-minus-o"></i>
					</a>
				</div>
			</div>
			
		</section>
		<div class="bill-list">
			<div class="bill-item clearfix">
				<router-link to="/bill/info">
					<div class="pull-left b-i-logo"><img src="" alt="" /></div>
					<div class="pull-left b-i-des">
						<p class="title">余额宝装张</p>
						<p class="time">12-12 12:35</p>
					</div>
					<div class="pull-right b-i-info">+3.00</div>
				</router-link>	
			</div>
		</div>
		
	</div>
</template>
<style scoped>
	@import '../assets/css/bill.css';
</style>