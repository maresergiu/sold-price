<template>
  <div class="home-page">
    <div class="holder">
      <Pricer :priceArray="priceArray" :maxHouseVal="10000000" />
    </div>
  </div>
</template>

<script>
import Pricer from '@/components/Pricer.vue'
import { readFile } from '@/service/readFile.js'

export default {
  data() {
    return {
      priceArray: [],
    }
  },
  components: {
    Pricer,
  },
  async mounted() {
    this.priceArray = await readFile('sold-price.json', 'utf8', 'sync')
  },
}
</script>
