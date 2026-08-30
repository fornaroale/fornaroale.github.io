---
title: "My macOS cheatsheet"
date: 2022-06-28
description: "A handy cheatsheet of macOS apps and tweaks I use daily."
---

This isn't a blog post. It's just a page that I'll use to keep track of things I use on my mac and useful stuff I find on the Internet.

## Applications
* [Cheatsheet](https://www.mediaatelier.com/CheatSheet/) displays all the keyboard shortcuts of the program in use
* [Flow](https://flowapp.info) a minimalistic pomodoro-timer app!
* [Gifski](https://gif.ski) to convert videos to GIFs
* [IINA](https://iina.io) my favourite media player
* [Rectangle](https://rectangleapp.com) to quickly resize windows from keyboard
* [Spark](https://sparkmailapp.com/it) my email client
* [Visual Studio Code](https://code.visualstudio.com) my favourite code editor

## Tweaks
### Remove screenshots shadow
If you don't care about the floating look that macOS gives to screenshots, you can disable it by terminal:  
```bash
defaults write com.apple.screencapture disable-shadow -bool true; killall SystemUIServer
```

To roll back:  
```bash
defaults write com.apple.screencapture disable-shadow -bool false; killall SystemUIServer
```

### Reduce screenshots size
It is possible to significantly reduce the size of screenshots asking the utility to produce JPEG files instead of PNGs (transparent background will get lost though):  
```bash
defaults write com.apple.screencapture type jpg; killall SystemUIServer
```

To roll back:  
```bash
defaults write com.apple.screencapture type png; killall SystemUIServer
```

### Remap keyboard keys
Even though there is some software to perform this operation automatically, like [Ukelele](https://software.sil.org/ukelele/) and [Karabiner](https://karabiner-elements.pqrs.org), there is a manual way to remap keyboard without needing additional software.

In my case, I had problems with two keys of a US-Intl. layout that, being sold in Europe, ``` ` and ~ ``` that were, respectively, remapped to ``` § and ± ```. I solved this following the best answer given [here](https://apple.stackexchange.com/questions/281405/easy-way-to-remap-non-modifier-keys-on-mac).

Note that the snippet of code needs to be run after every system restart, but this can be carried out automatically using Automator ([give a look here](https://kitcross.net/remapping-tilde-key-macos/)). Also, the code must be run when the keyboard is connected to the mac. If you are working with a bluetooth device, like me, I figured it out that having a prompt window at system startup waiting for user's input to manually confirm that the bluetooth device interested by this remapping is ready and connected, is the easiest (implementation-wise) solution (to me). 
