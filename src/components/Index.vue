<template>
    <div class="homePage" id="homePage">
        <!-- header start  -->
        <header class="header">
            <div class="header-box auto-center">
                <a id="logo" class="logo" href="/">
                    <img src="http://img.iwo72.com/home/iwo/Resource/images/Index/logo.png?v=10527" alt="iwo爱窝家居，全屋家居定制品牌"/>
                </a>
                <ul id="nav" class="nav">
                    <li><a href="/">首页<span class="line"></span></a></li>
                    <li><a id="combo-399" href="/show" class="active">IWO网上展厅<span class="line"></span></a></li>
                    <li><a href="/next">施工现场<span class="line"></span></a></li>
            
                    <li>
                        <a href="javascript:;">设计案例<span class="line"></span></a>
                        <div class="list-item">
                            <a href="/show">效果案例</a>
                            <a href="/show">施工成交案例</a>
                        </div>
                    </li>
                    <li @mouseover="yshow()" @mouseout="yhide()">
                        <a id="news" href="javasrcipt:;">会员中心<span class="line"></span></a>
                        <div class="list-item" :class="{show:ishow}">
                            <a href="/show">浏览记录</a>
                            <a href="/show">预约记录</a>
                            <a href="/show">喜欢的方案</a>
                            <a href="/show">微信登录</a>
                            <a href="/show">收货地址</a>
                            <a href="/show">订单管理</a>
                            <a href="/show">积分</a>
                        </div>
                    </li>
                    <li class="user-handle-box">
                        <a id="login-btn" class="login-btn" href="/Login"><span class="u-login-icon"></span><span class="login-text">注册/登录</span></a>
                    </li>  
                </ul>
            </div>
        </header>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeIndex: '1',
            activeIndex2: '1',
            ishow:false,
        };
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        },
        yshow(){
            console.log("已过");
            this.ishow = true;
        },
        yhide(){
            console.log("一处");
            this.ishow = false;
        }
    }
}
</script>

<style lang="scss">
.header {
    width: 100%;
    height: 80px;
    min-width: 1024px;
    .header-box{
        position: relative;
        height: 100%;
        padding-left: 350px;
        .logo {
            display: inline-block;
            width: 254px;
            height: 50px;
            margin-top: 15px;
            position: absolute;
            left: 0;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .nav{
            width: 100%;
            height: 100%;
            float: right;
            >li{
                position:relative;
                margin-right: 0px;
                padding:0 10px;
                display: inline-block;
                >a{
                    position: relative;
                    display: inline-block;
                    line-height: 80px;
                    font-size: 18px;
                    color: #474646;
                }
                >a:after {
                    position: absolute;
                    left: 0;
                    bottom: 25px;
                    display: inline-block;
                    content: "";
                    width: 0;
                    height: 1px;
                    background: #dd4540;
                    transition: all 0.3s;
                }
                >a.active,>a:hover{
                    color: #dd4540;
                }
                >a:hover:after {
                    width: 100%;
                }
                >a.active:hover:after {
                    width: 0;
                }
                >a.active:hover:after{
                    width: 100%;
                }
                .list-item{
                    background:#fff;
                    display:none;
                    padding:5px 0;
                    position:absolute;
                    top:60px;
                    left:0;
                    width:100%;
                    a{
                        display:block;
                        text-align:center;
                        line-height:32px;
                        font-size:16px;
                        color:#444;
                        text-align:center;
                    }
                }
                .show{
                    display: block;
                }
            }
            >li:hover{
                a{
                    color: #dd4540;
                }
                a:after{
                    width: 100%;
                }
                a.active:after{
                    width: 100% !important;
                }
            }
            >li.active{
                a{
                    color:#dd4540;
                }
            }
            >li:last-child {
                margin-right: 0;
            }
            .user-handle-box{
                >a.active,>a:hover{
                    color: #dd4540;
                }
                a:hover:after{
                    width: 0;
                }
                .login-btn {
                    display: inline-block;
                    text-align: center;
                    width: 80px;
                    height: 100%;
                    .u-login-icon {
                        display: inline-block;
                        width: 20px;
                        height: 20px;
                        background-position: right center;
                        float:left;
                        margin:30px;
                    }
                    .login-text {
                        display: none;
                    }
                    .user-in{
                        width: 36px;
                        height: 36px;
                        margin-top: 22px;
                        img{
                            width: 100%;
                            height: 100%;
                        }
                    }
                    .user-in:hover {
                        .com-handle{
                            display: block;
                        }
                    }
                }
                .login-btn:hover {
                    color:#474646;
                    .u-login-icon{
                        display: none;
                    }
                    .login-text{
                        display: inline-block;
                    }
                }
            }
        }
    }
}
@keyframes inputAnim {
    0%   {width: 0;}
    100% {width: 60%;}
}
// -webkie-@keyframes inputAnim {
//     0%   {width: 0;}
//     100% {width: 60%;}
// }

</style>
