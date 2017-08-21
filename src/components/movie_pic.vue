<template>
	<div class="movie_pic">
		<slot name='Pic'></slot>
		<slot></slot>
		<p v-text='pictxt' class="picText"></p>

	</div>
</template>
<script type="text/javascript">
	
	export default{
		props:['pictxt'],
		
	}
</script>
<style type="text/css">
	.movie_pic{width: 21%; float: left; margin-left: 15px; position: relative;}
	.picText{font-size: 12px; color: #494949;font-weight: bold; width: 120px}
	.movie_pic img{width: 95px;}
</style>