export interface ImenuItem{
    name:string,
    url:string,
    icon:string,
}
export const MENU_DATA: ImenuItem[] = [{
    icon: 'radix-icons:dashboard',
    name: "Home",
    url:"/"
},{
    icon: 'ep:goods',
    name: "Products",
    url:"/products"
},{
    icon: 'ph:contactless-payment',
    name: "Payments",
    url:"/payments"
},{
    icon: 'fluent:receipt-16-regular',
    name: "Orders",
    url:"/orders"
},{
    icon: 'mingcute:group-line',
    name: "Castomers",
    url:"/castomers"
},{
    icon: 'fluent:person-feedback-16-regular',
    name: "Feedback",
    url:"/feedback"
},{
    icon: 'radix-icons:gear',
    name: "Seting",
    url:"/seting"
},{
    icon: 'radix-icons:question-mark',
    name: "Help",
    url:"/help"
}
]