const GET_MAPS = 'GET_MAPS';

const getMaps = () => async (dispatch) => {
  dispatch({
    action: GET_MAPS,
  });
};

const maps = (state = [], action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export { maps, getMaps };
