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
            :src="objetos.poster"
            aspect-ratio="2"
          ></v-img>
          <v-card-title primary-title>
            <div>
              <h2 class="headline mb-0">{{objetos.tipo}} - {{objetos.marca}}
               - {{ objetos.modelo}} - Sn:{{objetos.serial}} </h2>
              <div style="margin-top:10px">
              <label>Queres ver donde esta? fijate en que lugar de {{ objetos.Ciudad}} se vende! </label><a target="_blank" :href="`https://maps.google.com/?q=${objetos.latitude},${objetos.longitude}`">Google maps</a>
              <p>{{objetos.descripcion}}</p>
            </div>
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
      objetos: '',
      dialog: false,
      loading: true
    }
  },

  mounted () {
    objetoApi.fetchSingleObjeto(this.id)
      .then(response => {
        const selected = response.objetos.find(elem => parseInt(elem.id) === parseInt(this.id))
        this.objetos = selected
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
