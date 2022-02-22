import http from "./Http-command";  
class Recipes {  
     
    getAll() {  
        return http.get("/api/json/v1/1/filter.php?i=chicken_breast");  
      }  
        
}  
export default new Recipes();  