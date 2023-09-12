<script lang="ts">
  import "normalize.css";
  import "../app.scss";
  import Navbar from "$lib/components/nav/navBar.svelte";
  import type { LayoutData } from "./$types";

  export let data: LayoutData;
</script>

<Navbar navItems={data.navItems} />

<main class="container mx-auto my-4 lg:my-8 px-4">
  <slot />
</main>
