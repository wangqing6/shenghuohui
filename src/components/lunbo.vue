<template>
	<div class="lunbo">
		<aLunbo swipeid="swipeid01" :autoplay='500' :pagination='true' :loop='true' :freeMode='false'>
			<div class="swiper-slide" slot='swiper_con'>
				<img src="../../src/assets/images/banner/01.jpg">
			</div>
			<div class="swiper-slide" slot='swiper_con'>
				<img src="../../src/assets/images/banner/02.jpg">
			</div>
			<div class="swiper-slide" slot='swiper_con'>
				<img src="../../src/assets/images/banner/03.jpg">
			</div>
		</aLunbo>
	</div>
</template>
<style type="text/css">
	.lunbo img{width: 100%; background: #E01A1A; height: 150px}
</style>
<script type="text/javascript">
	import aLunbo from './lunbo_fengzhuang'
	export default{
		components:{aLunbo},
		data:function(){
			return{
				arr:[]
			}
		},
		methods:{
			search:function(){
				this.axios.get('/api/homeData').then((response)=>{
		          // console.log(response.data.data.recommend_feeds);
		          	this.arr=response.data.data.recommend_feeds
		          	// console.log(this.arr)
		        })
			}
		},
		mounted:function(){
			this.search()
		}
	}
</script>

