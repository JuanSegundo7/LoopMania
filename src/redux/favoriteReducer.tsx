import { ADD_FAVORITE } from "./favorites_actions";
import { Id } from "../Models/gif.models";

const initialState = {
  Favorites: [] as any,
};

const favoriteReducer = (state = initialState, action: any) => {
  switch (action.type) {
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
  }
};

export default favoriteReducer;
