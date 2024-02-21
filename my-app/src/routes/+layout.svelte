<script lang="ts"> 

    import { browser } from '$app/environment';
    import * as THREE from 'three';

    if(browser) {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize( window.innerWidth, window.innerHeight );
        renderer.domElement.style.position = 'fixed'; // Position the canvas
    renderer.domElement.style.top = '0';
    renderer.domElement.style.left = '0';
    renderer.domElement.style.zIndex = '-1'; // Ensure it's behind other content
        document.body.appendChild( renderer.domElement );
    
        const geometry = new THREE.BoxGeometry( 1, 1, 1 );
        const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
        const cube = new THREE.Mesh( geometry, material );
        scene.add( cube );
    
        camera.position.z = 5;

        function animate() {
            requestAnimationFrame( animate );

                    // Rotate cube
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;

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