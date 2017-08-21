<template>
	<div>
		<Warp>
				<Item tex="首页" make=1 id='/home'>
					<img src="../assets/images/ic_tab_home_normal.png" slot="timeImg">
					<img src="../assets/images/ic_tab_home_active.png" slot="activeImg">
				</Item>
				<Item tex="书影音" make=2 id='/shuyinying'>
					<img src="../assets/images/ic_tab_subject_normal.png" slot="timeImg">
					<img src="../assets/images/ic_tab_subject_active.png" slot="activeImg">
				</Item>
				<Item tex="广播" make=3 id='/guangbo'>
					<img src="../assets/images/ic_tab_status_normal.png" slot="timeImg">
					<img src="../assets/images/ic_tab_status_active.png" slot="activeImg">
				</Item>
				<Item tex="小组" make=4 id='/group'>
					<img src="../assets/images/ic_tab_group_normal.png" slot="timeImg">
					<img src="../assets/images/ic_tab_group_active.png" slot="activeImg">
				</Item>
				<Item tex="我的" make=5 id='/mine'>
					<img src="../assets/images/ic_tab_profile_normal.png" slot="timeImg">
					<img src="../assets/images/ic_tab_profile_active.png" slot="activeImg">
				</Item>
		</Warp>
	</div>
</template>
<script type="text/javascript">
	import Warp from './warp'
	import Item from './itme'
	export default{
		components:{Warp,Item},
		data:function(){
			return{
				selected:1
			}
		}

	}
</script>