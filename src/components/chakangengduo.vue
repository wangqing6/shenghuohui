<template>
	<div class="chakan">
		<aHeader txt="你可能感兴趣" class="riji">
		<img src="../../src/assets/images/ic_bar_back_green.png" class="sousuo1 sousuo" @click='fanhui'>
		</aHeader>
		<p class="axingqu axingqu2">根据你在豆瓣的历史行为和好友关系，猜你可能对这</p>
		<p class="axingqu">些电视和影人感兴趣</p>
	
	</div>
</template>
<script type="text/javascript">
	import aHeader from '../../src/components/header'
	export default{
		components:{aHeader},
		methods:{
			fanhui(){
				this.$router.push({path:'/shuyinying/tv'})
			}
		}
	}
</script>
<style type="text/css">
	.chakan{background:#f7f7f7; width: 100%;}
	.riji{text-align: left; padding-left: 80px}
	.sousuo1{position: absolute; left: 20px; top: 13px}
	.axingqu{background:#fff; font-size: 12px; text-align: center; color: #999}
	.axingqu2{ padding-top: 64px}
</style>