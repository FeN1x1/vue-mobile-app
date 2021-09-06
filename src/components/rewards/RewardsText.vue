<template>
  <div>
    <div class="border-t-2 border-gray-300 mt-6 mb-3"></div>
    <div v-if="!state.completed">
      <div class="inline-flex text-xl font-bold text-gray-500 mb-1">
        {{ title }}
      </div>
      <div class="grid grid-cols-4 gap-4">
        <div class="text-xl col-span-3 py-auto text-gray-400">
          {{ description }}
        </div>
        <div
          class="circle relative text-2xl text-center align-baseline my-auto border-4 rounded-full border-pink-500"
        >
          <div class="text-pink-500 font-bold">+{{ points }}</div>
        </div>
      </div>
    </div>

    <div v-else class="text-xl py-auto text-gray-400">
      {{ description }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    points: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped>
.circle {
  width: 80px;
  height: 80px;
  line-height: 70px;
  right: 15px;
}
</style>
