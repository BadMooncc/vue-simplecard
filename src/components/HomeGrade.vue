<template>
	<div>

		<section class="main">
			<div class="grade-wraper">
				<div class="grade">
					<div class="num"><b>500</b> 积分</div>
					<p class="text-center grade-sign">等级：Lv1</p>
				</div>
				<div class="promote">
					<div class="pull-left tip"><i></i>还差300分可升至<span>Lv2</span></div>
				</div>
			</div>
		</section>
		<p class="chart-title">近一周积分获取</p>
		<div id="echart" class="echart"></div>
	</div>
</template>
<style scoped>
	@import '../assets/css/home-grade.css'

</style>
<script>
	var echarts = require('echarts/lib/echarts');
	// 引入柱状图
	require('echarts/lib/chart/bar');
	// 引入提示框和标题组件
	require('echarts/lib/component/tooltip');
	require('echarts/lib/component/title');
	export default{
		mounted(){
			var myChart=echarts.init(document.getElementById('echart')),
			option = {
			    title:{
			        // text:'近一周积分获取',
			        // textStyle:{
			        // 	align:'left'
			        // }
			    },
			    color: ['#3398DB'],
			    tooltip : {
			        trigger: 'axis',
			        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
			            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
			        }
			    },
			    grid: {
			        left: '3%',
			        right: '4%',
			        bottom: '3%',
			        containLabel: true
			    },
			    xAxis : [
			        {
			            type : 'category',
			            
			            data : ['12-01', '12-01', '12-01', '12-01', '12-01', '12-01', '12-01'],
			            axisTick: {
			                alignWithLabel: true
			            },
			            axisLabel: {
			                textStyle: {
			                    color: '#999'
			                }
			            },
			            axisLine:{
			            	lineStyle:{
	                            color:'#999' 
	                        }
			            }

			        }
			    ],
			       
			    yAxis : [
			        {
			        	show:false,
			            type : 'value'
			        }
			    ],
			    series : [
			        {
			            name:'获得积分',
			            type:'bar',
			            barWidth: '60%',
			            label: {
			                normal: {
			                    show: true,
			                    position: 'top'
			                }
			            },
			            data:[80, 100, 5, 30, 0, 0, 25]
			        }
			    ]
			};
			myChart.setOption(option);
		}
	}
</script>