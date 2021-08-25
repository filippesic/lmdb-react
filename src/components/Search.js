import React from "react";
import {searchVideo} from "../actions";
import {connect} from "react-redux";
import {Form, Field} from "react-final-form";
import GenresList from "./GenresList";
import ArtistList from "./ArtistList";

class Search extends React.Component {
    state = {searchTerm: ''}

    onFormSubmit = async ({searchInput}) => {
        this.props.searchVideo(searchInput)
    }

    onInputChange = (event) => {
        this.setState({searchTerm: event.target.value})
    }

    renderInput = ({input}) => {
        return (
            <div>
                <input className="form-control me-2" {...input} autoComplete="off"/>
            </div>
        );
    }

    render() {
        return (
            <div className="col-7 mx-auto" style={{marginTop: '7%'}}>
                <Form onSubmit={this.onFormSubmit}
                      validate={(formValues) => {
                          const errors = {};
                          if(!formValues.searchInput) {
                              errors.searchInput = 'You need to enter a search word!'
                          }
                          return errors
                      }}
                      render={({handleSubmit}) => (
                          <form onSubmit={handleSubmit}>
                              <Field name="searchInput" component={this.renderInput} />
                              <button className="btn btn-outline-success w-100 my-2">Search</button>
                              <div className="row">
                                  <GenresList />
                                  <ArtistList />
                              </div>
                          </form>
                      )}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {videos: state.videos}
}

export default connect(mapStateToProps, {searchVideo})(Search);