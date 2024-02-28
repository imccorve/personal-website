<script lang="ts">
  import ProjectSection from "../ProjectSection.svelte";
  import emblaCarouselSvelte from "embla-carousel-svelte";  

  let projects = [
    {
      title: "Project 1",
      subtitle: "Using touchdesigner created audio reactive visuals.",
      src: "/videos/tiktokversion.mp4",
      mediaType: "video",
    },
    {
      title: "Project 2",
      subtitle: "Description 1",
      src: "https://www.tiktok.com/tag/tamagotchi?refer=embed",
      mediaType: "video",
    },
  ];

  let emblaApi;
  let options = { loop: true };
  let plugins = [];

  let prevButtonEnabled = false;
  let nextButtonEnabled = false;

  const onInit = () => {
    emblaApi = event.detail;
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    onSelect();
  };

  const onSelect = () => {
    if (!emblaApi) return;
    prevButtonEnabled = emblaApi.canScrollPrev();
    nextButtonEnabled = emblaApi.canScrollNext();
  };

  const scrollPrev = () => {
    if (emblaApi) emblaApi.scrollPrev();
  };

  const scrollNext = () => {
    if (emblaApi) emblaApi.scrollNext();
  };

</script>

<!-- https://www.embla-carousel.com/get-started/svelte/ -->
<div class="embla">
  <div class="embla__viewport" use:emblaCarouselSvelte={{ options, plugins }} on:emblaInit={onInit}>
    <div class="embla__container">
      {#each projects as project}
      <div class="embla__slide">
        <ProjectSection project={project} />
      </div>
      {/each}
    </div>
  </div>
  <button class="embla__prev" on:click={() => { 
      scrollPrev()
      console.log("pressed")
    }}
    disabled={!prevButtonEnabled}
  >
    Prev
  </button>
  <button class="embla__next" on:click={() => {
      scrollNext()
      console.log("pressed")
    }}
    disabled={!nextButtonEnabled}
  >
    Next
  </button>
</div>

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
    min-width: 0;
  }
</style>
