<script>
  import Button, { Icon, Label } from "@smui/button";
</script>

<div class="flex flex-col justify-center items-center mt-40 space-y-10">
  <h1 class="text-8xl font-bold">[RE]</h1>
  <p class="text-xl font-semibold">
    A simple, lightweight, and extensible framework for building ******* mods.
  </p>
  <div class="table space-x-4 text-center" style="border-spacing: 10px;">
    <Button
      color="primary"
      variant="raised"
      href="/download"
      class="table-cell w-1/2 h-16 text-xl"
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
      class="table-cell w-1/2 h-16 text-xl"
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
