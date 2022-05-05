<template>
  <form>
    <fieldset class="uk-fieldset">
      <legend class="uk-legend">{{ title }}</legend>

      <div class="uk-margin">
        <input
          :value="name"
          class="uk-input"
          type="text"
          placeholder="Movie Name"
          ref="nameInput"
        />
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
    <button class="uk-button uk-button-secondary" @click="submitForm">
      {{ buttonText }}
    </button>
  </form>
</template>
<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { addMovie } from '../helpers/backend.helper';

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
    const descriptionInput = ref(null);
    const localRating = ref(props.rating ? props.rating : 5);

    const submitForm = async (event) => {
      event.preventDefault();
      const movie = {
        name: nameInput.value.value,
        description: descriptionInput.value.value,
        rating: localRating.value,
        imdbRating: 8.7,
      };

      await addMovie(movie);
      router.replace('/');
    };

    return { nameInput, descriptionInput, localRating, submitForm };
  },
};
</script>
