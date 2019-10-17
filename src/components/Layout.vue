<template>
    <div>
         <div class="headerMenu">
            <div class="inner">
                <div class="leftBox">
                    <a href="index_pc.html" id="leftBox1">首页</a>
                    <a id="leftBox2">商机直通车</a>
                    <a id="leftBox3">资源直通车</a>
                    <a  id="leftBox4" href="/index.html">精化优选</a>
                    <a  id="leftBox5" > 智能核价</a>
                    <a id="leftBox6" >精化头条</a>
                    <a id="leftBox7"  href="steppingInto.html">走进精化</a>
                </div>
                <div class="rightBox">
                    <div class="cellBox1">
                        <a class="dlBtn">登录</a>
                        <a class="zcBtn">注册</a>
                    </div>
                    <div class="cellBox2">
                        个人中心
                    </div>
                    <div class="cellBox4">帮助中心</div>
                    <div class="cellBox5">
                        <img src="/static/images/index03.jpg" alt="">
                    </div>
                    <div class="cellBox4">发布</div>
                </div>
            </div>
        </div>
    
         <div class="container" style="min-height:400px">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>
        
         <div class="footer">
                <div class="inner">
                    <div class="cellBox1">
                        <div class="imgBox">
                            <img src="/static/images/footLogo01.jpg" alt="">
                        </div>
                        <p class="p1">021-50835567</p>
                        <p class="p2">工作日：8:30-17:30</p>
                    </div>
                    <div class="cellBox2">
                        <h3>商机展示</h3>
                        <p>产品商机</p>
                        <p>技术供需</p>
                        <p>项目商机</p>
                        <p>投融资商机</p>
                        <p>其它商机</p>
                    </div>
                    <div class="cellBox2">
                        <h3>资源搜索</h3>
                        <p>生产资源</p>
                        <p>技术资源</p>
                        <p>市场资源</p>
                        <p>更多资源</p>
                    </div>
                    <div class="cellBox2">
                        <h3>精化优选</h3>
                        <p>精化优选</p>
                    </div>
                    <div class="cellBox2">
                        <h3>快车服务</h3>
                        <p>项目落地</p>
                        <p>技术提升</p>
                        <p>市场开拓</p>
                        <p>产业咨询</p>
                        <p>金融服务</p>
                    </div>
                    <div class="cellBox2">
                        <h3>走进快车</h3>
                        <p>关于我们</p>
                        <p>新闻中心</p>
                        <p>诚聘英才</p>
                        <p>加入车友会</p>
                        <p>联系我们</p>
                    </div>
                    <div class="cellBox7">
                        <p>微信公众号</p>
                        <div class="imgBox">
                            <img src="/static/images/ewm01.jpg" alt="">
                        </div>
                    </div>
                </div>

          </div>
    </div>
</template>
<style scoped>
 
</style>
 