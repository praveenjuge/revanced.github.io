<script lang="ts" context="module">
  /** @type {import('./__layout').Load} */
  export async function load({ fetch }) {
    const response = await fetch("/docs.json");
    const docs = await response.json();

    return {
      props: { docs },
    };
  }
</script>

<script lang="ts">
  import { page } from "$app/stores";
  import Drawer, { AppContent, Content } from "@smui/drawer";
  import List, { Item, Text } from "@smui/list";
</script>

<div class="flex overflow-hidden mb-4 h-full">
  <Drawer class="bg-transparent">
    <Content>
      <List>
        {#each $$props.docs as doc}
          <Item href={doc.path} activated={$page.url.pathname === doc.path}>
            <Text>{doc.meta.title}</Text>
          </Item>
        {/each}
      </List>
    </Content>
  </Drawer>

  <AppContent class="overflow-y-auto w-full">
    <main class="px-4 mx-auto max-w-screen-lg markdown">
      <slot />
    </main>
  </AppContent>
</div>
