import {
    RECEIVE_DATAS,
    ADD_DATA,
    REMOVE_DATA,
} from '../constants'
import { isFetching } from './other_actions';
import {addNotification , updateNotification} from 'reapop';

function getUrl(cvId, section, elementId){
  if(section == 'templates')
    return `/templates/`;

  var url = `/cvs/`;
  if (cvId != null) {
    url = url + `${cvId}`;
  }
  if (section != null) {
    url = url + `/${section}`;
  }
  if (elementId != null) {
    url = url + `/${elementId}`;
  }

  return url;
}

export function receiveDatas(section, data) {
  return {
    type: RECEIVE_DATAS,
    section,
    data
  }
}

export function fetchData(cvId, section, elementId) {
    var url = getUrl(cvId, section, elementId);
    if (section == null) {
      section = 'cvs';
    }

    return (dispatch) => {
        dispatch(isFetching(true));

        $.ajax({
                url: url,
                success: function(data) {
                    dispatch(isFetching(false));
                    dispatch(receiveDatas(section, data));
                },
                error: function(xhr, status, error) {
                    dispatch(isFetching(false));
                    alert('Cannot get data from API: ', error);
                }

            });
    };
}

export function addData(section, data) {
    return {
      type: ADD_DATA,
      section,
      data
    };
}

export function insertData(item, cvId, section) {
    var url = getUrl(cvId, section);
    if (section == null) {
      section = 'cvs';
    }

    var symbol = section.substr(0, section.length - 1);
    var itemData ={};
    itemData[symbol] = item;
    return (dispatch) => {
        $.ajax({
            url: url,
            method: 'POST',
            data: itemData,
            success: function(data) {
                dispatch(addData(section, data));
            },
            error: function(xhr, status, error) {
                alert('Cannot add a new record: ', error);
            }
        })
    };
}

export function removeData(section, id) {
    return {
      type: REMOVE_DATA,
      section,
      id
    };
}

export function deleteData(cvId, section, elementId) {
  var url = getUrl(cvId, section, elementId);
  var id = elementId;
  if (section == null) {
    section = 'cvs';
    id = cvId;
  }

  return (dispatch) => {
      $.ajax({
        method: 'DELETE',
        url: url,
        mimeType: 'html',
        success: function(data) {
            dispatch(removeData(section, id));
        }.bind(this),
        error: function(xhr, status, error) {
            alert('Cannot delete requested record: ', error);
        }
      })
  };
}

export function updateData(item, cvId, section, elementId, plural) {
    var url = getUrl(cvId, section, elementId);
    if (section == null) {
      section = 'cvs';
    }

    var symbol;
    var itemData ={};
    if(plural){
      symbol = section;
      item = Object.values(item[symbol]);
      itemData[symbol] = JSON.stringify(item);
    }
    else{
      symbol = section.substr(0, section.length - 1);
      itemData[symbol] = item;
    }

    return (dispatch) => {
      let notif = dispatch(addNotification({
          title: 'Data update',
          message: 'Your data is updating...',
          status: 'loading',
          dismissible: false,
          dismissAfter: 0
      }));
      $.ajax({
              method: 'PUT',
              url: url,
              data: itemData,

              success: function(data) {
                  notif.status = 'success';
                  notif.message = 'Your data has been successfully updated';
                  notif.dismissible = true;
                  notif.dismissAfter = 5000;
                  dispatch(updateNotification(notif));

                  dispatch(receiveDatas(section, data));
              }.bind(this),
              error: function(xhr, status, error) {
                  notif.status = 'error';
                  notif.message = 'Cannot update requested data: ' + error;
                  notif.dismissible = true;
                  notif.dismissAfter = 5000;
                  dispatch(updateNotification(notif));

                  // alert('Cannot update requested record: ', error);
              }
          });
    };
}
