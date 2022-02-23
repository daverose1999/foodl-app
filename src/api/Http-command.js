import axios from "axios";  
  
export default axios.create({  
  baseURL: "https://www.themealdb.com/",  
  headers: {  
    "Content-type": "application/json"  
  }  
});  