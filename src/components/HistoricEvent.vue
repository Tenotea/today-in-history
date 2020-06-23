<template>
  <div class="main">
    {{this.$store.state.happening}}

    <button @click="refreshHappening()"> More Happenings </button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'HistoricEvent',
  created () {
    this.getAnHappening()
  },
  methods: {
    ...mapActions(['getAnHappening']),
    refreshHappening () {
      this.getAnHappening()
    }
  }
}
</script>

<style scoped lang="scss">
button{
  display: block;
  margin: 50px;
}
</style>
