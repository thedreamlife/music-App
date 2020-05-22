<template>
  <div class="recommend">
      <scroll :datalist="songList" ref="scroll">
          <div class="content">
               <swiper :swiper-list="bannerList" @imageload="scrollRefresh"></swiper>
               <div class="recommend-list"><h3>热门歌单推荐</h3></div>
               <recommend-song :recommend-song="songList"></recommend-song>
          </div>
      </scroll>
  </div>
</template>
<script>
import Swiper from '@/components/swiper/Swiper'
import RecommendSong from '@/components/content/recommend/RecomendSong'
import Scroll from '@/components/common/Scroll'
export default {
     data () {
    return {
     bannerList:[],
     songList:[]
    }
  },
    components: {
        Swiper,
        RecommendSong,
        Scroll
    },
    created () {
        this.getslider()
        this.getSongList()
    },
    methods: {
         async getslider(){
            const res = await this.$http.get('/banner')
            this.bannerList=res.data.banners.map(item=>({img:item.imageUrl,url:item.url}) )
        },
        async getSongList(){
            const res = await this.$http.get('/personalized')
            console.log(res);
            this.songList=res.data.result.map(item=>({img:item.picUrl,title:item.name,count:item.playCount,id:item.id,}))
            console.log(this.songList);
            
        },
        scrollRefresh(){
            this.$refs.scroll.refresh()
        }
    }

}

</script>
<style scoped lang="less">
.recommend-list{
    display: flex;
    align-items: center;
    justify-content: center;
        h3{
        color:#AA861B;
        font-size:1rem
        }
}

</style>
