<template>
  <div class="login">
    <Toolbar />
    <Section class="login-box">
      <v-container text-xs-center slot="contents">
        <v-layout row wrap>
          <v-flex xs12>
            <v-card flat>
              <img src="/images/paw-trans.png">
            </v-card>
          </v-flex>
          <v-flex xs12 class="title">
            Sign in
          </v-flex>
          <v-flex xs12>
            <form @submit.prevent="checkCreds">
              <v-layout column>
                <v-flex>
                  <BaseControlInput
                    label="Email"
                    name="email"
                    type="email"
                    v-model="username"
                    required
                  />
                </v-flex>
                <v-flex>
                  <BaseControlInput
                    label="Password"
                    name="password"
                    type="password"
                    v-model="password"
                    required
                  />
                </v-flex>
                <v-flex class="text-xs-center" mt-5>
                  <v-btn type="submit">Sign In</v-btn>
                </v-flex>
              </v-layout>
            </form>
          </v-flex>
        </v-layout>

      </v-container>
    </Section>
  </div>
</template>

<style scoped>
  .login {
    background: linear-gradient(rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)),
      url(/images/dogs-cropped.png) no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    width: 100%;
    height: 100%;
  }

  .login-box {
    max-width: 400px !important;
    margin-top: 15px;
  }

</style>

<script>
export default {
  name: 'Login',
  data: () => ({
    username: '',
    password: '',
  }),
  components: {
    Section: () => import('@/components/layout/Section'),
    BaseControlInput: () => import('@/components/base/BaseControlInput'),
    Toolbar: () => import('@/components/Toolbar'),
  },
};
</script>
