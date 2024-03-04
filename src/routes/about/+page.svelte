<script>
  import { tick } from "svelte";
  import ExperienceList from "../../ExperienceList.svelte";

  let copied = false;
  let timeoutId;

  function handleKeyDown(event) {
    if (event.key === "Enter" || event.key === " ") {
      copyEmail();
    }
  }

  async function copyEmail() {
    const email = "imoni.mccorvey@gmail.com";
    await navigator.clipboard.writeText(email);
    copied = true;
    // Wait for the next microtask to ensure the DOM is updated
    await tick();
    // Highlight the email text
    const emailElement = document.getElementById("email");
    window.getSelection().selectAllChildren(emailElement);
    // Remove the highlight and message after 2 seconds
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      copied = false;
      window.getSelection().removeAllRanges();
    }, 2000);
  }
</script>

<p>
  I'm an experienced software engineer with a extensive understanding of the
  creative workflow, able to utilize technology efficiently in commercial
  settings. 

  Feel free to contact me below!
</p>
{#if copied}
  <div class="message">Email address copied to clipboard!</div>
{/if}
<div
  id="email"
  tabindex="0"
  role="button"
  on:keydown={handleKeyDown}
  class:highlighted={copied}
  on:click={copyEmail}
>
  imonimccorvey[at]gmail.com
</div>
<ExperienceList />

<style>
  p {
    grid-column: span 12;
  }
  #email {
    cursor: pointer;
    /* styles for the email text */
  }
  .highlighted {
    background-color: yellow;
    /* other highlight styles if needed */
  }
  .message {
    position: absolute;
    margin-top: -20px; /* adjust as needed */
    /* additional styles for message */
  }
</style>
