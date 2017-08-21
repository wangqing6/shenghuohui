<template>
	<div class="city">
		<div class="city_inner">
			<p class="didian">
				<span class="left">当前城市：<span class="chengdu">成都</span>></span>
				<span><span class="jiantou">类型 事件 地点</span>></span>
			</p>
		</div>

	<div class="zhidakan">
		<p class="biaoti2 biaoti6"><span class="jinqi">{{ text5 }}</span><span class="gengduo">更多></span></p>
		<Lunbo swipeid="swipeid09" :slidesPerView='3.5' :spaceBetween='10' :freeMode='true' :ischange="ischange">
			<div class="swiper-slide" slot='swiper_con' v-for="item in arr_city">
				<MoviePic :pictxt='item.title'>
					<img :src="item.cover" class="aaa6">
					<Pingjia :pingfen='"2017-06-10"' class="pij">
					
						<p class="shoupiao">官方售票</p>
					</Pingjia>
				</MoviePic>
			</div>
		</Lunbo>
	</div>
	
	<div class="zhidakan">
		<p class="biaoti2 biaoti6"><span class="jinqi">{{ text6 }}</span><span class="gengduo">更多></span></p>
		<Lunbo swipeid="swipeid09" :slidesPerView='3.5' :spaceBetween='10' :freeMode='true' :ischange="ischange">
			<div class="swiper-slide" slot='swiper_con' v-for="item in arr_city2">
				<MoviePic :pictxt='item.title'>
					<img :src="item.cover" class="aaa6">
					<Pingjia :pingfen='"2017-06-10"' class="pij">
					
						<p class="shoupiao">官方售票</p>
					</Pingjia>
				</MoviePic>
			</div>
		</Lunbo>
	</div>

	<div class="zhidakan">
		<p class="biaoti2 biaoti6"><span class="jinqi">{{ text7 }}</span><span class="gengduo">更多></span></p>
		<Lunbo swipeid="swipeid09" :slidesPerView='3.5' :spaceBetween='10' :freeMode='true' :ischange="ischange">
			<div class="swiper-slide" slot='swiper_con' v-for="item in arr_city3">
				<MoviePic :pictxt='item.title'>
					<img :src="item.cover" class="aaa6">
					<Pingjia :pingfen='"2017-06-10"' class="pij">
					
						
					</Pingjia>
				</MoviePic>
			</div>
		</Lunbo>
	</div>

		
	</div>
</template>
<style type="text/css">
	.city{padding-top: 90px; background: #f7f7f7;}
	.city_inner{background: #fff; margin-top: 18px}
	.didian{font-size: 14px; color: #969696; padding-left: 10px; line-height: 40px}
	.didian .chengdu{color: green; display: inline-block; width: 90px}
	.didian .left{width: 50%; display: inline-block; border-right: 1px solid #eee}
	.didian .jiantou{width: 145px; display: inline-block; padding-left: 10px}
	.aaa6{height: 125px}
	.shoupiao{position: relative; top: 40px; color: red;font-size: 12px; transform: scale(0.90); border: 1px solid red; text-align: center; border-radius: 3px; margin-left: -4px}
	.city .swiper-slide{ height: 200px }
</style> 
<script type="text/javascript">
	import MoviePic from './movie_pic'
	import Pingjia from './pingjia'
	import Lunbo from './lunbo_fengzhuang'
	export default{
		components:{Lunbo,MoviePic,Pingjia},
		data:function(){
			return{
				
				text5:"热门活动", 
				text6:"官方售票", 
				text7:"展览类", 
				arr_city:[],
				arr_city2:[],
				arr_city3:[],
				
				ischange:false
			}
		},
		methods:{
			search:function(){
				this.axios.get('/api/moveData').then((response)=>{
		          	
		          	this.arr_city=response.data.data.subjects.slice(18,28)
		          	this.arr_city2=response.data.data.subjects.slice(14,24)
		          	this.arr_city3=response.data.data.subjects.slice(17,27)
		          	// console.log(this.arr_city)
		          	this.$nextTick(function(){
		          		this.ischange=true;
		          	})
		        })
			}
		},
		mounted:function(){
			this.search()
		}
		
	}
</script>