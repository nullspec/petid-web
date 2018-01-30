<template>
  <div class="home">
    <div class="home-view">
      <div class="home-view-inner">
        <h1>Ensure your pet gets<br> home safely.</h1>
        <h3>With our Animal ID Tags, you will.</h3>
        <v-btn @click.stop="login" round color="deep-orange darken-3" dark large>Order Now</v-btn>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .home {
    background: linear-gradient(rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)),
      url(../assets/dogs-cropped.png) no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    width: 100%;
    height: 100%;
  }

  .home-view {
    color: #fff;
    text-shadow: 0 1px 3px rgba(0,0,0,.5);
    float: right;
    padding-top: 15%;
    padding-right: 25%;
  }

  .home-view-inner {
    float: left;
    margin-left: 0px;
  }
</style>
<script>
export default {
  name: 'Home',
  methods: {
    login() {
      this.$router.push({ name: 'Login' });
    },
  },
};
</script>
