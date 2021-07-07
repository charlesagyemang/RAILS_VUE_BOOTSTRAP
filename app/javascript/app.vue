<template>
  <div id="app">
    <div id="container-fluid">
       <p>{{ message }}</p>
       <user />

       <div class="text-center">
        <b-button variant="primary">
          Notifications <b-badge variant="light">4</b-badge>
        </b-button>
      </div>

    </div>
     
  </div>
</template>

<script>
import user from "./packs/components/user.vue"
export default {
 
  data: function () {
    return {
      message: "Hello Vue!"
    }
  },
   components: {
    user
  },
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
