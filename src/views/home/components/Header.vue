<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont back-icon">&#xe624;</span>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市景点/游玩主题
    </div>
    <div class="header-right">
      {{this.city}}
      <span class="iconfont arrow-icon">&#xe64a;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeHeader",
  props: {
    city: String
  }
};
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl';

.header {
  display: flex;
  height: 0.86rem;
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
    width: 1.24rem;
    float: right;
    text-align: center;

    .arrow-icon {
      margin-left: -0.04rem;
      font-size: 0.24rem;
    }
  }
}
</style>