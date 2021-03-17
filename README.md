# Installation

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

**getNextStashChangeID (Promise)**

```
Returns the string of the next-change-id for stash tabs.
```

**getCharacterItems(account: string, character: string) (Promise)**

> account: Your Path of Exile account.

> character: Your Path of Exile character that is linked to the account provided.

```
Returns an array of the characters items and includes full item properties.
```

**getLadder(league: string, limit: number) (Promise)**

> league: The Path of Exile league you want to retrieve.

> realm: The number of results you want to retrieve, default: 20, maximum: 200.

```
Returns an array current ladder stastics including full character information.
```
