<template>
  <section>
    <article class="blank-page" v-if="!searchQuery">
      <figure class="round-figure">
        <img
          src="../../assets/media_result_20220224_7f175682-0143-4a1a-bb6d-811a0f0b1478.png"
        />
      </figure>
      <p class="heading">At your service!</p>
      <p class="sub-text">
        Recipes to all your favorite foods at your fingertips, literally
      </p>
    </article>
    <article class="blank-page" v-else-if="!loading && !recipes">
      <figure class="round-figure">
        <img style="transform: scaleX(-1)" src="../../assets/food1.png" />
      </figure>
      <p class="heading">Oops!</p>
      <p class="sub-text">No data found</p>
    </article>

    <section class="cards" v-else-if="recipes">
      <article
        v-on:click="openCard(`${item.idMeal}`)"
        class="card"
        v-for="item in recipes"
        :key="item.Id"
      >
        <figure class="image">
          <img :src="item.strMealThumb" />
        </figure>
        <header>
          <p>{{ item.strMeal }}</p>
        </header>
      </article>
    </section>

    <article class="skeleton" v-show="loading" v-else>
      <skeleton-loader :loading="loading"></skeleton-loader>
      <skeleton-loader :loading="loading"></skeleton-loader>
      <skeleton-loader :loading="loading"></skeleton-loader>
      <skeleton-loader :loading="loading"></skeleton-loader>
    </article>
  </section>
</template>

<script>
import cards from "./cards";

export default cards;
</script>

<style lang="scss" src="./cards.scss"></style>
