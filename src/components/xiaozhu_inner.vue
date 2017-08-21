<template>
	<div>
		<div class="x_beiji">
			<p class="aaaa2">418913个有趣的小组</p>
			<p class="aaaa3">立即选择加入吧</p>
			<p class="aaaa">根据兴趣推荐</p>
		</div>
		<div class="huanyipi">
			<img src="../assets/images/ic_reshare_flag.png">
			<span class="huan">换一批</span>
			<span class="xuan">选好了，进入小组</span>
		</div>
		<img src="../../src/assets/images/52_03.gif" class="pppp">
		<div class="xiao_text">
			<XIWarp :a="arr"></XIWarp>
		</div>
		<div class="xiao_text">
			<XIWarp :a="arr2"></XIWarp>
		</div>
		<div class="xiao_text">
			<XIWarp :a="arr3"></XIWarp>
		</div>
		
	</div>
</template>
<script type="text/javascript">
	import XIWarp from './xiaozhu_inner_warp'
	export default{
		components:{XIWarp},
		data:function(){
			return{
				arr:[
					{
					des:'属于五个女孩的都市欢乐颂，欢迎进组讨论角色、剧情、花絮',
					title:"电视剧欢乐颂",
					renshu:543
					},
					{
					des:'属于五个女孩的都市欢乐颂，欢迎进组讨论角色、剧情、花絮',
					title:"IMDb250部最佳影片",
					renshu:1215
					},
					{yingshi:"影视",
					des:'属于五个女孩的都市欢乐颂，欢迎进组讨论角色、剧情、花絮',
					title:"金秀贤",
					renshu:1215
					},

				],
				arr2:[
					{
					des:'属于五个女孩的都市欢乐颂，欢迎进组讨论角色、剧情、花絮',
					title:"提前上床我们一起读书",
					renshu:543
					},
					{
					des:'属于五个女孩的都市欢乐颂，欢迎进组讨论角色、剧情、花絮',
					title:"短片小组分享组",
					renshu:1215
					},
					{yingshi:"读书",
					des:'属于五个女孩的都市欢乐颂，欢迎进组讨论角色、剧情、花絮',
					title:"奥登",
					renshu:1215
					},
				],
				arr3:[
					{
					des:'属于五个女孩的都市欢乐颂，欢迎进组讨论角色、剧情、花絮',
					title:"动力火车",
					renshu:543
					},
					{
					des:'属于五个女孩的都市欢乐颂，欢迎进组讨论角色、剧情、花絮',
					title:"俄罗斯音乐",
					renshu:1215
					},
					{yingshi:"音乐",
					des:'属于五个女孩的都市欢乐颂，欢迎进组讨论角色、剧情、花絮',
					title:"Faye",
					renshu:1215
					},
				]
			}
		}
	}
</script>
<style type="text/css">
	.pppp{width: 90%; height: 60px; margin-left: 5%; margin-top: 20px}
	.huanyipi{position: fixed; bottom: 64px; z-index: 100; background: #fff; padding-left: 20px; font-size: 12px; height: 40px; width: 100%; padding-top: 20px}
	.huanyipi img{ width: 20px; margin-right: 10px ;vertical-align: middle;}
	.huanyipi .huan{color: green}
	.huanyipi .xuan{display: inline-block; background: #cdcdcd; float: right; margin-right: 40px; color: #fff; padding: 5px 13px; border-radius: 5px}
</style>
