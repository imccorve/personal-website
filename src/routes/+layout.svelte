<script lang="ts">
  import { browser } from "$app/environment";
  import * as THREE from "three";
  import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
  import LoadingScreen from "../LoadingScreen.svelte";
  import { isLoading } from "$lib/stores/loadingStore.js";
  import SocialMedia from "../components/SocialMedia.svelte";

  if (browser) {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    const objLoader = new OBJLoader();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.domElement.style.position = "fixed";
    renderer.domElement.style.top = "0";
    renderer.domElement.style.left = "0";
    renderer.domElement.style.zIndex = "-1"; // Ensure it's behind other content
    document.body.appendChild(renderer.domElement);
    let loadedObject = null;

    objLoader.load(
      "models/hundepaar_medium_res.obj",
      function (object) {
        console.log(object);

        const degreesToRadians = (degrees) => degrees * (Math.PI / 180);

        scene.add(object);
        loadedObject = object;
        console.log("Model loaded, setting isLoading to false");

        isLoading.set(false);
      },
      function (xhr) {
        // onProgress callback
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      },
      function (error) {
        console.error("An error happened loading the OBJ file", error);
      },
    );
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    camera.position.z = 4;

    function animate() {
      requestAnimationFrame(animate);

      if (loadedObject) {
        loadedObject.rotation.y += 0.005;
      }

      renderer.render(scene, camera);
    }
    animate();
  }

  let username = "imoni.mccorvey";
  let domain = "gmail";
  let tld = "com";

  // Function to handle the contact click event
  function sendEmail() {
    window.location.href = `mailto:${username}@${domain}.${tld}`;
  }
</script>

<filter id="photocopyEffect">
  <feTurbulence
    type="fractalNoise"
    baseFrequency="0.02"
    numOctaves="3"
    result="noise"
  />
  <feDisplacementMap
    in="SourceGraphic"
    in2="noise"
    scale="10"
    xChannelSelector="R"
    yChannelSelector="G"
  />
</filter>

<filter id="distressInkEffect3" x="0%" y="0%" width="100%" height="100%">
  <feTurbulence
    type="fractalNoise"
    baseFrequency="0.01"
    numOctaves="3"
    stitchTiles="stitch"
    result="turbulence"
  />
  <feDisplacementMap
    in="SourceGraphic"
    in2="turbulence"
    scale="2"
    xChannelSelector="R"
    yChannelSelector="G"
  />
  <feGaussianBlur in="SourceGraphic" stdDeviation=".8" result="blurred" />

  <feComponentTransfer in="blurred" result="contrast">
    <feFuncA type="table" tableValues="0 1" />
  </feComponentTransfer>
  <feComposite
    in="sharpened"
    in2="noise"
    operator="arithmetic"
    k1="0"
    k2="1"
    k3="1"
    k4="0"
    result="composite"
  />
</filter>

{#if $isLoading}
  <LoadingScreen />
{:else}
  <div class="grid-container">
    <div class="header">
      <a href="/">
        <h2>IMONI MCCORVEY</h2>
      </a>
      <SocialMedia />
    </div>
    <slot/>
    <footer class="footer">
      <button on:click={sendEmail}>
        <h2>CONTACT</h2>
      </button>
      <a href="/about">
        <h2>ABOUT</h2>
      </a>
    </footer>
  </div>
{/if}

<style>
  .grid-container {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 20px;
    grid-row-gap: 64px;
    margin: 20px 4px;
    font-family: "IBM Plex Mono", monospace;
  }

  /* Header */
  .header {
    grid-column: 1 / -1;
    display: flex;
    justify-content: space-between; /* Align items to the ends of the container */
    align-items: center;
  }

  /* Footer */
  .footer {
    grid-column: 1 / -1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    filter: url(#photocopyEffect);
  }

  h2 {
    font-style: normal;
    font-size: 32px;
    font-weight: 400;
    margin: 0;
    filter: url(#distressInkEffect3);
    margin-right: 20px;
  }

  a {
    text-decoration: none;
  }

  button {
    font-style: normal;
    font-size: 32px;
    font-weight: 400;

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

  @media (max-width: 768px) {
    .grid-container {
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 10px;
      grid-row-gap: 32px;
    }

    .footer {
      flex-direction: column;
      align-items: flex-start;
    }

    .footer h2 {
      margin: 0;
    }

    h2 {
      font-size: 24px;
    }
  }
</style>
