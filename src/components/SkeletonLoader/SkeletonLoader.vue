<template>
  <section class="container" v-show="loading">
    <!--  -->
    <article class="card">
      <figure>
        <p></p>
      </figure>
      <header>
        <p></p>
      </header>
    </article>
  </section>
</template>

<script>
import skeletonloader from "./skeletonloader";

export default skeletonloader;
</script>

<style lang="scss" src="./skeletonloader.scss" scoped></style>
