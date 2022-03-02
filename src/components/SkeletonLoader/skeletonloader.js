export default {
  name: "SkeletonLoader",
  props: {
    loading: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  data() {
    return {};
  },

  // register the method setLoadingState(), this will simulate our call to the server,
  // this is where you are going to load data within your component,
  // use the loading as a prop and then pass it from the parent
  // which is where you are going to load the data.
};
