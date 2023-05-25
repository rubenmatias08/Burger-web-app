<template>
  <div id="general-container">
  <Banner />
  <div class="main-container">
    <h1>Create your burger:</h1>
    <Burger_form />
  </div>
</div>
</template>

<script>
import Banner from'@/components/banner.vue';
import Burger_form from '../components/Burger_form.vue';

export default{
name: 'Home',

components:{
  Banner,Burger_form,
},

}
</script>
