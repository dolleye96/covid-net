import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Material UI
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';


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
                <h1>Provide medical history description below after requesting a copy from your health professional:</h1>
                <Grid container spacing={3}>
                    <SingleQuestion name="q1" question="What is your heart rate (bpm)?" isRequired={true} isSimpleQ={true} onChange={this.handleChange}/>
                    <SingleQuestion name="q2" question="What is your temperature(°C)?" isRequired={true} isSimpleQ={true} onChange={this.handleChange}/>
                    <SingleQuestion name="q3" 
                        isSimpleQ={false}
                        onChange={this.handleChange}
                    >
                        <h4>Have you noticed any of the symptoms below?</h4>
                        <ul>
                            <li>Fever</li>
                            <li>Cough</li>
                            <li>Shortness of breath or difficulty breathing</li>
                            <li>Chills</li>
                            <li>Repeated shaking with chills</li>
                            <li>Muscle pain</li>
                            <li>Headache</li>
                            <li>Sore throat</li>
                            <li>New loss of taste or smell</li>
                        </ul>
                        <br />
                        <h4>If you have any of these emergency warning signs* for COVID-19 get medical attention immediately:</h4>
                        <ul>
                            <li>Trouble breathing</li>
                            <li>Persistent pain or pressure in the chest</li>
                            <li>New confusion or inability to arouse</li>
                            <li>Bluish lips or face</li>
                        </ul>
                        <br />
                        <p>*This list is not all inclusive. 
                            Please consult your medical provider for any other symptoms that are severe or concerning to you. 
                            Call 911 if you have a medical emergency: 
                            Notify the operator that you have, or think you might have, COVID-19. 
                            If possible, put on a cloth face covering before medical help arrives.
                        </p>
                    </SingleQuestion>
                    <SingleQuestion name="q4" question="List the people you interacted with today?" isRequired={true} isSimpleQ={true} onChange={this.handleChange}/>
                    <SingleQuestion name="q5" question="List the place and time of your visits?" isRequired={true} isSimpleQ={true} onChange={this.handleChange}/>
                    {/* This is fake submit */}
                    <Button variant="contained" color="primary" onClick={() => alert("Your answer submitted!")}>
                        Submit
                    </Button>
                </Grid>
                <br/>

            </div>
        );
    }
}


QuestionPage.propTypes = {

}