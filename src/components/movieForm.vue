<template>
  <form @submit="submitForm">
    <fieldset class="uk-fieldset">
      <legend class="uk-legend">{{ title }}</legend>

      <div class="uk-margin">
        <input
          class="uk-input"
          type="text"
          placeholder="Search Movie"
          v-model="nameInput"
          @keydown.enter.prevent="afterKeyStroke"
        />
      </div>
      <div class="uk-inline">
        <div uk-dropdown="duration: 500; pos: bottom-justify; mode: click;">
          <ul class="uk-nav uk-list-divider uk-dropdown-nav">
            <li key="empty" v-if="results.movies.length === 0" uk-spinner />
            <li v-else v-for="movie in results.movies" :key="movie.title">
              <div class="uk-grid-small" uk-grid>
                <div class="uk-width-auto">
                  <img height="100" width="50" :src="movie.Poster" />
                </div>
                <div class="uk-width-expand">
                  <h3 class="uk-card-title uk-margin-remove-bottom">
                    {{ movie.Title }}
                  </h3>
                  <p class="uk-text-meta">
                    <time datetime="2016-04-01T19:00">{{ movie.Year }}</time>
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="uk-margin">
        <textarea
          :value="description"
          class="uk-textarea"
          rows="5"
          placeholder="Movie Description"
          ref="descriptionInput"
        ></textarea>
      </div>

      <div class="uk-margin">
        <label class="uk-form-label" for="rating"
          >Rating: <strong>{{ localRating }}</strong></label
        >
        <input
          class="uk-range"
          type="range"
          min="0"
          max="10"
          step="0.1"
          id="rating"
          name="rating"
          v-model="localRating"
        />
      </div>
    </fieldset>
    <button class="uk-button uk-button-secondary">
      {{ buttonText }}
    </button>
  </form>
</template>
<script>
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { addMovie } from '../helpers/backend.helper';
import { getMoviesSuggestions } from '../helpers/backend.helper';

export default {
  props: {
    name: String,
    title: String,
    description: String,
    rating: Number,
    buttonText: String,
  },
  setup(props) {
    const router = useRouter();
    const nameInput = ref(null);
    const results = reactive({
      movies: [],
    });
    const descriptionInput = ref(null);
    const localRating = ref(props.rating ? props.rating : 5);

    const submitForm = async (event) => {
      event.preventDefault();
      const movie = {
        name: nameInput.value,
        description: descriptionInput.value.value,
        rating: localRating.value,
        imdbRating: 8.7,
      };

      await addMovie(movie);
      router.replace('/');
    };

    const afterKeyStroke = async () => {
      const res = await getMoviesSuggestions(nameInput.value);
      results.movies = res.Search;
    };

    return {
      submitForm,
      afterKeyStroke,
      nameInput,
      descriptionInput,
      localRating,
      results,
    };
  },
};
</script>
