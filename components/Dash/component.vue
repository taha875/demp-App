<template>
  <div
    class="w-full p-4 bg-gray-200 rounded-md flex items-center justify-between"
  >
    <div>
      <p class="text-2xl font-bold capitalize">{{ userInfo.username }}</p>
      <p class="text-sm capitalize">{{ userInfo.role }}</p>
    </div>
    <button
      @click="logout()"
      class="p-2 bg-indigo-700 rounded-md text-white text-sm font-bold"
    >
      Logout
    </button>
  </div>
  <div class="flex flex-col items-start w-full bg-gray-200 rounded-md p-8 mt-4">
    <h1 class="text-2xl font-bold">
      {{ myProp }}
      {{ myProp === "Users" || myProp === "Developers" ? "" : "Sales" }}
    </h1>
    <div class="w-full">
      <div v-if="myProp === 'Components'">
        <MediumStatCardsWithIcon averageSales="2000" subs="424" cr="44" />
      </div>
      <div v-else-if="myProp === 'Template'">
        <MediumStatCardsWithIcon averageSales="200" subs="42" cr="4" />
      </div>
      <div v-else-if="myProp === 'Revenue'">
        <RevenueComponent />
      </div>
      <div v-else-if="myProp === 'Users'">
        <UserTable />
      </div>
      <div v-else-if="myProp === 'Developers'">
        <UserTable />
      </div>
    </div>
  </div>
</template>

<script>
import MediumStatCardsWithIcon from "../componentSection/componentSection.vue";
import RevenueComponent from "../revenue/revenue.vue";
import UserTable from "../users/users.vue";
export default {
  name: "MyComponent",
  props: {
    myProp: String,
    userInfo: Object,
  },
  components: {
    MediumStatCardsWithIcon,
    RevenueComponent,
    UserTable,
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push("/home");
    },
  },
};
</script>

<style></style>
