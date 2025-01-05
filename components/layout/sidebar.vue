<template>
  <aside class="px-5 py-4 bg-[#0f172a] h-full relative w-full flex flex-col">
    <NuxtLink to="/" class="mb-10 flex justify-center">
    <NuxtImg src="/logo.svg" alt="logo" width="100px" class="nuxtLogo" />
    </NuxtLink>
    <button class="absolute top-3 right-0.5" @click="logOut">
      <Icon name="line-md:logout" size="1.3rem" class="text-white hover:text-gray-500 transition-colors duration-300"/>
    </button>
    <LayoutMenu/>
  </aside>
</template>

<script setup>
const store = useAutStore()
const router = useRouter()
const isLoading = UseLoadingStore()

const logOut = async() =>{
  isLoading.set(true)
  await account.deleteSession("current")
  store.clear()
  await router.push("/login")
  isLoading.set(false)
}
</script>

<style lang="scss" scoped>

</style>