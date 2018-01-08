<template>

	<div class="wraper">
		<div class="space"></div>
		<div class="swiper-container" id="swiper">
		    <div class="swiper-wrapper">
		      <div class="swiper-slide">
		      	<div class="main">
					<div class="tx">
						<img src="/static/images/portairt.png" alt="" />
					</div>
					<div class="username">我是昵称</div>
				</div>
		      	<div class="swiper-slide-cont">
		      		<div class="sl-title">张大炮</div>
			      	<div class="sl-type"><span class="btn btn-primary">家属</span></div>
			      	<div class="contribute">贡献积分：112分</div>
			      	<div class="credit"><button class="btn btn-default">更改</button>　<button class="btn btn-danger">删除</button></div>
		      	</div>
		      </div>
		      <div class="swiper-slide">
		      	<div class="main">
					<div class="tx">
						<img src="/static/images/portairt.png" alt="" />
					</div>
					<div class="username">我是昵称</div>
				</div>
		      	<div class="swiper-slide-cont">
		      		<div class="sl-title">张大炮</div>
			      	<div class="sl-type"><span class="btn btn-primary">家属</span></div>
			      	<div class="contribute">贡献积分：112分</div>
			      	<div class="credit"><button class="btn btn-default">更改</button>　<button class="btn btn-danger">删除</button></div>
		      	</div>
		      </div>
		      <div class="swiper-slide">
		      	<div class="main">
					<div class="tx">
						<img src="/static/images/portairt.png" alt="" />
					</div>
					<div class="username">我是昵称</div>
				</div>
		      	<div class="swiper-slide-cont">
		      		<div class="sl-title">张大炮</div>
			      	<div class="sl-type"><span class="btn btn-primary">家属</span></div>
			      	<div class="contribute">贡献积分：112分</div>
			      	<div class="credit"><button class="btn btn-default">更改</button>　<button class="btn btn-danger">删除</button></div>
		      	</div>
		      </div>   
		    </div>
		    
		</div>
		<div class="clearfix share center">
			<button class="btn btn-block btn-primary">分享给朋友 <i class="fa fa-share-alt"></i></button>
		</div>
	</div>
</template>
<style scoped>


@import 'swiper/dist/css/swiper.min.css';
@import '../assets/css/home-info.css';
body{
  padding-bottom: 0!important;
}
</style>
<script>
	import Swiper from 'swiper';
	export default{
		mounted(){
			setTimeout(function (){
		      var swiperObj =  new Swiper('#swiper', {
			        effect: 'coverflow',
			      	grabCursor: true,
			      	centeredSlides: true,
			      	slidesPerView: 'auto',
			      	coverflowEffect: {
			        rotate: 50,
			        stretch: 0,
			        depth: 100,
			        modifier: 1,
			        slideShadows : true
		    	}
		      });
		    },100)
		}
	}
</script>