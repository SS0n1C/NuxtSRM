<script setup lang="ts">
import { v4 as uuidv4 } from 'uuid';
useSeoMeta({
    title: "Login | SRM system"
})
const emailRef = ref("")
const passwordRef = ref("")
const nameRef = ref("")
const isLoadingStore = UseLoadingStore()
const authStore = useAutStore()
const router = useRouter()

const login = async() =>{
    isLoadingStore.set(true)
    await account.createEmailPasswordSession(emailRef.value,passwordRef.value)
    const response = await account.get()
    if(response){
        authStore.set({
            email:response.email,
            name:response.name,
            status:response.status,
        })
    }
    emailRef.value = "",
    passwordRef.value = "",
    nameRef.value = ""

    await router.push("/")
    isLoadingStore.set(false)
}
const regist = async() =>{
    await account.create(uuidv4(),emailRef.value,passwordRef.value,nameRef.value)
    await login()
}
</script>

.<template>
    <section class="flex items-center justify-center min-h-screen w-full bg-slate-200">
      <div class="bg-red-300 flex items-center justify-center flex-col min-w-72 py-2" >
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
                  <button type="button" class="but" @click="login">login</button>
                  <button type="button" class="but" @click="regist">registration</button>
              </div>
          </form>
      </div>
    </section>
  </template>
  
<style scoped>
input{
    display: block;
    margin-bottom: 10px;
    border-radius: 5px;
    min-width: 100%;
}
.but{
    background-color: blue;
    padding: 5px 10px;
    border-radius: 5px;
    width:100px;
}

</style>