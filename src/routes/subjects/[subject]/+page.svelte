<script lang="ts">
  import Card from "$lib/components/basic/card.svelte";

  export let data;
</script>

<h1 class="text-xl mb-6">{data.subject?.title ?? "Subject Title Missing"}</h1>

<div
  class="grid grid-cols-1 min-[480px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
>
  {#if data.topics?.length}
    {#each data.topics as topic}
      <Card
        href="{data.subject?.slug}/{topic.slug}"
        title={topic.title}
        contents={topic.description}
      />
    {/each}
  {:else}
    <p>No topics available for this subject.</p>
  {/if}
</div>
