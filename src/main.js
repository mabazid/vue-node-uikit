import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import MoviesList from '../src/components/MoviesList';
import AddMovie from '../src/components/AddMovie';
import UiModal from '../src/components/UiModal';
import MovieForm from '../src/components/MovieForm';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: MoviesList },
    { path: '/add-movie', component: AddMovie },
  ],
});

const app = createApp(App);

app.use(router);

app.component('ui-modal', UiModal);
app.component('movie-form', MovieForm);

app.mount('#app');
