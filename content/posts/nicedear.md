---
title: 'Nicedear'
date: "15-04-2024"
description: "A random avatar generator for your website or app: a dicebear alternative."
draft: true
---

Nicedear is an avatar generator. It takes in a seed (or not) and generates a random avatar. It is a dicebear alternative. 

## Under the hood

There are three steps:

1. The seed input is hashed using the a simple hash function.

```ts
const hashString = (s: string): number => {
	let hash = 0;
	if (s.length === 0) return hash;
	for (let i = 0; i < s.length; i++) {
		const chr = s.charCodeAt(i);
		hash = (hash << 5) - hash + chr;
		hash |= 0; // Convert to 32bit integer
	}
	return hash;
};
```

2. The hash is used to select a choice from each feature.

```ts
const seedString = argSeed || Math.random().toString(36).substring(7) + Math.random().toString(36).substring(7);

export function generateImagePathsFromSeed(features: Feature[],seed: string): string[] | never {
	const hashString = (s: string): number => {
		let hash = 0;
		if (s.length === 0) return hash;
		for (let i = 0; i < s.length; i++) {
			const chr = s.charCodeAt(i);
			hash = (hash << 5) - hash + chr;
			hash |= 0; // Convert to 32bit integer
		}
		return hash;
	};

	const hash = Math.abs(hashString(seed));
	return features.map((feature) => {
		const index = hash % feature.choices.length;
		return feature.choices[index];
	});
}
```

Feature is an array of objects that contain the choices for each feature. `Head`, `Face`, `Facial-hair` are examples of features. Each feature has a set of choices. The hash is used to select a choice from each feature. A **feature image** (*a face*, *an haircut*...) from a set of choices(*a folder containing all the faces*...) is selected based on the modulo of the hash and the number of choices in the feature. 

3. The selected choices are used to generate the avatar.

```ts
const layers: OverlayOptions[] = await Promise.all(imagePaths.map(async (imgPath, i) => {
		let image: Sharp.Sharp = Sharp(imgPath);
		// Apply transformations to each layer
		image = await applyTransformations(image, params);

		const buffer = await image.toBuffer();
		const layer: OverlayOptions = { input: buffer };
		return layer;
	}));

	const bg = backgroundColor ? hexToRgbA(backgroundColor) : { r: 255, g: 255, b: 255, alpha: 1 };

	const background: SharpOptions = {
		create: {
			width: 500,
			height: 500,
			channels: 4,
			background: bg,
		},
	};

	await Sharp(background).composite(layers).png().toFile(`_output/${seed}${pathHash}.png`);
```

The selected choices are then layered over to generate the avatar. Each choice is an image. The images are loaded and transformed. The transformed images are then composited together to form the avatar. The avatar is saved as a png file.


## The Transformations

Nicedear provides a ton of features for tranforming the avatar to your needs.

### Parameters

- **seed**: string
The seed for the random generator. Used to generate the same avatar again. If not provided, a random seed is used.
- **theme**: string
The theme of the avatar. Defaults to open-peeps. Available themes include open-peeps, female, male, bottts, gridy, identicon, initials, jdenticon, micah, mp, retro, robohash, wavatar, yld.
- **mirror**: boolean
When set true, flips the image.
- **rotate**: number
Rotates the image by the given degrees.
- **background**: string
The hex code of the background color. Defaults to #ffffff.
- **skinColor**: string (*pending*)
The hex code of the avatar's skin color. Defaults to #ffffff.
- **hairColor**: string (*pending*)
The hex code of the avatar's hair color. Defaults to #000000.
- **scale**: number
The scale of the avatar. Defaults to 1.
- **transalteX**: number
The x-coordinate of the avatar. Defaults to 0.
- **transalteY**: number
The y-coordinate of the avatar. Defaults to 0.
- **features**: string[]
The features of the avatar. Available features are face, facial-hair, head. Defaults to face, head.

A command line argument might look like this:

```bash
node dist/index.js foo open-peeps true 45 red skinColor hairColor 1.0 10.0 20.0 face,facial-hair,head
```
