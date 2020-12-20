<template>
  <div>
    <div class="border rounded-lg overflow-hidden">
      <div class="text-xl font-light capitalize text-center" :class="{ 'text-white': color != 'yellow' }" :style="bgColor">
        {{ name }}
      </div>
      <div class=" bg-gray-200">
        <img class="image-container" :src="imageUrl" :alt="name">
      </div>
      <div class="mt-2 mb-2">
        <div class="text-center font-medium">Types</div>
        <hr>
        <div v-for="type in types" :key="type.type.name" class="mx-8">
          &#8226; {{ type.type.name }}
        </div>
      </div>
      <div class="mt-2 mb-2">
        <div class="text-center font-medium">Abilities</div>
        <hr>
        <div v-for="ability in abilities" :key="ability.ability.name" class="mx-8">
          &#8226; {{ ability.ability.name }}
        </div>
      </div>
      <div class="mt-2 mb-2">
        <div class="text-center font-medium">Weight</div>
        <hr>
        <div class="mx-8">
          {{ weight }}&nbsp;kg
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    types: Array,
    name: String,
    id: Number,
    weight: Number,
    imageUrl: String,
    color: String,
    abilities: Array,
  },
  computed: {
    bgColor: function() {
      return {backgroundColor: this.color};
    }
  },
  
}
</script>
<style scoped>
.image-container {
    margin: auto;
    width: 50%;
    height: 200px;
    padding: 10px;
}
hr {
  display: block;
  margin-top: 0.2em;
  margin-bottom: 0.5em;
  margin-left: 2em;
  margin-right: 2em;
  border-width: 1px;
}
</style>