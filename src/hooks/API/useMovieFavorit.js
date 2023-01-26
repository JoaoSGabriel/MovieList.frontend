import useAsync from "../useAsync";
import useToken from "../useToken";

import * as listAPI from "../../services/Lists";

export default function usePayment() {
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
