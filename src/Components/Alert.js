import React from 'react';

/*const Capitalize = (word) =>{
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower(1);
} */
function Alert(props) {
  return (
    <div style={{height :'50px'}}>
    {props.alttext && <div>
      <div className={`alert alert-${props.alttext.type} alert-dismissible fade show`} role="alert">
           {props.alttext.msg}
          <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    </div>}
    </div>
  );
}

export default Alert;
