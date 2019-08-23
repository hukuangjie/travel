<template>
    <div>
        <router-link
            tag="div" to="/"
            class="header-abs"
            v-show="showAbs"
        >
            <div class="iconfont header-abs-back">&#xe624;</div>
        </router-link>
        <div
            class="header-fixed"
            v-show="!showAbs"
            :style="opactiyStyle"
        >
            <router-link to="/">
                <span class="iconfont header-fixed-back">&#xe624;</span>
            </router-link>
           景点详情
       </div>
    </div>
</template>

<script>
export default {
    name: 'DetailHeader',
    data () {
        return {
            showAbs: true,
            opactiyStyle: {
                opactiy: 0
            }
        }
    },
    methods: {
        handleScroll () {
            const top = document.documentElement.scrollTop
            if (top > 60) {
                let opactiy = top / 140
                opactiy = opactiy > 1 ? 1 : opactiy
                this.opactiyStyle = { opactiy }
                this.showAbs = false
            } else {
                this.showAbs = true
            }
        }
    },
    activated () {
        window.addEventListener('scroll',this.handleScroll)
    },
    // 全局解绑
    deactivated () {
        window.removeEventListener('scroll',this.handleScroll)
    }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl';
    .header-abs
        position absolute
        left .2rem
        top .2rem
        width .8rem
        height .8rem
        line-height .8rem
        border-radius .4rem
        text-align center
        background rgba(0,0,0,.8)
        .header-abs-back
            color #fff
            font-size .4rem
    .header-fixed
        position fixed
        top 0
        left 0
        right 0
        height $headerHeight
        line-height $headerHeight
        text-align center
        color #fff
        background $bgColor
        font-size .32rem
        .header-fixed-back
            position absolute
            width .64rem
            top 0
            left 0
            text-align center
            font-size .4rem
            color #fff
</style>
