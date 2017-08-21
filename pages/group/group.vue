<template>
<div class="xiaozhu">
	<aHeader txt="小组">
		<img src="../../src/assets/images/ic_actionbar_search_icon.png" class="sousuo">
		<img src="../../src/assets/images/ic_create_group_chat_blue.png" class="sousuo2">
	</aHeader>
	<XiaozhuInner></XiaozhuInner>
</div>
</template>
<script type="text/javascript">
	import aHeader from '../../src/components/header'
	import XiaozhuInner from '../../src/components/xiaozhu_inner'
	export default{
		components:{aHeader,XiaozhuInner}
	}
</script>
<style type="text/css">
	.sousuo{width: 25px; position: absolute; right: 20%; top: 12px}
	.sousuo2{width: 25px; position: absolute; right: 5%; top: 12px}
</style>