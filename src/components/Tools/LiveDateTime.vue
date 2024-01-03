<template>
  <div class="ml-4 text-subtitle-1">
    {{ datetime.split(":")[0] }}<span class="separator">:</span>{{ datetime.split(":")[1] }}
  </div>
</template>

<script setup>
import { format } from "date-fns";
import { ref, computed, onMounted } from "vue";

const datetime = ref("")

function getDateTime() {
  datetime.value = format(new Date(), "d MMMM yyyy, H:mm")
}

onMounted(() => {
  getDateTime()
  setInterval(getDateTime, 1000)
})

</script>

<style scoped>
.separator {
  animation: blinker 2s ease infinite;
}

@keyframes blinker {
  0%   { opacity: 0; }
  49%  { opacity: 0; }
  50%  { opacity: 1; }
  100% { opacity: 1; }
}</style>