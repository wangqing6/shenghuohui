<template>
	<div class="minner">
		<div>
			<MinnerText biaoti='热点'></MinnerText>
			<div class="neirong" v-for="(item,index) in miner_arr " @click="xiangqing(index)" >

				<div class="leftText">
					<p class="txt1">{{ item.title }}</p>
					<p class="txt2">{{ item.target.desc }}</p>
					<p class="txt3">作者：{{ item.target.author.name }}</p>
				</div>
				<div class="rigthPic">
					<img src="https://qnmob2.doubanio.com/img/files/file-1489047494.jpg "/>
				</div>
				<div class="fudong"></div>
			</div>
				
		</div>
			
			
	</div>
</template>
<script type="text/javascript">
	import MinnerText from './minner_text'
	export default{
		components:{MinnerText},
		
		data:function(){
			return{
				miner_arr:[],
				miner_arr2:[]
			}
		},
		methods:{
			search:function(){
				this.axios.get('/api/homeData').then((response)=>{
		           
		          	this.miner_arr=response.data.data.recommend_feeds
		          	console.log(this.miner_arr)
		        })
			},
			xiangqing(i){
				
				this.$router.push({path:'/router0'})
				this.miner_arr2=this.miner_arr[i]
				// console.log(this.miner_arr2)
				// console.log(this.$route.params.id)
			}
		},
		mounted:function(){
			this.search()
		}
	}
</script>
<style type="text/css">
	.fudong{ clear:both}
	.neirong{padding: 20px; border-bottom: 1px solid #d3d3d3;}
	body{padding-bottom: 64px}
	.leftText{width: 63%; float: left;}
	.txt1{ font-size: 18px; font-weight: bold; line-height: 30px; color: #4d4d4d}
	.txt2{font-size: 12px; color: #9f9f9f;line-height: 20px; position: relative;}
	.txt3{margin-top: 20px;font-size: 12px; color: #9f9f9f;line-height: 20px;}
	.txt2::before{content: ""; position: absolute; width: 40px; height: 1px; background: #d3d3d3; top: 50px}
	.rigthPic{width: 120px; height: 120px; float: right;}
	.rigthPic img{width: 120px; height: 120px; }
</style>