<template>
<div>

	<aHeader col=' #42c055'>
		<img src="../../src/assets/images/ic_search.png" slot="leftImg" class="pic1">
		<input placeholder="影音 图书 唱片 小组等" slot="input">
		<img src="../../src/assets/images/ic_scan_gray.png" slot="input" class="pic_zhong">
		<img src="../../src/assets/images/ic_chat_white.png" slot="rightImg" class="pic_right">
	</aHeader>
	<aMain></aMain>
</div>
</template>
<script type="text/javascript">
	import aHeader from '../../src/components/header'
	import aMain from '../../src/components/main'
	export default{
		components:{aHeader,aMain}
	}
</script>
<style type="text/css">
	.pic1{position: absolute; left: 20px; width: 20px; top: 15px;}
	.pic_zhong{position: absolute; right: 17%; top: 15px; width: 20px}
	.pic_right{width: 25px; top: 12px; right: 14px; position: absolute;}

</style>