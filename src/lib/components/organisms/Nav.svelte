<script lang="ts">
  import DesktopNav from "../molecules/DesktopNav.svelte";
  import MobileNav from "../molecules/MobileNav.svelte";

  export let tabs: DesktopNav["$$prop_def"]["tabs"];
  export let active: DesktopNav["$$prop_def"]["active"];
  export let socials: DesktopNav["$$prop_def"]["socials"];
</script>

<div class="flex justify-between items-center p-4">
  <a href="/">
    <h1 class="hidden text-4xl font-bold md:block">[ReVanced]</h1>
    <h1 class="block text-4xl font-bold md:hidden">[RE]</h1>
  </a>
  <DesktopNav {tabs} {active} {socials} class="hidden md:flex" />
  <MobileNav {tabs} {active} {socials} class="md:hidden" />
</div>
