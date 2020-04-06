// Libary
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

// Components
import Card from './../Card/Card';

// Store
import Opx from './../../store/operations'

// Style
const { ContainerMargin } = require('./../../assets/styled/Container')

export default function List() {
    const dispatch = useDispatch()
    let peoples = useSelector(state => state.results)
    let page = useSelector(state => state.page)

    useEffect(() => {
        dispatch(Opx.getPeople(page));
    }, [dispatch, page]);

    return (
        <ContainerMargin>
            <div className="starwars-container">
                {
                    peoples.map(Card)
                }
            </div>
        </ContainerMargin>
    )
}