import * as filter from '../actions/Actiontypes'

const initialState = {
    selected_filter: 'ALL'
}

export default function filter_change(state = initialState, action) {
    console.log(action.selected_filter)
    if(action.type === filter.FILTER){
        return {
            selected_filter: action.selected_filter
        }
    }
    else {
        return state
    }
}