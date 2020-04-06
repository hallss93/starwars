/* eslint-disable array-callback-return */
/**
 * @description             Operations using or not Axios
 */

import axios from 'axios'
import utils from './utils';
import actions from './actions';

function setPage(page) {
    return dispatch => {
        dispatch(actions.setPage(page))
    };
}
function getPeople(page = 1) {
    return dispatch => {
        axios.get(`${utils.URL_GET_PEOPLE}?page=${page}`)
            .then(peoples => {
                let promises = []
                peoples.data.results.map((people) => {
                    people.starships_list = []
                    people.starships.map((starship) => {
                        promises.push(
                            new Promise((resolve) => {
                                axios.get(`${starship}`)
                                    .then(resolve)

                            })
                        )
                    })
                })
                Promise.all(promises).then(starships => {
                    peoples.data.results.map((people) => {
                        starships.map((starship) => {
                            const id = starship.data.url.match(/[\d]+/i)[0];
                            people.starships.map((st) => {
                                const url_id = st.match(/[\d]+/i)[0];
                                if (url_id === id) {
                                    people.starships_list.push(starship.data)
                                }

                            })
                        })

                    })
                    dispatch(actions.getPeople(peoples.data))
                })
            });
    };
}

export default {
    setPage,
    getPeople
}