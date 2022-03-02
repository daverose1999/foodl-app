// @ is an alias to /src
import Recipes from "../../api/Recipes";

export default {
  name: "CardItem",

  data() {
    return {
      recipe: [],
      ingredientArr: [],
      measureArr: [],
      instruction: [],
      all: [],
      route: this.$route.params.id,
    };
  },
  computed: {
    // extract ingredients array
    // 1. loop through the properties in the object
    // 2. if key contains 'strIngredient', push the value to ingredients array
    // extract measure array
    // merge ingredients and measure arrays
    filteredList() {
      this.all = this.ingredientArr.map((itm, i) => {
        // console.log(itm, i);
        console.log(this.measureArr[i]);
        return [itm, this.measureArr[i]];
      });
      console.log(this.all);

      return this.all;
    },

    splitedList() {
      if (!this.instruction.includes("\r\n")) {
        console.log(this.instruction);
        this.list = this.instruction;
        // this.list = this.instruction.split(".");
      } else {
        // console.log(this.instruction.split("\r\n"));
        // this.list = this.instruction.split("\r\n");
      }
      return this.list;
    },
  },

  methods: {
    async getItemData() {
      // console.log(this.route);
      await Recipes.getItem(this.route)
        .then((response) => {
          // console.log(response.data.meals[0]);
          this.recipe = response.data.meals;
          // console.log(this.recipe);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    extractIngredients() {
      var objects = Object.entries(this.recipe[0]);
      // console.log(this.recipe);

      for (const innerArr of objects) {
        let [key, value] = innerArr;
        if (typeof value === "string") value = value.trim();
        if (key.includes("strIngredient") && value) {
          // console.log(value);
          this.ingredientArr.push(value);
        } else if (key.includes("strMeasure") && value) {
          // console.log(value);
          this.measureArr.push(value);
        } else if (key.includes("strInstructions") && value) {
          // console.log(value);
          this.instruction.push(value);
        }
      }
    },
  },

  async created() {
    await this.getItemData();
    this.extractIngredients();
  },
};
