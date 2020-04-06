// Libary
import React from 'react'

// Style
import './Card.css';

export default function Card(course) {
    return (
        <div className="starwars-card">
            <div className="star-body star-body--front">
                <div className="people">
                    <img alt="Vue logo" src={require('./../../assets/img/user.png')} />
                </div>
                <div>
                    <div className="tabs tabs-style-shape">
                        <nav>
                            <ul>
                                <li>
                                    <a>
                                        <svg viewBox="0 0 80 60" preserveAspectRatio="none">
                                            <use href="#tabshape">
                                                <path
                                                    id="tabshape"
                                                    d="M80,60C34,53.5,64.417,0,0,0v60H80z"
                                                ></path>
                                            </use>
                                        </svg>

                                        <span></span>
                                    </a>
                                </li>
                                <li className="tab-current">
                                    <a>
                                        <svg viewBox="0 0 80 60" preserveAspectRatio="none">
                                            <use href="#tabshape"></use>
                                        </svg>
                                        <svg viewBox="0 0 80 60" preserveAspectRatio="none">
                                            <use href="#tabshape"></use>
                                        </svg>
                                        <span>{course.name}</span>
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <svg viewBox="0 0 80 60" preserveAspectRatio="none">
                                            <use href="#tabshape"></use>
                                        </svg>
                                        <svg viewBox="0 0 80 60" preserveAspectRatio="none">
                                            <use href="#tabshape"></use>
                                        </svg>
                                        <span></span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        <div className="content-wrap">
                            <section className="content-current">
                                <h6>Gender: <strong>{course.gender}</strong></h6>
                                <h6>Mass: <strong>{course.mass}</strong></h6>
                                <h6>Height: <strong>{course.height}</strong></h6>
                                {course.starships_list.length > 0 ? <h6>StarShips:</h6> : null}
                                <div className="star-power">
                                    {course.starships_list.map((e) => {
                                        return <span
                                            className="green Grass"
                                        >{e.name}</span>
                                    })}
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}