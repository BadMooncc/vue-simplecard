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
	import List from '@/components/list';
	export default{
		data(){
			return{
				name:"xiaoming ",
				list:[
					{
						name:'蛋糕房',
						num:20,
						people:10,
						local:'河南农业大学'
					},
					{
						name:'蛋糕房',
						num:20,
						people:10,
						local:'河南农业大学'
					},
					{
						name:'蛋糕房',
						num:20,
						people:10,
						local:'河南农业大学'
					},
				]
			}
		},
		methods:{
			changelist(){
				this.list.push(1)
			}
		},
		components:{
			List
		}
	}
</script>
<style scoped>
	@import '../assets/css/coupon-list.css'
</style>