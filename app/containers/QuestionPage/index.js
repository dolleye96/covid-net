import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Material UI
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

// custom component
import SingleQuestion from '../../components/SingleQuestion';




// for demo version, no user authentication is implemented.
export default class QuestionPage extends React.Component {
    state = {
        q1: "",
        q2: "",
        q3: "",
        q4: "",
        q5: "",
        q6: "",
    }
    

    handleChange(event) {
        this.setState(
            {[e.target.name]: e.target.value}
        );
    };

    componentDidMount() {
        // fetch backend data, if needed
    }

    componentDidUpdate() {
        // catches the update of props, and take action (e.g. change state)
    }

    componentWillUnmount() {
        // reset state to initial state.
    }

    render() {

        return(
            <div>
                <h1>This is Question page!</h1>
                <Grid container spacing={3}>
                    <SingleQuestion name="q1" question="This is question 1" isRequired={true} onChange={this.handleChange}/>
                    <SingleQuestion name="q2" question="This is question 2" isRequired={true} onChange={this.handleChange}/>
                    <SingleQuestion name="q3" question="This is question 3" onChange={this.handleChange}/>
                    <SingleQuestion name="q4" question="This is question 4" onChange={this.handleChange}/>
                    <SingleQuestion name="q5" question="This is question 5" onChange={this.handleChange}/>
                    <SingleQuestion name="q6" question="This is question 6" onChange={this.handleChange}/>
                </Grid>
            </div>
        );
    }
}


QuestionPage.propTypes = {

}