<template>
	<div class="pingjia">
		<slot></slot>
		<span v-text='pingfen'></span>
	</div>
</template>
<style type="text/css">
	.pingjia{position: absolute; bottom: -18px; left: 4px; font-size: 12px; color: #949494; width: 75px}
	.pingjia img{width: 12px; margin-left: -5px;}

</style>
<script type="text/javascript">
	export default{
		props:['pingfen']
	}
</script>