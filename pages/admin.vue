<template>
  <div class="flex items-start h-screen">
    <div class="w-64 bg-gray-50 h-full px-4 py-6">
      <img
        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/light_with_header_and_icons-svg1.svg"
        alt="logo"
      />
      <ul class="mt-12">
        <li
          v-for="item in filteredList"
          :key="item.id"
          :class="{ 'bg-gray-200': isActive(item) }"
          class="text-base px-4 py-2 hover:bg-gray-100 mt-2 cursor-pointer"
          @click="saveName(item.name)"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>
    <div class="w-full mx-auto container py-12 h-full">
      <Dash :my-prop="selectedName" :userInfo="user" />
    </div>
  </div>
</template>

<script>
import Dash from "../components/Dash/component.vue";
export default {
  name: "Admin",
  components: {
    Dash,
  },
  data() {
    return {
      user: JSON.parse(localStorage.getItem("user")),
      adminList: [
        { id: 1, name: "Components", role: ["admin", "teamLead", "developer"] },
        { id: 2, name: "Template", role: ["admin", "teamLead", "developer"] },
        { id: 3, name: "Revenue", role: ["admin"] },
        { id: 4, name: "Users", role: ["admin"] },
        { id: 5, name: "Developers", role: ["admin", "teamLead"] },
      ],
      selectedName: "Components",
      displayedName: "Components",
    };
  },
  created() {
    this.checkUser();
    this.filteredList = this.adminList.filter((item) =>
      item.role.includes(this.user.role)
    );
  },
  methods: {
    checkUser() {
      if (!localStorage.getItem("user")) {
        this.$router.push("/home");
      }
    },
    saveName(name) {
      this.selectedName = name;
      this.displayedName = this.selectedName;
    },
    isActive(item) {
      return item.name === this.selectedName;
    },
  },
};
</script>
