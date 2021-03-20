# Installation
* [Changelogs](https://github.com/smallobject/poe-util/blob/main/CHANGELOG.md)

poe-util is a Path of Exile utility that warps around the Path of Exile official API. You can search for items, stashes, guilds, ladders, etc. This is not meant to be a final solution for anyone, although you can use it as one. It's meant to be a helper tool to get you started.

Start the installation by installing the poe-util package.

```
npm install poe-util
```

Add poe-util to your project

```javascript
const poe = require('poe-util');

//example
poe.getNextStashChangeId().then((nextId) => console.log(nextId));
//This would return something like: '1103206369-1110730022-1070996087-1200613805-1152047365'
```

List of functions:

**getFullStashTabs (Promise)**

```
Returns an array of the maximum limit of stash tabs including the next-change-id.
```

**getOnlyStashTabs (Promise)**

```
Returns an array of the maximum limit of stash tabs.
```

**getNextStashChangeID (Promise)**

```
Returns the string of the next-change-id for stash tabs.
```

**getAccountCharacters(account: string, realm: string) (Promise)**

> account: Your Path of Exile account. (MUST BE PUBLIC)
> realm: The platform the account you are searching is located. (ie: 'pc')

```
Returns the string of the next-change-id for stash tabs.
```

**getCharacterItems(account: string, character: string) (Promise)**

> account: Your Path of Exile account. (MUST BE PUBLIC)

> character: Your Path of Exile character that is linked to the account provided.

```
Returns an array of the characters items and includes full item properties.
```

**getLadder(league: string, limit: number) (Promise)**

> league: The Path of Exile league you want to retrieve.

> limit: The number of results you want to retrieve, default: 20, maximum: 200.

```
Returns an array current ladder statistics including full character information.
```

## Fetching Items

```js
//Load poe-util
const poe = require('poe-util');

//Start by assigning the startItemApi
//This will assign the state inside the function
const query = poe.startItemApi();

//Use the new assigned variable to call fetchSearchResults(); and fetchItems();
//By default the Path of Exile can only search 10 itemIDs at once
//You can chain fetchItems(); to get the next 10, it's being kept track of in the state
query
  .fetchSearchResults('Headhunter', 'Standard')
  .then(query.fetchItems)
  .then((response) => console.log(response));
```

**startItemApi()**

```
Starts the initial state inside the function.
```

**fetchSearchResults(item: string, realm: string) (Promise)**

> item: The name of the item you want to search.

> realm: The platform you want to search the item.

_WARNING: The API is very picky so be sure you write the correct name. Capitalization matters._

```
Returns an object with the unique data of the item searched, includes queryId and unique item IDs.
```

**fetchItems() (Promise)**

> The API can only send back 10 items at once, however you can chain this like pagination.

```
Returns an array of the items searched, includes seller information, item and others.
```
