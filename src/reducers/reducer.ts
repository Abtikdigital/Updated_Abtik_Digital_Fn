// Define state type
interface State {
    isGetQuoteOpen: boolean;
  }
  
  // Define action type
  interface Action {
    type: "open" | "close";
  }
  
  // Initial state
  const initialState: State = {
    isGetQuoteOpen: false,
    
  };
  
  // Reducer function
  const handleGetQuote = (state: State = initialState, action: Action): State => {
    switch (action.type) {
      case "open":
        return { ...state, isGetQuoteOpen: true };
      case "close":
        return { ...state, isGetQuoteOpen: false };
      default:
        return state;
    }
  };
  
  export default handleGetQuote;
  