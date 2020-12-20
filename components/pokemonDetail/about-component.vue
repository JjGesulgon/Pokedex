<template>
  <div class="border rounded-lg py-6 px-8 mb-16">
    <div class="text-3xl font-light">About</div>
    <hr>
    <br>
    <div>
      <span v-for="about in flavorTextEntries" :key="about.flavor_text">{{ about.flavor_text }}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    flavorTextEntries: Array
  },

  watch:{
    flavorTextEntries: function(){
      // get descriptions and remove \f 
      this.flavorTextEntries.forEach(el => {
        for (var i = 0; i < specialChars.length; i++) {
          el.flavor_text = el.flavor_text.replace("\f", " ");
        }
      });
    }
  }
}
</script>
