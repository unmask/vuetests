<template>
  <div>
    <input-field v-bind:value="searchedText" v-on:input="searchedText = $event"/>
    <button v-on:click="showText">search</button>
    <app-table v-bind:value="searchedText" v-if="active" />
    <app-home />
  </div>
</template>

<script>
import Vue, { component } from 'vue'
import Inputfield from '@/components/InputField'
import FetchCall from '@/services/api-services'
import HomePage from '@/components/HomePage'
import SearchResult from '@/components/SearchResult'
export default Vue.component('app-dd', {
  data: function () {
    return { searchedText: '',
      active: false }
  },
  methods: {
    showText () {
      console.log(this.active)
      // debugger // eslint-disable-line no-debugger
      const fetchedData = FetchCall(this.searchedText)
      fetchedData.then(this.toggleTable)
    },
    toggleTable () {
      this.active = true
    }
  }
})
</script>
