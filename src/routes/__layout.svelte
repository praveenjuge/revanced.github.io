<script lang="ts">
  import { page } from "$app/stores";
  import Wave from "$lib/components/atoms/Wave.svelte";
  import Tab, { Icon, Label } from "@smui/tab";
  import TabBar from "@smui/tab-bar";
  import "../app.css";

  const tabs = [
    {
      label: "Home",
      icon: "home",
      path: "/",
    },
    {
      label: "Download",
      icon: "download",
      path: "/download",
    },
    {
      label: "Docs",
      icon: "book",
      path: "/docs",
    },
  ];

  $: active = tabs.find((tab) => tab.path === $page.url.pathname);
  $: withWaves = $page.url.pathname === tabs[0].path;
</script>

<Wave
  class="hidden md:block absolute bottom-0 w-full transition-all duration-1000 text-primary {withWaves
    ? 'h-1/2 opacity-100 blur-0'
    : 'h-full opacity-0 blur'}"
/>

<div class="flex overflow-hidden relative flex-col h-screen">
  <nav class="flex justify-between items-center p-4">
    <h1 class="hidden text-4xl font-bold md:block">[ReVanced]</h1>
    <h1 class="block text-4xl font-bold md:hidden">[RE]</h1>
    <div
      class="hidden px-5 w-min rounded-lg sm:block md:px-10 mdc-elevation--z5"
    >
      <TabBar {tabs} {active} let:tab>
        <Tab {tab} href={tab.path}>
          <Icon class="material-icons">{tab.icon}</Icon>
          <Label>{tab.label}</Label>
        </Tab>
      </TabBar>
    </div>
    <h1 class="block text-4xl font-bold sm:hidden">[=]</h1>
  </nav>

  <slot />
</div>
