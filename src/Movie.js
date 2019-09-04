import React from 'react';
import PropTypes from 'prop-types';
import "./Movie.css";
function Movie({year , title ,summary ,poster, genres}){
    return (
        <div className = "movie">
            <img src = {poster} alt ="poster"></img>
            <div>
            <h1 className = "m_title">{title}</h1>
            <h4 className = "m_year">{year}</h4>
            <ul className = "genres">
                {genres.map((genres, number)=>(
                <li key = {number}>{genres}</li>
                ))}
            </ul>
            <p className = "m_summary">{summary}</p>
            </div>
        </div>
    );
}

Movie.propTypes = {
	id : PropTypes.number.isRequired,
	year : PropTypes.number.isRequired,
	title : PropTypes.string.isRequired,
	summary : PropTypes.string.isRequired,
	poster : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
