<template>
  <v-text-field
    :label="label"
    :name="name"
    :required="required"
    :readonly="readonly"
    :type="type"
    v-model="input"
    :color="color"
  />
</template>

<script>
export default {
  name: 'BaseControlInput',
  props: {
    label: String,
    name: String,
    value: [String, Number],
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
  computed: {
    input: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
      },
    },
  },
  // data: () => ({
  //   myValue: '',
  // }),
  // methods: {
  //   updateValue(value) {
  //     this.$emit('input', value);
  //   },
  // },
  // created() {
  //   if (this.text) {
  //     this.myValue = this.text;
  //   }
  // },
};
</script>
