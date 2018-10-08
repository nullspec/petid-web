<template>
  <v-combobox
    v-model="input"
    :items="available"
    :item-value="itemValue"
    :item-text="itemText"
    :label="label"
    :disabled="disabled"
    chips
    multiple
    @input="myInput"
  >
    <template slot="selection" slot-scope="data">
      <v-chip
        :close="!disabled"
        @input="remove(data.item)"
      >
        <strong>{{ data.item.code }}</strong>
      </v-chip>
    </template>
  </v-combobox>
</template>

<script>
export default {
  name: 'BaseSelectChip',
  props: {
    value: Array,
    label: String,
    available: Array,
    disabled: Boolean,
    itemText: {
      type: String,
      required: true,
    },
    itemValue: {
      type: String,
      required: true,
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
  methods: {
    myInput(items) {
      this.input = [...this.items];
      this.$emit('input', items);
    },
    remove(item) {
      const newItems = this.input.slice();
      newItems.splice(this.input.indexOf(item), 1);
      this.$emit('input', newItems);
    },
  },
};
</script>
