<template>
  <div class="home">
	  <div @mouseover="loseloginlist1()" class="rlogin">
	  	<div class="rloginitem" v-for="item in rloginlist" :key="item.id">
			<img class="rlimg" :src="item.imgSrc" alt="">
			<div class="rltxt">{{item.title}}</div>
	  	</div>
	  </div>
    <div class="header" @mouseover="loseloginlist1()" >
		<div class="hleft">
			<div class="logo">
				<img src="../assets/img/logo.png" alt="">
			</div>
			<div class="htitle">
				<div class="htitletop">泰州市交通产业集团阳光采购平台</div>
				<div class="htitledown">
					<div class="htdleft">
						公平公正公开诚实信用
					</div>
					<div class="htdright">
						<input class="htdrighttxt" placeholder="请输入关键词" type="text" name="" id="">
						<img class="htdrightimg" src="../assets/img/sousuo.png" alt="">
					</div>
				</div>
			</div>
		</div>
		
	</div>
	<div class="tab">
		<div @mouseover="getLoginlist(index)" @mouseout="loseLoginlist(index)" class="tabitem" v-for="(item,index) in list" :key="index">
			<div class="ttitemtext">
				{{ item }}
			</div>
			
			<img class="titemimg" v-show="index==9" src="../assets/img/down.png" alt="">
			<div  v-show="loginflag&&index==9" class="loginlist">
				<div class="tra">
					<div class="traitem" v-for="item in tralist" :key="item.id">
						<img class="traimg" :src="item.imgSrc" alt="">
						<div class="tratxt">{{item.title}}</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	
	<div class="banner">
		<img class="bannerimg" src="../assets/img/banner1.png" alt="">
	</div>
	<div class="noticebox">
		<div class="notice">
			<div class="noticeleft">
				<img class="nlimg" src="../assets/img/notice.jpg" alt="">
			</div>
			<div class="noticemid">
				<div class="nltitle">
					<div class="nltleft">
						<img class="nltleftimg" src="../assets/img/bid.png" alt="">
						<div class="nltlefttxt">
							重要通知/公告
						</div>
					</div>
					<div class="nltright">
						更多 >>
					</div>
				</div>
				<div class="nltbox">
					<div v-show="index<4" class="nltboxItem" v-for="(item,index) in listNotice" :key="index">
						
						<div class="nltbIleft">>>  &nbsp;{{ item.doc_name }}</div>
						<div class="nltbIright">{{ item.create_time }}</div>
					</div>
				</div>
			</div>
			<div class="noticeright">
				<div class="nltitle">
					<div class="nltleft">
						<img class="nltleftimg" src="../assets/img/bid.png" alt="">
						<div class="nltlefttxt">
							固定资产处置
						</div>
					</div>

				</div>
				<div class="nltbox">
					<div v-show="index<4" class="nltboxItem" v-for="(item,index) in FixAssets" :key="index">
						
						<div class="nltbIleft">[ {{ item.doc_type }} ]</div>
						<div class="nltbIright">{{ item.doc_name }}</div>
					</div>
				</div>
			</div>
		</div>
		
	</div>
	<!-- 招标采购 -->
	<div class="bid">
		<div class="bidleft">
			<div class="bidlefttitle">
				<div class="bltleft">招标采购</div>
				<div class="bltmid">
					<div :class="index == currentbidindex?bldactive:''" @mouseover="bidactive(index)" class="bltmiditem" v-for="(item,index) in spanlist" :key="index">
						{{ item }}
					</div>
				</div>
				<div class="bltright">更多+</div>
			</div>
			<div class="bidleftbox">
				<div class="bidleftboxtab">
					<div :class="currentbidtabindex == index?bidleftboxtabitemActive:''" class="bidleftboxtabitem" @click="bidtab(index)" v-for="(item,index) in bidleftboxtablist" :key="index">
						{{ item }}
					</div>
				</div>
				<div class="bidleftboxdiv">
					<div v-show="index<4" class="bibditem" v-for="(item,index) in bidlist" :key="index">
						<div v-if="item.doc_name!='暂无类目'">
							<div class="bibdtop">
								
								<div class="bibdtopname">
									<div :class="item.bid_status == bidstatus[0]?bibdtopstatusNow :bibdtopstatusOver" class="bibdtopstatus">
									
										• [{{item.bid_status}}]
									</div>
									<div class="bibdtopnametxt">
										{{ item.doc_name }}
									</div>
									
								</div>
								<div class="bibdtoptime">发布时间</div>
							</div>
							<div class="bibdbottom">
								<div class="bibdbottom">
									<div class="bibdbottomname">
										招标人：{{item.true_name}}
									</div>
									<div class="bibdbottomtime">
										{{item.create_time}}
									</div>
								</div>
							</div>
						</div>
						<div v-else>
							当前目录暂无
						</div>
					</div>
					
				</div>
			</div>
		</div>
		<div class="bidright">
			<div class="bidrighttitle">
				<img class="bidrighttitleimg" src="../assets/img/todaybid.png" alt="">
				<div class="bidrighttitletxt">
					今日开标
				</div>
			</div>
			<div class="bidrightbox">
				<div class="bidrightboxtxr">
					今日暂无开标项目
				</div>
			</div>
		</div>
	</div>
	
	<!-- 非招标采购 -->
	<div class="unbid">
		<div class="bidleft">
			<div class="bidlefttitle">
				<div class="bltleft">非招标采购</div>
				<div class="bltmid">
					<div :class="index == uncurrentbidindex?bldactive:''" @mouseover="unbidactive(index)" class="bltmiditem" v-for="(item,index) in spanlist" :key="index">
						{{ item }}
					</div>
				</div>
				<div class="bltright">更多+</div>
			</div>
			<div class="bidleftbox">
				<div class="bidleftboxtab">
					<div :class="uncurrentbidtabindex == index?bidleftboxtabitemActive:''" class="bidleftboxtabitem" @click="unbidtab(index)" v-for="(item,index) in unbidleftboxtablist" :key="index">
						{{ item }}
					</div>
				</div>
				<div class="bidleftboxdiv">
					<div v-show="index<4" class="bibditem" v-for="(item,index) in unbidlist" :key="index">
						<div v-if="unbidlist!=undefined">
							<div class="bibdtop">
								
								<div class="bibdtopname">
									<div :class="item.bid_status == bidstatus[0]?bibdtopstatusNow :bibdtopstatusOver" class="bibdtopstatus">
									
										• [{{item.bid_status}}]
									</div>
									<div class="bibdtopnametxt">
										{{ item.doc_name }}
									</div>
									
								</div>
								<div class="bibdtoptime">发布时间</div>
							</div>
							<div class="bibdbottom">
								<div class="bibdbottom">
									<div class="bibdbottomname">
										招标人：{{item.true_name}}
									</div>
									<div class="bibdbottomtime">
										{{item.create_time}}
									</div>
								</div>
							</div>
						</div>
						<div v-else>
							当前目录暂无
						</div>
					</div>
					
				</div>
			</div>
		</div>
		<div class="bidright">
			<div class="bidrighttitle">
				<img class="bidrighttitleimg" src="../assets/img/connect.png" alt="">
				<div class="bidrighttitletxt">
					联系我们
				</div>
			</div>
			<div class="bidrightbox">
				<div class="bidrightboxtxt">
					<div class="brbtl">主办单位：</div>
					<div class="brbtr">泰州市交通产业集团有限公司</div>
				</div>
				<div class="bidrightboxtxt">
					<div class="brbtl">地址：</div>
					<div class="brbtr">江苏省泰州市海陵区鼓楼南路301号1栋</div>
				</div>
				<div class="bidrightboxtxt">
					<div class="brbtl">联系电话：</div>
					<div class="brbtr">0523-86890126</div>
				</div>
				<div class="bidrightboxtxt">
					<div class="brbtl">电子邮箱：</div>
					<div class="brbtr">tzsjtcyjt@163.com</div>
				</div>
				<div class="bidrightboxtxt">
					<div class="brbtl">工作时间：</div>
					<div class="brbtr">法定工作日 （上午08:30-12:00 下午14:00-17.30）</div>
				</div>
				<hr>
				<div class="bidrightboxtxt">
					<div class="brbtl">技术维护：</div>
					<div class="brbtr">泰州市鑫通信息科技有限公司</div>
				</div>
				<div class="bidrightboxtxt">
					<div class="brbtl">地址：</div>
					<div class="brbtr">江苏省泰州市海陵区应春西路658号</div>
				</div>
				<div class="bidrightboxtxt">
					<div class="brbtl">联系电话：</div>
					<div class="brbtr">0523-86081001</div>
				</div>
				<div class="bidrightboxtxt">
					<div class="brbtl">工作时间：</div>
					<div class="brbtr">法定工作日 （上午08:30-12:00 下午14:00-17.30）</div>
				</div>
			</div>
		</div>
	</div>
	<div class="foot">
		<div class="footbanner">
			<div class="footbannerimg" v-for="item in footbannerlist" :key="item.id">
				<img :src="item.imgSrc" alt="">
			</div>
		</div>
		<div class="footcopy">
			Copyright ©2012-2021 泰州市交通产业集团有限公司;All Rights Reserved
		</div>
		<div class="footbei">
			苏ICP备2021037101号
		</div>
	</div>
  </div>
</template>

<script>
	import axios from 'axios'
	import qs from 'qs'
export default {
  name: 'Home1',
  props: {
    msg: String
  },
  data() {
  	return {
		tralist:[{title:'供应商登录',imgSrc:require('@/assets/img/tabgong.png')},{title:'管理员登录',imgSrc:require('@/assets/img/tabguan.png')},{title:'招标人登录',imgSrc:require('@/assets/img/tabzhao.png')},{title:'专家登录',imgSrc:require('@/assets/img/tabzhuan.png')}],
		rloginlist:[{title:'立即注册',imgSrc:require('@/assets/img/rl1.png')},{title:'电子商城',imgSrc:require('@/assets/img/mall.png')},{title:'供应商登录',imgSrc:require('@/assets/img/gys.png')},{title:'招标人登录',imgSrc:require('@/assets/img/zhao.png')},{title:'专家登录',imgSrc:require('@/assets/img/rl1.png')}],
		footbannerlist:[{imgSrc:require('@/assets/img/foot1.png')},{imgSrc:require('@/assets/img/foot2.png')},{imgSrc:require('@/assets/img/foot3.png')},{imgSrc:require('@/assets/img/foot4.png')},{imgSrc:require('@/assets/img/foot5.png')},{imgSrc:require('@/assets/img/foot4.png')},{imgSrc:require('@/assets/img/foot6.png')}],
  		list:['首页','关于我们','通知公告','政策法规','招标采购','非招标采购','网上商城','固定资产处置','帮助信息','登录'],
		loginflag:false,
		listNotice:[],
		FixAssets:[{doc_name:'医药高新区天虹路52号辛福原啊实打实大苏打',doc_type:'房产资产'}],
		func:{func_code:'HOME'},
		spanlist:['工程','货物','服务'],
		bldactive:'bltmiditemactive',
		currentbidindex:0,
		currentbidtabindex:0,
		uncurrentbidindex:0,
		uncurrentbidtabindex:0,
		bidleftboxtablist:['公开招标','邀请招标','资格预审','中标候选人公示','变更公告'],
		unbidleftboxtablist:['询价','竞争性谈判','竞争性磋商','单一来源采购','成交结果公告','变更公告'],
		bidleftboxtabitemActive:'bidleftboxtabitemActive',
		
		bidlist:[],
		bid:[],
		invit:[],
		qual:[],
		cand:[],
		chg:[],
		
		unbidlist:[],
		inq:[],
		neg:[],
		cuos:[],
		ones:[],
		dwin:[],
		dchg:[],
		bidstatus:['进行中','结束'],
		bibdtopstatusNow:'bibdtopstatusNow',
		bibdtopstatusOver:'bibdtopstatusOver'
  	}
  },
  mounted() {
 //  	let data = {'func_code':'HOME'}
	// axios.post('/api1/hub2a.php?act=web_data_api',data).then(res=>{
	// 	console.log(res);
	// })
	axios({
		method:'post',
		url:'/api1/hub2a.php?act=web_data_api',
		data:qs.stringify(this.func)
	}).then((res)=>{
		console.log(res.data.data);
		this.listNotice = res.data.data.NOTICE.DOC;
		this.bid = res.data.data.BID;
		this.invit = res.data.data.INVIT;
		this.qual = res.data.data.QUAL;
		this.cand = res.data.data.CAND;
		this.chg = res.data.data.CHG;
		this.bidlist = res.data.data.BID.CARGO
		
		this.unbidlist = res.data.data.INQ.CARGO
		this.inq = res.data.data.INQ;
		this.neg = res.data.data.NEG;
		this.cuos = res.data.data.CUOS;
		this.ones = res.data.data.ONES;
		this.dwin = res.data.data.DWIN;
		this.dchg = res.data.data.DCHG;
		console.log(this.neg);
	})
  },
  methods:{
	  bidtab(index){
		  this.currentbidtabindex = index
		  if(this.currentbidtabindex == 0&&this.currentbidindex ==0){
		  			 this.bidlist = this.bid.CARGO
		  }else if(this.currentbidtabindex == 0&&this.currentbidindex ==1){
		  			 this.bidlist = this.bid.PROT
		  }else if(this.currentbidtabindex == 0&&this.currentbidindex ==2){
		  			 this.bidlist = this.bid.SERV
		  }else if(this.currentbidtabindex == 1&&this.currentbidindex ==0){
		  			 this.bidlist = this.invit.CARGO
		  }else if(this.currentbidtabindex == 1&&this.currentbidindex ==1){
		  			 this.bidlist = this.invit.PROT
		  }else if(this.currentbidtabindex == 1	&&this.currentbidindex ==2){
		  			 this.bidlist = this.invit.SERV
		  }else if(this.currentbidtabindex == 3&&this.currentbidindex ==0){
		  			 this.bidlist = this.cand.CARGO
		  }else if(this.currentbidtabindex == 3&&this.currentbidindex ==1){
		  			 this.bidlist = this.cand.PROT
		  }else if(this.currentbidtabindex == 3	&&this.currentbidindex ==2){
		  			 this.bidlist = this.cand.SERV
		  }else if(this.currentbidtabindex == 4&&this.currentbidindex ==0){
		  			 this.bidlist = this.chg.CARGO
		  }else if(this.currentbidtabindex == 4&&this.currentbidindex ==1){
		  			 this.bidlist = this.chg.PROT
		  }else if(this.currentbidtabindex == 4	&&this.currentbidindex ==2){
		  			 this.bidlist = this.chg.SERV
		  }
	  },
	  bidactive(index){
		  this.currentbidindex = index
		 if(this.currentbidtabindex == 0&&this.currentbidindex ==0){
		 			 this.bidlist = this.bid.CARGO
		 }else if(this.currentbidtabindex == 0&&this.currentbidindex ==1){
		 			 this.bidlist = this.bid.PROT
		 }else if(this.currentbidtabindex == 0&&this.currentbidindex ==2){
		 			 this.bidlist = this.bid.SERV
		 }else if(this.currentbidtabindex == 1&&this.currentbidindex ==0){
		 			 this.bidlist = this.invit.CARGO
		 }else if(this.currentbidtabindex == 1&&this.currentbidindex ==1){
		 			 this.bidlist = this.invit.PROT
		 }else if(this.currentbidtabindex == 1	&&this.currentbidindex ==2){
		 			 this.bidlist = this.invit.SERV
		 }else if(this.currentbidtabindex == 2&&this.currentbidindex ==0){
		 			 this.bidlist = [{doc_name:'暂无类目'}]
		 }else if(this.currentbidtabindex == 2&&this.currentbidindex ==1){
		 			  this.bidlist = [{doc_name:'暂无类目'}]
		 }else if(this.currentbidtabindex == 2	&&this.currentbidindex ==2){
		 			 this.bidlist = [{doc_name:'暂无类目'}]
		 }else if(this.currentbidtabindex ==3&&this.currentbidindex ==0){
		 			 this.bidlist = this.cand.CARGO
		 }else if(this.currentbidtabindex == 3&&this.currentbidindex ==1){
		 			 this.bidlist = this.cand.PROT
		 }else if(this.currentbidtabindex == 3	&&this.currentbidindex ==2){
		 			 this.bidlist = this.cand.SERV
		 }else if(this.currentbidtabindex == 4&&this.currentbidindex ==0){
		 			 this.bidlist = this.chg.CARGO
		 }else if(this.currentbidtabindex == 4&&this.currentbidindex ==1){
		 			 this.bidlist = this.chg.PROT
		 }else if(this.currentbidtabindex == 4&&this.currentbidindex ==2){
		 			 this.bidlist = this.chg.SERV
		 }
		 
	  },
	  
	  // 非招标
	  unbidtab(index){
		   this.uncurrentbidtabindex = index;
	  		  if(this.uncurrentbidtabindex == 0&&this.uncurrentbidindex ==0){
	  		  			 this.unbidlist = this.inq.CARGO
	  		  }else if(this.uncurrentbidtabindex == 0&&this.uncurrentbidindex ==1){
	  		  			 this.unbidlist = this.inq.PROT
	  		  }else if(this.uncurrentbidtabindex == 0&&this.uncurrentbidindex ==2){
	  		  			 this.unbidlist = this.inq.SERV
	  		  }else if(this.uncurrentbidtabindex == 1&&this.uncurrentbidindex ==0){
	  		  			 this.unbidlist = this.neg.CARGO
	  		  }else if(this.uncurrentbidtabindex == 1&&this.uncurrentbidindex ==1){
	  		  			 this.unbidlist = this.neg.PROT
	  		  }else if(this.uncurrentbidtabindex == 1&&this.uncurrentbidindex ==2){
	  		  			 this.unbidlist = this.neg.SERV
	  		  }else if(this.uncurrentbidtabindex == 2&&this.uncurrentbidindex ==0){
	  		  			 this.unbidlist = this.cuos.CARGO
	  		  }else if(this.uncurrentbidtabindex == 2&&this.uncurrentbidindex ==1){
	  		  			 this.unbidlist = this.cuos.PROT
	  		  }else if(this.uncurrentbidtabindex == 2	&&this.uncurrentbidindex ==2){
	  		  			 this.unbidlist = this.cuos.SERV
	  		  }else if(this.uncurrentbidtabindex == 3&&this.uncurrentbidindex ==0){
	  		  			 this.unbidlist = this.ones.CARGO
	  		  }else if(this.uncurrentbidtabindex == 3&&this.uncurrentbidindex ==1){
	  		  			 this.unbidlist = this.ones.PROT
	  		  }else if(this.uncurrentbidtabindex ==3	&&this.uncurrentbidindex ==2){
	  		  			 this.unbidlist = this.ones.SERV
	  		  }else if(this.uncurrentbidtabindex == 4&&this.uncurrentbidindex ==0){
	  		  			 this.unbidlist = this.dwin.CARGO
	  		  }else if(this.uncurrentbidtabindex == 4&&this.uncurrentbidindex ==1){
	  		  			 this.unbidlist = this.dwin.PROT
	  		  }else if(this.uncurrentbidtabindex == 4	&&this.uncurrentbidindex ==2){
	  		  			 this.unbidlist = this.dwin.SERV
	  		  }else if(this.uncurrentbidtabindex == 5&&this.uncurrentbidindex ==0){
	  		  			 this.unbidlist = this.dchg.CARGO
	  		  }else if(this.uncurrentbidtabindex == 5&&this.uncurrentbidindex ==1){
	  		  			 this.unbidlist = this.dchg.PROT
	  		  }else if(this.uncurrentbidtabindex == 5	&&this.uncurrentbidindex ==2){
	  		  			 this.unbidlist = this.dchg.SERV
	  		  }
	  },
	  unbidactive(index){
	  		  this.uncurrentbidindex = index
	  		if(this.uncurrentbidtabindex == 0&&this.uncurrentbidindex ==0){
	  					 this.unbidlist = this.inq.CARGO
	  		}else if(this.uncurrentbidtabindex == 0&&this.uncurrentbidindex ==1){
	  					 this.unbidlist = this.inq.PROT
	  		}else if(this.uncurrentbidtabindex == 0&&this.uncurrentbidindex ==2){
	  					 this.unbidlist = this.inq.SERV
	  		}else if(this.uncurrentbidtabindex == 1&&this.uncurrentbidindex ==0){
	  					 this.unbidlist = this.neg.CARGO
	  		}else if(this.uncurrentbidtabindex == 1&&this.uncurrentbidindex ==1){
	  					 this.unbidlist = this.neg.PROT
	  		}else if(this.uncurrentbidtabindex == 1	&&this.uncurrentbidindex ==2){
	  					 this.unbidlist = this.neg.SERV
	  		}else if(this.uncurrentbidtabindex == 2&&this.uncurrentbidindex ==0){
	  					 this.unbidlist = this.cuos.CARGO
	  		}else if(this.uncurrentbidtabindex == 2&&this.uncurrentbidindex ==1){
	  					 this.unbidlist = this.cuos.PROT
	  		}else if(this.uncurrentbidtabindex == 2	&&this.uncurrentbidindex ==2){
	  					 this.unbidlist = this.cuos.SERV
	  		}else if(this.uncurrentbidtabindex == 3&&this.uncurrentbidindex ==0){
	  					 this.unbidlist = this.ones.CARGO
	  		}else if(this.uncurrentbidtabindex == 3&&this.uncurrentbidindex ==1){
	  					 this.unbidlist = this.ones.PROT
	  		}else if(this.uncurrentbidtabindex ==3	&&this.uncurrentbidindex ==2){
	  					 this.unbidlist = this.ones.SERV
	  		}else if(this.uncurrentbidtabindex == 4&&this.uncurrentbidindex ==0){
	  					 this.unbidlist = this.dwin.CARGO
	  		}else if(this.uncurrentbidtabindex == 4&&this.uncurrentbidindex ==1){
	  					 this.unbidlist = this.dwin.PROT
	  		}else if(this.uncurrentbidtabindex == 4	&&this.uncurrentbidindex ==2){
	  					 this.unbidlist = this.dwin.SERV
	  		}else if(this.uncurrentbidtabindex == 5&&this.uncurrentbidindex ==0){
	  					 this.unbidlist = this.dchg.CARGO
	  		}else if(this.uncurrentbidtabindex == 5&&this.uncurrentbidindex ==1){
	  					 this.unbidlist = this.dchg.PROT
	  		}else if(this.uncurrentbidtabindex == 5	&&this.uncurrentbidindex ==2){
	  					 this.unbidlist = this.dchg.SERV
	  		}
	  		 
	  },
	  getLoginlist(index){
		  if(index==9){
			  this.loginflag = true
		  }
	  },
	  loseLoginlist(index){
		  if(index	!=9){
		  			  this.loginflag = false
		  }
	  },
	  loseloginlist1(){
		   this.loginflag = false
	  }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.home{
		min-width: 1700px;
		
	}
.header{
	width: 100%;
	height: 158px;
	padding:  0 150px;
	box-sizing: border-box;
	display: flex;
	align-items: center;
	.hleft{
		width: 100%;
		display: flex;
		align-items: center;
		.logo{
			margin-right: 13px;
			.logoimg{
				width: 98px;
				height: 98px;
			}
		}
		.htitle{
			width: 100%;
			height: 98px;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			.htitletop{
				color: #D71315;
				font-size: 50px;
				font-family: Source Han Sans CN-Medium, Source Han Sans CN;
				font-weight: 500;
				text-shadow: 3px 3px 6px rgba(0,0,0,0.16);
			}
			.htitledown{
				// margin-top: 18px;
				display: flex;
				justify-content: space-between;
				.htdleft{
					font-size: 22px;
					line-height: 40px;
					font-family: Source Han Sans CN-Medium, Source Han Sans CN;
					font-weight: bold;
					color: #054274;
				}
				.htdright{
					display: flex;
					align-items: center;
					padding: 20px;
					box-sizing: border-box;
					width: 210px;
					height: 37px;
					box-shadow: 0px 3px 6px 1px rgba(0,0,0,0.16);
					border-radius: 3px 3px 3px 3px;
					opacity: 1;
					border: 1px solid #707070;
					.htdrightimg{
						width: 20px;
						height: 20px;
					}
					.htdrighttxt{
						border: none;
						outline: none;
						width: 150px;
						height: 35px;
						color: #646464;
					}
				}
			}
		}
	}

}
.rlogin{
	position: fixed;
	top:20px;
	right: 0;
	height: 640px;
	width: 130px;
	background-color: #fff;
	.rloginitem{
		height: 128px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		border-bottom: 1px solid #cecdcd;
		.rlimg{
			width: 33px;
			height: 33px;
		}
		.rltxt{
			margin-top: 12px;
		}
	}
	.rloginitem:hover{
		cursor: pointer;
	}
}
.tab{
	height: 75px;
	width: 100%;
	background-color: #1D4A94;
	padding: 0 150px;
	box-sizing: border-box;
	display: flex;
	
	.tabitem{
		display: flex;
		align-items: center;
		justify-content: center;
		flex: 1;
		font-size: 22px;
		font-family: Source Han Sans CN-Medium, Source Han Sans CN;
		color: #fff;
		position: relative;
		.ttitemtext{
			margin-right: 10px;
		}
		.loginlist{
			position: absolute;
			top:80px;
			width: 170px;
			// height: 154px;
			background: #1D4A94;
			opacity: 0.8;
			.tra{
				width: 170px;
				font-size: 18px;
				padding: 15px;
				box-sizing: border-box;
				.traitem{
					display: flex;
					height: 40px;
					align-items: center;
					border-bottom: 1px solid #FFFFFF;
					.traimg{
						width: 20px;
						height: 20px;
						margin-right: 10px;
					}
					.tratxt{
						
					}
				}
			
			}
		}
		
	}
	.tabitem:hover{
		background-color: #054274;
		cursor: pointer;
	}
}
.banner{
	width: 100%;
	height: 600px;
	.bannerimg{
		width: 100%;
		height: 600px;
	}
}
.noticebox{
	position: relative;
	width: 100%;
	height: 362px;
	.notice{
		width: 100%;
		position: absolute;
		top: -75px;
		display: flex;
		justify-content: space-between;
		padding: 0 150px;
		box-sizing: border-box;
		.noticemid{
			width: 40%;
			height: 362px;
			box-shadow: 3px 3px 6px 1px rgba(0,0,0,0.16), inset 0px 3px 3px 1px rgba(0,0,0,0.16);
			.nltitle{
				height: 75px;
				background: linear-gradient(90deg, #1D4A94 0%, #FFFFFF 100%);
				padding:  0 10px 0 20px;
				box-sizing: border-box;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.nltleft{
					display: flex;
					align-items: center;
					.nltleftimg{
						width: 25px;
						height: 25px;
						margin-right: 11px;
					}
					.nltlefttxt{
						font-size: 26px;
						font-family: Source Han Sans CN-Medium, Source Han Sans CN;
						font-weight: 500;
						color: #FFFFFF;
					}
				}
				.nltright{
					font-size: 22px;
					font-family: Source Han Sans SC-Normal, Source Han Sans SC;
					font-weight: 400;
				}
				.nltright:hover{
					cursor: pointer;
				}
				
			}
			.nltbox{
				padding: 0 10px 0 10px;
				.nltboxItem{
					font-size: 22px;
					font-family: Source Han Sans SC-Normal, Source Han Sans SC;
					font-weight: 400;
					height: 60px;
					line-height: 60px;
					border-bottom: 1px solid #eee;
					display: flex;
					justify-content: space-between;
					.nltbIleft{
						overflow:hidden;
						white-space: nowrap;
						text-overflow: ellipsis;
					}
				}
				.nltboxItem:hover{
					cursor: pointer;
				}

			}
		}
		.noticeleft{
			width: 362px;
			height:362px;
			box-shadow: 3px 3px 6px 1px rgba(0,0,0,0.16), inset 0px 3px 3px 1px rgba(0,0,0,0.16);
			.nlimg{
				width: 100%;
				height: 100%;
			}
		}
		.noticeright{
			height:362px;
			width:31%;
			box-shadow: 3px 3px 6px 1px rgba(0,0,0,0.16), inset 0px 3px 3px 1px rgba(0,0,0,0.16);
			.nltitle{
				height: 75px;
				background: linear-gradient(90deg, #1D4A94 0%, #FFFFFF 100%);
				padding:  0 10px 0 20px;
				box-sizing: border-box;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.nltleft{
					display: flex;
					align-items: center;
					.nltleftimg{
						width: 25px;
						height: 25px;
						margin-right: 11px;
					}
					.nltlefttxt{
						font-size: 26px;
						font-family: Source Han Sans CN-Medium, Source Han Sans CN;
						font-weight: 500;
						color: #FFFFFF;
					}
				}
				.nltright{
					font-size: 22px;
					font-family: Source Han Sans SC-Normal, Source Han Sans SC;
					font-weight: 400;
				}
				.nltright:hover{
					cursor: pointer;
				}
				
			}
			.nltbox{
				padding: 0 6px 0 10px;
				.nltboxItem{
					font-size: 20px;
					font-family: Source Han Sans SC-Normal, Source Han Sans SC;
					font-weight: 400;
					height: 60px;
					line-height: 60px;
					border-bottom: 1px solid #eee;
					display: flex;
					justify-content: space-between;
					.nltbIleft{
						width: 120px;
						color: #c4a037;
					}
					.nltbIright{
						overflow:hidden;
						white-space: nowrap;
						text-overflow: ellipsis;
					}
				}
			
			}
		}
	}
}
.bid{
	margin-top: 80px;	
	width: 100%;
	padding: 0 150px;
	box-sizing: border-box;
	display: flex;
	justify-content: space-between;
	.bidleft{
		width: 73%;
		box-shadow: 3px 3px 6px 1px rgba(0,0,0,0.16), inset 0px 3px 3px 1px rgba(0,0,0,0.16);
		.bidlefttitle{
			height: 85px;
			background: linear-gradient(90deg, #1D4A94 0%, #8ea3c6 100%);
			display: flex;
			justify-content: space-between;
			align-items: center;
			.bltleft{
				width: 215px;
				line-height: 85px;
				text-align: center;
				font-size: 26px;
				font-weight: bold;
				color: #fff;
			}
			.bltmid{
				width: 100%;
				display: flex;
				justify-content: center;
				.bltmiditem{
					height: 42px;
					width: 120px;
					border-radius: 21px;
					background-color: #c4a073;
					text-align: center;
					line-height: 42px;
					margin-right: 85px;
					font-size: 22px;
					font-weight: bold;
					color: #fff;
				}
				.bltmiditemactive{
					background-color: #f6f6f6;
					color: #868686;
				}
			}
			.bltright{
				width: 120px;
				font-size: 20px;
				color: #fff;
				line-height: 85px;
				text-align: center;
			}
			.bltright:hover{
				cursor: pointer;
			}
		}
		.bidleftbox{
			height: 560px;
			border: 1px solid #e7e7e7;
			display: flex;
			.bidleftboxtab{
				width: 210px;
				.bidleftboxtabitem{
					width: 100%;
					height: 80px;
					border-bottom: 1px solid #ebebeb;
					text-align: center;
					line-height: 80px;
					font-size: 20px;
					// color: #fefefe;
				}
				.bidleftboxtabitemActive{
					color: #FFFFFF;
					// background-image: url("../assets/img/bid.png");
					background: url('../assets/img/bidhover.png') no-repeat center / cover;
				}
				.bidleftboxtabitem:hover{
					cursor: pointer;
					color: #FFFFFF;
					// background-image: url("../assets/img/bid.png");
					background: url('../assets/img/bidhover.png') no-repeat center / cover;
				}
			}
			.bidleftboxdiv{
				width: 100%;
				font-size: 22px;
				padding: 20px;
				box-sizing: border-box;
				
				.bibditem{
					// display: flex;
					height: 120px;
					border-bottom: 1px solid #e7e7e7;
					.bibdtop{
						line-height: 60px;
						display: flex;
						justify-content: space-between;
						.bibdtoptime{
							width: 100px;
						}
						.bibdtopname{
							display: flex;
							justify-content: space-between;
							
							.bibdtopnametxt{
								width: 600px;
								overflow: hidden;
								text-overflow: ellipsis;
								white-space: nowrap;
							}
							.bibdtopstatus{
								width: 100px;
								margin-right: 35px;
								font-weight: bold;
							}
							.bibdtopstatusNow{
								color: #008000;
							}
							.bibdtopstatusOver{
								color: #c4a073;
							}
						}
						
					}
					.bibdbottom{
						width: 100%;
						height: 60px;
						display: flex;
						justify-content: space-between;
						font-size: 18px;
						color: #aeaeae;
						.bibdbottomname{
							margin-left: 10px;
						}
					}
				}
				
				.bibditem:hover{
					background-color: #EEF4FD;
					cursor: pointer;
				}
			}
		}
	}
	.bidright{
		box-shadow: 3px 3px 6px 1px rgba(0,0,0,0.16), inset 0px 3px 3px 1px rgba(0,0,0,0.16);
		width: 26%;
		.bidrighttitle{
			width: 100%;
			height: 85px;
			display: flex;
			justify-content: center;
			align-items: center;
			background: linear-gradient(90deg, #1D4A94 0%, #8ea3c6 100%);
			.bidrighttitleimg{
				width: 50px;
				height: 50px;
					margin-right: 10px;
			}
			.bidrighttitletxt{
				font-size: 26px;
				font-weight: bold;
				color: #fff;
			}
		}
		.bidrightbox{
			height: 560px;
			border: 1px solid #e7e7e7;
			padding: 20px;
			box-sizing: border-box;
			.bidrightboxtxr{
				width: 100%;
				font-size: 20px;
				text-align: center;
				
			}
		}
	}
}

.unbid{
	margin-top: 80px;	
	width: 100%;
	padding: 0 150px;
	box-sizing: border-box;
	display: flex;
	justify-content: space-between;
	.bidleft{
		width: 73%;
		box-shadow: 3px 3px 6px 1px rgba(0,0,0,0.16), inset 0px 3px 3px 1px rgba(0,0,0,0.16);
		.bidlefttitle{
			height: 85px;
			background: linear-gradient(90deg, #1D4A94 0%, #8ea3c6 100%);
			display: flex;
			justify-content: space-between;
			align-items: center;
			.bltleft{
				width: 215px;
				line-height: 85px;
				text-align: center;
				font-size: 26px;
				font-weight: bold;
				color: #fff;
			}
			.bltmid{
				width: 100%;
				display: flex;
				justify-content: center;
				.bltmiditem{
					height: 42px;
					width: 120px;
					border-radius: 21px;
					background-color: #c4a073;
					text-align: center;
					line-height: 42px;
					margin-right: 85px;
					font-size: 22px;
					font-weight: bold;
					color: #fff;
				}
				.bltmiditemactive{
					background-color: #f6f6f6;
					color: #868686;
				}
			}
			.bltright{
				width: 120px;
				font-size: 20px;
				color: #fff;
				line-height: 85px;
				text-align: center;
			}
			.bltright:hover{
				cursor: pointer;
			}
		}
		.bidleftbox{
			height: 560px;
			border: 1px solid #e7e7e7;
			display: flex;
			.bidleftboxtab{
				width: 210px;
				.bidleftboxtabitem{
					width: 100%;
					height: 80px;
					border-bottom: 1px solid #ebebeb;
					text-align: center;
					line-height: 80px;
					font-size: 20px;
					// color: #fefefe;
				}
				.bidleftboxtabitemActive{
					color: #FFFFFF;
					// background-image: url("../assets/img/bid.png");
					background: url('../assets/img/bidhover.png') no-repeat center / cover;
				}
				.bidleftboxtabitem:hover{
					cursor: pointer;
					color: #FFFFFF;
					// background-image: url("../assets/img/bid.png");
					background: url('../assets/img/bidhover.png') no-repeat center / cover;
				}
			}
			.bidleftboxdiv{
				width: 100%;
				font-size: 22px;
				padding: 20px;
				box-sizing: border-box;
				
				.bibditem{
					// display: flex;
					height: 120px;
					border-bottom: 1px solid #e7e7e7;
					.bibdtop{
						line-height: 60px;
						display: flex;
						justify-content: space-between;
						.bibdtoptime{
							width: 100px;
						}
						.bibdtopname{
							display: flex;
							justify-content: space-between;
							
							.bibdtopnametxt{
								width: 600px;
								overflow: hidden;
								text-overflow: ellipsis;
								white-space: nowrap;
							}
							.bibdtopstatus{
								width: 100px;
								margin-right: 35px;
								font-weight: bold;
							}
							.bibdtopstatusNow{
								color: #008000;
							}
							.bibdtopstatusOver{
								color: #c4a073;
							}
						}
						
					}
					.bibdbottom{
						width: 100%;
						height: 60px;
						display: flex;
						justify-content: space-between;
						font-size: 18px;
						color: #aeaeae;
						.bibdbottomname{
							margin-left: 10px;
						}
					}
				}
				
				.bibditem:hover{
					background-color: #EEF4FD;
					cursor: pointer;
				}
			}
		}
	}
	.bidright{
		box-shadow: 3px 3px 6px 1px rgba(0,0,0,0.16), inset 0px 3px 3px 1px rgba(0,0,0,0.16);
		width: 26%;
		.bidrighttitle{
			width: 100%;
			height: 85px;
			display: flex;
			justify-content: center;
			align-items: center;
			background: linear-gradient(90deg, #1D4A94 0%, #8ea3c6 100%);
			.bidrighttitleimg{
				width: 50px;
				height: 50px;
				margin-right: 10px;
			}
			.bidrighttitletxt{
				font-size: 26px;
				font-weight: bold;
				color: #fff;
			}
		}
		.bidrightbox{
			height: 560px;
			border: 1px solid #e7e7e7;
			padding: 20px;
			box-sizing: border-box;
			.bidrightboxtxt{
				display: flex;
				margin-top: 12px;
				font-size: 20px;
				font-weight: bold;
				.brbtl{
					width: 100px;
					color: #959595;
				}
				.brbthr{
					margin: 20px 0 ;
				}
				.brbtr{
					width: 70%;
				}
			}
		}
	}
}
.foot{
	margin-top: 85px;
	padding: 0 150px;
	box-sizing: border-box;
	height: 250px;
	background-color: #0f3c86;
	.footbei{
		width: 580px;
		margin: 0 auto;
		color: #fff;
		text-align: center;
		margin-top: 20px;
	}
	.footcopy{
		width: 580px;
		margin: 0 auto;
		color: #fff;
	}
	.footbanner{
		display: flex;
		height: 135px;
		align-items: center;
		justify-content: space-between;
		.footbannerimg{
			height: 65px;
			width: 200px;
			img{
				height: 100%;
				width: 100%;
			}
		}
		.footbannerimg:hover{
			cursor: pointer;
		}
	}
}
</style>
