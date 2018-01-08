<template>
	<div>
		<div class="space"></div>
		<div class="content">
			<input type="hidden" id="tenant" name="tenant" value="{$tenantID}">
			<div class="title text-center">我的余额</div>
			<div class="amount text-center">￥<strong>54元</strong></div>
			<div class="box">
				<div>提现金额</div>
				<div class="import">￥<input id="balance" name="balance" type="text"></div>
				<div>可以提现余额54元</div>
			</div>
			<div class="once text-center">
				<input id="pht" type="button" value="立即提现" class="btn btn-block btn-primary">
			</div>
		</div>
	</div>
	
</template>
<style scoped>
@import '../assets/css/balance.css'

</style>