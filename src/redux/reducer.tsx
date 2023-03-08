import {
  GET_GIFS,
  GET_ONE_GIF,
  GET_TRENDINGS,
  GET_RANDOM_GIF,
  CLEAN_DETAIL,
  CLEAN_RANDOM,
} from "./gifs_actions";

import { ADD_FAVORITE, MATCH_FAVORITE } from "./favorites_actions";
import { Id } from "../Models/gif.models";

const initialState = {
  Gifs: [],
  Gif: {},
  Random: {},
  Trendings: [],
  Favorites: [] as string[],
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
    case ADD_FAVORITE: {
      let totalFavorites = [...state.Favorites];

      if (state.Favorites.includes(action.payload)) {
        totalFavorites = totalFavorites.filter(
          (unFavorito) => unFavorito !== action.payload
        );
      } else {
        totalFavorites.push(action.payload);
      }
      if (state.Favorites.length === 1) localStorage.removeItem("favorites");

      return {
        ...state,
        Favorites: totalFavorites,
      };
    }

    default:
      return {
        ...state,
      };
  }
};

export default gifReducer;
