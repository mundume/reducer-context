type Actions = {
  type: "increment" | "decrement";
};

export function reducer(state: number, action: Actions) {
  switch (action.type) {
    case "increment":
      return state + 1;

    case "decrement":
      return state - 1;
    default:
      return state;
  }
}

export const initialState = 0;
