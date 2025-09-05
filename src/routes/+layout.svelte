<script lang="ts">
  import { page } from "$app/stores";

  let username = "imccorve";
  let domain = "gmail";
  let tld = "com";

  function sendEmail() {
    window.location.href = `mailto:${username}@${domain}.${tld}`;
  }

  // Projects data for navigation
  export let projects = [
    {
      title: "AudioReactive Blob Tracking",
      subtitle:
        "Using Touchdesigner & computer vision I remixed footage from David Flaherty's 'Gift of Green' (1946), courtesy of the Perlinger Archives/Collection.",
      src: "https://www.youtube.com/embed/79bOJq-iLXQ?si=MLkCdnPxQOt4N3_3",
      mediaType: "twitter-video",
      slug: "/",
    },
    {
      title: "Computer Vision-Powered Party Flyer",
      subtitle:
        "Leveraged machine learning and Touchdesigner to correlate different gestures with specific audio and visuals in real-time.",
      src: "https://www.youtube.com/embed/8hOX5mp-MnA?feature=share",
      mediaType: "twitter-video",
      slug: "/",
    },
    {
      title: "Building An 'Interactive' Digital Pet",
      subtitle:
        "Coding and hardware integration project using python and an LED display.",
      src: "https://www.youtube.com/embed/sq4PbmjjUJk?si=zglUXN8a87WEdicD",
      extraLink: "/the-human-tamagotchi",
      mediaType: "twitter-video",
      slug: "/",
    },
    {
      title: "Particle System using openFrameworks",
      subtitle: "Created using openFrameworks https://openframeworks.cc/",
      mediaType: "vimeo",
      slug: "/",
    },
  ];

  $: currentPath = $page.url.pathname;
</script>

<filter id="photocopyEffect">
  <feTurbulence
    type="fractalNoise"
    baseFrequency="0.02"
    numOctaves="4"
    result="noise"
  />
  <feDisplacementMap
    in="SourceGraphic"
    in2="noise"
    scale="3"
    xChannelSelector="R"
    yChannelSelector="G"
  />
    <feGaussianBlur in="SourceGraphic" stdDeviation=".5" result="blurred" />

</filter>

<div class="layout-container">
    <title> Imoni McCorvey </title>
  <aside class="sidebar">
    <div class="sidebar-content">
      <div class="site-title">
        <a href="/"> IMONI MCCORVEY </a>
      </div>
      <p class="site-description">
        Experienced software engineer exploring creative applications of technology. Currently working on audio reactive visuals and hardware integration into creative projects.

        Based in Chicago.
      </p>

      <nav class="navigation">
        {#each projects as project, index}
          <a
      href="/#project-{index}"
      class="nav-link"
      class:active={currentPath === (index === 0 ? "/" : `/#project-${index}`)}
    >
            {project.title}
          </a>
        {/each}
      </nav>

      <div class="social-links">
        <button on:click={sendEmail} class="social-link">Email</button>
        <a href="https://www.instagram.com/imonitroni/" aria-label="Link to my instagram" target="_blank" rel="noopener noreferrer" class="social-link"
          >Instagram</a
        >
      </div>
    </div>
  </aside>

  <main class="main-content">
    <slot />
  </main>
</div>

<style>
  .layout-container {
    display: flex;
    min-height: 100vh;
    font-family: Arial, sans-serif;
    background-color: #f5f5f5;
  }

  /* Sidebar Styles */
  .sidebar {
    width: 300px;
    border-right: 1px solid #e0e0e0;
    position: fixed;
    height: 100vh;
    overflow-y: auto;
    z-index: 100;
  }

  .sidebar-content {
    padding: 40px 30px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .site-title {
    font-style: normal;
    font-size: 32px;
    font-weight: 400;
    margin: 0;
    filter: url(#photocopyEffect);
  }

  .site-title a {
    text-decoration: none;
    color: #A979D1;
  }

  .site-description {
    font-size: 14px;
    line-height: 1.5;
    /* color: #666; */
    margin: 0;
  }

  /* Navigation Styles */
  .navigation {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .nav-link {
    text-decoration: underline;
    color: #000;
    font-size: 14px;
    transition: color 0.2s ease;
  }

  .nav-link:hover {
    color: #666;
  }

  .nav-link.active {
    font-weight: bold;
  }

  /* Social Links */
  .social-links {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .social-link {
    text-decoration: underline;
    color: #000;
    font-size: 14px;
    background: none;
    border: none;
    padding: 0;
    text-align: left;
    cursor: pointer;
    font-family: inherit;
    transition: color 0.2s ease;
  }

  .social-link:hover {
    color: #666;
  }

  /* Main Content Styles */
  .main-content {
    margin-left: 300px;
    flex: 1;
    padding: 40px;
    background-color: #f5f5f5;
  }

  @media (max-width: 768px) {
    .layout-container {
      flex-direction: column;
    }

    .sidebar {
      position: relative;
      width: 100%;
      height: auto;
      border-right: none;
      border-bottom: 1px solid #e0e0e0;
    }

    .sidebar-content {
      padding: 20px;
      gap: 20px;
    }

    .site-title h1 {
      font-size: 14px;
      margin-bottom: 10px;
    }

    .site-description {
      font-size: 14px;
    }

    .main-content {
      margin-left: 0;
      padding: 20px;
    }

    .navigation,
    .social-links {
      gap: 5px;
    }
  }

  @media (max-width: 480px) {
    .sidebar-content {
      padding: 15px;
    }

    .main-content {
      padding: 15px;
    }
  }
</style>
