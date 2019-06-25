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
    <h2>No se encontraron bicicletas con el nombre {{this.name}}</h2>
    </div>
  </v-container>

  <v-container v-else grid-list-xl>
    <v-layout wrap>
      <v-flex xs4
      v-for="(item, index) in objetoResponse"
        :key="index"
        mb-2>
        >
        <v-card>
          <v-card-title primary-title>
            <div>
              <h2>Tipo de bicicleta: {{objetoResponse.id}}</h2>
               <h2>Modelo: {{objetoResponse.name}}</h2>
            </div>
          </v-card-title>

          <v-card-actions class="justify-center">
            <v-btn flat
              color="green"
               @click="singleObjeto(objetoResponse.id)"
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

  props: ['name'],
  data () {
    return {
      objetoResponse: [],
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
          const found = response.networks.find(elem => elem.name.toUpperCase().includes(value.toUpperCase()))
          this.objetoResponse = found
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
    name (value) {
      this.fetchResult(value)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .v-progress-circular
    margin: 1rem
</style>
