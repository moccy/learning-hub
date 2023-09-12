<script lang="ts">
  export let text: string = "";
  export let link: string = "/";
  export let isFirst: boolean = false;
</script>

<li class={isFirst ? "mr-auto" : "mr-6"}>
  <a class="hover:underline" href={link}>{text}</a>
</li>
