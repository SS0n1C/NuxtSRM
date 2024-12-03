<template>
  <section class="gird">
    <aside>menu</aside>
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
    grid-template-columns: 1fr 6fr;
}
</style>