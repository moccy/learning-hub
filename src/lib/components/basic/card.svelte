<script lang="ts">
  export let title: string = "";
  export let contents: string = "";
  export let href: string = "";

  export let maxContentChars = 96;

  const truncatedContents =
    contents.length > maxContentChars
      ? contents.slice(0, maxContentChars) + "..."
      : contents;

  const element = href ? "a" : "href";
  const classes = "card flex flex-col items-center rounded-md h-44 bg-lime-900";
</script>

<svelte:element this={element} {href} class={classes}>
  <p class="bg-lime-950 w-full px-2 py-1 overflow-hidden rounded-t-md">
    {title}
  </p>
  <p class="flex-grow text-ellipsis w-full px-2 py-1 overflow-hidden">
    {truncatedContents}
  </p>
</svelte:element>
