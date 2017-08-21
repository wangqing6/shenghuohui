<template>
	<div class="movie_inner">
		<MIText txt="影院热映"></MIText>
		
		
	</div>
</template>
<style type="text/css">
	.movie_inner img{width: 80px;}
	.m_pic{white-space:nowrap; position: relative;}
	.picName{font-size: 12px; padding-left: 10px}
	.m_pic span{position: absolute;}
</style>
<script type="text/javascript">
	import MIText from './move_inner_text'
	export default{
		components:{MIText},
		// props:['pic']
		
	}
</script>