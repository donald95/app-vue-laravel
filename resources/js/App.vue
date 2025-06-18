<template>
    <h1>Hello World From Vue</h1>
    <router-link to="/">Home</router-link>
    |
    <router-link to="/login">Login</router-link>
    |
    <button type="button" @click.prevent="logout">Logout</button>
    <router-view/>
</template>

<script setup>
import {useRouter} from "vue-router";

import userService from "./services/UserService";

const router = useRouter();

async function logout() {
    const response = await userService.logout();

    if (response.status === 200) {
        router.push("/login");
    }
}
</script>

<style scoped>

</style>
