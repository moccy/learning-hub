<script lang="ts">
  import "normalize.css";
  import "../app.scss";

  import Navbar from "$lib/components/nav/navBar.svelte";
</script>

<Navbar />

<main class="container mx-auto">
  <slot />
</main>
