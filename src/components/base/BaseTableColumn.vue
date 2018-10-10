<script>
export default {
  name: 'BaseTableColumn',
  props: {
    item: Object,
    index: String,
  },
  methods: {
    getText() {
      return this.item[this.index];
    },
  },
  render(createElement) {
    return createElement('div', this.getText());
  },
};
</script>