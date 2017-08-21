<template>
	<div class="jinri">
	<p class="biaoti2 biaoti6"><span>{{ txt }}</span><span class="gengduo">更多></span></p>

		<Lunbo swipeid="swipeid10" :slidesPerView='1.2' :spaceBetween='0' >
			<div class="swiper-slide" slot='swiper_con' v-for="item in arr_tv">
				<div class="jinri_inner">
					<img :src="item.cover" class="jinriPic">
					<p class="titl">{{ item.title }}</p>
					<span class="xing">
						<img src="../../src/assets/images/rating_star_card_on.png">
						<img src="../../src/assets/images/rating_star_card_on.png">
						<img src="../../src/assets/images/rating_star_card_on.png">
						<img src="../../src/assets/images/rating_star_card_on.png">
						<img src="../../src/assets/images/rating_star_xsmall_half.png">
						<span>{{ item.rate }}</span>
					</span>
					<p class="jishu">更新至52集/每天更新/乐视视频/14190人想看</p>
				</div>
			</div>
		</Lunbo>

	
		

	</div>
</template>
<script type="text/javascript">
	import Lunbo from './lunbo_fengzhuang'
	export default{
	
		components:{Lunbo},
		data:function(){
			return{
				txt:"今日更新",
				arr_tv:[],
				ischange:false
			}
		},
		methods:{
			search:function(){
				this.axios.get('/api/moveData').then((response)=>{
		          	this.arr_tv=response.data.data.subjects.slice(0,10)
		          	// console.log(this.arr_tv)
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
	*{margin: 0; padding: 0}
	.jinri{background: #fff; margin-top: 16px; padding: 20px 0 0 20px}
	.jinri .swiper-slide{height: 130px}
	.biaoti6{margin-left: -5px}
	.titl{margin-left: -4px; font-size: 14px; padding-left: 95px}
	.jinri_inner{width: 90%; border: 1px solid #dcdcdc; padding: 10px; height: 92px}
	.jishu{font-size: 12px; color: #999; padding-left: 90px}
	.jinriPic{width: 70px; height: 90px; float: left;}
	.jinri_inner span img{width: 12px; }
	.jinri_inner span {font-size: 12px; color: #666}
	.xing{padding-left: 20px}
</style>