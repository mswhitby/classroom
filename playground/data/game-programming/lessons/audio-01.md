# Build a soundscape and adjust volume

## Source and listener

An AudioSource emits a clip; an AudioListener receives sound, commonly on the main camera. Import a clip, assign it to a source, and test Play On Awake and Loop deliberately. Avoid multiple active listeners.

## 2D and 3D sound

Spatial Blend controls whether sound behaves as 2D audio or depends on position in 3D. With 3D sound, test distance and volume while moving the listener. Use layered sounds in the kitchen scene, and keep levels comfortable.

## Scale a numeric value

Volume is a value from 0 to 1. For this console exercise, inputs already lie in that range. Multiplying volume by a gain from 0 to 1 makes it quieter. A float literal uses an f suffix, such as 0.5f. This arithmetic exercise returns a number; it does not play sound.

## Try tracing this example

```csharp
float quieter = 0.8f * 0.5f;
return quieter;
```

Before running it, predict which value changes. Then run a small test and explain what happened in your own words.
