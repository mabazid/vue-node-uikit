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

import { watch, ref, reactive, provide } from 'vue';

export default {
  name: 'App',
  components: {
    NavBar,
    MainLayout,
  },
  setup() {
    const authenticated = ref(false);
    const status = ref('Login');
    const movies = reactive({
      list: [
        {
          _id: '1231314',
          editing: false,
          name: 'Movie1',
          description: 'this moves is amazing',
        },
        {
          _id: '122114',
          editing: false,
          name: 'Movie2',
          description: 'this moves is dogshit',
        },
        {
          _id: '988104',
          editing: false,
          name: 'Movie3',
          description: 'What a fantastic movie',
        },
      ],
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
