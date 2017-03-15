import React from 'react'
import Moment from 'moment';
import DatePicker from 'material-ui/DatePicker'
import IconButton from 'material-ui/IconButton';
import Clear from 'material-ui/svg-icons/content/clear';

const Clearable = ComposedComponent => class extends React.Component {
  handleChange(evt, date) {
       if (this.props.input.onChange) {
           this.props.input.onChange(date ? Moment.utc(Moment(date).format('YYYY-MM-DD[T]HH:mm:ss')).toDate() : null);
       }
   }

   clearDate (event) {
       event.preventDefault();

       // We manually reach into the composed component and set it's date to null.
       let newDate = null;
       this.refs.datePicker.setState({
           date: newDate
       }, () => {
           this.refs.datePicker.props.onChange(null, newDate);
       });
   }
   render () {
      // <div style={{position: 'relative'}}>

      // container="inline"
       return (
           <div style={{display: 'table'}}>
             <div style={{display: 'table-row'}}>
               <ComposedComponent
                   { ...this.props.input }
                   hintText={this.props.label}
                   floatingLabelText={this.props.label}
                   ref="datePicker"
                   value={this.props.input.value ? new Date(this.props.input.value) : null}
                   errorText={this.props.meta.touched && this.props.meta.error}
                   onChange={this.handleChange.bind(this)}
                   textFieldStyle={{  width: 'auto'}}
                   style={{display: 'table-cell'}}/>
               {this.props.input.value &&
               <IconButton ref="button" onClick={this.clearDate.bind(this)} style={{display: 'table-cell'}}>
                   <Clear />
               </IconButton>
               }
             </div>
           </div>
       )
   }
}

export default Clearable(DatePicker);
