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
  mounted() {
    if (this.searchQuery) {
      setTimeout(() => {
        this.setLoadingState(false);
      }, 6000);
    }
  },

  watch: {
    searchQuery() {
      this.retrieveRecipes();
    },
  },
  methods: {
    setLoadingState(value) {
      this.loading = value;
    },

    retrieveRecipes() {
      if (this.searchQuery) {
        Recipes.getAll(this.searchQuery)
          .then((response) => {
            // console.log(response.data);
            // console.log(this.searchQuery);
            this.recipes = response.data.meals;
            // console.log(response.data);
            // console.log(this.recipes);
          })
          .catch((e) => {
            console.log(e);
          });
      } else {
        return this.recipes;
      }
    },
  },

  created() {
    this.retrieveRecipes();
    // Recipes.getAll('beef').then(res => {
    //   console.log(res)
    // })
  },
};
