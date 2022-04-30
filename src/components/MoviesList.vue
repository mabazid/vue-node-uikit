<template>
  <movie-item />
</template>
<script>
import MovieItem from './MovieItem.vue';

export default {
  name: 'HelloWorld',
  components: {
    MovieItem,
  },
  props: {
    msg: String,
    status: String,
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less"></style>
