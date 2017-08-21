<template>
	<div class="book">
		<div class="book_inner">
			<div class="tou">
			<p class="biaoti2">{{ txt }}</p>
			<span class="gengduo">更多></span>
			</div>

		<Lunbo swipeid="swipeid04" :slidesPerView='3.5' :spaceBetween='10' :freeMode='true' :ischange="ischange">
			<div class="swiper-slide" slot='swiper_con' v-for="item in arr3">
				<MoviePic :pictxt='item.title'>
					<img :src="item.cover" class="aaa4">
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
		<div class="book_inner">
			<div class="tou">
			<p class="biaoti2">{{ txt2 }}</p>
			<span class="gengduo">更多></span>
			</div>
	<Lunbo swipeid="swipeid04" :slidesPerView='3.5' :spaceBetween='10' :freeMode='true' :ischange="ischange">
		<div class="swiper-slide" slot='swiper_con' v-for="item in arr4">
			<MoviePic :pictxt='item.title'>
					<img :src="item.cover" class="aaa4">
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
		<div class="book_inner">
			<div class="tou">
			<p class="biaoti2">{{ txt3 }}</p>
			<span class="gengduo">更多></span>
			</div>
		<Lunbo swipeid="swipeid04" :slidesPerView='3.5' :spaceBetween='10' :freeMode='true' :ischange="ischange">
		<div class="swiper-slide" slot='swiper_con' v-for="item in arr5">
			<MoviePic :pictxt='item.title'>
					<img :src="item.cover" class="aaa4">
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

<script type="text/javascript">
	import MoviePic from './movie_pic'
	import Pingjia from './pingjia'
	import Lunbo from './lunbo_fengzhuang'
	export default{
		data:function(){
			return{
				txt:"新书速递",
				txt2:"最受关注的虚构类图书",
				txt3:"最受关注的非虚构类图书",
				arr3:[],
				arr4:[],
				arr5:[],
				ischange:false
			}
		},
		components:{MoviePic,Pingjia,Lunbo},
		
		methods:{
			search:function(){
				this.axios.get('/api/audioData').then((response)=>{
		          	this.arr3=response.data.data.subjects.slice(20,30)
		          	this.arr4=response.data.data.subjects.slice(30,40)
		          	this.arr5=response.data.data.subjects.slice(5,15)

		          	console.log(this.arr3)
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
<style type="text/css">
	.book { padding-top: 90px; word-wrap: break-word; background: #f7f7f7; overflow: hidden;}
	.book_inner{margin-top: 15px; background: #fff;height: 210px}
	.aaa4{height: 125px}
</style>