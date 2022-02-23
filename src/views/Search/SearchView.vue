<template>
  <main class="search">
    <NavBar/>
    <section class="section-1">
      <header>
        <h1>What ingredients do you have?</h1>
      </header>
       <div class="input-box">
         <input
          class="input-field"
          placeholder="Search your favorite food..."
        />
        <i class="fa fa-search"></i>
        </div>
        <figure> <img src="../../assets/Mask Group.svg"></figure>
    </section>
    <section class="section-2">
      <Cards/>
    </section>
  </main>
</template>

<script>
import search from "./search";

export default search;
</script>


<style lang="scss" src="./search.scss"></style>


