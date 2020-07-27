const initialState = {todos: []};

function rootReducer(state=initialState, action) {
    switch(action.type) {
        case 'GET_TODOS':
            return {...state, todos: action.data};

        case 'ADD_TODO':
            return {...state, todos: [...state.todos, action.task]}

        case 'REMOVE_TODO':
            let todos = state.todos.filter(value => value._id !== action.id);
            return {...state, todos};
            
        default:
            return state;
    }
}

export default rootReducer;