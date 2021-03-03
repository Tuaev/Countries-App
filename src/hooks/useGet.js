import { useEffect, useReducer } from 'react';
import axios from 'src/utils/axiosConfig';

const initialState = {
  data: null,
  loading: true,
  error: null,
};

const ACTION_FETCH_START = 'ACTION_FETCH_START';
const ACTION_FETCH_SUCCESS = 'ACTION_FETCH_SUCCESS';
const ACTION_FETCH_ERROR = 'ACTION_FETCH_ERROR';

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_FETCH_START:
      return {
        data: null,
        loading: true,
        error: null,
      };
    case ACTION_FETCH_SUCCESS:
      return {
        data: action.data,
        loading: false,
        error: null,
      };
    case ACTION_FETCH_ERROR:
      return {
        data: null,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

function useGet(url) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({ type: ACTION_FETCH_START });
        const { data } = await axios.get(url);
        dispatch({ type: ACTION_FETCH_SUCCESS, data });
      } catch (error) {
        dispatch({ type: ACTION_FETCH_ERROR, error });
      }
    };
    fetchData();
  }, [url]);

  return { ...state };
}

export default useGet;
