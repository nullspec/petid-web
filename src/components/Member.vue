<template>
  <div class="petid-workspace">
    <TheToolbar />

    <v-content>
      <v-container fluid full-height class="workspace">
        <v-slide-y-transition mode="out-in">
          <v-layout column>
            <router-view name="workspace" />
          </v-layout>
        </v-slide-y-transition>
      </v-container>
    </v-content>

    <Footer />

    <BaseConfirmModal
      :open="open"
      :title="timeoutModal.title"
      :text="timeoutModal.text"
      :confirmText="timeoutModal.confirmText"
      @clicked="modalClick"
    />

  </div>
</template>

<style>
  .component-buttons {
    float: right;
    padding-bottom: 20px;
  }
  .workspace {
    padding-top: 0;
  }
</style>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  data: () => ({
    name: 'Member',
    open: false,
    timeoutModal: {
      title: 'Session Timeout',
      text: 'Your session is about to timeout due to inactivity',
      confirmText: 'OK',
    },
  }),
  components: {
    Footer: () => import('@/components/Footer'),
    ToolBar: () => import('@/components/ToolBar'),
    BaseConfirmModal: () => import('@/components/base/BaseConfirmModal'),
  },
  computed: {
    ...mapGetters('timeout', [
      'getAuthTimeoutWarning',
    ]),
    ...mapGetters('authentication', [
      'isAuthenticated',
    ]),
  },
  watch: {
    getAuthTimeoutWarning(warning) {
      if (warning) {
        this.open = true;
      }
    },
    isAuthenticated(hasAuth) {
      if (!hasAuth) {
        this.$router.push({ name: 'Login' });
      }
    },
  },
  methods: {
    ...mapActions('app', [
      'fetchUserDetails',
    ]),
    ...mapActions('timeout', [
      'startLogoutTimer',
    ]),
    modalClick(val) {
      this.open = false;
      if (!this.isAuthenticated) {
        this.$router.push({ name: 'Login' });
      }
      if (val) {
        this.startLogoutTimer();
      }
    },
  },
  async mounted() {
    /* Get roles / tenants */
    await this.fetchUserDetails();
    this.startLogoutTimer();
  },
};
</script>
