import React from 'react'
import TextField from 'material-ui/TextField'

class CustomTextField extends React.Component {
    render() {
        return (
          <TextField hintText={this.props.label}
            floatingLabelText={this.props.label}
            errorText={this.props.meta.touched && this.props.meta.error}
            {...this.props.input}
            multiLine={this.props.multiLine}
            rows={this.props.rows}
            style={{
              width: '100%',
            }}
          />
        );
    }
}

export default CustomTextField;
