<script lang="ts"> 

    import { browser } from '$app/environment';
    import * as THREE from 'three';
    // import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
    import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
    
    if(browser) {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
      
      const renderer = new THREE.WebGLRenderer({ alpha: true });
      // const loader = new GLTFLoader();
      const objLoader = new OBJLoader();
        renderer.setSize( window.innerWidth, window.innerHeight );
        renderer.domElement.style.position = 'fixed'; // Position the canvas
    renderer.domElement.style.top = '0';
    renderer.domElement.style.left = '0';
    renderer.domElement.style.zIndex = '-1'; // Ensure it's behind other content
        document.body.appendChild( renderer.domElement );
        let loadedObject = null; // This variable will hold the reference to your loaded object

          objLoader.load(
            'models/Hundepaar.OBJ', // path to your .obj file
            function (object) { // onLoad callback
              console.log(object); // Inspect the object structure in the browser console

              const degreesToRadians = (degrees) => degrees * (Math.PI / 180);
              
              object.rotation.x = Math.PI;
              object.rotation.y = Math.PI;
              scene.add(object);
              loadedObject = object; // Save the loaded object for later use

            },
            function (xhr) { // onProgress callback
              console.log((xhr.loaded / xhr.total * 100) + '% loaded');
            },
            function (error) { // onError callback
              console.error('An error happened loading the OBJ file', error);
            }
          );
        const geometry = new THREE.BoxGeometry( 1, 1, 1 );
        const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
        const cube = new THREE.Mesh( geometry, material );
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // soft white light
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(1, 1, 1); // Adjust as needed
scene.add(directionalLight);

        // scene.add( cube );

        camera.position.z = 1000;

        function animate() {
            requestAnimationFrame( animate );

                    // Rotate cube
        cube.rotation.x += 0.01;
        loadedObject.rotation.y -= 0.01;

            renderer.render( scene, camera );
        }
        animate();
    }

    let projects = [
        { title: 'Project 1', subtitle: 'Description 1', src: '/path/to/resource1', type: 'image', mediaType: 'img' },
        { title: 'Project 2', subtitle: 'Description 1', src: '/path/to/resource1', type: 'image', mediaType: 'img' }
    ];

    let username = 'imoni.mccorvey';
  let domain = 'gmail';
  let tld = 'com';

  // Function to handle the click event
  function sendEmail() {
    // Combine the parts and initiate the mailto action
    window.location.href = `mailto:${username}@${domain}.${tld}`;
  }

</script>

<style>
    .grid-container {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      grid-gap: 20px;
      grid-row-gap: 64px;
      margin: 20px 4px;
      font-family: 'IBM Plex Mono', monospace;
    }

    /* Header */
    .header {
        grid-column: 1 / -1;
        font-size: 32;
        margin-bottom: 24;
    }

    /* Footer */
    .footer {
        grid-column: 1 / -1;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    h2 {
      font-style: normal;
      font-size: 32px;
      font-weight: 400;
      margin: 0;
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
          align-items: flex-start; /* Align to the start of the container */
      }
  
      .footer h2 {
          margin:0;
      }

      h2 {
        font-size: 24px;
      }
  }

</style>

<div class="grid-container">
    <div class="header"> 
        <a href="/">
        <h2>IMONI MCCORVEY</h2>
    </a>
    </div>
 
    <slot> </slot>
      <footer class="footer"> 
        <button on:click={sendEmail}> 

            <h2>CONTACT</h2>
        </button>
          <a href="/about">
            <h2>ABOUT</h2>
        </a>
      </footer>
</div>