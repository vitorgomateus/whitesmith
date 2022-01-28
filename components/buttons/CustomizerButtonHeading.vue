<template>
  <NuxtLink to="/editor">
    <h2 class="font-thin text-xl text-[#3d3d3d] uppercase p-2">
      {{ $t( 'editor_title' ) }}, {{ getNome }}
    </h2>
  </NuxtLink>
</template>

<script>
export default {
  name: 'CustomizerButtonHeading',
  computed: {
    getNome () {
      return this.$store.getters.getNome
    }
  }
}
</script>
