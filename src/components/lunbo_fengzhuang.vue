<template>
	<div class="swiper-container" :class="swipeid">
		<div class="swiper-wrapper">
			<slot name='swiper_con'></slot>
		</div>
		<div :class="{'swiper-pagination':pagination}" :style='{"text-align":paginationDation}'>
			
		</div>
	</div>
</template>
<script type="text/javascript">
import '../assets/libs/js/swiper.js'
	export default{
		props:{
			swipeid:{
				type:String,
				default:''
			},//名字
			pagination:{
				type:Boolean,
				default:false
			},//分页
			paginationDation:{
				type:String,
				default:'center'
			},//分页居中
			loop:{
				type:Boolean,
				default:false
			},//是否循环
			autoplay:{
				type:Number,
				default:0
			},//循环时间
			divection:{
				type:String,
				default:'horizontal'
			},//滚动方向
			slidesPerView:{
				type:Number,
				default:1
			},//显示图片的张数
			paginationType:{
				type:String,
				default:'bullets'
			},
			spaceBetween:{
				type:Number,
				default:0
			},//图片间距
			freeModeMomentum:{
				type:Boolean,
				default:false
			},//松开是否滑动
			freeMode:{
				type:Boolean,
				default:true
			},//是否自动贴合
			observer:{
				type:Boolean,
				default:true
			},
			observeParents:{
				type:Boolean,
				default:true
			},
			ischange:{},
			
		},
		watch:{
			ischange:function(){
				this.swiperFn();
				console.log(11111);
			}
		},
		mounted:function(){
			
			this.swiperFn()
		},
		methods:{
			swiperFn:function(){
				var That=this;
				new Swiper('.'+That.swipeid,{
					loop:That.loop,
					autoplay:That.autoplay,
					paginationType:That.paginationType,
					slidesPerView:That.slidesPerView,
					pagination:'.swiper-pagination',
					paginationDation:That.paginationDation,
					spaceBetween:That.spaceBetween,
					freeModeMomentum:That.freeModeMomentum,
					freeMode:That.freeMode,
					
					observer:That.observer,
					observeParents:That.observeParents,
					
				});
			}
		}
	}
</script>
<style type="text/css">
	@import '../assets/libs/css/swiper.css';
	.swiper-container{width: 100%;}
	.swiper-pagination-bullet-active{background: #fff}
	.swiper-slide{height: 175px}
</style>