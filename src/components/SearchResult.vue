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

<script>
import Vue, { component } from 'vue'
import store from '@/store'
export default Vue.component('app-table', {
  props: ['value'],
  data: function () {
    return { items: [{}] }
  },
  computed: {
    stateValue: function () {
      items = [
        { header: 'ID', content: `${store.state.savedData.id}` },
        { header: 'NAME', content: `${store.state.savedData.firstName}` },
        { header: 'EMAIL-ID', content: `${(store.state.savedData.vectors.find(vector => vector.type === 'e')) ? (store.state.savedData.vectors.find(vector => vector.type === 'e')).value : '-'}` },
        { header: 'STATUS', content: `${store.state.savedData.status}` }
      ]
      return items
    }
  },
  watch: {
    store: function (n, o) {
      console.log(n)
    }
  }
})
</script>
