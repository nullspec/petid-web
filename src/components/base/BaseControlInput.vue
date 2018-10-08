<template>
  <v-text-field
    :label="label"
    :name="name"
    :required="required"
    :readonly="readonly"
    :type="type"
    v-model="myValue"
    @input="updateValue"
    :color="color"
  />
</template>

<script>
  export default {
    name: 'BaseControlInput',
    props: {
      label: String,
      name: String,
      text: [String, Number],
      readonly: Boolean,
      color: {
        type: String,
        default: 'accent',
      },
      type: {
        type: String,
        default: 'text',
      },
      required: {
        type: Boolean,
        default: false,
      },
    },
    data: () => ({
      myValue: '',
    }),
    watch: {
      text(val) {
        this.myValue = val;
      },
    },
    methods: {
      updateValue(value) {
        this.$emit('input', value);
      },
    },
    created() {
      if (this.text) {
        this.myValue = this.text;
      }
    },
  };
</script>