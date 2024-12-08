<script  setup>
import {MENU_DATA} from "./menu.data"
</script>

<template>
    <ul class="menu">
        <NuxtLink 
            v-for='item in MENU_DATA'
            :key="item.name"
            :to="item.url"
        >
            <li class="menu__item">
                <Icon :name="item.icon"/>
                <span>{{ item.name }}</span>
            </li>
    </NuxtLink>
    </ul>
</template>

<style lang="scss" scoped>
    .menu{
        display: flex;
        flex-direction: column;
        row-gap: 0.2rem;
        color:white;
        font-size: 17px;

        &__item{
            display: flex;
            align-items: center;
            column-gap: 10px;
            padding: 5px 10px;
            border-radius: 5px;

            &:hover{
                background-color: blue;
            }
        }
    }
</style>