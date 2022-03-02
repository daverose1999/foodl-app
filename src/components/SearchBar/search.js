// @ is an alias to /src
import Cards from "../Cards/Cards.vue";
import SkeletonLoader from "../SkeletonLoader/SkeletonLoader.vue";

export default {
  name: "Search",
  components: {
    Cards,
    SkeletonLoader,
  },
  data() {
    return {
      searchQuery: this.$route.query.recipe,
    };
  },
};
