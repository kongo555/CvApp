import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom'
import {Link} from 'react-router';

import DeleteModal from './gui/delete_modal.jsx';

class Cv extends React.Component {
     constructor(props) {
         super(props);

         this.deleteCv = this.deleteCv.bind(this);
     }

     deleteCv() {
         this.props.deleteCv(this.props.id);
     }

    render() {
        return (
            <tr>
                <td>{this.props.name}</td>
                <td>{new Date(this.props.created_at).toLocaleString()}</td>
                <td>
                    <Link to={`/cv/${this.props.id}/personal_informations/`}>
                        <i className="btn btn-primary btn-sm fa fa-edit"/>
                    </Link>
                    <DeleteModal title={"Delete cv"} text={"All your proggress will be deleted."} handleDelete={this.deleteCv} />
                </td>
            </tr>
        );
    }
}

Cv.propTypes = {
    name: React.PropTypes.string,
    created_at: PropTypes.string.isRequired,
    deleteCv: PropTypes.func.isRequired,
};

export default Cv;
