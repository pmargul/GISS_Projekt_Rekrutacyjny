const initialState = {
  message: null,
  type: null,
  title: null,
  isVisible: false,
  id: 0,
}

const alertReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ALERT": {
      return {
        message: action.payload.message,   
        title: action.payload.title,    
        type: action.payload.type,  
        isVisible: true,     
        id: state.id+1                   
      }
    }
    case "DELETE_ALERT": {
      if(state.id!==action.payload.id)
        return state
      return {
        message: null,   
        title: null,   
        type: null,   
        isVisible: false,    
        id: state.id            
      }
    }
    default: {
      return state;
    }
  }
};

export default alertReducer
