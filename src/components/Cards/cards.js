// @ is an alias to /src
import Recipes from "../../api/Recipes";
import SkeletonLoader from "../SkeletonLoader/SkeletonLoader.vue";

export default {
  name: "Cards",
  components: { SkeletonLoader },
  props: {
    searchQuery: String,
  },

  data() {
    return {
      recipes: [],
      loading: true,
    };
  },

  mounted() {},

  watch: {
    searchQuery() {
      this.retrieveRecipes();
      // this.loadSkeleton();
    },

    idMeal() {
      this.openCard();
    },
  },
  methods: {
    // loadSkeleton() {},

    setLoadingState(value) {
      this.loading = value;
      console.log(this.loading);
    },

    openCard(value) {
      this.$router.push(`/search/${value}`);
      // console.log(value);
      // Recipes.getItem(value)
      //   .then((response) => {
      //     console.log(value);
      //     console.log(response.data);
      // console.log(this.searchQuery);
      //this.recipes = response.data.meals;
      //console.log(response.data);
      // })
      // .catch((e) => {
      //   console.log(e);
      // });
    },

    retrieveRecipes() {
      if (this.searchQuery) {
        this.setLoadingState(true);
        Recipes.getAll(this.searchQuery)
          .then((response) => {
            this.$router.push(`/search?recipe=${this.searchQuery}`);
            this.recipes = response.data.meals;
          })
          .catch((e) => {
            console.log(e);
          })
          .finally(() => {
            setTimeout(() => {
              this.setLoadingState(false);
            }, 5000);
          });
      } else {
        return this.recipes;
      }
    },
  },

  created() {
    this.retrieveRecipes();
    // this.openCard();
    // this.openCard();
    // Recipes.getItem("53016").then((res) => {
    //   console.log(res);
    // });
  },
};
