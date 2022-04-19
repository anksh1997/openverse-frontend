<template>
  <VFourOhFour :error="error" />
</template>

<script>
import { defineComponent } from '#app'

import VFourOhFour from '~/components/VFourOhFour.vue'

const Error = defineComponent({
  name: 'ErrorPage',
  components: { VFourOhFour },
  layout: 'blank',
  props: ['error'],
})
export default Error
</script>
