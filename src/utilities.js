const searchObjectName = (searchedItem) => {
  return {
    query: {
      status: {
        option: 'online',
      },
      name: searchedItem,
      stats: [
        {
          type: 'and',
          filters: [],
        },
      ],
    },
    sort: {
      price: 'asc',
    },
  };
};

const searchObjectType = (searchedItem) => {
  return {
    query: {
      status: {
        option: 'online',
      },
      type: searchedItem,
      stats: [
        {
          type: 'and',
          filters: [],
        },
      ],
    },
    sort: {
      price: 'asc',
    },
  };
};

module.exports = { searchObjectName, searchObjectType };
