<template>
  <div>
  <LayoutLoader v-if="isLoading.isLoading"/>
  <section v-else :class="{grid:store.isAuth}">
    <LayoutSidebar v-if="store.isAuth"/>
    <div>
        <slot />
    </div>
  </section>
</div>
</template>

<script setup>
const store = useAutStore()
const router = useRouter()
const isLoading = UseLoadingStore()

onMounted(async()=>{
  try {
    const user = await account.get()
    if(user){
      store.set(user)
    }
  } catch (error) {
    router.push("/login")
  } finally {
    isLoading.set(false)
  }
})
</script>

<style scoped>
.grid{
    display: grid;
    min-width: 100vh;
    min-height: 100vh;
    grid-template-columns: 1fr 6fr;
}
</style>