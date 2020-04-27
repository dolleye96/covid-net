import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Material UI
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';




// What to do: check required / optional

// for demo version, no user authentication is implemented.
export default class SingleQuestion extends React.Component {
    state = {
        inputValue: "",
    }


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
        const { name, question, isRequired, onChange } = this.props;


        return(
            <Grid item xs={12}>
                <Paper>
                    <Grid container>
                        <Grid item xs={12}>
                            <form>
                                { isRequired ? <Typography variant="p" color="error">This question is required.</Typography> : null }
                                <Typography variant="h3" gutterBottom>
                                    Q: {question}
                                </Typography>
                                <TextField
                                    id="standard-multiline-flexible"
                                    label="Answer"
                                    multiline
                                    size="medium"
                                    rowsMax={10}
                                    // value={this.state.inputValue}
                                    onChange={onChange}
                                />
                            </form>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        );
    }
}


SingleQuestion.propTypes = {
    name: PropTypes.string,
    question: PropTypes.string,
    isRequired: PropTypes.bool,
    onChange: PropTypes.func,
}