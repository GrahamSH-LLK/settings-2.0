<template>
  <div class="bg-gray-700 min-h-screen">
    <TabGroup>
      <div class="bg-gray-800 p-4 text-white flex justify-between">
        <div class="flex">
          <img class="h-8 w-8 inline mx-4 self-center" src="/logo.svg" />
          <h1 class="text-2xl inline self-center">Addons</h1>
        </div>
        <div>
          <TabList class="flex p-1 space-x-1 bg-blue-900/20 rounded-xl">
            <Tab v-slot="{ selected }" v-for="tab of tabs" :key="tab">
              <button
                :class="[
                  'w-full py-2.5 text-sm leading-5 font-medium rounded-xl px-2',
                  'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60',
                  selected
                    ? 'bg-gradient-to-br from-yellow-500 to-yellow-600 shadow'
                    : ' hover:bg-white/[0.12] hover:text-white',
                ]"
              >
                {{tab}}
              </button>
            </Tab>
          </TabList>
        </div>
        <div class="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 self-center cursor-pointer mr-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 self-center cursor-pointer mr-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 self-center cursor-pointer mr-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            title="This is a proof of concept"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
      </div>
      <TabPanels>
        <TabPanel>Home!</TabPanel>
        <TabPanel>Content 2</TabPanel>
        <TabPanel>Content 3</TabPanel>
      </TabPanels>
    </TabGroup>
  </div>
</template>

<script>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";

export default {
  components: {
    TabGroup,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
  },
  data() {
    return {tabs: ["Home", "Popup", "Themes", "Forums"]}
    }
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Sora:wght@100;200;300;400;500;600;700;800&display=swap");
</style>
