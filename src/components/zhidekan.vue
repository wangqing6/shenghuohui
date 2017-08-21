<template>
<div>
	<div class="zhidakan">
		<p class="biaoti2 biaoti6"><span class="jinqi">{{ text2 }}</span><span class="gengduo">更多></span></p>
		<Lunbo swipeid="swipeid08" :slidesPerView='3.5' :spaceBetween='10' :freeMode='true' :ischange="ischange">
			<div class="swiper-slide" slot='swiper_con' v-for="item in arr_zuijin">
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
			<div class="swiper-slide" slot='swiper_con' v-for="item in arr_zuijin2">
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
			<div class="swiper-slide" slot='swiper_con' v-for="item in arr_zuijin4">
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
			<div class="swiper-slide" slot='swiper_con' v-for="item in arr_zuijin5">
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
		<p class="biaoti2 biaoti6 jjj "><span class="jinqi">{{ text6 }}</span></p>
		<!-- <Lunbo swipeid="swipeid09" :slidesPerView='3.5' :spaceBetween='10' :freeMode='true' :ischange="ischange"> -->
			<div class="swiper-slide xingqu" slot='swiper_con' v-for="item in arr_zuijin6">
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
			<div style="clear:both" class="duo" @click='gengduo()'>查看更多></div>
		<!-- </Lunbo> -->
	</div>
	
</div>
</template>
<script type="text/javascript">
	import MoviePic from './movie_pic'
	import Pingjia from './pingjia'
	import Lunbo from './lunbo_fengzhuang'
	export default{
		components:{Lunbo,MoviePic,Pingjia},
		data:function(){
			return{
				text2:"近期值得看的国产剧",
				text3:"近期值得看的美剧",
				text4:"近期值得看的日剧", 
				text5:"近期值得看的综艺节目", 
				text6:"你可能感兴趣", 
				arr_zuijin:[],
				arr_zuijin2:[],
				arr_zuijin3:[],
				arr_zuijin4:[],
				arr_zuijin6:[],
				arr_zuijin5:[],
				ischange:false
			}
		},
		methods:{
			search:function(){
				this.axios.get('/api/moveData').then((response)=>{
		          	this.arr_zuijin=response.data.data.subjects.slice(12,22)
		          	this.arr_zuijin2=response.data.data.subjects.slice(19,28)
		          	this.arr_zuijin3=response.data.data.subjects.slice(8,18)
		          	this.arr_zuijin4=response.data.data.subjects.slice(22,32)
		          	this.arr_zuijin6=response.data.data.subjects.slice(0,6)
		          	this.arr_zuijin5=response.data.data.subjects.slice(18,28)
		          	// console.log(this.arr_zuijin)
		          	this.$nextTick(function(){
		          		this.ischange=true;
		          	})
		        })
			},
			gengduo(){
				this.$router.push({path:'/chakangengduo'})
				console.log(555)
			}
		},
		mounted:function(){
			this.search()
		}
		
	}
</script>
<style type="text/css">
	.jinqi{margin-left: 15px;}
	.jjj{ display: block;}
	.zhidakan{margin-top: 18px; background: #fff}
	.aaa5{height: 125px}
	.xingqu{float: left; width: 120px}
	.duo{font-size: 12px; color: green; text-align: center; line-height: 40px}
</style>