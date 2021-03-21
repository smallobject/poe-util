# Change Log

## [Unreleased 1.0.3] @ Updated At 21/03/2021

**New:**

- [[5327767]](https://github.com/smallobject/poe-util/commit/532776755c35d12a02063c5a6e2d67299bc8c29c) Added getItemStats() that fetches the prefixes, suffixes, delved, and other item mods.

- [[5327767]](https://github.com/smallobject/poe-util/commit/532776755c35d12a02063c5a6e2d67299bc8c29c) Added getStaticData() that fetches the static items and data of PoE like currency, map tiers, etc.

- [[7fa821e]](https://github.com/smallobject/poe-util/commit/7fa821e9b8ec3e0379581d04ef3f0658952d050f) Added getItemData() that fetches item names and types, this is how I would suggest to search the API, send these direct names/types.

- [[f9f8d3a]](https://github.com/smallobject/poe-util/commit/f9f8d3a2f8422c386358a5d36295c6de0233bd21) Added getPassiveSkills() that returns an array containing IDs of every allocated notable by a given character.

## [Release 1.0.2] @ 18/03/2021

**New:**

- [[8c3d0dc]](https://github.com/smallobject/poe-util/commit/8c3d0dc0be44519922cedbfafd0f775a434b12b7) Added startItemApi() that sets the initial state for the item searching functions
- [[8c3d0dc]](https://github.com/smallobject/poe-util/commit/8c3d0dc0be44519922cedbfafd0f775a434b12b7) Added fetchSearchResults() that fetches all the items IDs searched
- [[8c3d0dc]](https://github.com/smallobject/poe-util/commit/8c3d0dc0be44519922cedbfafd0f775a434b12b7) Added fetchItems() that fetches all the actual items after passing in the IDs
- [[8c3d0dc]](https://github.com/smallobject/poe-util/commit/8c3d0dc0be44519922cedbfafd0f775a434b12b7) Added utilities.js for helping functions.
- [[8c3d0dc]](https://github.com/smallobject/poe-util/commit/8c3d0dc0be44519922cedbfafd0f775a434b12b7) Added searchObjectName() and searchObjectType() utility functions.
  **Fixes:**

- [[4288ca4]](https://github.com/smallobject/poe-util/commit/4288ca42f09a1c2bc3bfc599de5c37af1ebc07f6) Fixed [README.md](https://github.com/smallobject/poe-util/blob/main/README.md) duplication
- [[d020e48]](https://github.com/smallobject/poe-util/commit/d020e4821449ef7d62e665bb9c71963cedb97e0d) Added repository, issues and homepage to package.json
- [[8f929e6]](https://github.com/smallobject/poe-util/commit/8f929e6c46569940f420d48f6f757eb55a562d5b) Removed package-lock.json from the repository and package

**Updates:**

- [[d020e48]](https://github.com/smallobject/poe-util/commit/d020e4821449ef7d62e665bb9c71963cedb97e0d) Added new updates to the [README.md](https://github.com/smallobject/poe-util/blob/main/README.md) file

## [Release 1.0.1] @ 16/03/2021

- Initial Release of the package
