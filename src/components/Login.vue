<template>
  <v-form v-model="valid">
    <v-text-field
      label="E-mail"
      v-model="email"
      required
    ></v-text-field>
  </v-form>
</template>

<script>
export default {
  name: 'Login',
  data: () => ({
    valid: false,
    email: '',
  }),
};
</script>
