<template>
	<div>
		<Lunbo swipeid="swipeid02" :slidesPerView='3.5' :spaceBetween='10' >
			<div class="swiper-slide" slot='swiper_con' v-for="item in arr2">
				<MoviePic :pictxt='item.title'>
					<img :src="item.cover" class="aaa2">
					<Pingjia :pingfen='item.rate'>
						<img src="../../src/assets/images/rating_star_card_on.png">
						<img src="../../src/assets/images/rating_star_card_on.png">
						<img src="../../src/assets/images/rating_star_card_on.png">
						<img src="../../src/assets/images/rating_star_card_on.png">
						
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
				arr2:[],
				ischange:false
			}
		},
		methods:{
			search:function(){
				this.axios.get('/api/audioData').then((response)=>{
		          	this.arr2=response.data.data.subjects.slice(10,20)
		          	// console.log(this.arr2)
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
	.aaa2{height: 125px}
</style>