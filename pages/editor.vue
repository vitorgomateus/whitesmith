<template>
  <div class="relative flex flex-col items-center justify-start min-h-screen bg-gray-100 sm:items-center sm:pt-0 ">
    <CustomizerButtonHeading />
    <h3>{{ getCurrent }} </h3>
    <LazyPrintPicker />
  </div>
</template>

<script>
export default {
  name: 'EditorPage',
  computed: {
    getCurrent () {
      return this.$store.getters.getCurrent
    }
  }
}
</script>
