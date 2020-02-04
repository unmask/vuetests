<template>
  <input type="text" v-on:input="$emit('input',$event.target.value)"/>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class InputField extends Vue {}
</script>
