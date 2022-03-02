<template>
  <main class="home">
    <NavBar />
    <section class="main-frame">
      <article class="part1">
        <p>Find recipes for the ingredients you have on hand</p>
        <router-link to="/search"
          ><button class="button">Search Now</button></router-link
        >
      </article>

      <figure class="part2">
        <img class="rotating-plate" src="../../assets/image 1.svg" />
        <img class="line" src="../../assets/Rectangle 10.svg" />
      </figure>
    </section>
  </main>
</template>

<script>
import home from "./home";

export default home;
</script>

<style lang="scss" src="./home.scss" scoped></style>
