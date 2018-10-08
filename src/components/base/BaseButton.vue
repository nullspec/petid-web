<template>
  <v-btn
    :color="color"
    :disabled="disabled"
    @click.stop="onClick"
    :loading="loading"
  >
    {{ text }}
    <v-icon
      v-if="icon"
      class="bb-icon"
      @click.stop="onClick"
      right
    >
    {{ icon }}
    </v-icon>
  </v-btn>
</template>

<style scoped>
  .bb-icon {
    cursor: pointer;
  }
</style>

<script>
  export default {
    name: 'BaseButton',
    props: {
      color: String,
      disabled: Boolean,
      text: String,
      icon: {
        type: String,
        default: '',
      },
      loading: false,
    },
    methods: {
      onClick() {
        this.$emit('clicked', true);
      },
    },
  };
</script>