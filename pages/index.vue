<template>
  <div class="container mx-auto">
    <card-component :pokeList="pokeList"></card-component>
    <div class="mt-10 mb-16">
      <span v-if="paginationNav.previous != null">
        <button class="rounded-lg p-2 bg-gray-700 hover:bg-red-700 focus:outline-none focus:ring-2 text-white font-light w-50" 
                @click.prevent="getPaginatedData(paginationNav.previous)">
          <font-awesome-icon :icon="['fas', 'angle-left']"/>&nbsp;Prev
        </button>
      </span>
      <span>
        <button class="rounded-lg p-2 bg-gray-700 hover:bg-red-700 focus:outline-none focus:ring-2 text-white font-light"
                @click.prevent="getPaginatedData(paginationNav.next)">
          Next&nbsp;<font-awesome-icon :icon="['fas', 'angle-right']"/>
        </button>
      </span>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import cardComponent from '~/components/card-component.vue';

export default {
  components: { cardComponent },
  data() {
    return {
      pokeList: [],
      paginationNav: {},
      initialPageApi: 'https://pokeapi.co/api/v2/pokemon/'
    };
  },

  created(){
    this.getPaginatedData(this.initialPageApi)
  },

  methods: {
    getPaginatedData(api){
      this.pokeList = []
      this.paginationNav = {}
      
      axios.get(api).then((res) => {
          this.pokeList = res.data.results
          this.paginationNav.next = res.data.next
          this.paginationNav.previous = res.data.previous
        })
        .catch((error) => {
          console.log(error)
        });
    }
  },
}
</script>