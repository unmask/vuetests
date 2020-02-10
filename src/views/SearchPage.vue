<template>
  <div>
    <InputField v-on:input="searchedText = $event"/>
    <button v-on:click="showText">search</button>
    <SearchResult v-if="active" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Action } from 'vuex-class'
import InputField from '@/components/InputField.vue'
import FetchCall from '@/services/api-services'
import SearchResult from '@/components/SearchResult.vue'
import { SET_SAVED_DATA } from '@/store/mutation.types'
import { SearchResponseTypes } from '@/services/types'
import router from '@/router'
@Component({
  components: {
    InputField,
    SearchResult
  }
})
export default class SearchPage extends Vue {
  private searchedText: string = ''
  private active: Boolean = false
  @Action(SET_SAVED_DATA)
  private fetchResults!: (_:string) => void
  showText () {
    router.push('/home')
    this.fetchResults(this.searchedText)
    this.showTable()
  }
  showTable () {
    this.active = true
  }
}
</script>
