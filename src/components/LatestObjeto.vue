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

  <v-container v-else grid-list-xl>
    <v-layout wrap>
      <v-flex xs4
        v-for="(item, index) in objetosResponse.networks.slice(0,40)"
        :key="index"
        mb-2>
        <v-card>
          <!-- <v-img
            :src="item.href"
            aspect-ratio="1"
          ></v-img> -->

          <v-card-title primary-title>
            <div>
              <h2>Tipo de bicicleta: {{item.id}}</h2>
               <h2>Modelo: {{item.name}}</h2>
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

export default {
  data () {
    return {
      objetosResponse: [],
      loading: true
    }
  },
  mounted () {
    objetoApi.fetchObjetoCollection()
      .then(response => {
        this.objetosResponse = response
        this.loading = false
      })
      .catch(error => {
        console.log(error)
      })
  },
  methods: {
    singleObjeto (id) {
      this.$router.push('/objeto/' + id)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .v-progress-circular
    margin: 1rem
</style>
