<template>
	<div class="music">
		<div class="zhidakan">
		<p class="biaoti2 biaoti6"><span class="jinqi">{{ text2 }}</span><span class="gengduo">更多></span></p>
		<Lunbo swipeid="swipeid08" :slidesPerView='3.5' :spaceBetween='10' :freeMode='true' :ischange="ischange">
			<div class="swiper-slide" slot='swiper_con' v-for="item in arr_music">
				<MoviePic :pictxt='item.title'>
					<img :src="item.cover" class="aaa5">
					<Pingjia :pingfen='item.rate'>
						<img src="../../src/assets/images/rating_star_card_on.png">
						<img src="../../src/assets/images/rating_star_card_on.png">
						<img src="../../src/assets/images/rating_star_card_on.png">
						<img src="../../src/assets/images/rating_star_xsmall_half.png">
					</Pingjia>
				</MoviePic>
			</div>
		</Lunbo>
	</div>
	<div class="zhidakan">
		<p class="biaoti2 biaoti6"><span class="jinqi">{{ text3 }}</span><span class="gengduo">更多></span></p>
		<Lunbo swipeid="swipeid09" :slidesPerView='3.5' :spaceBetween='10' :freeMode='true' :ischange="ischange">
			<div class="swiper-slide" slot='swiper_con' v-for="item in arr_music2">
				<MoviePic :pictxt='item.title'>
					<img :src="item.cover" class="aaa5">
					<Pingjia :pingfen='item.rate'>
						<img src="../../src/assets/images/rating_star_card_on.png">
						<img src="../../src/assets/images/rating_star_card_on.png">
						<img src="../../src/assets/images/rating_star_card_on.png">
						<img src="../../src/assets/images/rating_star_xsmall_half.png">
					</Pingjia>
				</MoviePic>
			</div>
		</Lunbo>
	</div>

	<div class="zhidakan">
		<p class="biaoti2 biaoti6"><span class="jinqi">{{ text4 }}</span><span class="gengduo">更多></span></p>
		<Lunbo swipeid="swipeid09" :slidesPerView='3.5' :spaceBetween='10' :freeMode='true' :ischange="ischange">
			<div class="swiper-slide" slot='swiper_con' v-for="item in arr_music3">
				<MoviePic :pictxt='item.title'>
					<img :src="item.cover" class="aaa5">
					<Pingjia :pingfen='item.rate'>
						<img src="../../src/assets/images/rating_star_card_on.png">
						<img src="../../src/assets/images/rating_star_card_on.png">
						<img src="../../src/assets/images/rating_star_card_on.png">
						<img src="../../src/assets/images/rating_star_xsmall_half.png">
					</Pingjia>
				</MoviePic>
			</div>
		</Lunbo>
	</div>

	<div class="zhidakan">
		<p class="biaoti2 biaoti6"><span class="jinqi">{{ text5 }}</span><span class="gengduo">更多></span></p>
		<Lunbo swipeid="swipeid09" :slidesPerView='3.5' :spaceBetween='10' :freeMode='true' :ischange="ischange">
			<div class="swiper-slide" slot='swiper_con' v-for="item in arr_music4">
				<MoviePic :pictxt='item.title'>
					<img :src="item.cover" class="aaa5">
					<Pingjia :pingfen='item.rate'>
						<img src="../../src/assets/images/rating_star_card_on.png">
						<img src="../../src/assets/images/rating_star_card_on.png">
						<img src="../../src/assets/images/rating_star_card_on.png">
						<img src="../../src/assets/images/rating_star_xsmall_half.png">
					</Pingjia>
				</MoviePic>
			</div>
		</Lunbo>
	</div>

	
</div>
</template>
<style type="text/css">
	.music{padding-top: 90px; background: #f7f7f7}
	.jinqi{margin-left: 15px;}
	.jjj{ display: block;}
	.zhidakan{margin-top: 18px; background: #fff}
	.aaa5{height: 125px}
	.xingqu{float: left; width: 120px}
	.duo{font-size: 12px; color: green; text-align: center; line-height: 40px}
</style>
<script type="text/javascript">
	import MoviePic from './movie_pic'
	import Pingjia from './pingjia'
	import Lunbo from './lunbo_fengzhuang'
	export default{
		components:{Lunbo,MoviePic,Pingjia},
		data:function(){
			return{
				text2:"华语新碟榜",
				text3:"欧美新碟榜",
				text4:"日韩新碟榜", 
				text5:"热门单曲榜", 
				
				arr_music:[],
				arr_music2:[],
				arr_music3:[],
				arr_music4:[],
				
				
				ischange:false
			}
		},
		methods:{
			search:function(){
				this.axios.get('/api/moveData').then((response)=>{
		          	this.arr_music=response.data.data.subjects.slice(15,25)
		          	this.arr_music2=response.data.data.subjects.slice(1,11)
		          	this.arr_music3=response.data.data.subjects.slice(5,15)
		          	this.arr_music4=response.data.data.subjects.slice(30,40)
		          	 
		          	// console.log(this.arr_zuijin)
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