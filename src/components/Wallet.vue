<template>
	<div>
		<section class="main">
			<div class="space"></div>
			<div>
				<div class="balance-t">余额（元）</div>
				<div class="balance-b">98.66</div>
			</div>
		</section>
		<img class="main-bg" src="/static/images/my-wallet-bg.jpg" alt="" />
		<div class="once text-center">
			<router-link class="btn btn-block btn-primary" to="/balance">立即提现</router-link>
		</div>
		
	</div>
	
</template>
<style scoped>
	@import '../assets/css/wallet.css'
</style>