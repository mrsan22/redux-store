import * as fromActions from "./actions";

export const initalState = {
  loaded: false,
  loading: false,
  data: [{ label: "Wake up", complete: false }]
};

export function reducer(
  state = initalState,
  action: { type: string; payload: any }
) {
  switch (action.type) {
    case fromActions.ADD_TODO: {
      const todo = action.payload;
      const data = [...state.data, todo];
      return {
        ...state,
        data
      };
    }
  }
  return state;
}
