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

  <v-container v-else>
    <v-layout wrap>
      <v-flex xs12 mr-1 ml-1>
        <v-card>
          <v-img
            :src="singleObjeto.poster"
            aspect-ratio="2"
          ></v-img>
          <v-card-title primary-title>
            <div>
              <h2 class="headline mb-0">{{singleObjeto.tipo}}- Marca: {{singleObjeto.marca}}</h2>
              <p>Modelo: {{ singleObjeto.modelo}} </p>
              <!-- //<label>Queres comprarla? fijate en que lugar de {{ singleObjeto.location.city}} se vende! </label><a target="_blank" :href="`https://maps.google.com/?q=${singleObjeto.location.latitude},${singleObjeto.location.longitude}`">Google maps</a> -->
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat color="green" @click="LatestObjetoback">Volver atras</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import objetoApi from '@/services/objetoApi'
export default {
  props: ['id'],

  data () {
    return {
      singleObjeto: '',
      dialog: false,
      loading: true
    }
  },

  mounted () {
    objetoApi.fetchSingleObjeto(this.id)
      .then(response => {
        const selected = response.objetos.find(elem => elem.id === this.id)
        console.log(selected)
        this.singleObjeto = selected
        this.loading = false
      })
      .catch(error => {
        console.log(error)
      })
  },
  methods: {
    LatestObjetoback () {
      this.$router.push('/')
    }
  }
}

</script>

<style lang="stylus" scoped>
  .v-progress-circular
    margin: 1rem
</style>
