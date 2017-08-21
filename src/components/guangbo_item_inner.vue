<template>
	<div class="item_inner">
	
		<div class="i_inner" v-for="(item,i) in Aarr">
			<p class="fuhao" @click="fn(i)">×</p>
			<div class="touxiang">
				<img :src='item.touxiang' class="xiang">
				<img src="../../src/assets/images/biao.gif" class="toux">
			</div>
			<p class="position">
				<span class="name">{{ item.name }}</span>
				<span class="zongrenshu">{{ item.renshu }}人关注</span>
				<span class="guanzhu">关注</span>
			</p>
			<p class="txt">{{ item.text }}</p>
			<p class="tu"><slot name="shuoPic"></slot></p>
			<span class="zhan"><img src="../../src/assets/images/ic_like_full.png" >10</span>
			<span class="ping"><img src="../../src/assets/images/ic_group_comment_0.png" >8</span>
		</div>

	</div>
</template>
<script type="text/javascript">
	export default{
		props:['Aarr'],
		methods:{
			fn(i){
				console.log(i)
				
			}
		}
	}
</script>
<style type="text/css">
	.item_inner{width: 100%;margin-top: 15px;   }
	.fuhao{text-align: right; color: #ccc}
	.i_inner{margin: 20px; background: #fff; border: 1px solid #b9b9b9;padding: 20px ;border-radius: 5px; position: relative; box-shadow: 0 0 5px #b9b9b9}
	.i_inner .name{font-size: 14px; padding-left: 40px;}
	.i_inner .guanzhu{float: right; padding: 4px 10px; font-size: 12px; color: #fff; background: #35b949; border-radius: 3px}
	.i_inner .txt{padding-top: 10px; font-size: 12px; padding-left: 40px}
	.touxiang{width: 35px; height: 35px; border-radius: 50%; position: absolute;}
	.toux{width: 10px; position: absolute; right: 0; bottom: 0; border-radius: 4px;}
	.xiang{width: 100%; background-size: 100% 100%; border-radius: 50%;}
	.zongrenshu{position: absolute; top: 20px; left: 40px; font-size: 12px; color: #999}
	.position{position: relative; margin-bottom: 10px}
	.ping{margin-left: 20px}
	.zhan,.ping{margin-top: 10px; display: inline-block;}
	.tu img{width: 80px; margin-left: 2px; margin-top: 5px}
	.tu{padding-left: 40px}
</style>
