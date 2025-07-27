

export const todoReducer = (state, action) => {
    switch(action.type){
        case 'add':
            const newState = [...state,  action.todoValue];
            localStorage.setItem('todos', JSON.stringify(newState));
            return newState;
        case 'edit':
            

        case 'delete':
            console.log("Delete button is Clicked");
            const deleteState = state.filter((_, index) => {
                return index !== action.index;
            })
            localStorage.setItem('todos', JSON.stringify(deleteState));
            return deleteState;

        default:
            return state;
    }
}