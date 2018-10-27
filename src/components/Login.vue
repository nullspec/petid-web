<template>
  <Section class="petid-login">
    <v-container text-xs-center slot="contents">
      <v-layout row wrap>
        <v-flex xs12>
          <v-card flat>
            <v-img
              src="/images/Logo.png"
              height="315px"
            >
            </v-img>
          </v-card>
        </v-flex>
        <v-flex xs12 class="title">
          Sign in with your credentials
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

</template>

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
  },
};
</script>
