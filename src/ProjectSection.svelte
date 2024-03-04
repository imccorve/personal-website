<script>
  export let project;
</script>

<div class="project-display">
  <div class="media">
    {#if project.mediaType === "video"}
      <video
        src={project.src}
        controls
        controlsList="nodownload"
        aria-label="Ambient music with no speaking or necessary captions"
      ></video>
    {:else if project.mediaType === "twitter-video"}
      <!-- Twitter embed iframe (you'll need to use the proper embed code from Twitter) -->
      <iframe width="100%" height="100%" modestbranding=1 controls=0 src={project.src + '&modestbranding=1' + '&showinfo=0' + '&controls=0' + '&rel=0' + '&color=white' + '&fs=0' + '&loop=1'} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    {:else}
      <img src={project.src} alt={project.title} />
    {/if}
  </div>
  <div class="information">
    <h1 class="title">{project.title}</h1>
    <p class="subtitle">{project.subtitle}</p>
  </div>
</div>

<style>
    .project-display {
      display: flex;
  }
  .media {
    height: 500px;
    overflow: hidden; /* Continue to hide overflow */
    display: flex; /* Use flexbox to center the video */
    justify-content: center; /* Center horizontally */
    align-items: center; /* Center vertically */
    margin-right: 20px;
    min-width: 50%;
  }

  .media > video {
    /* 
      max-height: 100%; -- Prevents the video, iframe, or image from exceeding the container's height  */
    width: 100%;
    height: 100%;
    object-fit: cover; /* Cover the container without losing aspect ratio */
  }

  h1 {
    font-weight: 400;
    font-size: 4em;
    margin: 0;
  }

  p {
    margin: 0;
  }
  .subtitle {
    font-family: "Open Sans", sans-serif;
    font-size: 20px;
    font-weight: 200;
  }
  @media (max-width: 1280px) {
    .project-display {
      display: flex;
      flex-direction: column-reverse;
      align-items: flex-start; /* Align to the start of the container */
      grid-row-gap: 32px;
    }
    .media {
      width: 100%;
    }

    h1 {
      font-size: 40px;
    }
  }
</style>
