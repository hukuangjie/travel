<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1907/40/401b7b735008f7f4a3.img.jpg_600x330_d1fcb59f.jpg" alt="">
            <div class="banner-info">
                <div class="banner-title">西溪国家湿地公园·周家村(AAAAA景区)</div>
                <div class="banner-number">
                    <span class="iconfont banner-icon">&#xe692;</span>
                    11
                </div>
            </div>
        </div>
        <common-gallary :imgs="imgs" v-show="showGallary" @close="handleGallaryClose"></common-gallary>
    </div>
</template>

<script>
import CommonGallary from '@/common/gallary/Gallary'
export default {
    name: 'DetailBanner',
    data () {
        return {
            showGallary:false,
            imgs:['http://img1.qunarzz.com/sight/p0/1907/40/401b7b735008f7f4a3.img.jpg_r_800x800_e01bd6ac.jpg',
                'http://img1.qunarzz.com/sight/p0/1907/aa/aa4500ed427eee05a3.img.jpg_r_800x800_262436e7.jpg']
        }
    },
    methods: {
        handleBannerClick () {
            this.showGallary = true
        },
        handleGallaryClose () {
            this.showGallary = false
        }
    },
    components: {
        CommonGallary
    }
}
</script>

<style lang="stylus" scoped>
    .banner
        position relative
        overflow hidden
        height 0
        padding-bottom: 55%
        .banner-img
            width 100%
        .banner-info
            display flex
            position absolute
            left 0
            right 0
            bottom 0
            line-height .6rem
            color #fff
            background-image linear-gradient(to bottom, rgba(0,0,0,0),rgba(0,0,0,.8))
            .banner-title
                flex 1
                font-size .32rem
                padding 0 .2rem
            .banner-number
                height .32rem
                padding  0 .4rem
                margin-top .14rem
                line-height .32rem
                border-radius .2rem
                background rgba(0,0,0,.8)
                font-size .24rem
                .banner-icon
                    font-size .24rem
</style>
