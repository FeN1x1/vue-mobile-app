<template>
  <div class="py-5 mx-auto max-w-md text-lg text-palette-blue-2 text-center">
    <ul class="flex">
      <li v-for="item in routes" :key="item.path" class="flex-auto">
        <router-link
          :to="`/${item.path}`"
          custom
          v-slot="{ href, navigate, isActive, isExactActive }"
        >
          <div
            :active="isActive"
            :href="href"
            @click="navigate"
            :class="getClassForActiveLink(isExactActive)"
          >
            {{ item.name }}
          </div></router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    routes: {
      type: Array,
      required: true,
    },
  },
  methods: {
    getClassForActiveLink(activeRoute) {
      return {
        "text-palette-blue-3 text-xl font-bold": activeRoute,
      };
    },
  },
  components: {},
};
</script>

