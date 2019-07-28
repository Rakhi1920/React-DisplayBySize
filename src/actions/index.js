import * as filter from './Actiontypes'

export function filterChange(selected_filter) {
    return {
        type: filter.FILTER,
        selected_filter
    }
}