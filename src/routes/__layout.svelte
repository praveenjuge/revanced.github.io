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

  //TODO: doesn't work. why?
  // $: active = tabs.find(
  //   (tab) =>
  //     ($page.url.pathname === "/" && tab.path === "/") ||
  //     $page.url.pathname.startsWith(tab.path)
  // );

  $: active = tabs.find((tab) => $page.url.pathname === tab.path);

  $: withWaves = $page.url.pathname === "/";
</script>

<svelte:head>
  <title>ReVanced</title>
  <meta property="og:title" content="ReVanced" />
  <meta
    property="og:description"
    content="A simple, lightweight, and extensible framework for building ******* mods."
  />
  <meta property="og:image" content="https://cataas.com/cat/gif" />
  <meta property="og:url" content="https://revanced.app" />
  <meta property="og:type" content="website" />
  <meta property="og:locale " content="en_US" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@revancedapp" />
  <meta name="twitter:site:id" content="@revancedapp" />
  <meta name="twitter:creator" content="@revancedapp" />
  <meta name="twitter:creator:id" content="@revancedapp" />
</svelte:head>

<Wave
  class="hidden md:block absolute bottom-0 w-full transition-all duration-1000 text-primary {withWaves
    ? 'h-1/2 opacity-100 blur-0'
    : 'h-full opacity-0 blur'}"
/>

<div class="flex overflow-hidden relative flex-col h-screen">
  <nav class="flex justify-between items-center p-4">
    <h1 class="hidden text-4xl font-bold md:block">[ReVanced]</h1>
    <h1 class="block text-4xl font-bold md:hidden">[RE]</h1>
    <div class="hidden sm:block">
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
