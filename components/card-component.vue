<template>
  <div class="grid grid-cols-2 md:grid-cols-5 gap-4 mt-16">
    <div class="border rounded-lg overflow-hidden zoom" v-for="pokemon in sortedPokeList" :key="pokemon.name" @click.prevent="viewPokemon(pokemon)">
      <div class=" bg-gray-700">
        <img class="poke-container" :src="pokemon.sprites.other.dream_world.front_default" :alt="pokemon.name">
      </div>
      <div class="text-xl font-light capitalize text-center">
        <span> #{{ pokemon.id }}</span> &nbsp;{{ pokemon.name }}
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  props: {
    pokeList: Array,
  },
  data(){
    return {
      pokeListComplete: [],
    }
  },
  watch:{
    pokeList: function(){
      if (this.pokeList.length == 0){
        this.pokeListComplete = []
      }

      this.pokeList.forEach(el => {
        let pokeData = {};
        axios.get(el.url).then((res) => {
            pokeData = res.data
            this.pokeListComplete.push(pokeData)
          })
          .catch((error) => {
            console.log(error)
          });
      });
    }
  },
  computed: {
    sortedPokeList: function() {
      return this.pokeListComplete.sort(function(a, b) { return a.id > b.id ? 1 : -1});
    }
  },
  methods: {
    viewPokemon(pokemon){
      this.$router.push({ path: '/pokemon', query: { pokemon: pokemon.name } });
    }
  },
};
</script>
<style>
.poke-container {
    margin: auto;
    width: 50%;
    height: 200px;
    padding: 10px;
}

.capitalize{
  text-transform: capitalize;
}

.zoom{
  transition: transform .2s;
}

.zoom:hover {
  transform: scale(1.1);
}
</style>