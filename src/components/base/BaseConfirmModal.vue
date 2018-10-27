<template>
  <v-dialog v-model="isOpen" persistent max-width="300">
    <v-card>
      <v-card-title class="headline">{{ title }}</v-card-title>
      <v-card-text>{{ text }}</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn flat v-if="declineText" @click="clicked(false)">{{ declineText }}</v-btn>
        <v-btn flat @click="clicked(true)">{{ confirmText }}</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'BaseConfirmModal',
  props: {
    open: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
    confirmText: {
      type: String,
      default: 'Continue',
    },
    declineText: {
      type: String,
      default: 'Cancel',
    },
  },
  data: () => ({
    isOpen: false,
  }),
  watch: {
    open(val) {
      this.isOpen = val;
    },
  },
  methods: {
    clicked(accepted) {
      this.isOpen = false;
      this.$emit('clicked', accepted);
    },
  },
  created() {
    if (this.open) {
      this.isOpen = this.open;
    }
  },
};
</script>
