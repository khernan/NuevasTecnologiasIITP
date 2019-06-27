<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <router-link
        to='/'
        tag='span'
        style='cursor: pointer'>
        Esmio
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-flex xs12 sm6 md3>
        <v-text-field
          label='Busca tus cosas!'
          v-model='searchString'
          >
        </v-text-field>
        </v-flex>
      <v-btn
        flat
        :disabled="!dataAvailable"
        @click="searchObjeto"
      >
       <span class="mr-2">Search</span>
      </v-btn>
    </v-toolbar>

    <v-content>
    <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
var searchParam = ''
export default {
  searchBike () {
    return searchParam
  },
  name: 'App',
  components: {
  },
  data () {
    return {
      searchString: this.searchString
    }
  },
  methods: {
    searchObjeto () {
      this.$router.push('/search/' + this.searchString)
      searchParam = this.searchString
    }
  },
  computed: {
    dataAvailable () {
      return this.searchString !== null && this.searchString !== ''
    }
  }
}
</script>
