/**
 * @description             Actions modules for reduce code
 */
import types from './types';

const setPage = (data) => {
    return {
        type: types.SET_PAGE,
        data,
    }
}
const getPeople = (data) => {
    return {
        type: types.GET_PEOPLE,
        data
    }
}
export default {
    setPage,
    getPeople
}