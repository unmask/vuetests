<template>
    <input type="text" v-bind:value="value" v-on:input="$emit('input',$event.target.value)"/>
</template>

<script>
import Vue, { component } from 'vue'
export default Vue.component('input-field', {
  props: ['value'],
  data: function () {
    return { selectedText: '' }
  }
})
</script>
