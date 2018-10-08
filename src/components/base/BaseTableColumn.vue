<script>
export default {
  name: 'BaseTableColumn',
  props: {
    format: Function,
    item: Object,
    index: String,
  },
  methods: {
    getText() {
      return this.item[this.index];
    },
  },
  render(createElement) {
    if (this.$props.format) {
      return this.$props.format(this.item, this.index, createElement);
    }
    return createElement('div', this.getText());
  },
};
</script>