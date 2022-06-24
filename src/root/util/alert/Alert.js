import React from "react";
import * as alertReducer from '../../../redux/alert/alert.reducer';
import { useSelector } from "react-redux";

const Alert = () => {
  let alertList = useSelector((state) => {
    return state[alertReducer.alertFeatureKey]
  });

  return (
    // ${alertList[0].color} {alert.message}
    <React.Fragment>
      {alertList.length > 0 ? (
        <React.Fragment>
          <div
            className={`alert alert-${alertList[0].color} alert-dismissible m-2 fixed-top animated zoomIn`} 
          >
            {alertList.map((alert) => {
              return (
                <div key={alert.id}>
                  <small className="font-weight-bold">{alert.message}</small>
                </div>
              );
            })}
          </div>
        </React.Fragment>
      ) : null}
    </React.Fragment>
  );
};

export default Alert;
