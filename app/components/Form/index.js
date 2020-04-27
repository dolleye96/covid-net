import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


// for demo version, no user authentication is implemented.
class Form extends React.Component {
    state = {
        username = ""

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

        return(
            <div>
                <form>
                    {/* SingleQuestion component */}
                    {/* SingleQuestion component */}
                    {/* SingleQuestion component */}
                    {/* upload file component */}
                    {/* request data from 3rd party (e.g. x-ray image) component */}
                </form>
                {/* submit the form button */}
                <button />      

            </div>
        );
    }
}


Form.propTypes = {
    formName: PropTypes.string,
}