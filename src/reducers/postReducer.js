



export const postReducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_POSTS':

            state = action.posts
            return state;

        case 'ADD_POST':

            return [...state, {
                id: action.post.id,
                title: action.post.title,
                body: action.post.body,
                userId: action.post.userId
            }];
        case 'SET_POSTS':
            state = action.posts;

            return state;

        case 'UPDATE_POST':
            const postIndex = state.findIndex(post => post.id === action.post.id);
            state[postIndex] = {
                id: action.post.id,
                title: action.post.title,
                body: action.post.body,
            };
            return state;

        case 'DELETE_POST':

            return state.filter(post => post.id !== action.id);
        default:
            return state;
    }
}