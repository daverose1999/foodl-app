<template>
  <section class="search-component">
    <section class="section-1">
      <header>
        <h1>What ingredients do you have?</h1>
      </header>
      <form class="input-box">
        <input
          type="search"
          class="input-field"
          placeholder="Search main ingredient..."
          v-model="searchQuery"
          autofocus
        />
        <i class="fa fa-search"></i>
      </form>
    </section>
    <section class="section-2">
      <Cards :searchQuery="searchQuery" />
    </section>
  </section>
</template>
<script>
import search from "./search";

export default search;
</script>

<style lang="scss" src="./search.scss" scoped></style>
