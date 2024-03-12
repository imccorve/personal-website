---
layout: post
title:  "Building Your Own 'Interactive' Digital Pet with Adafruit's Matrix Portal"
date:   2023-10-10 13:46:40
categories: tech project
---
<iframe src="https://giphy.com/embed/4oZpTY30l6XtK" width="480" height="373" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/90s-nostalgia-tamagotchi-4oZpTY30l6XtK">via GIPHY</a></p>

One late night, I had the idea of dressing up as a human tamagotchi for Mardi Gras parade. I thought it would be cool way to dive into hardware and costume making. Figuring out the execution of this project was a little tough. Initially there was that inclination (trap) people may have where they want to build it from scratch. However from a user's perspective I realized most people won't care about the underlying mechanics of how egg hatching works. As much as I'm doing it for me, I also wanted it to look cool, so I simplified it down to interactive buttons mapped to specific animations.

## **What You'll Need**

1. **[Adafruit MatrixPortal M4](https://learn.adafruit.com/adafruit-matrixportal-m4/arduino-ide-setup)**
2. **[Animated GIF Player for Matrix Portal](https://learn.adafruit.com/animated-gif-player-for-matrixportal/example-gifs)** Contains relevant supply information
3. **[1x4 Arcade buttons](https://www.adafruit.com/product/472)**
4. Your chosen sprites - **[The Spriters Resource](https://www.spriters-resource.com/fullview/150024/)** is a great place to find these.
5. An environment to run Python, like CircuitPython (though it seems like it can now be run in the browser according to adafruit)

### **Step 1: Setting up the Adafruit MatrixPortal M4**

To begin, you'll need to set up your Adafruit MatrixPortal M4. For a detailed walkthrough on the setup process, visit this **[guide](https://learn.adafruit.com/adafruit-matrixportal-m4/arduino-ide-setup)**.

### **Step 2: Creating the Animations**

With your MatrixPortal M4 ready to go, it's time to create some animations for your Tamagotchi. I used the **[Piskel](https://www.piskelapp.com/p/create/sprite)** app and the **[EZGif](https://ezgif.com/sprite-cutter)** online sprite sheet cutter tool to create and edit my animations. Tip: You want to make sure the background of your background is black in color.

You can convert the gif to bmp using [ImageMagick](https://imagemagick.org/index.php):

```
convert idle.gif -compress none -depth 16 idle.bmp

```

You might need to adjust gamma correction if the colors come out wonky. [Adafruit has an article on how they do this](https://learn.adafruit.com/image-correction-for-rgb-led-matrices/still-images-using-python) :

```
python3 protomatter_dither.py 8 idle.gif

```
I found this solution from this github thread: **[Image Load Issues](https://github.com/adafruit/Adafruit_CircuitPython_ImageLoad/issues/3)**

### **Step 3: Coding with CircuitPython**

We'll use CircuitPython to program the Tamagotchi. If you're unfamiliar with CircuitPython, Adafruit has an excellent **[introductory guide](https://learn.adafruit.com/welcome-to-circuitpython/troubleshooting)** to get you started.

You'll want to create distinct functions for each interaction with your Tamagotchi. The actions we've included are: feeding, kissing, praising and idling. Each action is tied to a different gif that will play when the action is performed.

You can use the Adafruit's guide on **[Animating Sprites with CircuitPython](https://learn.adafruit.com/iot-twitter-listener-party-parrot/animating-sprites-with-circuitpython)** as a good starting point.

The code I used is in this repository: [https://github.com/imccorve/tamagotchi-led](https://github.com/imccorve/tamagotchi-led). You can copy and paste the contents of circuitpython-files/ into the CIRCUITPYTHON/ folder of the matrixportal.

### **Step 4: Connecting Buttons to Actions**

To make the Tamagotchi interactive, we will use arcade buttons. These buttons will trigger different actions such as feed, kiss, praise, etc. We connect the buttons to the Adafruit MatrixPortal M4 and assign each button an action (a specific animation).

You can follow this Adafruit guide on **[wiring arcade buttons](https://learn.adafruit.com/adafruit-led-arcade-button-qt/arduino)** for help.

### **Step 5: Assembling the Tamagotchi**

Once all the components are prepared, you can put everything together. Connect your MatrixPortal M4 to your computer and upload the code. Now, your own Tamagotchi should be up and running!
[Watch it in action](https://www.tiktok.com/@imonitroni/video/7198309070435044650)
<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@imonitroni/video/7198309070435044650" data-video-id="7198309070435044650" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@imonitroni" href="https://www.tiktok.com/@imonitroni?refer=embed">@imonitroni</a> Using the arcade 1x4 from adafruit I can now interact with Mametchi-chan ❤️😩 but there’s still more work to be done until it’s wearable for my Mardi Gras outfit<a title="adafruit" target="_blank" href="https://www.tiktok.com/tag/adafruit?refer=embed">#adafruit</a> <a title="creativecoding" target="_blank" href="https://www.tiktok.com/tag/creativecoding?refer=embed">#creativecoding</a> <a title="ledlights" target="_blank" href="https://www.tiktok.com/tag/ledlights?refer=embed">#ledlights</a> <a title="tamagotchi" target="_blank" href="https://www.tiktok.com/tag/tamagotchi?refer=embed">#tamagotchi</a> <a target="_blank" title="♬ Boy&#39;s a Liar - PinkPantheress" href="https://www.tiktok.com/music/Boy's-a-Liar-7169578597873616897?refer=embed">♬ Boy&#39;s a Liar - PinkPantheress</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>

I think next would actually be cool to put a tamagotchi emulator directly on the matrixportal to get the full tamagotchi experience. Though the purpose of a tamagotchi is to be pocket sized so having a 32x32 screen might be difficult to transport. (Unless you incorporate the screen into a
backpack or workbag? https://learn.adafruit.com/matrix-portal-rgb-display-handbag)

## **Troubleshooting**

If you encounter any issues during the process, refer to the following resources:

1. Adafruit's **[troubleshooting guide](https://forums.adafruit.com/viewtopic.php?t=171857)**
2. The **[Easiest way to use storage.erase_filesystem()](https://learn.adafruit.com/welcome-to-circuitpython/troubleshooting#easiest-way-use-storage-dot-erase-filesystem-2987288-24)**

## **Questions?**

Send me a DM!