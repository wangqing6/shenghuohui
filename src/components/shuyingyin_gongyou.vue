<template>
	<div>
		<Lunbo swipeid="swipeid04" :slidesPerView='3.7' :spaceBetween='10' :freeMode='true' :ischange="ischange">
			<div class="swiper-slide" slot='swiper_con' v-for="(item,i) in arr" >
				<MoviePic :pictxt='item.title'>
					<img :src='item.cover' class="aa1">
					<Pingjia :pingfen='item.rate'>
						<img src="../../src/assets/images/rating_star_card_on.png">
						<img src="../../src/assets/images/rating_star_card_on.png">
						<img src="../../src/assets/images/rating_star_card_on.png">
						<img src="../../src/assets/images/rating_star_card_on.png">
						<img src="../../src/assets/images/rating_star_xsmall_half.png">
					</Pingjia>
				</MoviePic>
			</div>
		</Lunbo>
	</div>
</template>
<script type="text/javascript">
	import MoviePic from './movie_pic'
	import Pingjia from './pingjia'
	import Lunbo from './lunbo_fengzhuang'
	export default{
		props:['txt'],
		components:{MoviePic,Pingjia,Lunbo},
		data:function(){
			return{
				arr:[],
				ischange:false
			}
		},
		methods:{
			search:function(){
				this.axios.get('/api/audioData').then((response)=>{
		          	this.arr=response.data.data.subjects.slice(0,10)
		          	// console.log(this.arr)
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
	.aa1{height: 125px}
</style>