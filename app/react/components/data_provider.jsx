import React from 'react';
import { connect } from 'react-redux'

import { fetchData } from '../actions/data_actions';

class DataProvider extends React.Component {
    constructor(props) {
      super(props);
    }

    componentWillMount() {
      this.props.fetchSectionData(this.props.id);
      this.props.fetchSectionData(this.props.id, 'personal_informations');
      this.props.fetchSectionData(this.props.id, 'languages');
      this.props.fetchSectionData(this.props.id, 'skills');
      this.props.fetchSectionData(this.props.id, 'educations');
      this.props.fetchSectionData(this.props.id, 'experiences');
      this.props.fetchSectionData(this.props.id, 'projects');
      this.props.fetchSectionData(this.props.id, 'templates');
    }

    getChildContext() {
      return {cvId: this.props.id};
    }

    render() {
        return this.props.children;
    }
}

DataProvider.childContextTypes = {
  cvId: React.PropTypes.string
};

function mapStateToProps(state){
  return({
  });
}

function mapDispatchToProps(dispatch) {
    return {
        fetchSectionData: (cvId, section) => dispatch(fetchData(cvId, section)),
    };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DataProvider);
