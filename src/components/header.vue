<template>
	<div class="headerwarp" :style="{background:col}">
		<span v-text="txt">
			<!-- <slot></slot> -->
		</span>
		<slot name="leftImg"></slot>
		<slot name=input></slot>
		<slot name="rightImg"></slot>
		<slot></slot>
	</div>
</template>
<style type="text/css">
	.headerwarp{width: 100%; height: 48px; line-height: 48px; border-bottom: 1px solid #b2b2b2; color: #494949; position: fixed; z-index: 10; text-align: center;}
	.headerwarp input{ width: 75%; height: 25px; border-radius: 5px; border: none; margin-left: -36px; padding-left: 30px ; color: #c8c8c8;} 
</style>
<script type="text/javascript">
	export default{
		props:{
			col:{
				default:'#f8f8f8'
			},
			txt:{},

		}
	}
</script>