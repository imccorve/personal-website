<script lang="ts">
  export let project: {
    pageData: number;
    title: string;
    subtitle: string;
    src?: string;
    extraLink?: string;
    mediaType: string;
  };
</script>

<article class="project-container">
  <div class="project-content">
    <div class="project-title">{project.title}</div>
    <p class="project-description">{project.subtitle}</p>

    {#if project.extraLink}
      <a href={project.extraLink} class="project-link">View Details →</a>
    {/if}
  </div>

  <div>
    {#if project.src}
      <div class="page-number">{project.pageData}</div>
      <div class="project-media">
        {#if project.mediaType === "youtube-video"}
          <div class="video-container">
            <iframe
              src={project.src}
              title={project.title}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        {:else if project.mediaType === "vimeo"}
            <iframe src={project.src} frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style="top:0;left:0;width:100%;height:100%;" title="Particle_System_video"></iframe><script src="https://player.vimeo.com/api/player.js"></script>
        {:else}
          <div class="media-placeholder">
            <p>Media Content</p>
          </div>
        {/if}
      </div>
    {:else}
      <div class="project-media">
        <div class="media-placeholder">
          <p>Media Content</p>
        </div>
      </div>
    {/if}
  </div>
</article>

<style>
  .project-container {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 60px;
    font-size: 14px;
  }

  .project-media {
    position: relative;
    width: 100%;
    padding-top: 56.25%; /* 16:9 */
    background-color: #e8e8e8;
    border-radius: 4px;
    overflow: hidden;
  }

  .project-media iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .project-media img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .project-content {
    display: flex;
    flex-direction: column;
    /* gap: 15px; */
  }

  .project-title {
    margin: 0;
    color: #000;
    margin-bottom: 20px;
    text-decoration: underline;
  }

  .page-number {
    margin-bottom: 20px;
  }

  .project-description {
    line-height: 1.6;
    color: #000;
    margin: 0;
  }

  .project-link {
    text-decoration: underline;
    color: #000;
    font-weight: 500;
    transition: color 0.2s ease;
    align-self: flex-start;
  }

  .project-link:hover {
    color: #666;
  }

  .media-placeholder {
    width: 100%;
    height: 100%;
    background-color: #f0f0f0;
    border: 2px dashed #ccc;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    color: #999;
    font-size: 14px;
  }

  @media (max-width: 768px) {
    .project-container {
      grid-template-columns: 1fr;
      gap: 20px;
    }

    .project-media {
      height: 250px;
    }
  }

  @media (max-width: 480px) {
    .project-media {
      height: 70px;
    }
  }
</style>
