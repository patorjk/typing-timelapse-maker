Typing Time-Lapse Maker
-------------------------

This project will create images of a pair of hands typing on a keyboard for a given input that you can then assemble into a time-lapse video. This project was created mostly on a lark, just to see what the output would be. After the script generates an image list for a given input, you'll need a separate program to assemble the time-lapse. I'll go into that more below though.

Basic Usage - Node.js
-------------------------

Once you've cloned the app from github and cd into the directory, you can run it from the command line like this:

```sh
node index -i inputs/75_most_common_words.txt -o ./output -e -l dvorak
```

* The input file will be "inputs/75_most_common_words.txt".
* Output directory for time-lapse images will be "./output".
* 5 frames will be used for each keystroke (-e means equal frames). If you don't want this, just don't include the "-e" parameter. Mostly likely you don't want to include the "-e".
* Layout will be dvorak. If "-l" is omitted, QWERTY will be the layout (probably what you want).

Assembling the Time-Lapse Video
-------------------------

The script just generates a bunch of images, you have to create the time-lapse with a separate app. I highly recommend TLDF (http://timelapsedeflicker.com/). It will smooth out the flickering between images. The free version also supports the size of the images this app uses. If you can't use that, Time-Lapse Assembler (http://www.dayofthenewdan.com/projects/time-lapse-assembler-1/) is another good option - though it doesn't reduce flikering, so the output may not look that great.

Making Your Own Images
-------------------------

If you want to use pictures you create yourself, you simply have to replace what's in the images folder, though you'll probably want to use your own image names, so you'll need to update "lib/key-frame-map.js" too. Honestly, creating the images was probably 90% of the work for this project. As you'll see, the code isn't that complicated. If you create your own images, be sure to use the widest aperture on your lens to minimize flickering. Also, be sure you have a sturdy setup and try not to nudge your keyboard while typing.