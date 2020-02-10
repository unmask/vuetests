<template>
  <div>
    <component :is="layout" />
  </div>
</template>

<script>
const defaultLayout = 'default'
export default {
  computed: {
    layout () {
      return (this.$route.meta.layout || defaultLayout) + '-layout'
    }
  }
}
</script>
