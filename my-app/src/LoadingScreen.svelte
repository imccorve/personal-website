<script>
    import { isLoading } from '$lib/stores/loadingStore.js';
</script>
  
{#if $isLoading}
<div class="loading-screen">
  Loading...
</div>
{/if}

<style>
  .loading-screen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #edeaea;
    color: black;
    font-size: 2rem;
  }
</style>
