<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="items"
      :search="search"
      :key="tableKey"
      disable-initial-sort
    >
    <template slot="items" slot-scope="props">
      <tr @click="clicked(props.item)">
        <td v-for="header in headers" :key="header.value">
          <BaseTableColumn
            :item="props.item"
            :index="header.value"
          />
        </td>
      </tr>
    </template>
  </v-data-table>
  </div>
</template>

<script>
export default {
  name: 'BaseTable',
  props: {
    headers: Array,
    items: Array,
    search: String,
    tableKey: String,
  },
  components: {
    BaseTableColumn: () => import('@/components/base/BaseTableColumn'),
  },
  methods: {
    clicked(row) {
      window.scrollTo(0, 0);
      this.$emit('rowClick', row);
    },
  },
};
</script>