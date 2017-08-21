<template>
	<div>

		<xiaozhuItem v-for="item in a" >
			<h4 slot="title">{{ item.title }}</h4>
			<div class="biaoti5" slot='yingshi'>{{ item.yingshi }}</div>
			<img src="../../src/assets/images/xiaozhu_03.gif" class="shangImg" slot='biaotiImg'>
			<p class="txt" slot="des">{{ item.des }}</p>
			<span class="renshu" slot="renshu">{{ item.renshu }}人
				<img src="../../src/assets/images/ic_cb_status_checked.png" class="renshuImg">
			</span>
		</xiaozhuItem>
		
	</div>
</template>
<script type="text/javascript">
	import xiaozhuItem from './xiaozhu_item'
	export default{
		props:['a'],
		components:{xiaozhuItem},
		
	}
</script>