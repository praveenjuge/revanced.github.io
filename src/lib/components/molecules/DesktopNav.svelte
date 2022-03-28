<script lang="ts">
  import Tab, { Icon, Label } from "@smui/tab";
  import TabBar from "@smui/tab-bar";
  import SocialIcon from "../atoms/SocialIcon.svelte";

  interface ITab {
    label: string;
    icon: string;
    path: string;
  }

  export let tabs: ITab[];
  export let active: ITab;

  export let socials: SocialIcon["$$prop_def"][];
</script>

<nav class="flex {$$props.class}">
  <TabBar {tabs} {active} let:tab>
    <Tab {tab} href={tab.path}>
      <Icon class="material-icons">{tab.icon}</Icon>
      <Label>{tab.label}</Label>
    </Tab>
  </TabBar>
  <div class="flex items-center space-x-6 ml-6">
    {#each socials as socialIcon}
      <SocialIcon {...socialIcon} />
    {/each}
  </div>
</nav>
