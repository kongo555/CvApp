import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import { fetchData, deleteData } from '../actions/data_actions';
import TablePanel from './gui/table_panel';
import PageContent from './gui/page_content';
import Cv from './cv';
import AddCv from './add_cv';


class CvsPanel extends React.Component {
    constructor(props) {
      super(props);

      this.deleteCv = this.deleteCv.bind(this);
    }

    componentDidMount() {
        this.props.fetchData();
    }

    deleteCv(id) {
        this.props.deleteData(id);
    }

    render() {
        var view = (
          <PageContent title={"Cv List"}>
            <TablePanel
                top={
                  <AddCv />
                }
                description={
                  <tr>
                    <th className="col-md-3">Name</th>
                    <th className="col-md-2">Created at</th>
                    <th className="col-md-2">Actions</th>
                  </tr>
                }
                content={
                  (this.props.items.map(cv => <Cv key={'cv' + cv.id} {...cv} deleteCv={this.deleteCv}/>))
                }
            />
      </PageContent>);
        return view;
    }
}

CvsPanel.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  fetchData: PropTypes.func.isRequired,
  deleteData: PropTypes.func.isRequired,
}

function mapStateToProps(state){
  return({
    items: state.sections.cvs,
  });
}

function mapDispatchToProps(dispatch) {
    return {
        fetchData: () => dispatch(fetchData()),
        deleteData: (id) => dispatch(deleteData(id)),
    };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CvsPanel);
