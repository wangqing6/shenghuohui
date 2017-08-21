<template>
	<div class="wode">
	<div class="header_pic">
		<div class="inner_warp">
			<span class=" header_img"><img src="../assets/images/avatar_male_70.png"></span>
			<span class="denglv">登录/注册</span>
			
		</div>
	</div>
	<p class="tixing"><img src="../assets/images/ic_mine_notification.png"><span>提醒</span></p>
		<ul>
			<li>暂无数据</li>
		</ul>
		<div class="margin">

			<div class="item_inner2">
				<WodeItem txt="喜欢">
				<img src="../assets/images/ic_album_photo_liked.png" slot="wodePic">
				</WodeItem>
				
				<WodeItem txt="日记">
					<img src="../assets/images/ic_my_note.png" slot="wodePic">
				</WodeItem>
				
				<WodeItem txt="相册">
					<img src="../assets/images/ic_my_album.png" slot="wodePic">
				</WodeItem>
				<WodeItem txt="我的广播">
					<img src="../assets/images/ic_my_album.png" slot="wodePic">
				</WodeItem>
				<div style="clear:both"></div>
			</div>
							
			<div class="item_inner2">
				<WodeItem txt="电影·电视">
					<img src="../assets/images/ic_my_album.png" slot="wodePic">
				</WodeItem>

				<WodeItem txt="读书">
					<img src="../assets/images/ic_my_books.png" slot="wodePic">
				</WodeItem>

				<WodeItem txt="音乐">
					<img src="../assets/images/ic_my_books.png" slot="wodePic">
				</WodeItem>
				
				<WodeItem txt="同城活动">
					<img src="../assets/images/ic_my_events.png" slot="wodePic">
				</WodeItem>
				<div style="clear:both"></div>
			</div>

			<div class="item_inner2">
				<WodeItem txt="豆瓣时间">
					<img src="../assets/images/ic_album_photo_liked.png" slot="wodePic">
				</WodeItem>

				<WodeItem txt="豆列">
					<img src="../assets/images/ic_my_doulist.png" slot="wodePic">
				</WodeItem>

				<WodeItem txt="订单">
					<img src="../assets/images/ic_my_orders.png" slot="wodePic">
				</WodeItem>

				<WodeItem txt="钱包">
					<img src="../assets/images/ic_my_wallet.png" slot="wodePic">
				</WodeItem>
				<div style="clear:both"></div>
			</div>
		</div>
	</div>
</template>
<style type="text/css">
	.wode{padding-top: 48px; background: #f7f7f7}
	.margin{margin-top: 18px; background: #fff}
	.item_inner2{border-bottom: 1px solid #eee; padding: 20px 0px}
	.header_pic{width: 100%; background-image: url(../assets/images/header.png); background-size: 100% 100%;}
	.header_pic img{width:100%}
	.header_img{width: 60px; height: 60px; display: inline-block; border:2px solid #fff; border-radius: 50%}
	.inner_warp{padding: 30px 20px 40px 20px}
	.denglv{display: inline-block; padding: 10px 20px; border: 1px solid #fff; color: #fff; font-size: 14px; float: right; margin-right: 40px; margin-top: 15px}
	.tixing img{ width: 22px ;vertical-align:middle; margin-right: 20px}
	.tixing{padding-left: 20px; background: #fff; margin-top: 18px; line-height: 40px; font-size: 14px; border-bottom: 1px solid #ededed }
	.wode li{ list-style: none; text-align: center; font-size: 12px; color: #999; line-height: 30px; background: #fff }
</style>
<script type="text/javascript">
	import WodeItem from './wode_item'
	export default{
		components:{WodeItem}
	}
</script>