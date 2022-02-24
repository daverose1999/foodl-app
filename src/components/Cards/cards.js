// @ is an alias to /src
import Recipes from "../../api/Recipes";

export default {
  name: "Cards",
  props: {
    searchQuery: String,
  },
  data() {
    return {
      recipes: [],
    };
  },
  // computed: {
  //   resultQuery() {
  //     if (this.searchQuery) {
  //       return this.recipes.meals.filter((item) => {
  //         return this.searchQuery
  //           .toLowerCase()
  //           .split(" ")
  //           .every((v) =>
  //           item.strMeal.toLowerCase().includes(v)
  //           );
  //       })
  //     }
  //     else {
  //       return this.recipes.meals;
  //     }
  //   }
  // },
  watch: {
    searchQuery() {
      this.retrieveRecipes()
    }
  },
  methods: {
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
