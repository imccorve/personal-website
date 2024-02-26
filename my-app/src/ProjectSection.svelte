<script>
  export let project;
</script>

<style>
    .project-display {
      grid-template-columns: repeat(12, 1fr);
      grid-gap: 20px;
      display: grid;
    }
    .media {
      grid-column: 2 / 7;
      /* min-height: 400pt; */
      /* display: flex; -- maintain aspect ratio
      justify-content: center;
      align-items: center;
      overflow: hidden; */
  height: 500px;
  overflow: hidden; /* Continue to hide overflow */
  display: flex; /* Use flexbox to center the video */
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
    }

    .media > video {
      /* width: 100%; -- Makes the video, iframe, or image expand to fill the container 
      height: auto; -- Ensures the height adjusts to maintain the aspect ratio 
      max-height: 100%; -- Prevents the video, iframe, or image from exceeding the container's height  */

      width: 100%;
  height: 100%;
  object-fit: cover; /* Cover the container without losing aspect ratio */
    }

    .information {
      grid-column: 7 / 12;
    }

    h1 {
      font-weight: 400;
      font-size: 4em;
      margin: 0;
    }

    p {
      margin-top: 0;
    }
    .subtitle {
      font-family: "Open Sans", sans-serif;
      font-size: 20px;
      font-weight: 200;
    }
    @media (max-width: 768px) {
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
    .information {
    }
    }
</style>
  
  
<div class="project-display">
  <div class="media"> 
    {#if project.mediaType === 'video'}
      <video src={project.src} controls controlsList="nodownload" aria-label="Ambient music with no speaking or necessary captions"></video>
      {:else if project.mediaType === 'twitter-video'}
      <!-- Twitter embed iframe (you'll need to use the proper embed code from Twitter) -->
      <iframe
        src={project.src}
        frameborder="0"
        allowfullscreen>
      </iframe>
      {:else}
      <img src={project.src} alt={project.title} />
    {/if}
  </div>
    <div class="information"> 
        <h1 class="title">{project.title}</h1>
        <p class="subtitle">{project.subtitle}</p>
    </div>
</div>

