const axios = require('axios');
const apiURL = 'http://www.pathofexile.com';
const { searchObjectName, searchObjectType } = require('./utilities');
//Get the full stash tabs data
const getFullStashTabs = async () => {
  const getFullStashTabsApiCall = await axios
    .get(`${apiURL}/api/public-stash-tabs`)
    .then((data) => data)
    .catch((error) => {
      console.log('Error', error);
    });
  return getFullStashTabsApiCall.data.stashes;
};
//Get only the stash tabs from the data
const getOnlyStashTabs = async () => {
  const getOnlyStashTabsApiCall = await axios
    .get(`${apiURL}/api/public-stash-tabs`)
    .then((data) => data)
    .catch((error) => {
      console.log('Error', error);
    });
  return getOnlyStashTabsApiCall.data.stashes;
};
//Get only the next-change-id from the data
const getNextStashChangeID = async () => {
  const getNextStashChangeIDApiCall = await axios
    .get(`${apiURL}/api/public-stash-tabs`)
    .then((data) => data)
    .catch((error) => {
      console.log('Error', error);
    });
  return getNextStashChangeIDApiCall.data.next_change_id;
};
//Get all characters from the account and realm passed on the function
const getAccountCharacters = async (account, realm) => {
  const getAccountCharactersApiCall = await axios
    .get(
      `${apiURL}/character-window/get-characters?accountName=${account}&realm=${realm}`
    )
    .then((data) => data)
    .catch((error) => {
      console.log('Error', error);
    });
  return getAccountCharactersApiCall.data;
};
//Get all the items from the character of the account passed on the function
const getCharacterItems = async (account, character) => {
  const getCharacterItemsApiCall = await axios
    .get(
      `${apiURL}/character-window/get-items?accountName=${account}&character=${character}`
    )
    .then((data) => data)
    .catch((error) => {
      console.log('Error', error);
    });
  return getCharacterItemsApiCall.data;
};

//Get current ladder list from an ascending order
const getLadder = async (league, limit) => {
  const actualLimit = league ? 20 : limit;
  const getLadderApiCall = await axios
    .get(`${apiURL}/api/ladders/?id=${league}&limit=${actualLimit}`)
    .then((data) => data)
    .catch((error) => {
      console.log('Error', error);
    });
  return getLadderApiCall.data;
};

//Get current passive skills from character
const getPassiveSkills = async (account, character) => {
  const getPassiveSkillsApiCall = await axios
    .get(
      `${apiURL}/character-window/get-passive-skills?accountName=${account}&character=${character}`
    )
    .then((data) => data)
    .catch((error) => {
      console.log('Error', error);
    });
  return getPassiveSkillsApiCall.data;
};

//Get item prefixes and suffixes from the API
const getItemStats = async () => {
  const getItemStatsApiCall = await axios
    .get(`${apiURL}/api/trade/data/stats`)
    .then((data) => data)
    .catch((error) => {
      console.log('Error', error);
    });
  return getItemStatsApiCall.data;
};

//Get static items, such as images, names and tiers of maps, currency, etc
const getStaticData = async () => {
  const getStaticDataApiCall = await axios
    .get(`${apiURL}/api/trade/data/static`)
    .then((data) => data)
    .catch((error) => {
      console.log('Error', error);
    });
  return getStaticDataApiCall.data;
};

//Get item names and types, this is how I would suggest to search the API, send these.
const getItemData = async () => {
  const getItemDataApiCall = await axios
    .get(`${apiURL}/api/trade/data/items`)
    .then((data) => data)
    .catch((error) => {
      console.log('Error', error);
    });
  return getItemDataApiCall.data;
};

//Start the function and set the initial state
function startItemApi() {
  const state = {
    itemIds: [],
    index: 0,
    offset: 10,
  };

  //Fetch the API for the results and then send it to itemIds state
  function fetchSearchResults(searchedItem, league) {
    return axios
      .post(
        `${apiURL}/api/trade/search/${
          league.charAt(0).toUpperCase() + league.slice(1)
        }`,
        searchObjectName(searchedItem)
      )
      .then((res) => {
        state.itemIds = { ...res.data };
      });
  }

  //Fetch the API with the new itemIds and give back the items
  function fetchItems() {
    const offset = state.offset - 1;
    state.offset += 10 - 1;
    state.index += 10 - 1;
    return axios
      .get(
        `${apiURL}/api/trade/fetch/${state.itemIds.result.splice(
          state.index,
          offset
        )}?query=${state.itemIds.id}`
      )
      .then((res) => {
        return res.data;
      });
  }

  return {
    fetchSearchResults,
    fetchItems,
  };
}

module.exports = {
  getFullStashTabs,
  getOnlyStashTabs,
  getNextStashChangeID,
  getAccountCharacters,
  getCharacterItems,
  getLadder,
  startItemApi,
  getPassiveSkills,
  getItemStats,
  getStaticData,
  getItemData,
};
