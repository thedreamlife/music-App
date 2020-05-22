<template>
  <div>
       <swiper :options="swiperOption" class="swiper" >
            <swiper-slide v-for="(item,i) in swiperList" :key="i">
                <a :href="item.url">
                    <img :src="item.img"  @load="imgload">
                </a>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
     </swiper>
     
  </div>
</template>

<script>
import 'swiper/css/swiper.css'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
export default {
      props: {
            swiperList:{
                type:Array,
                default(){
                    return []
                }
            }
        },
    data () {
        return {
            swiperOption: {
             pagination: {
                el: '.swiper-pagination'
             },
             loop:true,
             autoplay:true
            }
        }
    },
    components: {
        Swiper,
        SwiperSlide
  },
  methods: {
      imgload(){
          this.$emit('imageload')
      }
      
  }

}

</script>
<style scoped>
.swiper img{
    width: 100%;
}

</style>