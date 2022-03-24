<script>
  import Button, { Icon, Label } from "@smui/button";
</script>

<div
  class="flex flex-col justify-center items-center px-4 space-y-10 h-full text-center md:h-2/3"
>
  <h1 class="text-8xl font-bold">[RE]</h1>
  <p class="text-xl font-semibold">
    A simple, lightweight, and extensible framework for building ******* mods.
  </p>
  <div class="flex flex-col space-y-4 sm:table" style="border-spacing: 10px;">
    <Button
      color="primary"
      variant="raised"
      href="/download"
      class="h-16 text-xl sm:table-cell sm:w-1/2"
    >
      <Icon
        class="material-icons"
        style="font-size: 2rem; width: 2rem; height: 2rem; margin-right: 0.5rem;"
      >
        download
      </Icon>
      <Label>Download</Label>
    </Button>
    <Button
      color="secondary"
      variant="raised"
      href="/docs"
      class="h-16 text-xl sm:table-cell sm:w-1/2"
    >
      <Icon
        class="material-icons"
        style="font-size: 2rem; width: 2rem; height: 2rem; margin-right: 0.5rem;"
      >
        book
      </Icon>
      <Label>Learn More</Label>
    </Button>
  </div>
</div>
