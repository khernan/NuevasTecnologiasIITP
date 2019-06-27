<template>

  <v-container v-if="loading">
    <div class="text-xs-center">
      <v-progress-circular
        indeterminate
        :size="150"
        :width="8"
        color="green">
      </v-progress-circular>
    </div>
  </v-container>

  <v-container v-else-if="noData">
    <div class="text-xs-center">
    <h2>No se encontraron objetos el nombre {{this.marca}}</h2>
    </div>
  </v-container>

  <v-container v-else grid-list-xl>
    <v-layout wrap>
      <v-flex xs4
       v-for="item in objetos"
        v-bind:key="item.id"
        mb-2>
        <v-card>
           <v-img
            :src="item.poster"
            aspect-ratio="1"
          ></v-img>
          <v-card-title primary-title>
            <div>
              <h2>Tipo: {{item.tipo}}</h2>
               <h2>Modelo: {{item.modelo}}</h2>
                <h2>Marca: {{item.marca}}</h2>
               <h2>Serial: {{item.serial}}</h2>
            </div>
          </v-card-title>

          <v-card-actions class="justify-center">
            <v-btn flat
              color="green"
               @click="singleObjeto(item.id)"
              >Ver Bici</v-btn>
          </v-card-actions>

        </v-card>
      </v-flex>
  </v-layout>
  </v-container>
</template>

<script>
import objetoApi from '@/services/objetoApi'
import App from '../App'
export default {

  props: ['marca'],
  data () {
    return {
      objetos: [],
      loading: true,
      noData: false
    }
  },
  methods: {
    singleObjeto (id) {
      this.$router.push('/objeto/' + id)
    },

    fetchResult (value) {
      objetoApi.fetchObjetoCollection()
        .then(response => {
          const found = response.objetos.filter(elem => elem.marca.toUpperCase().includes(value.toUpperCase()))
          this.objetos = found
          this.loading = false
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  mounted () {
    this.fetchResult(App.searchBike())
  },
  watch: {
    marca (value) {
      this.fetchResult(value)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .v-progress-circular
    margin: 1rem
</style>
