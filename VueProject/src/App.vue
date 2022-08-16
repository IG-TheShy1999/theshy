<template>
  <div>
    <Header></Header>
    <router-view></router-view>

    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
// 引入header
import Header from "./components/Header/Header.vue";
// 引入Footer
import Footer from "./components/Footer/Footer.vue";

export default {
  name: "App",
  components: { Header, Footer },
  mounted() {
    //让vuex发请求，获取数据
    this.$store.dispatch("getCategoryList");
  },
};
</script>
<style>
</style>