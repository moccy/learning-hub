<script lang="ts">
  import Card from "$lib/components/basic/card.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<h1 class="text-xl mb-6">Subjects</h1>

<div
  class="grid grid-cols-1 min-[480px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
>
  {#each data.subjects as subject}
    <Card
      title={subject.title}
      contents={subject.description}
      href="subjects/{subject.slug}"
    />
  {/each}
</div>
