<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card dark color="primary">
          <v-card-text class="px-0">12</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs6 v-for="i in 2" :key="i">
        <v-card dark color="secondary">
          <v-card-text class="px-0">6</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs4 v-for="i in 3" :key="i">
        <v-card dark color="primary">
          <v-card-text class="px-0">4</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs3 v-for="i in 4" :key="i">
        <v-card dark color="secondary">
          <v-card-text class="px-0">3</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs2 v-for="i in 6" :key="i">
        <v-card dark color="primary">
          <v-card-text class="px-0">2</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs1 v-for="i in 12" :key="i">
        <v-card dark color="secondary">
          <v-card-text class="px-0">1</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<!-- <template>
  <v-container grid-list-xl>
    <v-layout v-bind="binding">
      <v-flex>
        <v-card dark color="primary">
          <h3>Sign In</h3>
        </v-card>
      </v-flex>
      <v-flex>
        <v-card dark color="secondary">
          <form>
            <v-layout column>
              <v-flex>
                <v-text-field
                  name="email"
                  label="Email"
                  id="email"
                  type="email"
                  required></v-text-field>
              </v-flex>
              <v-flex>
                <v-text-field
                  name="password"
                  label="Password"
                  id="password"
                  type="password"
                  required></v-text-field>
              </v-flex>
              <v-flex class="text-xs-center" mt-5>
                <v-btn primary type="submit">Sign In</v-btn>
              </v-flex>
            </v-layout>
          </form>
        </v-card>
      </v-flex>
      <v-flex>
        <v-card dark color="accent">
          <v-btn primary type="submit">Sign In</v-btn>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template> -->

<script>
export default {
  name: 'Login',
  data: () => ({
    valid: false,
    email: '',
  }),
};
</script>
