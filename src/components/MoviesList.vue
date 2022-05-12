<template>
  <table class="uk-table uk-table-middle uk-table-divider uk-table-hover">
    <thead>
      <tr>
        <th class="uk-width-small">Movie</th>
        <th>Description</th>
        <th class="uk-width-small">Rating</th>
        <th class="uk-width-small">Actions</th>
      </tr>
    </thead>
    <tbody>
      <movie-item
        v-for="movie in movies"
        :key="movie._id"
        :id="movie._id"
        :name="movie.name"
        :rating="movie.rating"
        :editing="movie.editing"
        :description="movie.description"
      />
    </tbody>
  </table>
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
