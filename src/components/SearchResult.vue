<template>
    <div>
        <table v-if="stateValue()">
            <tr>
                <th v-for="item in stateValue()" :key="item.header">{{ item.header}}</th>
            </tr>
            <tr>
                <td v-for="item in stateValue()" :key="item.header" >{{ item.content}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
import Vue, { component } from 'vue'
import store from '@/store'
export default Vue.component('app-table', {
  props: ['value'],
  data: function () {
    return { items: [{}] }
  },
  created: function () {
    this.stateValue()
  },
  methods: {
    stateValue: function () {
      const vectors = store.getters.getSavedData.vectors
      let items
      // console.log('hello')
      vectors && (items = [
        { header: 'ID', content: `${store.state.savedData.id}` },
        { header: 'NAME', content: `${store.state.savedData.firstName}` },
        { header: 'EMAIL-ID', content: `${(vectors.find((vector) => vector.type === 'e') || null) ? (vectors.find(vector => vector.type === 'e') || null).value : '-'}` },
        { header: 'STATUS', content: `${store.state.savedData.status}` }
      ])
      return items
    }
  }
})
</script>
