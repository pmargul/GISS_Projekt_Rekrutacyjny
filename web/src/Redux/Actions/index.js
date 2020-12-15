export const addAlert = (message,type,title) =>{
  return {
    type: "ADD_ALERT",payload: {message,type,title}
  };
}

export const deleteAlert = (id) =>{
  return {
    type: "DELETE_ALERT",payload: {id: id}
  };
}

export const updateLanguageSetup = () =>{
  return {
    type: "UPDATE_LANGUAGE_SETUP",payload: {}
  };
}

