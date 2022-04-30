<template>
  <nav-bar :status="status" />
  <main-layout>
    <MoviesList />
  </main-layout>
</template>

<script>
import MoviesList from './components/MoviesList.vue';
import MainLayout from './components/MainLayout.vue';
import NavBar from './components/NavBar.vue';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
UIkit.use(Icons);

import { watch, ref } from 'vue';

export default {
  name: 'App',
  components: {
    MoviesList,
    NavBar,
    MainLayout,
  },
  setup() {
    const authenticated = ref(false);
    const status = ref('Login');

    watch(authenticated, () => {
      status.value = authenticated.value ? 'Logout' : 'login';
      console.log(status.value);
    });

    return {
      authenticated,
      status,
    };
  },
};
</script>

<style lang="less">
@import '../node_modules/uikit/src/less/uikit.less';
</style>
