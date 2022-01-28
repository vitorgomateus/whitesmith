<template>
  <div>
    <p>index.vue</p>
    <Tutorial />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data () {
    return {
      nome: 'Vítor'
    }
  },
  beforeCreate () {
    this.$store.stonome = 'André'
  }
}
</script>
