<template>
  <div
    class="h-screen w-screen absolute flex items-center justify-center top-0 min-h-screen bg-gradient-to-tl from-green-400 to-indigo-900 w-full py-16 px-4"
  >
    <div
      v-if="!error"
      class="bg-white shadow rounded lg:w-1/3 md:w-1/2 w-full p-10 mt-16"
    >
      <p
        tabindex="0"
        role="heading"
        aria-label="Login to your account"
        class="text-2xl font-extrabold leading-6 text-gray-800 mb-8"
      >
        Login to your account
      </p>
      <form @submit.prevent="login">
        <div>
          <label
            class="text-sm font-medium leading-none text-gray-800"
            for="username"
            >Username:</label
          >
          <input
            class="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2 mb-4"
            type="text"
            name="username"
            v-model="form.username"
          />
        </div>
        <div>
          <label
            class="text-sm font-medium leading-none text-gray-800"
            for="password"
            >Password:</label
          >
          <input
            class="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
            type="password"
            name="password"
            v-model="form.password"
          />
        </div>
        <button
          v-if="!loading"
          class="focus:ring-2 mt-4 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full"
          type="submit"
        >
          Login
        </button>
        <div v-else class="mt-8 flex justify-center">
          <div class="relative">
            <div class="ml-0.5 animate-spin">
              <svg
                width="32"
                height="32"
                viewBox="0 0 119 119"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.95 59.5C2.66391 59.5 -0.0308354 62.1706 0.297206 65.4402C1.34582 75.8918 5.14785 85.9181 11.3635 94.4732C18.7491 104.639 29.1633 112.205 41.1135 116.088C53.0637 119.971 65.9363 119.971 77.8865 116.088C89.8367 112.205 100.251 104.639 107.637 94.4732C115.022 84.3078 119 72.0652 119 59.5C119 46.9348 115.022 34.6922 107.636 24.5268C100.251 14.3613 89.8367 6.79498 77.8865 2.91213C67.8294 -0.355617 57.1189 -0.873278 46.8548 1.35917C43.6438 2.05756 41.9367 5.44566 42.9521 8.57092C43.9676 11.6962 47.3223 13.3669 50.5498 12.749C58.4035 11.2454 66.5436 11.739 74.2092 14.2297C83.7693 17.336 92.1007 23.3891 98.0092 31.5214C103.918 39.6538 107.1 49.4479 107.1 59.5C107.1 69.5521 103.918 79.3462 98.0092 87.4786C92.1007 95.6109 83.7694 101.664 74.2092 104.77C64.6491 107.877 54.3509 107.877 44.7908 104.77C35.2307 101.664 26.8993 95.6109 20.9908 87.4786C16.2532 80.9578 13.2683 73.3686 12.2714 65.4347C11.8617 62.1743 9.23609 59.5 5.95 59.5Z"
                  fill="#4338CA"
                />
              </svg>
            </div>
          </div>
        </div>
      </form>
    </div>
    <div v-else>
      <div>
        <div role="alert" class="container mx-auto max-w-lg">
          <div
            class="relative md:w-80 rounded shadow-lg px-6 py-4 dark:bg-gray-800 bg-white"
          >
            <p
              class="text-lg font-bold pt-2 text-left font-normal text-red-500 text-center"
            >
              Invalid username or password
            </p>
            <div class="flex items-center justify-between pt-6">
              <button
                @click="error = false"
                class="py-2 w-full text-white focus:outline-none hover:opacity-90 text-sm font-semibold border rounded border-indigo-700 bg-indigo-700 leading-3"
              >
                Re-Enter
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      user: null,
      loading: false,
      error: false,
    };
  },
  methods: {
    login() {
      // set loading state
      this.loading = true;
      setTimeout(() => {
        const { username, password } = this.form;
        if (username === "admin" && password === "admin123") {
          this.user = {
            username: "Joe",
            role: "admin",
          };

          localStorage.setItem("user", JSON.stringify(this.user));
          this.$router.push("/admin");
        } else if (username === "teamLead" && password === "teamLead123") {
          this.user = {
            username: "Alan",
            role: "teamLead",
          };

          localStorage.setItem("user", JSON.stringify(this.user));
          this.$router.push("/admin");
        } else if (username === "developer" && password === "developer123") {
          this.user = {
            username: "Doe",
            role: "developer",
          };
          localStorage.setItem("user", JSON.stringify(this.user));

          this.$router.push("/admin");
        } else {
          this.error = true;
          this.loading = false;
        }
        this.loading = false;
      }, 1000);
    },

    logout() {
      this.user = null;
      this.$router.push("/");
      localStorage.removeItem("user");
    },
  },
};
</script>
