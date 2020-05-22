<template>
  <div class="scroll-wrapper" ref="wrapper">
          <slot></slot>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
export default {
    props: {
        datalist:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data () {
        return {
            scroll:null
        }
    },
    methods: {
        initScroll(){
            this.scroll = new BScroll(this.$refs.wrapper,{
                probeType:3,
                click:true,
            })
            
        },
        enable(){
                this.scroll &&this.scroll.enable()
            },
        disable(){
            this.scroll &&this.scroll.disable()
        },
        // 刚开始在Mounted初始化还没有包含图片和轮播图的高度 刷新scroll从新计算scroll高度
        refresh(){
            this.scroll &&this.scroll.refresh()
        }
    },
    mounted () {
            this.initScroll() 
    },
    watch:{
        datalist(){
            this.$nextTick(()=>{
                this.refresh()
            })
        }
    }
}
</script>
<style scoped>
.scroll-wrapper{
    position: absolute;
    overflow: hidden;
    left: 0;
    right: 0;
    bottom: 0;
    top: 88px;
}
</style>