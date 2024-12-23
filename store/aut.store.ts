interface IautStore {
    email: string
    name: string
    status: boolean
}
const defaultUser: {user : IautStore} =  {
    user:{
        email: "",
        name: "",
        status: false,
    }
}
export const useAutStore  = defineStore("isAuth", {
    state: () => defaultUser,

    getters:{
        isAuth: state => state.user.status
    },
    actions:{
        clear(){
            this.$patch(defaultUser)
        },
        set(input: IautStore){
            this.$patch({user:input})
        }
    },

})
export const UseLoadingStore = defineStore("isLoading",{
    state: () => ({
        isLoading: true,
     }),
    actions:{
        set(data: boolean){
            this.$patch({isLoading: data})
        }
    }
}) 