<template>
  <div class="sm:px-6 w-full">
    <div class="bg-white px-4 md:px-8 xl:px-10 overflow-x-auto mt-8 w-full">
      <table class="w-full whitespace-nowrap">
        <thead>
          <tr
            tabindex="0"
            class="focus:outline-none h-20 w-full text-sm leading-none text-gray-600"
          >
            <th class="font-normal text-left pl-4">#</th>
            <th class="font-normal text-left pl-11">Name</th>
            <th class="font-normal text-left pl-10">Age</th>
            <th class="font-normal text-left">Created</th>
            <th class="font-normal text-left">Job Title</th>
            <th class="font-normal text-left">Status</th>
            <th class="font-normal text-left w-32">Actions</th>
          </tr>
        </thead>
        <tbody class="w-full">
          <tr
            tabindex="0"
            class="focus:outline-none h-20 text-sm leading-none text-gray-700 border-b border-t border-gray-200 bg-white hover:bg-gray-100"
          >
            <td class="pl-4">1</td>
            <td class="pl-11">
              <div class="flex items-center">
                <img
                  alt="profile picture"
                  class="shadow-md rounded-full w-10 h-10 mr-3"
                  src="https://cdn.tuk.dev/assets/templates/olympus/invoice.png"
                />
                Miracle Botos
              </div>
            </td>
            <td>
              <p class="mr-16 pl-10">28</p>
            </td>
            <td>
              <p class="mr-16">06/02/2020</p>
            </td>
            <td>
              <p class="mr-16">Product Designer</p>
            </td>
            <td>
              <div
                class="w-20 h-6 flex items-center mr-16 justify-center bg-blue-50 rounded-full"
              >
                <p class="text-xs leading-3 text-blue-700">Approved</p>
              </div>
            </td>
            <td>
              <div class="flex items-center">
                <button
                  class="focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 bg-gray-100 mr-3 hover:bg-gray-200 py-2.5 px-5 rounded text-sm leading-3 text-gray-600 focus:outline-none"
                >
                  Edit
                </button>
                <button
                  class="focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 bg-gray-100 mr-5 hover:bg-gray-200 py-2.5 px-5 rounded text-sm leading-3 text-gray-600 focus:outline-none"
                >
                  Call
                </button>
                <div class="relative px-5 pt-2">
                  <button
                    class="focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 focus:outline-none"
                    @click="show === null ? (show = 0) : (show = null)"
                    role="button"
                    aria-label="option"
                  >
                    <svg
                      class="dropbtn"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M4.16667 10.8332C4.62691 10.8332 5 10.4601 5 9.99984C5 9.5396 4.62691 9.1665 4.16667 9.1665C3.70643 9.1665 3.33334 9.5396 3.33334 9.99984C3.33334 10.4601 3.70643 10.8332 4.16667 10.8332Z"
                        stroke="#9CA3AF"
                        stroke-width="1.25"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M10 10.8332C10.4602 10.8332 10.8333 10.4601 10.8333 9.99984C10.8333 9.5396 10.4602 9.1665 10 9.1665C9.53976 9.1665 9.16666 9.5396 9.16666 9.99984C9.16666 10.4601 9.53976 10.8332 10 10.8332Z"
                        stroke="#9CA3AF"
                        stroke-width="1.25"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M15.8333 10.8332C16.2936 10.8332 16.6667 10.4601 16.6667 9.99984C16.6667 9.5396 16.2936 9.1665 15.8333 9.1665C15.3731 9.1665 15 9.5396 15 9.99984C15 10.4601 15.3731 10.8332 15.8333 10.8332Z"
                        stroke="#9CA3AF"
                        stroke-width="1.25"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </button>
                  <div
                    class="dropdown-content bg-white shadow w-24 absolute z-30 right-0 mr-6"
                    v-if="show === 0"
                  >
                    <div
                      tabindex="0"
                      class="focus:outline-none focus:text-indigo-600 text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white"
                    >
                      <p>Edit</p>
                    </div>
                    <div
                      tabindex="0"
                      class="focus:outline-none focus:text-indigo-600 text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white"
                    >
                      <p>Delete</p>
                    </div>
                  </div>
                </div>
              </div>
            </td>
          </tr>
          <tr
            tabindex="0"
            class="focus:outline-none h-20 text-sm leading-none text-gray-700 border-b border-gray-200 bg-white hover:bg-gray-100"
          >
            <td class="pl-4">2</td>
            <td class="pl-11">
              <div class="flex items-center">
                <img
                  alt="profile picture"
                  class="shadow-md rounded-full w-10 h-10 mr-3"
                  src="https://cdn.tuk.dev/assets/templates/olympus/invoice(1).png"
                />
                Tiana Levin
              </div>
            </td>
            <td>
              <p class="mr-16 pl-10">28</p>
            </td>
            <td>
              <p class="mr-16">06/02/2020</p>
            </td>
            <td>
              <p class="mr-16">Product Designer</p>
            </td>
            <td>
              <div
                class="w-20 h-6 flex items-center mr-16 justify-center bg-blue-50 rounded-full"
              >
                <p class="text-xs leading-3 text-blue-700">Approved</p>
              </div>
            </td>
            <td>
              <div class="flex items-center">
                <button
                  class="focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 bg-gray-100 mr-3 hover:bg-gray-200 py-2.5 px-5 rounded text-sm leading-3 text-gray-600 focus:outline-none"
                >
                  Edit
                </button>
                <button
                  class="focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 bg-gray-100 mr-5 hover:bg-gray-200 py-2.5 px-5 rounded text-sm leading-3 text-gray-600 focus:outline-none"
                >
                  Call
                </button>
                <div class="relative px-5 pt-2">
                  <button
                    class="focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 focus:outline-none"
                    @click="show === null ? (show = 1) : (show = null)"
                    role="button"
                    aria-label="option"
                  >
                    <svg
                      class="dropbtn"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M4.16667 10.8332C4.62691 10.8332 5 10.4601 5 9.99984C5 9.5396 4.62691 9.1665 4.16667 9.1665C3.70643 9.1665 3.33334 9.5396 3.33334 9.99984C3.33334 10.4601 3.70643 10.8332 4.16667 10.8332Z"
                        stroke="#9CA3AF"
                        stroke-width="1.25"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M10 10.8332C10.4602 10.8332 10.8333 10.4601 10.8333 9.99984C10.8333 9.5396 10.4602 9.1665 10 9.1665C9.53976 9.1665 9.16666 9.5396 9.16666 9.99984C9.16666 10.4601 9.53976 10.8332 10 10.8332Z"
                        stroke="#9CA3AF"
                        stroke-width="1.25"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M15.8333 10.8332C16.2936 10.8332 16.6667 10.4601 16.6667 9.99984C16.6667 9.5396 16.2936 9.1665 15.8333 9.1665C15.3731 9.1665 15 9.5396 15 9.99984C15 10.4601 15.3731 10.8332 15.8333 10.8332Z"
                        stroke="#9CA3AF"
                        stroke-width="1.25"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </button>
                  <div
                    class="dropdown-content bg-white shadow w-24 absolute z-30 right-0 mr-6"
                    v-if="show === 1"
                  >
                    <div
                      tabindex="0"
                      class="focus:outline-none focus:text-indigo-600 text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white"
                    >
                      <p>Edit</p>
                    </div>
                    <div
                      tabindex="0"
                      class="focus:outline-none focus:text-indigo-600 text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white"
                    >
                      <p>Delete</p>
                    </div>
                  </div>
                </div>
              </div>
            </td>
          </tr>
          <tr
            tabindex="0"
            class="focus:outline-none h-20 text-sm leading-none text-gray-700 border-b border-gray-200 bg-white hover:bg-gray-100"
          >
            <td class="pl-4">3</td>
            <td class="pl-11">
              <div class="flex items-center">
                <img
                  alt="profile picture"
                  class="shadow-md rounded-full w-10 h-10 mr-3"
                  src="https://cdn.tuk.dev/assets/templates/olympus/invoice(2).png"
                />
                Jordyn Korsgaard
              </div>
            </td>
            <td>
              <p class="mr-16 pl-10">28</p>
            </td>
            <td>
              <p class="mr-16">06/02/2020</p>
            </td>
            <td>
              <p class="mr-16">Product Designer</p>
            </td>
            <td>
              <div
                class="w-20 h-6 flex items-center mr-16 justify-center bg-yellow-50 rounded-full"
              >
                <p class="text-xs leading-3 text-yellow-700">Pending</p>
              </div>
            </td>
            <td>
              <div class="flex items-center">
                <button
                  class="focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 bg-gray-100 mr-3 hover:bg-gray-200 py-2.5 px-5 rounded text-sm leading-3 text-gray-600 focus:outline-none"
                >
                  Edit
                </button>
                <button
                  class="focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 bg-gray-100 mr-5 hover:bg-gray-200 py-2.5 px-5 rounded text-sm leading-3 text-gray-600 focus:outline-none"
                >
                  Call
                </button>
                <div class="relative px-5 pt-2">
                  <button
                    class="focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 focus:outline-none"
                    @click="show === null ? (show = 2) : (show = null)"
                    role="button"
                    aria-label="option"
                  >
                    <svg
                      class="dropbtn"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M4.16667 10.8332C4.62691 10.8332 5 10.4601 5 9.99984C5 9.5396 4.62691 9.1665 4.16667 9.1665C3.70643 9.1665 3.33334 9.5396 3.33334 9.99984C3.33334 10.4601 3.70643 10.8332 4.16667 10.8332Z"
                        stroke="#9CA3AF"
                        stroke-width="1.25"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M10 10.8332C10.4602 10.8332 10.8333 10.4601 10.8333 9.99984C10.8333 9.5396 10.4602 9.1665 10 9.1665C9.53976 9.1665 9.16666 9.5396 9.16666 9.99984C9.16666 10.4601 9.53976 10.8332 10 10.8332Z"
                        stroke="#9CA3AF"
                        stroke-width="1.25"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M15.8333 10.8332C16.2936 10.8332 16.6667 10.4601 16.6667 9.99984C16.6667 9.5396 16.2936 9.1665 15.8333 9.1665C15.3731 9.1665 15 9.5396 15 9.99984C15 10.4601 15.3731 10.8332 15.8333 10.8332Z"
                        stroke="#9CA3AF"
                        stroke-width="1.25"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </button>
                  <div
                    class="dropdown-content bg-white shadow w-24 absolute z-30 right-0 mr-6"
                    v-if="show === 2"
                  >
                    <div
                      tabindex="0"
                      class="focus:outline-none focus:text-indigo-600 text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white"
                    >
                      <p>Edit</p>
                    </div>
                    <div
                      tabindex="0"
                      class="focus:outline-none focus:text-indigo-600 text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white"
                    >
                      <p>Delete</p>
                    </div>
                  </div>
                </div>
              </div>
            </td>
          </tr>
          <tr
            tabindex="0"
            class="focus:outline-none h-20 text-sm leading-none text-gray-700 border-b border-gray-200 bg-white hover:bg-gray-100"
          >
            <td class="pl-4">4</td>
            <td class="pl-11">
              <div class="flex items-center">
                <img
                  alt="profile picture"
                  class="shadow-md rounded-full w-10 h-10 mr-3"
                  src="https://cdn.tuk.dev/assets/templates/olympus/invoice(3).png"
                />
                Kierra Curtis
              </div>
            </td>
            <td>
              <p class="mr-16 pl-10">28</p>
            </td>
            <td>
              <p class="mr-16">06/02/2020</p>
            </td>
            <td>
              <p class="mr-16">Product Designer</p>
            </td>
            <td>
              <div
                class="w-20 h-6 flex items-center mr-16 justify-center bg-blue-50 rounded-full"
              >
                <p class="text-xs leading-3 text-blue-600">Approved</p>
              </div>
            </td>
            <td>
              <div class="flex items-center">
                <button
                  class="focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 bg-gray-100 mr-3 hover:bg-gray-200 py-2.5 px-5 rounded text-sm leading-3 text-gray-600 focus:outline-none"
                >
                  Edit
                </button>
                <button
                  class="focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 bg-gray-100 mr-5 hover:bg-gray-200 py-2.5 px-5 rounded text-sm leading-3 text-gray-600 focus:outline-none"
                >
                  Call
                </button>
                <div class="relative px-5 pt-2">
                  <button
                    class="focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 focus:outline-none"
                    @click="show === null ? (show = 3) : (show = null)"
                    role="button"
                    aria-label="option"
                  >
                    <svg
                      class="dropbtn"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M4.16667 10.8332C4.62691 10.8332 5 10.4601 5 9.99984C5 9.5396 4.62691 9.1665 4.16667 9.1665C3.70643 9.1665 3.33334 9.5396 3.33334 9.99984C3.33334 10.4601 3.70643 10.8332 4.16667 10.8332Z"
                        stroke="#9CA3AF"
                        stroke-width="1.25"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M10 10.8332C10.4602 10.8332 10.8333 10.4601 10.8333 9.99984C10.8333 9.5396 10.4602 9.1665 10 9.1665C9.53976 9.1665 9.16666 9.5396 9.16666 9.99984C9.16666 10.4601 9.53976 10.8332 10 10.8332Z"
                        stroke="#9CA3AF"
                        stroke-width="1.25"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M15.8333 10.8332C16.2936 10.8332 16.6667 10.4601 16.6667 9.99984C16.6667 9.5396 16.2936 9.1665 15.8333 9.1665C15.3731 9.1665 15 9.5396 15 9.99984C15 10.4601 15.3731 10.8332 15.8333 10.8332Z"
                        stroke="#9CA3AF"
                        stroke-width="1.25"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </button>
                  <div
                    class="dropdown-content bg-white shadow w-24 absolute z-30 right-0 mr-6"
                    v-if="show === 3"
                  >
                    <div
                      tabindex="0"
                      class="focus:outline-none focus:text-indigo-600 text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white"
                    >
                      <p>Edit</p>
                    </div>
                    <div
                      tabindex="0"
                      class="focus:outline-none focus:text-indigo-600 text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white"
                    >
                      <p>Delete</p>
                    </div>
                  </div>
                </div>
              </div>
            </td>
          </tr>
          <tr
            tabindex="0"
            class="focus:outline-none h-20 text-sm leading-none text-gray-700 border-b border-gray-200 bg-white hover:bg-gray-100"
          >
            <td class="pl-4">5</td>
            <td class="pl-11">
              <div class="flex items-center">
                <img
                  alt="profile picture"
                  class="shadow-md rounded-full w-10 h-10 mr-3"
                  src="https://cdn.tuk.dev/assets/templates/olympus/invoice(4).png"
                />
                Terry Ekstrom Bothman
              </div>
            </td>
            <td>
              <p class="mr-16 pl-10">28</p>
            </td>
            <td>
              <p class="mr-16">06/02/2020</p>
            </td>
            <td>
              <p class="mr-16">Product Designer</p>
            </td>
            <td>
              <div
                class="w-20 h-6 flex items-center mr-16 justify-center bg-blue-50 rounded-full"
              >
                <p class="text-xs leading-3 text-blue-700">Approved</p>
              </div>
            </td>
            <td>
              <div class="flex items-center">
                <button
                  class="focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 bg-gray-100 mr-3 hover:bg-gray-200 py-2.5 px-5 rounded text-sm leading-3 text-gray-600 focus:outline-none"
                >
                  Edit
                </button>
                <button
                  class="focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 bg-gray-100 mr-5 hover:bg-gray-200 py-2.5 px-5 rounded text-sm leading-3 text-gray-600 focus:outline-none"
                >
                  Call
                </button>
                <div class="relative px-5 pt-2">
                  <button
                    class="focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 focus:outline-none"
                    @click="show === null ? (show = 4) : (show = null)"
                    role="button"
                    aria-label="option"
                  >
                    <svg
                      class="dropbtn"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M4.16667 10.8332C4.62691 10.8332 5 10.4601 5 9.99984C5 9.5396 4.62691 9.1665 4.16667 9.1665C3.70643 9.1665 3.33334 9.5396 3.33334 9.99984C3.33334 10.4601 3.70643 10.8332 4.16667 10.8332Z"
                        stroke="#9CA3AF"
                        stroke-width="1.25"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M10 10.8332C10.4602 10.8332 10.8333 10.4601 10.8333 9.99984C10.8333 9.5396 10.4602 9.1665 10 9.1665C9.53976 9.1665 9.16666 9.5396 9.16666 9.99984C9.16666 10.4601 9.53976 10.8332 10 10.8332Z"
                        stroke="#9CA3AF"
                        stroke-width="1.25"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M15.8333 10.8332C16.2936 10.8332 16.6667 10.4601 16.6667 9.99984C16.6667 9.5396 16.2936 9.1665 15.8333 9.1665C15.3731 9.1665 15 9.5396 15 9.99984C15 10.4601 15.3731 10.8332 15.8333 10.8332Z"
                        stroke="#9CA3AF"
                        stroke-width="1.25"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </button>
                  <div
                    class="dropdown-content bg-white shadow w-24 absolute z-30 right-0 mr-6"
                    v-if="show === 4"
                  >
                    <div
                      tabindex="0"
                      class="focus:outline-none focus:text-indigo-600 text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white"
                    >
                      <p>Edit</p>
                    </div>
                    <div
                      tabindex="0"
                      class="focus:outline-none focus:text-indigo-600 text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white"
                    >
                      <p>Delete</p>
                    </div>
                  </div>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "userTable",
};
</script>
