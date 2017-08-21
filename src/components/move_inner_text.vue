<template>
	<div class="movie_inner_text">
		
		<div class="tou">
			<p v-text='txt' class="biaoti2"></p>
			<span class="gengduo">更多></span>
		</div>
		<GongYou>
			
		</GongYou>
		
		<Xiapic>
			<img src="../../src/assets/images/2_02.gif" class="xiapic" slot='xiapic'>
			<p class="x_text1"> {{ xiatext }} </p>
			<p class="x_text2"> {{ xiatext2 }} </p>
		</Xiapic>
		<div class="tou">
			<p class="biaoti2">影院即将上线</p>
			<span class="gengduo">更多></span>
		</div>	
		<GongYou2>
			
		</GongYou2>
		
		<Xiapic>
			<img src="../../src/assets/images/2_02.gif" class="xiapic" slot='xiapic'>
			<p class="x_text1"> {{ xiatext3 }} </p>
		</Xiapic>	

	</div>
</template>
<style type="text/css">
	.movie_inner_text{width: 100%; background: #fff; margin-top: 15px}
	.gengduo{  float: right; margin-right: 20px; line-height: 40px; color: #42bd56; font-size: 14px }
	.biaoti2{display: inline; margin-left: 20px; font-size: 12px; line-height: 40px; color: #494949; font-weight: bold;}
	.movie_inner_text .xiapic{width: 100%;}
	.x_text1{padding-left: 10px; font-size: 14px; font-weight: bold; color: #474747}
	.x_text2{padding-left: 10px; font-size: 12px; color: #494949; }
</style>
<script type="text/javascript">
	import GongYou from './shuyingyin_gongyou'
	import Xiapic from './xiapic'
	import GongYou2 from './gongyong2'
	export default{
		props:['txt'],
		components:{Xiapic,GongYou,GongYou2},
		data:function(){
			return{
				xiatext:"神奇女侠竟然是逗比？和她恋爱注定要悲剧",
				xiatext2:"《神奇女侠》圆桌访谈",
				xiatext3:"[豆瓣收藏夹]预售中，一本书满足你的收藏夹",
				
			}
		}
	}
</script>