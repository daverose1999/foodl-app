import http from "./Http-command"; 

class Recipes {  
     
    getAll(searchQuery) {  
        return http.get(`/api/json/v1/1/filter.php?i=${searchQuery}`);  
      }  
        
}  
export default new Recipes();  