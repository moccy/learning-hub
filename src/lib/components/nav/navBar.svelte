<script lang="ts">
  import NavItem from "./navItem.svelte";
  import { navItemData } from "$lib/data/nav/navItems";
</script>

<nav class="py-3 bg-lime-800 text-white shadow-md">
  <ul class="flex container mx-auto">
    {#each navItemData as navItem, i}
      <NavItem isFirst={i === 0} link={navItem.link} text={navItem.text} />
    {/each}
  </ul>
</nav>
