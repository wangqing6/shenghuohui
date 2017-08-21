<template>
	<div class="guangbo_item">
		<div class="faxian">
			<img src="../assets/images/ic_status_anonymous_header.png">
			<p class="ppp">发现有趣的人</p>
			<p>关注他们，发现更大的世界</p>
		</div>
		<ItemInner :Aarr='arr'>
		</ItemInner>
		<ItemInner :Aarr='arr2'>
			<img src="../assets/images/media.jpg" slot="shuoPic">
			<img src="../assets/images/media.jpg" slot="shuoPic">
		</ItemInner>
		<ItemInner :Aarr='arr3'>
		</ItemInner>
		<ItemInner :Aarr='arr3'>
		</ItemInner>
		<ItemInner :Aarr='arr3'>
		</ItemInner>
		
	</div>
</template>
<style type="text/css">
	.guangbo_item{width: 100%; background: #f7f7f7;padding-top: 49px;}
	.zhan{font-size: 12px; color: #ccc; padding-left: 40px}
	.zhan img{width: 12px}
	.ping{font-size: 12px; color: #ccc;}
	.ping img{width: 16px}
	.faxian{height: 100px;}
	.faxian img{width: 80px; float: left; margin: 30px 20px 30px 40px }
	.faxian p{font-size: 12px; color: #999;}
	.faxian .ppp{font-size: 14px; color: #000;padding-top: 40px}
</style>
<script type="text/javascript">
	import ItemInner from './guangbo_item_inner'
	export default{
		components:{ItemInner},
		data:function(){
			return{
				arr:[
						{touxiang:require("../assets/images/ic_share_status.png"),
						name:"宋小君",
						renshu:12453,
						text:"金船（bucintoro）是威尼斯执政官的庆典专用桨帆船。1798年威尼斯共和国被拿破仑消灭之前，每年的耶稣升天节，执政官乘坐金船到亚每年的耶稣升天节，执政官乘坐金船到亚德里亚的海口",
						}
					],
				arr2:[
						{touxiang:require("../assets/images/ic_user_info_gender.png"),
						name:"ellry",
						renshu:3317,
						text:"卡尔《宝剑八》，美国初版，带封皮，密封被打开，但是小心的保留下来，《宝剑八》是卡尔最罕见的初版之一，其他的三种",
						}
					],	
				arr3:[
						{touxiang:require("../assets/images/ic_share_qq.png"),
						name:"阿D小姐的世界",
						renshu:90,
						text:"#高考#今天竟然真的就到高考了。07-17，我参加高考已经10年了，应该记录点什么，记忆却模糊。只记得我当年自己做公交去考场，不穿校服没有好看的衣服纠结了半天，考数学的时候后座的男生居然是补习班认识的一直3用圆珠笔戳我后背要我给他看试卷，其实我的数学才考了92分（满分150）。。。",
						}
					]
			}
		},
		
		
	}
</script>