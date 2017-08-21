<template>
<div class="guangbo">
	<aHeader txt="广播">
		

		<img src="../../src/assets/images/ic_status_search_user.png" class="sousuo">
		<img src="../../src/assets/images/ic_create_group_chat_blue.png" class="sousuo2">
	</aHeader>

	<GbItem></GbItem>
</div>
</template>
<script type="text/javascript">
	import aHeader from '../../src/components/header'
	import GbItem from '../../src/components/guangbo_item'
	export default{
		components:{aHeader,GbItem}
	}
</script>
<style type="text/css">
	.guangbo{width: 100%; background: #f7f7f7;}
	.sousuo{width: 25px; position: absolute; right: 20%; top: 12px}
	.sousuo2{width: 25px; position: absolute; right: 5%; top: 12px}
</style>