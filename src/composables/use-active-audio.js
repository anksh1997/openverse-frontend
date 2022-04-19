import { ref } from '#app'

/**
 * This global ref is SSR safe because it will only
 * change internal value based on client side interaction.
 *
 * @type {import('#app').Ref<HTMLAudioElement | undefined>}
 */
const obj = ref(undefined)

export function useActiveAudio() {
  return Object.freeze({ obj })
}
