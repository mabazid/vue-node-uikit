<template>
  <div>
    <div class="uk-card uk-card-default">
      <div class="uk-card-header">
        <div class="uk-grid-small uk-flex-middle" uk-grid>
          <div class="uk-width-auto">
            <img
              class="uk-border-circle"
              width="40"
              height="40"
              src="https://getuikit.com/docs/images/avatar.jpg"
            />
          </div>
          <div class="uk-width-expand">
            <h3 class="uk-card-title uk-margin-remove-bottom">{{ name }}</h3>
            <p class="uk-text-meta uk-margin-remove-top">
              <time datetime="2016-04-01T19:00">April 01, 2016</time>
            </p>
          </div>
        </div>
      </div>
      <div class="uk-card-body">
        <p>{{ description }}</p>
      </div>
      <div class="uk-card-footer uk-text-center">
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
    </div>
  </div>

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
