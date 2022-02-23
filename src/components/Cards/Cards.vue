<template>
    <section class="cards">
     <article class="card" v-for="item in recipes.meals" :key="item.Id">
          <figure class="image"><img :src="item.strMealThumb" /></figure>
          <p>{{item.strMeal }}</p>  
     </article>
    </section>
</template>

<script>
import cards from "./cards";

export default cards;
</script>


<style lang="scss" src="./cards.scss"></style>
