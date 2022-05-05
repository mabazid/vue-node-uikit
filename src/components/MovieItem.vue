<template>
  <tr>
    <td>{{ name }}</td>
    <td>
      {{ description }}
    </td>
    <td>
      {{ rating }}
    </td>
    <td>
      <div class="uk-child-width-expand" uk-grid>
        <a
          class="uk-width-1-2"
          type="button"
          uk-icon="pencil"
          @click="edit(id)"
          :uk-toggle="target"
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
  <ui-modal :editing="editing" :id="id">
    <movie-form
      title="Edit Movie"
      buttonText="Save"
      :name="name"
      :description="description"
      :rating="rating"
    />
  </ui-modal>
</template>
<script>
import { inject, computed } from 'vue';

export default {
  props: {
    name: String,
    description: String,
    id: String,
    editing: Boolean,
    rating: Number,
  },
  setup(props) {
    const removeMovie = inject('removeMovie');
    // const edit = inject('edit');

    const target = computed(() => {
      return `target: #${props.id}`;
    });

    return { removeMovie, target };
  },
};
</script>
