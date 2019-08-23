<template>
    <ul class="list">
        <li 
            class="item"
            v-for="item of letters"
            :key="item"
            :ref="item"
            @touchstart="handleTouchStart"
            @touchmove="handleTouchMove"
            @touchend="handleTouchEnd"
            @click="handleLetterClick"
            >
        {{item}}
        </li>
    </ul>
</template>

<script>
import { clearTimeout, setTimeout } from 'timers';
export default {
    name:'CityAlphabet',
    props: {
        cities: {}
    },
    computed: {
        letters () {
            const letters = []
            for (let i in this.cities) {
                letters.push(i)
            }
            return letters
        }
    },
    data () {
        return {
            // 触摸的状态
            touchStatus: false,
            startY: 0,
            // 函数节流
            timer : null
        }
    },
    updated () {
        this.startY = this.$refs['A'][0].offsetTop
    },
    methods: {
        handleLetterClick (e) {
            // 向父组件传值（传点击的字母）
            this.$emit('change',e.target.innerText);
        },
        // 兄弟组件的通信 ，触摸滑动索引栏，列表跟着滚动
        handleTouchStart () {
            this.touchStatus = true
        },
        handleTouchMove (e) {
            if (this.touchStatus) {
                if (this.timer) {
                    clearTimeout(this.timer)
                }
                // 16mm 的延迟，优化性能，减少函数触发。
                this.timer = setTimeout(() => {
                    const touchY = e.touches[0].clientY - 79
                    const index =Math.floor((touchY - this.startY) / 20)
                    if (index >= 0 && index < this.letters.length) {
                        this.$emit('change',this.letters[index])
                    }
                }, 16)
            }
        },
        handleTouchEnd () {
            this.touchStatus = false
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl';
.list
    display flex
    flex-direction column
    justify-content center
    position absolute
    top 1.58rem
    right 0
    bottom 0
    width .4rem
    .item
        line-height .4rem
        text-align center
        color $bgColor
</style>


