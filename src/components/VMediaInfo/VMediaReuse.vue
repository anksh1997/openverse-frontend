<template>
  <section
    :aria-label="$t('media-details.reuse.title').toString()"
    class="media-reuse"
  >
    <h3 class="text-2xl md:text-3xl mb-6">
      {{ $t('media-details.reuse.title') }}
    </h3>
    <div class="grid md:grid-cols-2 gap-6">
      <VMediaLicense
        :license="media.license"
        :license-url="media.license_url"
        :full-license-name="fullLicenseName"
      />
      <VCopyLicense :media="media" />
    </div>
  </section>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  PropType,
  useContext,
} from '@nuxtjs/composition-api'

import { getFullLicenseName } from '~/utils/license'

import type { Media } from '~/models/media'

import VCopyLicense from '~/components/VMediaInfo/VCopyLicense.vue'
import VMediaLicense from '~/components/VMediaInfo/VMediaLicense.vue'

const VMediaReuse = defineComponent({
  name: 'VMediaReuse',
  components: { VCopyLicense, VMediaLicense },
  props: {
    media: {
      type: Object as PropType<Media>,
      required: true,
    },
  },
  setup(props) {
    const { i18n } = useContext()

    const fullLicenseName = computed(() =>
      getFullLicenseName(props.media.license, props.media.license_version, i18n)
    )

    return { fullLicenseName }
  },
})
export default VMediaReuse
</script>
