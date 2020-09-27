export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    //token: 'BQAL68rpaHQ-MLEM4DZkdVZfz-J5bvNOcPl-EmHBq1qUgQof6B6aTV6G1E0xvhtENc6I-LhMf-1HFp3PDZHRIFsUdWQ8-R-cLjZkdebWMqXM44CZiZ2Jvc1u81LEkWAFADDIwJ2t4UjhAALM9vv4M2KdoYF1CtL89yqBBplne7QkFW8VPFkE'
};

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            }
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly
            }
        default:
            return state;
    }
}

export default reducer;