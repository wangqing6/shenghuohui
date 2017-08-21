<template>
	<div class="text">
		<p v-text='biaoti' class="biaoti"></p>
		<slot></slot>
		
	</div>
</template>
<script type="text/javascript">
	export default{
		props:['biaoti'],
	}
</script>
<style type="text/css">
	.biaoti{border-left: 8px solid #fe7c40; padding-left: 15px; color: #ed7a4b; font-size: 14px; margin-top: 10px;}
</style>