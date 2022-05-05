<template>
  <div :id="id" uk-modal>
    <div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">
      <button class="uk-modal-close-default" type="button" uk-close></button>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: String,
  },
  setup() {},
};
</script>
