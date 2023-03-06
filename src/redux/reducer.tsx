import {
  GET_GIFS,
  GET_ONE_GIF,
  GET_TRENDINGS,
  GET_RANDOM_GIF,
  CLEAN_DETAIL,
  CLEAN_RANDOM,
} from "./gifs_actions";

const initialState = {
  Gifs: [],
  Gif: {},
  Random: {},
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
    case GET_RANDOM_GIF: {
      return {
        ...state,
        Random: action.payload,
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
    case CLEAN_RANDOM: {
      return {
        ...state,
        Random: {},
      };
    }

    default:
      return {
        ...state,
      };
  }
};

export default gifReducer;
