export const fetchPostsRequest = () => ({
    type: "FETCH_POSTS_REQUEST",
});

export const fetchPostsSuccess = (posts) => ({
    type: "FETCH_POSTS_SUCCESS",
    payload: posts,
});

export const fetchPostsError = (error) => ({
    type: "FETCH_POSTS_ERROR",
    payload: error,
});

export const fetchPosts = () => async (dispatch) => {
    dispatch(fetchPostsRequest());
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        dispatch(fetchPostsSuccess(data));
    } catch (error) {
        dispatch(fetchPostsError(error.message));
    }
};