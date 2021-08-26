import React from "react";
import {useDispatch} from "react-redux";
import {searchVideos} from "../actions";
import {Field, Form} from "react-final-form";
import GenresList from "./GenresList";
import ArtistList from "./ArtistList";

const Search = () => {
    const dispatch = useDispatch();
    const onFormSubmit = props => dispatch(searchVideos(props.searchInput))

    const renderInput = ({input}) => {
        return (
            <div>
                <input className="form-control me-2" {...input} autoComplete="off"/>
            </div>
        );
    }

    return (
        <div className="col-7 mx-auto" style={{marginTop: '7%'}}>
            <Form onSubmit={onFormSubmit}>
                {props => (
                    <form onSubmit={props.handleSubmit}>
                        <Field name="searchInput" component={renderInput}/>
                        <button className="btn btn-outline-success w-100 my-2">Search</button>

                        <div className="row">
                            <GenresList/>
                            <ArtistList/>
                        </div>
                    </form>
                )}
            </Form>
        </div>
    );
}

export default Search;