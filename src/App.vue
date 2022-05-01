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

import { watch, ref, reactive } from 'vue';

const moviesList = [
  { name: 'Movie1', description: 'this moves is amazing' },
  { name: 'Movie2', description: 'this moves is dogshit' },
  { name: 'Movie3', description: 'What a fantastic movie' },
];

export default {
  name: 'App',
  components: {
    NavBar,
    MainLayout,
  },
  setup() {
    const authenticated = ref(false);
    const status = ref('Login');
    const movies = reactive({ list: moviesList });

    watch(authenticated, () => {
      status.value = authenticated.value ? 'Logout' : 'login';
      console.log(status.value);
    });

    const addMovie = (movie) => {
      movies.list.push(movie);
    };

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
