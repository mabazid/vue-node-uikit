<template>
  <nav-bar :status="status" />
  <main-layout>
    <router-view :movies="movies.list" @addMovie="addMovie" />
  </main-layout>
</template>

<script>
import MainLayout from './components/MainLayout.vue';
import NavBar from './components/NavBar.vue';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
UIkit.use(Icons);

import { watch, ref, reactive, provide, onBeforeMount } from 'vue';
import { getMovies } from './helpers/backend.helper';

export default {
  name: 'App',
  components: {
    NavBar,
    MainLayout,
  },
  setup() {
    onBeforeMount(async () => {
      const response = await getMovies();
      movies.list = response.data.getMovies;
      return movies.list;
    });

    const authenticated = ref(false);
    const status = ref('Login');
    const movies = reactive({
      list: [],
    });

    watch(authenticated, () => {
      status.value = authenticated.value ? 'Logout' : 'login';
      console.log(status.value);
    });

    const addMovie = (movie) => {
      movies.list.push(movie);
    };

    const removeMovie = (id) => {
      console.log(id);
      movies.list.splice(
        movies.list.findIndex((e) => e._id === id),
        1
      );
    };

    const edit = (id) => {
      movies.list.find((e) => e._id === id).editing = true;
    };

    provide('removeMovie', removeMovie);
    provide('edit', edit);

    return {
      movies,
      authenticated,
      status,
      addMovie,
    };
  },
};
</script>

<style lang="less">
@import '../node_modules/uikit/src/less/uikit.less';
</style>
