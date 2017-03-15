import React from 'react';
import {Link} from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NotificationsSystem from 'reapop';
import theme from 'reapop-theme-wybo';

import Header from './gui/header';
import Footer from './gui/footer';
import DevTools from './DevTools';
import DataProvider from './data_provider'

class App extends React.Component {
    static get propTypes() {
        return {children: React.PropTypes.node};
    }
    render() {
      let view = null;
      var id = this.props.params.cvId;
      if (id) {
        view = (
          <DataProvider id={id}>
            {this.props.children}
          </DataProvider>
        );
      } else {
        view = this.props.children;
      }
        return (
            <MuiThemeProvider>
                <div>
                  <NotificationsSystem theme={theme}/>
                  <div id="wrapper">
                    <Header id={id}/>
                    <div id="page-wrapper">
                    {view}
                    </div>

                  </div>
                </div>
            </MuiThemeProvider>
        );
    }
}
//  <DevTools/>

export default App;
