<script lang="ts"> 

    import ProjectSection from '../ProjectSection.svelte'; 
    import emblaCarouselSvelte from 'embla-carousel-svelte'
    import { onMount } from 'svelte';

    let viewportNode;
  let emblaInstance;
  onMount(() => {
    emblaInstance = emblaCarouselSvelte(viewportNode);
    console.log(emblaInstance)
  });
    let projects = [
        { title: 'Project 1', subtitle: 'Description 1', src: '/videos/tiktokversion.mp4', mediaType: 'video' },
        { title: 'Project 2', subtitle: 'Description 1', src: 'https://www.tiktok.com/tag/tamagotchi?refer=embed', mediaType: 'video' }
    ];

  let emblaApi
  let options = { loop: false, align: 'start' }

  function onInit(event) {
    emblaApi = event.detail
    console.log(emblaApi.slideNodes()) // Access API
  }

</script>

<style>
    .embla {
    overflow: hidden;
    grid-column: 1 / span 12;

  }
  .embla__container {
    display: flex;
    /* grid-column: 1 / span 12; */
  }
  .embla__slide {
    flex: 0 0 100%;
    /* min-width: 0; */
  }

</style>

    <!-- https://www.embla-carousel.com/get-started/svelte/ -->
    <div 
    class="embla" 
    use:emblaCarouselSvelte
    on:emblaInit="{onInit}"
    >
    <div class="embla__viewport" bind:this={viewportNode}>
      <div class="embla__container">
          <div class="embla__slide">
          <ProjectSection project={projects[0]} />
          </div>
          <div class="embla__slide">
          <ProjectSection project={projects[1]} />
          </div>
      </div>
    </div>
    <!-- <button class="embla__prev" on:click={() => emblaApi && emblaApi.scrollPrev()}>Prev</button>
    <button class="embla__next" on:click={() => emblaApi && emblaApi.scrollNext()}>Next</button> -->

    </div>

