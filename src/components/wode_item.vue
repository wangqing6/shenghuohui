<template>
	<div class="wode_item">
		<slot name='wodePic'></slot><br/>
		<span v-text='txt'></span>
	</div>
	
</template>
<script type="text/javascript">
	export default{
		props:['txt']
	}
</script>
<style type="text/css">
	.wode_item{width: 25%; text-align: center; float: left; font-size: 12px; color: #999; }
	.wode_item img{width: 40px}
</style>