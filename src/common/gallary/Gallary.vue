<template>
    <div class="container" @click="handleGallaryClick">
        <div class="wrapper">
            <swiper :options="swiperOptions">
                <swiper-slide
                    v-for="(item,index) in imgs"
                    :key="index">
                    <img
                        class="gallary-img"
                        :src="item"
                    />
                </swiper-slide>
                <!-- 插槽 -->
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CommonGallary',
    props: {
        imgs: {
            type: Array,
            default () {
                return []
            }
        }
    },
    methods: {
        handleGallaryClick() {
            this.$emit('close')
        }
    },
    data () {
        return {
            swiperOptions: {
                pagination: '.swiper-pagination',
                paginationType: 'fraction',
                // 点击自己或者父组件的时候dom发生变化时，该轮播图也刷新一次
                observeParents: true,
                observer: true
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
.container >>> .swiper-container
    overflow inherit
.container
    display flex
    flex-direction column
    justify-content center
    z-index 99
    position fixed
    left 0
    right 0
    top 0
    bottom 0
    background #000
    .wrapper
        height 0
        width 100%
        padding-bottom 100%
        .gallary-img
            width 100%
        .swiper-pagination
            color #fff
            bottom -1rem
</style>


