import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


// for demo version, no user authentication is implemented.
export default class LendingPage extends React.Component {
    state = {}

    // componentDidMount() {
    //     console.log("hello world")
    // }

    // componentDidUpdate() {

    // }

    // componentWillUnmount() {

    // }

    render() {

        return(
            <div>
                <Link to="question">
                    <h1>Take the questionnaire to check your symptoms!</h1>
                </Link>
                {/* <LInk to="/question">Take the questionnaire to check your symptoms!</LInk> */}
            </div>
        );
    }
}


LendingPage.propTypes = {

}