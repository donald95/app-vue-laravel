<template>
    <h1>Login</h1>
    <form @submit.prevent="login" method="post">
        <input v-model="email" placeholder="Email" type="email" required>
        <input v-model="password" placeholder="Password" type="password" required>
        <button type="submit">Login</button>
    </form>
    <p v-if="error">{{ error }}</p>
</template>

<script setup>
import {ref} from "vue";
import {useRouter} from "vue-router";
import userService from "../services/UserService";

const email = ref('');
const password = ref('');
const error = ref('');
const router = useRouter();

async function login() {
    try {
        const response = await userService.login(email.value, password.value);
        if (response.status === 200) router.push("/");
    } catch (error) {
        error.value = 'Credentials did not match';
    }
}
</script>

<style scoped>

</style>
