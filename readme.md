# Timpani online

I created this web page because my student orchestra thought it would be fun to have timpani.

The sounds are from No Budget Orchestra. The sample pack did not contain recording of every note, and thus sometimes one sample have been used for two notes. Here are an overview of the original sounds, and what sample have been used for another sound (like it probably is being used in sfz synthezisers).

_timpani.sfz_ from No Budget Orchestra\
\<control> default_path=Timpani\\\
\<group> ampeg_sustain=0 ampeg_hold=0 ampeg_decay=20 ampeg_release=3\
\<region> sample=C2.wav lokey=a1 hikey=c2 pitch_keycenter=c2\
\<region> sample=D2.wav lokey=c#2 hikey=d2 pitch_keycenter=d2\
\<region> sample=E2.wav lokey=d#2 hikey=e2 pitch_keycenter=e2\
\<region> sample=F2.wav lokey=f2 hikey=f#2 pitch_keycenter=f2\
\<region> sample=Ab2.wav lokey=g2 hikey=g#2 pitch_keycenter=g#2\
\<region> sample=A2.wav lokey=a2 hikey=a2 pitch_keycenter=a2\
\<region> sample=Bb2.wav lokey=a#2 hikey=a#2 pitch_keycenter=a#2\
\<region> sample=C3.wav lokey=b2 hikey=c3 pitch_keycenter=c3\
\<region> sample=D3.wav lokey=c#3 hikey=d#3 pitch_keycenter=d3\
\<region> sample=Gb3.wav lokey=e3 hikey=f#3 pitch_keycenter=f#3\
\<region> sample=G3.wav lokey=g3 hikey=g3 pitch_keycenter=g3\
\<region> sample=Ab3.wav lokey=g#3 hikey=g#3 pitch_keycenter=g#3\
\<region> sample=A3.wav lokey=a3 hikey=a3 pitch_keycenter=a3\
\<region> sample=Bb3.wav lokey=a#3 hikey=d4 pitch_keycenter=a#3

## Bugs

- Big delay after some seconds. The [autoplay policy](https://developer.chrome.com/blog/autoplay/#webaudio) makes the audio go to sleep after some seconds :(
