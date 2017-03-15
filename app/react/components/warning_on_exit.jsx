import React from 'react'
import { withRouter } from 'react-router'

class WarningOnExit extends React.Component {
    constructor(props) {
        super(props);

        this.routerWillLeave = this.routerWillLeave.bind(this);
    }

    componentDidMount() {
      this.props.router.setRouteLeaveHook(this.props.route, this.routerWillLeave)
    }

    routerWillLeave(nextLocation) {
        if (this.props.dirty) {
          return 'You have unsaved information, are you sure you want to leave this page?';
        }
    }

    render() {
      return this.props.children;
    }
}


export default withRouter(WarningOnExit);
