// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  router: {
    // @ts-ignore
    routes: [
      {
        path: "/login",
        component: "~/pages/login.vue",
      },
      {
        path: "/admin",
        component: "~/pages/admin.vue",
        middleware: ["auth", "admin"],
      },
      {
        path: "/user",
        component: "~/pages/user.vue",
        middleware: ["auth", "user"],
      },
      {
        path: "/guest",
        component: "~/pages/guest.vue",
        middleware: ["auth", "guest"],
      },
    ],
  },
});
