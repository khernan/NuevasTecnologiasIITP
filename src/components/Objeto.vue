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
          <!-- <v-img
            :src="singleObjeto.Poster"
            aspect-ratio="2"
          ></v-img> -->
          <v-card-title primary-title>
            <div>
              <h2 class="headline mb-0">{{singleObjeto.name}}- Pais: {{singleObjeto.location.country}}</h2>
              <p>Ciudad: {{ singleObjeto.location.city}} </p>
              <label>Queres comprarla? fijate en que lugar de {{ singleObjeto.location.city}} se vende! </label><a target="_blank" :href="`https://maps.google.com/?q=${singleObjeto.location.latitude},${singleObjeto.location.longitude}`">Google maps</a>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat color="green" @click="LatestObjetoback">back</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>

    <v-layout row wrap>
      <v-flex xs12>
        <div class="text-xs-center">
        <v-dialog
          v-model="dialog"
          width="500">
          <v-card>
            <v-card-title
              class="headline grey lighten-2"
              primary-title
            >
              Ratings
            </v-card-title>
            <v-card-text>
              <table style="width:100%" border="1" >
                <tr>
                  <th>Source</th>
                  <th>Ratings</th>
                </tr>
                <tr v-for="(rating,index) in this.ratings" :key="index">
                  <td align="center">{{ratings[index].Source}}</td>
                  <td align="center"><v-rating :half-increments="true" :value="ratings[index].Value"></v-rating></td>
                </tr>
              </table>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="primary"
                flat
                @click="dialog = false"
              >
                OK
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
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
        const selected = response.networks.find(elem => elem.id === this.id)
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
