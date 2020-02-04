<template>
    <div>
        <table v-if="stateValue">
            <tr>
                <th v-for="item in stateValue" :key="item.header">{{ item.header}}</th>
            </tr>
            <tr>
                <td v-for="item in stateValue" :key="item.header" >{{ item.content}}</td>
            </tr>
        </table>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Getter } from 'vuex-class'
import { GET_SAVED_DATA } from '@/store/types'
import { SearchResponseTypes } from '@/services/types'
@Component
export default class SearchResult extends Vue {
  @Getter(GET_SAVED_DATA) private savedData!: SearchResponseTypes.RootResponse
  get stateValue (): object {
    const { savedData } = this
    const { vectors, id, firstName, status } = savedData || []
    const emailID:SearchResponseTypes.Vector | undefined = savedData && vectors.find((vector) => vector.type === 'e')
    debugger // eslint-disable-line no-debugger
    const items = [
      { header: 'ID', content: id || '-' },
      { header: 'NAME', content: firstName || '-' },
      { header: 'EMAIL-ID', content: emailID ? emailID.value : '-' },
      { header: 'STATUS', content: status || '-' }
    ]
    return items
  }
}
</script>
