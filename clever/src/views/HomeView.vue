<template>
<ContentBase>
<div class="a">
        <div class="b">
            <a href="#">A simple project</a>
            <h2>Wlcome</h2>
            <span>To see a world in a grain of sand,<br>And a heaven in a wild flower,<br>Hold infinity in the palm of your hand.</span>
        </div>
        <div class="c">
            <!-- i计算平面圆柱的动效延迟和距离 w是计算平面圆柱的宽度 -->
            <div class="d" style="--i:1;--w:1.5"></div>
            <div class="d" style="--i:2;--w:1.6"></div>
            <div class="d" style="--i:3;--w:1.4"></div>
            <div class="d" style="--i:4;--w:1.7"></div>
            <div class="e" style="--i:1"></div> 
        </div>
        <div class="f"></div>
    </div>
</ContentBase>
</template>

<script>
import ContentBase from'../components/ContentBase';

export default {
  name: 'HomeView',
  components: {
    ContentBase,
  }
}
</script>

<style scoped>
body{
        background-color: rgba(163, 209, 227, 0.608);
        display: flex;
        justify-content: center;
    }
    .a{
        position: relative;
        width: 750px;
        height: 400px;
        border: #fff 10px solid;
        background-color: rgba(126, 186, 221, 0.921);
        left: 250px;
        border-radius: 20px;
        overflow: hidden;
    }
    .b{
        position: absolute;
        width: 200px;
        height: 300px;
        left: 0;
        margin: 75px 50px;
        transition: 1.5s;
    }
    .b a{
        text-decoration: none;
        color: #fff;
        font: 900 28px '';
    }
    .b h2{
        /* 鼠标放开时动画  第一个值是动画的过度时间 第二个是延迟一秒后执行动画 */
        transition: .5s 1s;
        opacity: 0;
        color: #fff;
    }
    .b span {
        transition: .5s 1s;
        color: #fff;
        font: 500 15px '';
        position: absolute;
        top: 95px;
        left:10px;

    }
    .c{
        position: absolute;
        top: -130px;
        right: -240px;
    }
    .d,.e{
        position: absolute;
        right: calc(var(--i)*100px);
        width: calc(var(--w)*40px);
        height: 500px;
        overflow: hidden;
        border-radius: 100px;
        transform: rotateZ(220deg) translate(0,0);
        background: rgb(240, 220, 150);
        transition: .6s .6s;
    }
    .d:nth-child(2){
        background: rgb(240, 190, 230);
    }
    .e{
        left: -470px;
        top: -140px;
        width: 70px;
        background-color: rgb(90,220,150);
    }
    .a:hover .c div{
        /* 设置延迟动画 */
        transition: .5s calc(var(--i) * .1s);
        /* 移动的轨迹 */
        transform: rotateZ(220deg) translate(-200px,400px);
    }
    .a:hover .b{
        transition: 1s .5s;
        left: 370px;
    }
    .a:hover .b span{
        transition: 1s .5s;
        top: 105px;
    }
    .a:hover .b h2{
        transition: 1s .5s;
        opacity: 1;
    }
    .f{
        width: 250px;
        height: 250px;
        position: absolute;
        background-size: 102%;
        margin: 70px;
        opacity: 0;
        transition: .5s;
        background-image: url("../assets/1.png");
    }
    .a:hover .f{
        transition: 1s 1.3s;
        opacity: 1;
    }
</style>
