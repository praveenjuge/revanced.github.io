<script lang="ts">
  import Tab, { Label } from "@smui/tab";
  import TabBar from "@smui/tab-bar";
  import "../app.css";
</script>

<nav class="flex justify-between items-center p-5">
  <h1 class="text-4xl font-bold">[ReVanced]</h1>
  <div class="px-10 w-min rounded-lg mdc-elevation--z5">
    <TabBar tabs={["Home", "Download", "Documentation"]} let:tab>
      <Tab {tab}>
        <Label>{tab}</Label>
      </Tab>
    </TabBar>
  </div>
</nav>

<slot />
