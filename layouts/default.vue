<template>
  <section class="grid">
    <LayoutSidebar />
    <div>
        <slot />
    </div>
  </section>
</template>

<script setup>

</script>

<style scoped>
.grid{
    display: grid;
    min-width: 100vh;
    min-height: 100vh;
    grid-template-columns: 1fr 6fr;
}
</style>