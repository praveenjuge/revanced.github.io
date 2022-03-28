<script lang="ts">
  import { page } from "$app/stores";
  import Wave from "$lib/components/atoms/Wave.svelte";
  import Nav from "$lib/components/organisms/Nav.svelte";
  import { Discord, Github, Reddit, Twitter } from "@steeze-ui/simple-icons";
  import "../app.css";
  import "../styles/markdown.scss";
  import "../styles/prism.scss";

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

  const socials = [
    { href: "https://github.com/ReVancedTeam", icon: Github },
    { href: "https://discord.gg/revanced", icon: Discord },
    { href: "https://reddit.com/r/revancedapp", icon: Reddit },
    { href: "https://twitter.com/revancedapp", icon: Twitter },
  ];

  $: isHome = $page.url.pathname === "/";

  $: active = tabs.find(
    (tab) =>
      (isHome && tab.path === "/") ||
      ($page.url.pathname.startsWith(tab.path) && tab.path !== "/")
  );

  $: title =
    isHome || active == null ? "ReVanced" : `ReVanced • ${active.label}`;
</script>

<svelte:head>
  <title>{title}</title>
  <meta property="og:title" content={title} />
  <meta
    property="og:description"
    content="A simple, lightweight, and extensible framework for building ******* mods."
  />
  <meta property="og:image" content="https://cataas.com/cat/gif" />
  <meta property="og:url" content={$page.url.href} />
  <meta property="og:type" content="website" />
  <meta property="og:locale " content="en_US" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@revancedapp" />
  <meta name="twitter:site:id" content="@revancedapp" />
  <meta name="twitter:creator" content="@revancedapp" />
  <meta name="twitter:creator:id" content="@revancedapp" />
</svelte:head>

<Wave
  class="hidden md:block absolute bottom-0 w-full transition-all duration-1000 text-primary {isHome
    ? 'h-1/2 opacity-100 blur-0'
    : 'h-full opacity-0 blur'}"
/>

<div class="flex overflow-hidden relative flex-col h-screen">
  <Nav {tabs} {active} {socials} />
  <slot />
</div>
