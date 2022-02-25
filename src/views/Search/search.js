// @ is an alias to /src
import NavBar from '../../components/NavBar/NavBar.vue'
import Cards from "../../components/Cards/Cards.vue";
import SkeletonLoader from "../../components/SkeletonLoader/SkeletonLoader.vue";



export default {
  name: 'SearchView',
  components: {
    NavBar,
    Cards,
    SkeletonLoader
},
data()
{
  return{
    searchQuery: '',
  }
}

}