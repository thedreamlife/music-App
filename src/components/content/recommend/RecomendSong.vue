<template>
  <div class="recommend-song">
           <div v-for="(item,i) in recommendSong" :key="i" class="songlist">
               <div class="image"><img :src='item.img' alt=""></div>
                <div class="title">{{item.title}}</div>
            </div>
 
  </div>
</template>

<script>
export default {
    props:{
        recommendSong:{
            type:Array,
            default(){
                return []
            }
        }
    }
}

</script>
<style scoped lang="less">
    .recommend-song{
        display: flex;
        flex-direction: column;
        
        .songlist{
            display: flex;
            margin-bottom: 10px;
            margin-left: 10px;
            .image{
               box-sizing: border-box;
                flex:1;
                padding-right: 10px;

            img{
                
              width: 60px;
                height: 60px;
               
            }
            }
            .title{
                flex:5;
                color:#fff;
                display: flex;
               
                align-items: center;
            }

        }
    }
</style>