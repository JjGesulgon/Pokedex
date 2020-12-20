<template>
  <div class="grid grid-cols-2 md:grid-cols-3 gap-4 text-center border rounded-lg">
    <div v-for="stat in stats" :key="stat.stat.name" class="mb-4">
      <div class="text-5xl text-gray-700">
        {{ stat.base_stat }}
      </div>
      <div class="capitalize">
        {{ removeDash(stat.stat.name) }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    stats: Array,
  },
  methods:{
    removeDash(str){
      return str = str.replace(/[_-]/g, " "); 
    }
  }
}
</script>