<template>
	<div class="movie">
		
		<MovieInner></MovieInner>
		
		
	</div>
</template>
<style type="text/css">
	.movie{padding-top: 90px; word-wrap: break-word; background: #f7f7f7; overflow: hidden;}
</style>
<script type="text/javascript">
	import MovieInner from './movie_inner'
	export default{
		components:{MovieInner}
	}
</script>