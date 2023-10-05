<script lang="ts">
  import type BreadcrumbItem from "$lib/models/nav/breadcrumb";

  export let items: BreadcrumbItem[] = [];

  let lastIndex = items.length - 1;
</script>

<nav aria-label="breadcrumb" class="flex w-full bg-lime-950 px-4 py-1 text-xs">
  <ol class="container list-none p-0 mx-auto flex flex-wrap">
    {#each items as item, index}
      <li
        class="mr-1 {index === lastIndex
          ? 'active'
          : ''} after:content-['/'] last:after:content-['']"
      >
        {#if index === lastIndex}
          <span>{item.label}</span>
        {:else}
          <a href={item.url}>{item.label}</a>
        {/if}
      </li>
    {/each}
  </ol>
</nav>
