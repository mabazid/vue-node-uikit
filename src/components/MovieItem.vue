<template>
  <tr>
    <td>{{ name }}</td>
    <td>
      {{ description }}
    </td>
    <td>
      <div class="uk-child-width-expand" uk-grid>
        <a
          class="uk-width-1-2"
          type="button"
          uk-icon="pencil"
          @click="edit(id)"
        />
        <a
          class="uk-width-1-2"
          type="button"
          uk-icon="trash"
          @click="removeMovie(id)"
        />
      </div>
    </td>
  </tr>
</template>
<script>
import { inject } from 'vue';

export default {
  props: {
    name: String,
    description: String,
    id: String,
    editing: Boolean,
  },
  setup() {
    const removeMovie = inject('removeMovie');
    const edit = inject('edit');
    return { removeMovie, edit };
  },
};
</script>
