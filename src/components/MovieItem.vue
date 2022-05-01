<template>
  <tr>
    <td>{{ name }}</td>
    <td>
      {{ description }}
    </td>
    <td>
      <div class="uk-child-width-expand" uk-grid>
        <a class="uk-width-1-2" type="button" uk-icon="pencil" />
        <a class="uk-width-1-2" type="button" uk-icon="trash" />
      </div>
    </td>
  </tr>
</template>
<script>
export default {
  props: {
    name: String,
    description: String,
  },
  setup() {},
};
</script>
