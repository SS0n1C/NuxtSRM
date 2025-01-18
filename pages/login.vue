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
    <section class="flex items-center justify-center min-h-screen w-full bg-[#0c4a6e]">
      <div class="bg-white flex items-center flex-col min-w-96 py-2 min-h-72 rounded-3xl" >
          <div><h3 class="text-center text-xl uppercase font-semibold underline mb-5">login</h3></div>
          <form action="" class="grow flex">
          <div class=" flex flex-col p-3 min-h-full">
            <div class="grow">  
            <input type="email" 
                  placeholder="email"
                  v-model="emailRef">
              <input type="password" 
                  placeholder="password"
                  v-model="passwordRef">
              <input type="text" 
                  placeholder="name"
                  v-model="nameRef">
            </div>
              <div class="flex items-center justify-center gap-x-10 ">
                  <button type="button" class="but" @click="login">login</button>
                  <button type="button" class="but" @click="regist">registration</button>
              </div>
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
    background-color: brown;
    padding: 3px 10px;
}
.but{
    min-width: 130px;
    background-color: blue;
    padding: 10px 10px;
    border-radius: 5px;
    text-transform: uppercase;

    &:last-of-type{
        background-color: green;
    }

    &:hover{
        background-color:black;
        color:whitesmoke; 
    }
}

</style>