<template>
<div class="shuyinying">
	<aHeader txt="书影音">
		<img src="../../src/assets/images/ic_actionbar_search_icon.png" class="sousuo">
		<img src="../../src/assets/images/ic_create_group_chat_blue.png" class="sousuo2">
	</aHeader>
	<div class="neidaohang">
		<span @click='fnDianying(0)'><router-link to='/shuyinying/movie' :class="{ac:selid==0}">电影</router-link></span>
		<span @click='fnDianying(1)'><router-link to='/shuyinying/book' :class="{ac:selid==1}">读书</router-link></span>
		<span @click='fnDianying(2)'><router-link to='/shuyinying/tv' :class="{ac:selid==2}">电视</router-link></span>
		<span @click='fnDianying(3)'><router-link to='/shuyinying/city' :class="{ac:selid==3}">同城</router-link></span>
		<span @click='fnDianying(4)'><router-link to='/shuyinying/music' :class="{ac:selid==4}">音乐</router-link></span>
	</div>
	
	<router-view></router-view>
</div>
</template>
<script type="text/javascript">
	import aHeader from '../../src/components/header'
	export default{
		components:{aHeader},
		data:function(){
			return{
				selid:0
			}
		},
		methods:{
			fnDianying(i){
				this.selid=i
			}
		}
	}
</script>
<style type="text/css">
	.neidaohang{ border-bottom: 1px solid #dfdfdf; height: 40px; width: 100%; position: fixed; margin-top: 48px; background: #fff; z-index: 10}
	.neidaohang a{text-decoration: none; float: left; width: 20%; text-align: center; padding: 10px 0px 8px 0px; color: #9b9b9b;}
	.sousuo{width: 25px; position: absolute; right: 20%; top: 12px}
	.sousuo2{width: 25px; position: absolute; right: 5%; top: 12px}
	.neidaohang .ac{color: green; border-bottom: 2px solid green}
</style>