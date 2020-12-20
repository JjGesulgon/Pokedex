<template>
  <div class="container mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-4 sm:gap-0 md:gap-16 mt-16" v-if="pokemonDetails != null">
      <profile-component :name="pokemonDetails.name" 
                       :types="pokemonDetails.types" 
                       :id="pokemonDetails.id" 
                       :weight="pokemonDetails.weight" 
                       :imageUrl="pokemonDetails.sprites.other.dream_world.front_default" 
                       :color="color"
                       :abilities="pokemonDetails.abilities"></profile-component>
      <div class="col-span-3 sm:mt-8 md:mt-0">
        <about-component :flavorTextEntries="flavorText"></about-component>
        <stats-component :stats="pokemonDetails.stats"></stats-component>
        <strengths-weaknesses-component :types="pokemonDetails.types"></strengths-weaknesses-component>
        <evolution-chain-component :evolutionChain="evolutionChain"></evolution-chain-component>
        <moves-component :moves="pokemonDetails.moves"></moves-component>
      </div> 
    </div>
    <div v-else class="mt-16">
      <img class="w-2/6 mx-auto" src="/undraw_not_found.svg" alt="Image" />
      <div class="font-light text-center text-5xl">
        No Data Available
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import aboutComponent from '~/components/pokemonDetail/about-component.vue';
import profileComponent from '~/components/pokemonDetail/profile-component.vue';
import statsComponent from '~/components/pokemonDetail/stats-component.vue';
import strengthsWeaknessesComponent from '~/components/pokemonDetail/strengths-weaknesses-component.vue';
import MovesComponent from '~/components/pokemonDetail/moves-component.vue';
import evolutionChainComponent from '~/components/pokemonDetail/evolution-chain-component.vue';
export default {
  components: { statsComponent, MovesComponent, evolutionChainComponent, strengthsWeaknessesComponent, profileComponent, aboutComponent },
  data(){
    return {
      pokemonDetails: null,
      species: {},
      evolutionChain:null,
      ifReady: false,
      color: "",
      type: {},
      flavorTextEntries: [],
    }
  },

  created() {
    let pokeName = this.$route.query.pokemon

    //get pokemon main information
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
        .then((res) => {
          this.pokemonDetails = res.data
          return axios.get(this.pokemonDetails.species.url)
        })
        .then((res) => {
          this.species = res.data
          this.flavorTextEntries = res.data.flavor_text_entries
          this.color = this.species.color.name
          return axios.get(this.species.evolution_chain.url)
        })
        .then((res) => {
          this.evolutionChain = res.data;
          this.ifReady = true;
        })
        .catch((error) => {
          console.log(error)
          this.hasData = false
        });
  },
  watch:{
    '$route': function(){
        this.$router.go();
      }
  },

  computed: {
    flavorText: function(){
      const seen = new Set();
      var filteredArr = this.flavorTextEntries.filter(el => {
        const duplicate = seen.has(el.flavor_text);
        seen.add(el.flavor_text);
        return !duplicate;
      });

      return filteredArr.filter(entry => entry.language.name == 'en');
    }
  }
}
</script>