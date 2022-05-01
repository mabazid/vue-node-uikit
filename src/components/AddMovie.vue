<template>
  <form>
    <fieldset class="uk-fieldset">
      <legend class="uk-legend">Add Movie</legend>

      <div class="uk-margin">
        <input
          class="uk-input"
          type="text"
          placeholder="Movie Name"
          ref="nameInput"
        />
      </div>

      <div class="uk-margin">
        <textarea
          class="uk-textarea"
          rows="5"
          placeholder="Movie Description"
          ref="descriptionInput"
        ></textarea>
      </div>

      <div class="uk-margin">
        <label class="uk-form-label" for="rating"
          >Rating: <strong>{{ rating }}</strong></label
        >
        <input
          class="uk-range"
          type="range"
          min="0"
          max="10"
          step="0.1"
          id="rating"
          name="rating"
          v-model="rating"
        />
      </div>
    </fieldset>
    <button class="uk-button uk-button-secondary" @click="submitForm">
      Submit
    </button>
  </form>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
export default {
  emits: ['addMovie'],
  setup(props, context) {
    const router = useRouter();
    const nameInput = ref(null);
    const descriptionInput = ref(null);
    const rating = ref(5);

    const submitForm = (event) => {
      event.preventDefault();
      const movie = {
        name: nameInput.value.value,
        description: descriptionInput.value.value,
        rating: rating.value,
      };

      context.emit('addMovie', movie);
      router.replace('/');
    };

    return { nameInput, descriptionInput, rating, submitForm };
  },
};
</script>
