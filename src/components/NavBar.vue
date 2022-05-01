<template>
  <nav class="uk-navbar-container" uk-navbar>
    <div class="uk-navbar-left">
      <ul class="uk-navbar-nav uk-margin-small-left">
        <li class="uk-active">
          <router-link to="/">Movies</router-link>
        </li>
        <li>
          <router-link to="/add-movie">Add Movie</router-link>
        </li>
      </ul>
    </div>
    <div class="uk-navbar-right">
      <ul class="uk-navbar-nav uk-margin-medium-right">
        <li class="uk-active">
          <a href="#">{{ this.status }}</a>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  props: {
    status: String,
  },
  setup() {},
};
</script>
