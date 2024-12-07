<template>
  <aside class="px-5 py-4 bg-[#0f172a] h-full relative w-full flex flex-col items-center">
    <NuxtLink to="/" class="mb-10 block">
    <NuxtImg src="/logo.svg" alt="logo" width="100px" class="nuxtLogo" />
    </NuxtLink>
    <button class="absolute top-3 right-0.5">
      <Icon name="line-md:logout" size="1.3rem" class="text-white hover:text-gray-500 transition-colors duration-300"/>
    </button>
  </aside>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>