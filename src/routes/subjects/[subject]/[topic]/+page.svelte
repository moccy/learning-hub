<script lang="ts">
  import Card from "$lib/components/basic/card.svelte";

  export let data;
</script>

<h1 class="text-xl mb-6">{data.topic?.title ?? "Topic Title Missing"}</h1>

{#if data.subtopics?.length}
  <div
    class="grid grid-cols-1 min-[480px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
  >
    {#each data.subtopics as subtopic}
      <Card
        href="{data.topic?.slug}/{subtopic.slug}"
        title={subtopic.title}
        contents={subtopic.description}
      />
    {/each}
  </div>
{:else}
  <p>No topics available for this subject.</p>
{/if}
