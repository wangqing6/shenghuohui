<template>
	<div class="warp">
		<slot></slot>
		
	</div>
</template>
<style type="text/css">
	*{margin: 0; padding: 0}
	.warp{width: 100%; height: 64px; background: #f9f9f9; position: fixed; bottom: 0; border-top: 1px solid #b2b2b2; z-index: 100}
</style>