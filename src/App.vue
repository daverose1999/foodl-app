<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
$fontfamily: IBM Plex Sans;
$background: #ff9f59;
$fontcolor: #000000;
$backgroundimage: url("./assets/noise\ 2.svg");

template {
  height: 100%;
}
#app {
  font-family: $fontfamily;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $fontcolor;
  background: $background;
  background-image: $backgroundimage;
}
* {
  margin: 0;
  box-sizing: border-box;
}
</style>
