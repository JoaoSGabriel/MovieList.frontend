import useAsync from "../useAsync";
import useToken from "../useToken";

import * as listAPI from "../../services/FavoritApi";

export default function useMovieFavorit() {
  const token = useToken();

  const {
    data: favorit,
    loading: favoritLoading,
    error: favoritError,
    act: postFavorit,
  } = useAsync((data) => listAPI.postMovieFavorit(token, data), false);

  return {
    favorit,
    favoritLoading,
    favoritError,
    postFavorit,
  };
}
