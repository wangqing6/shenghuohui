<template>
<div>
	<aHeader txt="我的">
		<img src="../../src/assets/images/ic_settings.png" class="sousuo2">
	</aHeader>
	<WoDe></WoDe>
</div>
</template>
<script type="text/javascript">
	import aHeader from '../../src/components/header'
	import WoDe from '../../src/components/wode'
	export default{
		components:{aHeader,WoDe}
	}
</script>
<style type="text/css">
	.sousuo{width: 25px; position: absolute; right: 20%; top: 12px}
	.sousuo2{width: 25px; position: absolute; right: 5%; top: 12px}
</style>