<template>
	<div class="xiaozhu_inner">
		 
		<div class="shang">
		<slot name='yingshi'></slot>
			<slot name="biaotiImg"></slot>
			<div class="rightText">
				<slot name='title'></slot>
				<slot name="des"></slot>
				<slot name="renshu"></slot>
			</div>
		</div>

	</div>
</template>
<script type="text/javascript">
	export default{
		props:['yingshi','des']
	}
</script>
<style type="text/css">
    .biaoti5{width: 80px; height: 20px; background: #fff; position: absolute; top: -10px;text-align: center; left: 40% ;}
	.xiaozhu_inner{width: 100%;background: #fff; }
	.xiao_text{padding: 20px 10px; border-top: 1px solid #ededed; margin-top: 10px;position: relative;}
	.shangImg{width: 50px; float: left;}
	.rightText{float: left; padding-left: 10px; position: relative;}
	.rightText .txt{width: 220px; font-size: 12px; color: #9b9b9b}
	.renshu{position: absolute; color: #9b9b9b; font-size: 12px; top: 0; right: -50px}
	.renshuImg{width: 20px}
	.shang{height: 80px}
	.x_beiji{width: 100%; height: 200px; background-image: url(../../src/assets/images/ic_group_banner.png); background-repeat: no-repeat; text-align: center;}
	.aaaa{text-align: left; margin-top: 40px; font-size: 12px; color: #9b9b9b; text-indent: 2em}
	.aaaa2{font-size: 18px; font-weight: bold; padding-top: 80px}
	.aaaa3{font-size: 14px; color:#9b9b9b; margin-top: 10px }
	
</style>