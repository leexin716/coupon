<template>
  <div>
    <!-- 搜索navbar -->
    <div class="weui-search-bar" id="searchBar">
      <form class="weui-search-bar__form">
        <div class="weui-search-bar__box">
          <i class="weui-icon-search"></i>
          <input type="search" class="weui-search-bar__input" placeholder="搜索" required>
          <a href="javascript:" class="weui-icon-clear"></a>
        </div>
        <label class="weui-search-bar__label">
          <i class="weui-icon-search"></i>
          <span>搜索</span>
        </label>
      </form>
      <a href="javascript:" class="weui-search-bar__cancel-btn">取消</a>
    </div>

    <div class="contain">
        <ul class="content">
            <li v-for="(items,indexs) in 6" :key="indexs">
                <!-- info -->
                <div class="content_top">
                    <div class="content_toper">
                        <div class="content_left">
                            <div class="content_avator"><img src="../../assets/timg.jpg"></div>
                            <div class="content_info">
                                <p class="fontBig">穿越小镇</p>
                                <p class="fontSml color9">西餐/人均￥88</p>
                                <p class="color6 fontMid">地址：海曙区联丰</p>
                            </div>
                        </div>
                        <div class="content_right">
                            <img src="../../assets/menu.png" />
                        </div>
                    </div>
                </div>
                
                <!-- 优惠券 -->
                <div class="content_btm">
                    <div class="couponList">
                        <div :class='["coupon",item.isUseStatus == 0 ? "backer":"",item.isUseStatus == 1 ? "backered":""]' v-for="(item,index) in couponLisTable" :key="index">
                            <div class="coupon_left">
                                <span>5</span>元
                            </div>
                            <div class="coupon_right">
                                <div class="coupon_right_le">
                                    <p class="font4">订单满300可以使用</p>
                                    <p class="font1">领取后30天有效</p>
                                </div>
                                <div class="coupon_right_ri">
                                    <div class="use_btn font1">{{item.useText | filterText}}</div>
                                    <p class="font1">234人已领</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- instance -->
                    <div class="instance">
                        <div class="instance_left">
                            <img src='../../assets/position.png' />
                            <span class="fontSml">1.5km</span>
                        </div>
                        <div class="instance_right"><img src='../../assets/right.png' /></div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            couponLisTable: [
                {
                    isUseStatus:0,
                    useText:0,
                },
                {
                    isUseStatus:1,
                    useText:1
                }
            ]
        }
    },
    filters:{
        filterText( val){
            let arr = {0: '去使用', 1: "已使用"};
            return arr[parseInt(val)];
        }
    },
    mounted() {
        this.$weui.searchBar("#searchBar");
    }
};
</script>

<style scoped>
ul,li{
    list-style: none;
}
.weui-search-bar{
    position: sticky!important;
}
.contain{
    padding: 0 10px;
}

.content_left{
    display: flex;
    width: 90%;
}
.content_avator{
    width: 65px;
    height: 65px;
    border-radius: 50%;
    margin-right: 10px;
}
.content_avator img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
}
.content_right{
    width: 20px;
    height: 20px;
}
.content_right img{
    width: 100%;
    height: 100%;
}
.content_top{
    padding: 0 15px 15px 15px;
}
.content_toper{
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-top: 1px solid #dadada;
    padding-top: 20px;
}
.content li{
    padding-bottom: 20px;
}
.content li:first-child >.content_top >.content_toper{
    border:none
}
.content_btm{
    background: #fff;
    border-radius: 0 0 10px 10px;
    box-shadow: 2px 2px 10px rgba(0,0,0,.1);
}
.couponList{
    padding: 10px 10px 0 10px;
    border-bottom: 1px solid #dadada
}
.coupon{
    width: 100%;
    height: 18vw;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fff;
    margin-bottom: 10px
}
.backer{
    background-image: url('../../assets/backer.png');
}
.backered{
    background-image: url('../../assets/backered.png');
}
.instance{
    padding: 3vw;
    display: flex;
    justify-content: space-between;align-items: center
}
.instance_left{
    display: flex;
    align-items: center;
}
.instance_left img{
    width: 15px;
    height: 15px;
}
.instance_left span{
    color: #FF8A95
}
.instance_right{
    width: 20px;
    height: 20px;
}
.instance_right img{
    width: 100%;
    height: 100%;
}
.coupon_left{
    width: 21vw;
    text-align: center;
}
.coupon_right{
    width: 60vw;
    display: flex;
    justify-content: space-between;
    padding-right: 3px;
    align-items: center;
}
.font1{
    font-size: 12px
}
.font4{
    font-size: 16px
}
.use_btn{
    border: 1px solid;
    border-radius: 3px;
    text-align: center;
    padding: 1vw 4vw;
}
.coupon_right_ri{
    margin-right: 5px;
    text-align: center
}
.coupon_left span{
    font-size: 10vw;
    margin-right: 5px;
}
</style>