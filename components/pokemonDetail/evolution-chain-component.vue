<template>
  <div class="border rounded-lg py-6 px-8 mb-16">
    <div class="text-3xl font-light">Evolution Chain</div>
    <hr>
    <br>
    <div class="grid grid-cols-3 gap-4">
      <div v-for="pokemon in pokemonEvoChain" :key="pokemon.species_name" class="text-center capitalize">
        <n-link :to="{ path: '/pokemon', query: { pokemon: pokemon.species_name }}"  class="block mt-4 lg:inline-block lg:mt-0 hover:underline mr-4 focus:outline-none">
          {{ pokemon.species_name }}
        </n-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    evolutionChain: Object,
  },

  data(){
    return{
      pokemonEvoChain: [],
    }
  },

  watch:{
    evolutionChain: function(){
      var chain = []
      var chainData = this.evolutionChain.chain

      if (this.evolutionChain.chain.species.name == 'eevee'){
        for(var i = 0; i <= this.evolutionChain.chain.evolves_to.length-1; i++){
          chain.push({
            "species_name": this.evolutionChain.chain.evolves_to[i].species.name,
          });
        }
      }else{
        do {
          var evoDetails = chainData.evolution_details[0];

          chain.push({
            "species_name": chainData.species.name,
          });

          chainData = chainData['evolves_to'][0];
        } while (!!chainData && chainData.hasOwnProperty('evolves_to'));
      }
      
      this.pokemonEvoChain = chain
    }
  },


}
</script>
