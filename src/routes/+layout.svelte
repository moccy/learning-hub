<script lang="ts">
  import "normalize.css";
  import "../app.scss";
  import Navbar from "$lib/components/nav/navBar.svelte";
  import type { LayoutData } from "./$types";
  import Breadcrumb from "$lib/components/nav/breadcrumb.svelte";
  import type BreadcrumbItem from "$lib/models/nav/breadcrumb";
  import { page } from "$app/stores";

  export let data: LayoutData;

  let breadcrumbItems: BreadcrumbItem[] = [];

  $: {
    const segments = $page.url.pathname?.split("/").filter(Boolean); // This removes any empty segments
    let accumulatedPath = "";
    breadcrumbItems =
      segments?.map((segment) => {
        accumulatedPath += `/${segment}`;
        return {
          label: segment.charAt(0).toUpperCase() + segment.slice(1), // Capitalize first letter
          url: accumulatedPath,
        };
      }) ?? [];
  }
</script>

<Navbar navItems={data.navItems} />
<Breadcrumb items={breadcrumbItems} />

<main class="container mx-auto my-4 lg:my-8 px-4">
  <slot />
</main>
