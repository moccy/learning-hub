<script lang="ts">
  export let data;
</script>

<div class="main-content mb-12">
  {#if data.htmlContent}
    {@html data.htmlContent}
  {:else}
    <p>No content here yet, go and create a markdown file for your content!</p>
  {/if}
</div>

<style lang="scss">
  .main-content {
    :global(h1) {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }

    :global(h2) {
      font-size: 1.25rem;
      margin: 1rem 0;
    }

    :global(h3) {
      font-size: 1.15rem;
      margin: 1rem 0;
    }

    :global(p) {
      margin: 1rem 0;
    }

    :global(ul) {
      list-style-type: disc;
      list-style-position: outside;
      margin-bottom: 1rem;

      :global(li) {
        &:first-child {
          margin-top: 0.2rem;
        }
        margin-left: 1rem;
        margin-bottom: 0.2rem;
      }
    }
  }
</style>
