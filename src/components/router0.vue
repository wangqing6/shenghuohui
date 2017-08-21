<template>
	<div class="RouTer">
		<aHeader txt="日记" class="riji">
		<img src="../../src/assets/images/ic_bar_back_green.png" class="sousuo1 sousuo" @click="fanhui">
		<img src="../../src/assets/images/ic_menu_like.png" class="sousuo2 sousuo">
		<img src="../../src/assets/images/ic_menu_reply.png" class="sousuo3 sousuo">
		<img src="../../src/assets/images/ic_action_share_green.png" class="sousuo4 sousuo">
	</aHeader>
	<div>
		<h1>文本内容</h1>
		<h1>文本内容</h1>
		<h1>文本内容</h1>
		<h1>文本内容</h1>
		<h1>文本内容</h1>
		<h1>文本内容</h1>
		<h1>文本内容</h1>
	</div>
	
	</div>
</template>
<script type="text/javascript">
	import aHeader from '../../src/components/header'
	export default{
		components:{aHeader},
		props:['rout'],
		methods:{
			fanhui(){
				this.$router.push({path:'home'})
			}
		}
	}
</script>
<style type="text/css">
	.sousuo{width: 20px}
	.riji{text-align: left; padding-left: 80px}
	.riji .sousuo{position: absolute; top: 15px}
	.riji .sousuo1{left: 20px;}
	.riji .sousuo2{right: 40%}
	.riji .sousuo3{right: 30%}
	.riji .sousuo4{right: 20%}
</style>