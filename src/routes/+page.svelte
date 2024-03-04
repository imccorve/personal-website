<script lang="ts">
  import ProjectSection from "../ProjectSection.svelte";
  import emblaCarouselSvelte from "embla-carousel-svelte";
  import ArrowIcon from "../components/ArrowIcon.svelte";

  let projects = [
    {
      title: "AudioReactive Blob Tracking",
      subtitle: "Using Touchdesigner & computer vision I remixed footage from David Flaherty's 'Gift of Green' (1946), courtesy of the Perlinger Archives/Collection.",
      src: "https://www.youtube.com/embed/79bOJq-iLXQ?si=MLkCdnPxQOt4N3_3",
      mediaType: "twitter-video",
    },
    {
      title: "Building An 'Interactive' Digital Pet",
      subtitle: "Coding and hardware integration project using python and an LED display.",
      src: "https://www.youtube.com/embed/sq4PbmjjUJk?si=zglUXN8a87WEdicD",
      mediaType: "twitter-video",
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
<div class="embla__section">
  <button class="prev-button" on:click={scrollPrev} disabled={!prevButtonEnabled}>
    <ArrowIcon style={"transform: scale(-1, 1); transform-origin: center;"}/>
  </button>
  <div class="embla">
    <div
      class="embla__viewport"
      use:emblaCarouselSvelte={{ options, plugins }}
      on:emblaInit={onInit}
    >
      <div class="embla__container">
        {#each projects as project}
          <div class="embla__slide">
            <ProjectSection {project} />
          </div>
        {/each}
      </div>
    </div>
  </div>
  <button class="next-button" on:click={scrollNext}  disabled={!nextButtonEnabled}>
    <ArrowIcon />
  </button>
</div>

<style>
  .prev-button, .next-button {
    grid-column: span 1;

    /* override button styles */
    cursor: pointer;
    background-color: transparent;
    border: none;
    margin: 0;
    padding: 0;
    text-align: inherit;
    font: inherit;
    border-radius: 0;
    appearance: none;

  }
  .embla__section {
    display: contents; /* This makes .embla__section not generate a box itself, allowing its children to directly participate in the grid layout defined by .grid-container */
  }
  .embla {
    overflow: hidden;
    grid-column: span 10;
  }
  .embla__container {
    display: flex;
  }
  .embla__slide {
    flex: 0 0 100%;
    min-width: 0;
    display: grid;
  }
  .embla__viewport, .embla__container {
}

</style>
