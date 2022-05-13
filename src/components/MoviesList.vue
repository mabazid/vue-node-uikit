<template>
  <div
    class="uk-child-width-1-4@l uk-child-width-1-2@s"
    uk-grid
    uk-scrollspy="cls: uk-animation-fade; target: .uk-card; delay: 100;"
  >
    <movie-item
      v-for="movie in movies"
      :key="movie._id"
      :id="movie._id"
      :name="movie.name"
      :rating="movie.rating"
      :editing="movie.editing"
      :description="movie.description"
    />
  </div>
</template>
<script>
import MovieItem from './MovieItem.vue';

export default {
  components: {
    MovieItem,
  },
  props: {
    msg: String,
    status: String,
    movies: Array,
  },
  setup() {},
};
</script>
<style scoped lang="less"></style>
