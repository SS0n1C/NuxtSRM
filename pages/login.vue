<script setup lang="ts">
useSeoMeta({
    title: "Login | SRM system"
})
const emailRef = ref("")
const passwordRef = ref("")
const nameRef = ref("")
watch(emailRef, ()=>{
    console.log(emailRef)
})
</script>

.<template>
    <section class="flex items-center justify-center min-h-screen w-full bg-slate-200">
      <div>
          <h3 class="text-center mb-5">login</h3>
          <form action="">
              <input type="email" 
                  placeholder="email"
                  v-model="emailRef">
              <input type="password" 
                  placeholder="password"
                  v-model="passwordRef">
              <input type="text" 
                  placeholder="name"
                  v-model="nameRef">
              <div class="flex items-center justify-center gap-x-10">
                  <button type="button">login</button>
                  <button type="button">registration</button>
              </div>
          </form>
      </div>
    </section>
  </template>
  
<style scoped>
input{
    display: block;
    margin: 20px 10px;
    border-radius: 5px;
    min-width: 100%
}

</style>