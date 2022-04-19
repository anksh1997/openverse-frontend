<template>
  <VButton
    size="large"
    variant="full"
    type="button"
    :disabled="isFetching"
    @click="$emit('onLoadMore')"
  >
    {{ $t('browse-page.load') }}
  </VButton>
</template>

<script lang="ts">
import { defineComponent } from '#app'

import VButton from '~/components/VButton.vue'

export default defineComponent({
  name: 'VLoadMore',
  components: {
    VButton,
  },
  props: {
    isFetching: {
      type: Boolean,
      default: true,
    },
  },
})
</script>
