<template>
  <div class="navbar">
       <router-link tag="div" class="tab-item" to="/recommend" >
         <span class="tab-link">推荐</span>
        </router-link>
        <router-link tag="div" class="tab-item" to="/singer">
            <span class="tab-link">歌手</span>
         </router-link>
        <router-link tag="div" class="tab-item" to="/rank">
            <span class="tab-link">排行
            </span>
        </router-link>
        <router-link tag="div" class="tab-item" to="/search">
            <span class="tab-link">搜索</span>
        </router-link>
  </div>
</template>

<script>
export default {

}

</script>
<style lang="less" scoped>
.navbar{
    display: flex;
     height: 44px;
    line-height: 44px;
    .tab-item{
        flex: 1;
        text-align: center;
        .tab-link{
             color: #dddddd;
             font-size: 1rem;
        }
        &.router-link-active{
            .tab-link{
                color:#AA861B;
                border-bottom: 0.1071rem solid #AA861B;
            }
        }
    }
    
    }



</style>