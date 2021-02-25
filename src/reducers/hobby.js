
const initalState = {
    list: [],
    activeId: null
} 

const hobbyReducer = (state = initalState,action) => {
   // console.log(action)
    switch(action.type){
        case 'ADD_HOBBY': {
            const newList = [...state.list];
            newList.push(action.payLoad);
            return {
                ...state,
                list: newList
            }
        }
        case 'SET_ACTIVE_HOBBY': {
            const newActiveId = action.payLoad.id;
            return {
                 ...state,
                 activeId: newActiveId
            }
        }
        default:
            return state;
    }
}
export default hobbyReducer