import React, { createContext, useContext, useReducer } from "react";


const AppContext = createContext();

const initialState ={
    apploading: true,
    initializeapp: false
}


const reducer = (state,action) => {

    switch(action.type){
        case 'stoploading':
            return {
                initializeapp: true
            }
            
                
            default:
                return "Default"
    }

    // if(action.type === 'loading'){

    // }

}
const AppProvider = (props) => {
    const [state, dispatch] = useReducer(reducer,initialState)
    const brandname = "Medulla"
    return (
        <AppContext.Provider value={{state, dispatch, brandname}}>
            { props.children }

        </AppContext.Provider>
    )


}

const useAppContext = () => useContext(AppContext)

export { 
         AppProvider,
         useAppContext

} 
// function reducer(state,action){}