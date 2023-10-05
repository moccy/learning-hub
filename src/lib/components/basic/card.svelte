<script lang="ts">
  export let title: string = "";
  export let contents: string = "";
  export let href: string = "";
  const element = href ? "a" : "div";
  const classes =
    "card flex flex-col items-center rounded-md bg-lime-900 hover:bg-blue-500";
</script>

<svelte:element this={element} {href} class={classes}>
  <p
    class="basis-auto shrink-0 bg-lime-950 w-full px-2 py-1 overflow-hidden rounded-t-md"
  >
    {title}
  </p>
  <p class="text-ellipsis w-full px-2 py-1 overflow-hidden text-sm">
    {contents}
  </p>
</svelte:element>
