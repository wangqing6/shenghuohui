<template>
	<div class="item" @click="fn" :class="{ac:bol}">
		<span v-show='bol'><slot name='timeImg'></slot><br/></span>
		<span v-show='!bol'><slot name='activeImg'></slot><br/></span>
		<span v-text="tex"></span>
	</div>
</template>
<script type="text/javascript">
	export default{
		props:['tex','make','id'],
		computed:{
			bol:function(){
				if(this.make==this.$parent.$parent.selected){
					return false
				}
				return true
			}
		},
		methods:{
			fn(){
				this.$parent.$parent.selected=this.make
				//console.log(this.make)
				this.$router.push(''+this.id)
			}
		}
	}
</script>
<style type="text/css">
	.item{width: 20%; float: left; padding-top: 5px; text-align: center; font-size: 12px;color: green }
	.item img{width: 35px;}
	.ac{color: #999}
</style>