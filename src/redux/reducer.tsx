import {
  GET_GIFS,
  GET_ONE_GIF,
  CLEAN_DETAIL,
  GET_TRENDINGS,
} from "./gifs_actions";

const initialState = {
  Gifs: [],
  Gif: {},
  Trendings: [],
};

const gifReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_GIFS: {
      return {
        ...state,
        Gifs: action.payload,
      };
    }
    case GET_ONE_GIF: {
      return {
        ...state,
        Gif: action.payload,
      };
    }
    case GET_TRENDINGS: {
      return {
        ...state,
        Trendings: action.payload,
      };
    }
    case CLEAN_DETAIL: {
      return {
        ...state,
        Gif: {},
      };
    }

    default:
      return {
        ...state,
      };
  }
};

export default gifReducer;
