const initialState = {
  table_headers: [],
  table_data: [],
};

export const workflowReducer = (state = { workflowSteps: [] }, action) => {
  switch (action.type) {
    case "SET_WORKFLOW_STEPS":
      return { ...state, workflowSteps: action.payload };
    default:
      return state;
  }
};

export const tableHeadersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_TABLE_HEADERS":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
