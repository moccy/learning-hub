<script lang="ts">
  import NavItem from "./navItem.svelte";
  import type NavItemModel from "$lib/models/nav/navItem";

  export let navItems: NavItemModel[] = [];
</script>

<nav class="py-3 px-4 bg-lime-800 text-white shadow-md">
  <ul class="flex container mx-auto">
    {#each navItems as navItem, i}
      <NavItem isFirst={i === 0} link={navItem.link} text={navItem.text} />
    {/each}
  </ul>
</nav>
