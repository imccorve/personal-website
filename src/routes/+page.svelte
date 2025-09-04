<script lang="ts">
  import ProjectSection from "../ProjectSection.svelte";

  let projects = [
    {
      title: "AudioReactive Blob Tracking",
      subtitle:
        "Using Touchdesigner & computer vision I remixed footage from David Flaherty's 'Gift of Green' (1946), courtesy of the Perlinger Archives/Collection.",
      src: "https://www.youtube.com/embed/79bOJq-iLXQ?si=MLkCdnPxQOt4N3_3",
      mediaType: "youtube-video",
      pageData: 2024,
    },
    {
      title: "Computer Vision-Powered Party Flyer",
      subtitle:
        "Leveraged machine learning and Touchdesigner to correlate different gestures with specific audio and visuals in real-time.",
      src: "https://www.youtube.com/embed/8hOX5mp-MnA?feature=share",
      mediaType: "youtube-video",
      pageData: 2023,
    },
    {
      title: "Building An 'Interactive' Digital Pet",
      subtitle:
        "Coding and hardware integration project using python and an LED display.",
      src: "https://www.youtube.com/embed/sq4PbmjjUJk?si=zglUXN8a87WEdicD",
      extraLink: "/the-human-tamagotchi",
      mediaType: "youtube-video",
      pageData: 2022,
    },
    {
      title: "Particle System using openFrameworks",
      subtitle: "Created using openFrameworks https://openframeworks.cc/",
      src: "https://player.vimeo.com/video/292496099?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      mediaType: "vimeo",
      pageData: 2019,
    },
  ];
</script>

<div class="page-container">
  <div class="projects-section">
    {#each projects as project, index}
      <div class="project-item" id="project-{index}">
        <ProjectSection {project} />
      </div>
    {/each}
  </div>
</div>

<style>
  .page-container {
    max-width: 100%;
    margin: 0 auto;
  }

  /* Projects Section */
  .projects-section {
    margin-bottom: 60px;
  }

  .project-item {
    margin-bottom: 40px;
    padding-bottom: 40px;
    border-bottom: 1px solid #f0f0f0;
  }

  .project-item:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }


  /* Mobile Responsiveness */
  @media (max-width: 768px) {

    .projects-section {
      margin-bottom: 40px;
    }

    .project-item {
      margin-bottom: 30px;
      padding-bottom: 30px;
    }
  }

</style>
