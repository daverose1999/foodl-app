// @ is an alias to /src
import Recipes from "../../api/Recipes";  

export default {
  name: "Cards",
  data() {  
    return {  
      recipes: [],  
    }
  },
  created()  
    {  
      this.retrieverecipes();  
    },  
  methods: {  
    retrieverecipes() {  
    Recipes.getAll().then(response => {  
      this.recipes = response.data;  
          console.log(response.data);  
        })  
        .catch(e => {  
          console.log(e);  
        });  
    },  
  }  
};
      
     