<template>
  <nav class="uk-navbar-container" uk-navbar>
    <div class="uk-navbar-left">
      <ul class="uk-navbar-nav uk-margin-small-left">
        <li class="uk-active">
          <a href="#">Movies</a>
        </li>
        <li>
          <a href="#">Add Movie</a>
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
