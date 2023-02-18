<template>
  <button type="button" class="button" :disabled="disabled">
    <span class="icon">
      <i class="fa" :class="icon"></i>
    </span>
    <span>
      {{ title }}
    </span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'counter-button',
  props: {
    disabled: Boolean,
    icon: String,
    title: String
  }
})
</script>