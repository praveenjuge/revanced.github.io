<script lang="ts">
  import CircularProgress from "@smui/circular-progress";
  import { Icon } from "@smui/tab";
  import DOMPurify from "dompurify";
  import { marked } from "marked";

  export let repo: string;
  export let branch = "main";

  $: changelogPromise = fetch(
    `https://raw.githubusercontent.com/${repo}/${branch}/CHANGELOG.md`
  )
    .then((response) => {
      if (response.ok) {
        return response.text();
      } else {
        throw new Error(`${response.status} ${response.statusText}`);
      }
    })
    .then((text) => DOMPurify.sanitize(marked(text)));
</script>

<div class="h-full changelog">
  {#await changelogPromise}
    <div class="flex justify-center items-center h-full">
      <CircularProgress indeterminate class="w-32 h-32" />
    </div>
  {:then changelog}
    {@html changelog}
  {:catch}
    <div class="flex justify-center items-center h-full text-center">
      <div class="text-lg font-bold text-center text-gray-300">
        <Icon class="text-5xl material-icons">error</Icon>
        <p>An error occurred while fetching the changelog.</p>
        <p>Please try again later.</p>
      </div>
    </div>
  {/await}
</div>

<style lang="scss">
  .changelog:global {
    @apply flex flex-col space-y-4;

    h1 {
      @apply text-3xl font-bold;
    }

    h3 {
      @apply text-xl font-bold;
    }

    ul {
      @apply list-disc list-inside;
    }

    a {
      color: #ff4151;
    }
  }
</style>
