import React, { Component } from 'react';
import { connect } from 'react-redux';
import './styleMovies.css';
import { fetchMovieAction } from '../movies/moviesAction';
import { fetchTrailerAction } from '../trailers/trailersAction';
import Loader from 'react-loader-spinner';
import { Link} from 'react-router-dom';
class Movie extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const movie_id = this.props.match.params;
        console.log(this.props.trailer);
        this.props.fetchMovie(movie_id);

    }
    handleTrailer(id) {

        this.props.fetchTrailer(id);
    }


    render() {
        const { movie, loadingMovie, trailer, loadingTrailer } = this.props;
        return (
            <div>
                <Link to={'/'}>
                    <button style={{ color: "black", backgroundColor: "blue", fontSize: "30px", fontWeight: "600", cursor: "pointer" }}>Back</button>
                </Link>
                {loadingMovie ? (
                    <Loader
                        type="Puff"
                        color="#00BFFF"
                        height={100}
                        width={100}
                        className="spinner"
                    />
                ) : (
                        <div className="container">
                            <h1>{movie.title}</h1>
                            <p>{movie.plot}</p>
                            <button style={{ margin: "15px" }} onClick={(e) => this.handleTrailer(movie.id, e)}>trailer</button>
                            {trailer.length !== 0 ? (
                                trailer.stream_infos.map((info, index) =>
                                    <div key={index} id="video">
                                        <video muted loop autoPlay>
                                            <source src={info.url} type="video/mp4" />
                                        </video>
                                    </div>
                                )

                            ) : (

                                    <p></p>
                                )}

                        </div>
                    )}

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        movie: state.movieReducer.movie,
        loadingMovie: state.movieReducer.loading,
        trailer: state.trailerReducer.trailer,
        loadingTrailer: state.trailerReducer.loading

    };
};
const mapDispatchToProps = dispatch => {
    return {
        fetchMovie: (id) => dispatch(fetchMovieAction(id)),
        fetchTrailer: (id) => dispatch(fetchTrailerAction(id)),
    };
}



export default connect(mapStateToProps, mapDispatchToProps)(Movie);