import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './styleMovies.css';
import { fetchListsAction } from '../lists/listsAction';
import Loader from "react-loader-spinner";

class ListsView extends Component {

    constructor(props) {
        super(props);

    }
    componentDidMount() {
        const lists = [
            "populares-en-taquilla",
            "estrenos-para-toda-la-familia",
            "estrenos-imprescindibles-en-taquilla",
            "estrenos-espanoles",
            "si-te-perdiste",
            "especial-x-men",
        ]
        lists.forEach(id => {
            this.props.fetchLists(id);
        });
    }
    handleprevious = (id) => {
        document.getElementById(id).scrollLeft -= 110;
    }
    handlenext = (id) => {
        document.getElementById(id).scrollLeft += 110;
    }


    render() {

        const { lists, error, loading } = this.props;
        return (
            <div>
                <h2 className="heading">Rakuten Tv</h2>

                {loading ? (
                    <Loader
                        type="Puff"
                        color="#00BFFF"
                        height={100}
                        width={100}
                        className="spinner"
                    />
                ) : (

                        lists.map((list, index) =>

                            <div key={index} id={index} className="wrapper">
                                {list.map(movie => <Link key={movie.id} to={'movie/' + movie.id}> <div className="item" style={{ backgroundImage: `url(${movie.images.artwork})`, height: "66vh", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}></div></Link>)}
                                <a className="prev" onClick={this.handleprevious.bind(this, index)}>&#10094;</a>
                                <a className="next" onClick={this.handlenext.bind(this, index)}>&#10095;</a>
                            </div>
                        )
                    )}

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        lists: state.listsReducer.list,
        loading: state.listsReducer.loading,
        error: state.listsReducer.error
    };
};
const mapDispatchToProps = dispatch => {
    return {
        fetchLists: (id) => dispatch(fetchListsAction(id)),
    };
}



export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListsView);