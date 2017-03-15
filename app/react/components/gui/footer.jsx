import React, {PropTypes} from 'react';
import { connect } from 'react-redux'
import { submit } from 'redux-form'

class Footer extends React.Component {
    render() {
        return (
            <div className="footer navbar-fixed-bottom navbar-inverse">
              <div className="container">
                <a className="btn btn-default btn-sm" onClick={this.props.remoteSubmit}>
                              <i className="fa fa-save"> Save</i>
                </a>
              </div>
            </div>
        );
    }
}

Footer.propTypes = {
    remoteSubmit: PropTypes.func.isRequired,
}

function mapStateToProps(state){
  return({
  });
}

function mapDispatchToProps(dispatch) {
    return {
      remoteSubmit: () => dispatch(submit('cv'))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
