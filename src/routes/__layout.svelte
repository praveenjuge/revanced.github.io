<script lang="ts">
  import { page } from "$app/stores";
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

  let active = tabs.find((tab) => tab.path === $page.url.pathname);
</script>

<nav class="flex justify-between items-center p-5">
  <h1 class="text-4xl font-bold">[ReVanced]</h1>
  <div class="px-10 w-min rounded-lg mdc-elevation--z5">
    <TabBar {tabs} let:tab bind:active>
      <Tab {tab} href={tab.path}>
        <Icon class="material-icons">{tab.icon}</Icon>
        <Label>{tab.label}</Label>
      </Tab>
    </TabBar>
  </div>
</nav>

<slot />
