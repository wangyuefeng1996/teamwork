<template>
  <div class="player">
    <div class="top">
      <div class="back">
        <!--返回按钮-->
        <i class="iconfont icon-xiangzuo"></i>
      </div>
      <!--歌名和歌手-->
      <div class="song-info">
        <div class="title"><span>啊刁</span></div>
        <div class="singer"><span>颜susu</span><i class="iconfont icon-xiangyou"></i></div>
      </div>
      <!--分享-->
      <div class="share">
        <i class="iconfont icon-fenxiang-1"></i>
      </div>
    </div>
    <div class="middle">
      
    </div>
    <div class="bottom">

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  mounted() {
    
  },
}
</script>


<style scoped>
.player{
  background-image: linear-gradient(to bottom,#333 0%,#666 100%);
  width:100%;
  height:667px;
}

.top{
  display:flex;
  justify-content:space-around;
  align-items:center;
  width:100%;
  padding:0.5rem 0;
}

.back{
  width:12.5%;
  text-align:center;
}

.song-info{
  display:flex;
  flex-direction:column;
  justify-content:space-around;
  align-items:center;
  width:75%;
}

.title{
  color:white;
  font-size:18px;
}

.singer{
  color:#aaa;
  font-size:14px;
}


.share{
  width:12.5%;
  text-align:center;
}

.icon-xiangzuo:before {
  content: "\e61d";
  color:white;
  font-size:20px;
}

.icon-fenxiang-1:before {
  content: "\e60b";
  color:white;
  font-size:20px;
}

.icon-xiangyou:before {
  content: "\e683";
  font-size:8px;
}

.middle{
  display: flex;
  align-items: center;
  width: 100%;
  white-space: nowrap;
  font-size: 0;
}
</style>