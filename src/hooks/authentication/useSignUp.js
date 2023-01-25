import useAsync from "../useAsync";

import * as auth from "../../services/Auth";

export default function useSignUp() {
  const {
    loading: signUpLoading,
    error: signUpError,
    act: signUp,
  } = useAsync(auth.signUp, false);

  return {
    signUpLoading,
    signUpError,
    signUp,
  };
}
