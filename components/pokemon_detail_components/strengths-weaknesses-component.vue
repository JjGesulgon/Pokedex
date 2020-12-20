<template>
  <div class="mt-16 mb-16">
    <div class="grid grid-cols-1 gap-4 text-center" :class="{ 'md:grid-cols-2': typeListDetailed.length > 1 }">
      <div v-for="type in typeListDetailed" :key="type.id" class="border rounded-lg">
        <div class="text-3xl font-light border rounded-lg capitalize">
          {{ type.name}}
        </div>
        <div class="mb-4 px-3">
          <div class="text-xl font-medium mb-2">Strengths</div>
          <div class="grid grid-cols-3 gap-3">
            <div>
              <div class="font-medium mb-2 border">Double Damage To</div>
              <div v-for="doubleDamageTo in type.damage_relations.double_damage_to" :key="doubleDamageTo.name" class="capitalize">
                {{ doubleDamageTo.name}}
              </div>
            </div>
            <div>
              <div class="font-medium mb-2 border">Half Damage From</div>
              <div v-for="halfDamageFrom in type.damage_relations.half_damage_from" :key="halfDamageFrom.name" class="capitalize">
                {{ halfDamageFrom.name}}
              </div>
            </div>
            <div>
              <div class="font-medium mb-2 border">No Damage From</div>
              <div v-for="noDamageFrom in type.damage_relations.no_damage_from" :key="noDamageFrom.name" class="capitalize">
                {{ noDamageFrom.name}}
              </div>
            </div>
          </div>
        </div>
        <hr>
        <div class="mt-4 px-3">
          <div class="text-xl font-medium mb-2">Weaknesses</div>
          <div class="grid grid-cols-3 gap-3">
            <div>
              <div class="font-medium mb-2 border">Double Damage From</div>
              <div v-for="doubleDamageFrom in type.damage_relations.double_damage_from" :key="doubleDamageFrom.name" class="capitalize">
                {{ doubleDamageFrom.name}}
              </div>
            </div>
            <div>
              <div class="font-medium mb-2 border">Half Damage To</div>
              <div v-for="halfDamageTo in type.damage_relations.half_damage_to" :key="halfDamageTo.name" class="capitalize">
                {{ halfDamageTo.name}}
              </div>
            </div>
            <div>
              <div class="font-medium mb-2 border">No Damage To</div>
              <div v-for="noDamageTo in type.damage_relations.no_damage_to" :key="noDamageTo.name" class="capitalize">
                {{ noDamageTo.name}}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  props: {
    types: Array,
  },
  data(){
    return{
      typeListDetailed: []
    }
  },
  created(){
    this.types.forEach(el => {
        let typeDetails = {};
        axios.get(el.type.url).then((res) => {
            typeDetails = res.data
            this.typeListDetailed.push(typeDetails)
          })
          .catch((error) => {
            console.log(error)
          });
    });
  },
}
</script>
<style scoped>
hr {
  display: block;
  margin-top: 0.2em;
  margin-bottom: 0.5em;
  margin-left: 2em;
  margin-right: 2em;
  border-width: 1px;
}
</style>