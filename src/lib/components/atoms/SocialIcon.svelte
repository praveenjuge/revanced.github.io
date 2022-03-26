<script lang="ts">
  import type { IconSource } from "@steeze-ui/simple-icons/types";
  import { Icon } from "@steeze-ui/svelte-icon";

  export let href: string;
  export let icon: IconSource;
</script>

<a
  {href}
  target="_blank"
  rel="noopener noreferrer"
  class="fill-current text-white/50 hover:text-primary transition-colors"
>
  <Icon src={icon} class="w-6 h-6" />
</a>
