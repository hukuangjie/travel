<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont back-icon">&#xe624;</span>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{this.doubleCity}}
        <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: "HomeHeader",
  computed: {
    ...mapState(['city']),
    ...mapGetters(['doubleCity'])
  },
};
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl';

.header {
  display: flex;
  height: $headerHeight
  background: $bgColor;
  color: #fff;
  align-items: center;

  .header-left {
    width: 0.64rem;
    float: left;

    .back-icon {
      font-size: 0.4rem;
      padding-left: 0.2rem;
    }
  }

  .header-input {
    flex: 1;
    height: 0.64rem;
    line-height: 0.64rem;
    margin-left: 0.2rem;
    padding-left: 0.2rem;
    background: #fff;
    border-radius: 0.1rem;
    color: #CCC;
  }

  .header-right {
    min-width: 1.04rem;
    padding: 0 .1rem
    float: right;
    text-align: center;
    color: #fff;

    .arrow-icon {
      margin-left: -0.04rem;
      font-size: 0.24rem;
    }
  }
}
</style>