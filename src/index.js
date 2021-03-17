const axios = require('axios');
const apiURL = 'http://www.pathofexile.com';

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

module.exports = {
  getFullStashTabs,
  getOnlyStashTabs,
  getNextStashChangeID,
  getAccountCharacters,
  getCharacterItems,
  getLadder,
};
