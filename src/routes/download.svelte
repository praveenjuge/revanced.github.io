<script>
  import Changelog from "$lib/components/atoms/Changelog.svelte";
  import Button from "@smui/button";
  import Tab, { Icon, Label } from "@smui/tab";
  import TabBar from "@smui/tab-bar";

  const tabs = [
    {
      label: "Stable",
      icon: "check",
      branch: "main",
    },
    {
      label: "Pre-Release",
      icon: "warning",
      branch: "dev",
    },
  ];

  let active = tabs[1];
</script>

<div
  class="flex overflow-hidden flex-col p-4 mx-auto space-y-4 w-full max-w-screen-lg h-full"
>
  <TabBar {tabs} let:tab bind:active>
    <Tab {tab} href={tab.path}>
      <Icon class="material-icons">{tab.icon}</Icon>
      <Label>{tab.label}</Label>
    </Tab>
  </TabBar>

  <div class="overflow-y-auto h-full">
    <Changelog repo="ReVancedTeam/revanced-patcher" branch={active.branch} />
  </div>

  <Button
    href="https://cataas.com/cat/says/you are too early"
    color="primary"
    variant="raised"
    class="h-16 text-xl"
  >
    <Icon
      style="font-size: 2rem; width: 2rem; height: 2rem; margin-right: 0.5rem;"
      class="material-icons"
    >
      download
    </Icon>
    <Label>Download</Label>
  </Button>
</div>
