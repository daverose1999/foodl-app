<template>
  <main class="search">
    <NavBar />
    <section class="section-1">
      <header>
        <h1>What ingredients do you have?</h1>
      </header>
      <form class="input-box">
        <input
          class="input-field"
          placeholder="Search your favorite food..."
          v-model="searchQuery"
        />
        <i class="fa fa-search"></i>
      </form>
    </section>
    <section class="section-2">
      <Cards :searchQuery="searchQuery" />
    </section>
  </main>
</template>

<script>
import search from "./search";

export default search;
</script>

<style lang="scss" src="./search.scss"></style>
