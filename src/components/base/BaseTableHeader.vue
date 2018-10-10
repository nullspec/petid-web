<template>
  <v-container grid-list-lg class="table-header">
    <v-layout row>
      <v-flex xs8>
        <v-spacer></v-spacer>
      </v-flex>
      <v-flex xs4>
        <v-text-field
          class="table-header-item"
          append-icon="search"
          label="Search"
          single-line
          hide-details
          v-model="search"
          @keyup="onChange"
        />
      </v-flex>
      <v-flex xs2 class="text-xs-center">
        <v-icon
          @click="refresh"
          class="refresh"
        >refresh</v-icon>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'BaseTableHeader',
  data: () => ({
    search: '',
  }),
  methods: {
    onChange(event) {
      this.$emit('searchChange', event.currentTarget.value);
    },
    refresh() {
      this.$emit('refresh');
    },
  },
};
</script>
