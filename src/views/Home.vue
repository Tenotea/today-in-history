<template>
  <div class="home">
    <p>Home page</p>
    <HistoricEvent/>
    Icons made by <a href="https://www.flaticon.com/authors/becris" title="Becris">Becris</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
  </div>
</template>

<script>
import HistoricEvent from '@/components/HistoricEvent.vue'

export default {
  name: 'Home',
  components: {
    HistoricEvent
  }
}
</script>
