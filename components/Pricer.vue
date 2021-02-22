<template>
  <div class="pricer" ref="pricer">
    <ul v-if="pricerWidth && pricerHeight" class="pricer-list">
      <li
        class="pricer-list_element"
        v-for="(price, index) in priceArray"
        :key="`price-list-element-${index}`"
        :style="createStyleObj(price)"
      ></li>
    </ul>
  </div>
</template>

<script>
import helpers from '@/utils/client/helpers.js'

export default {
  name: 'Pricer',
  props: {
    priceArray: {
      type: Array,
      default: () => []
    },
    maxHouseVal: {
      type: Number,
      default: 10000000
    },
    colorPicker: {
      type: String,
      default: 'generateColorPrice'
    }
  },
  data() {
    return {
      pricerWidth: null,
      pricerHeight: null
    }
  },
  methods: {
    createStyleObj(price) {
      return {
        ...helpers.generateStylePosObj(
          price,
          this.pricerWidth,
          this.pricerHeight
        ),
        background: helpers[this.colorPicker](price[2], this.maxHouseVal)
      }
    }
  },
  mounted() {
    this.pricerWidth = this.$refs.pricer.clientWidth || 500
    this.pricerHeight = this.$refs.pricer.clientHeight || 500
  }
}
</script>
