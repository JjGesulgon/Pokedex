<template>
  <div class="border rounded-lg py-6 px-8 mb-16">
    <div class="text-3xl font-light">Moves</div>
    <hr>
    <br>
    <div>
      <span v-for="move in moves" :key="move.name"> {{move.move.name}}&#44;</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    moves: Array
  },
}
</script>
