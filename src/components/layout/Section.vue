<template>
  <v-container
    fluid
    class="petid-section"
  >
    <v-layout>
      <v-flex>
        <v-card>
          <v-container>
            <slot name="contents" />
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Section',
};
</script>