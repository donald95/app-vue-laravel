import api from "../bootstrap";

const userService = {
    async login(email, password) {
        return await api.post("/login", {email, password});
    },
    async logout() {
        return await api.post("/logout");
    },
    async getAuthUser() {
        return await api.get("/user").catch(() => null);
    }
}

export default userService;
