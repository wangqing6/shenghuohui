<template>
	<div class="tv">
		<TvJinri></TvJinri>
		<ZhiDeKan></ZhiDeKan>
	</div>
</template>
<style type="text/css">
	.tv{padding-top: 90px; width: 100%; background: #f7f7f7}
</style>
<script type="text/javascript">
	import TvJinri from './tv_jinri'
	import ZhiDeKan from './zhidekan'
	export default{
		components:{TvJinri,ZhiDeKan}
		
	}
</script>