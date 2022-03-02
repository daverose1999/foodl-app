import http from "./Http-command";

class Recipes {
  getAll(searchQuery) {
    return http.get(`/api/json/v1/1/filter.php?i=${searchQuery}`);
  }
  getItem(itemId) {
    return http.get(`/api/json/v1/1/lookup.php?i=${itemId}`);
  }
}
export default new Recipes();
