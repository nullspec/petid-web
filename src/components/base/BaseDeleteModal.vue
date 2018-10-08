<template>
  <div>
    <BaseConfirmModal
      :open="open"
      :title="title"
      :text="textBody"
      :confirmText="confirmText"
      :declineText="declineText"
      @clicked="clicked"
    />
  </div>
</template>

<script>
export default {
  name: 'BaseDeleteModal',
  props: {
    open: {
      type: Boolean,
      default: false,
    },
    componentName: {
      type: String,
      default: '',
    },
  },
  data: () => ({
    title: 'Delete Confirmation',
    text: 'Are you sure you want to delete this',
    confirmText: 'Yes',
    declineText: 'Cancel',
  }),
  computed: {
    textBody() {
      return this.text
        .concat(' ')
        .concat(this.componentName)
        .concat('?');
    },
  },
  methods: {
    clicked(accepted) {
      this.$emit('deleteModalConfirm', accepted);
    },
  },
  components: {
    BaseConfirmModal: () => import('@/components/base/BaseConfirmModal'),
  },
};
</script>