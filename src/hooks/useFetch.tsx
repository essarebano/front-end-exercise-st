type FetchState = {
  loading: boolean;
  error: null;
  data: null;
};

// @TODO: Implement a useFetch hook and return { loading, error, data }
export function useFetch(): FetchState {
  return {
    loading: false,
    error: null,
    data: null,
  };
}
