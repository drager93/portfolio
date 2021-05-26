<template>
  <router-view></router-view>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "@/styles/fonts.scss";
@import "@/styles/interval.scss";
@import "@/styles/variables.scss";
@import "@/styles/module_flex.scss";

div,
footer,
body,
input {
  padding: 0;
  margin: 0;
  word-break: keep-all;
  box-sizing: border-box;
  min-height: 100vh;
}

a {
  text-decoration: none;
  color: inherit;
}
</style>
