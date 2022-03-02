<template>
  <section class="card-item">
    <section class="main-frame" v-for="data in recipe" :key="data.id">
      <header class="header">
        <figure class="meal-image">
          <img :src="data.strMealThumb" />
        </figure>
        <span class="container">
          <h1 class="heading">{{ data.strMeal }}</h1>
          <span class="box-container">
            <span class="box">
              <span class="top">
                <figure>
                  <img src="../../assets/categories.svg" />
                </figure>
                <p>Category</p>
              </span>
              <span class="bottom">
                <p>{{ data.strCategory }}</p>
              </span>
            </span>
            <span class="box">
              <span class="top">
                <figure>
                  <img src="../../assets/area.svg" />
                </figure>
                <p>Area</p>
              </span>
              <span class="bottom">
                <p>{{ data.strArea }}</p>
              </span>
            </span>
            <span class="box">
              <span class="top">
                <figure>
                  <img src="../../assets/tags.svg" />
                </figure>
                <p>Tags</p>
              </span>
              <span class="bottom" v-if="!data.strTags">
                <p>No Tag</p>
              </span>
              <span class="bottom" v-else>
                <p>{{ data.strTags }}</p>
              </span>
            </span>
          </span>
        </span>
      </header>
    </section>
    <section class="ingredients-container">
      <h2 class="heading2">Ingredients</h2>
      <div class="ingredients">
        <article v-for="data in filteredList" :key="data.id" class="ingredient">
          {{ data[0] }}
          <p>{{ data[1] }}</p>
        </article>
      </div>
    </section>
    <section class="instructions">
      <h2 class="heading2">Instructions</h2>
      <ol>
        <li v-for="item in splitedList" :key="item.id" class="steps">
          {{ item }}
        </li>
      </ol>
    </section>
  </section>
</template>

<script>
import carditem from "./carditem";

export default carditem;
</script>

<style lang="scss" src="./carditem.scss" scoped></style>
