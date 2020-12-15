const Alert = (props) => {
    return (
        <div className={`alert alert-${props.type} alert-dismissible fade show`} role="alert">
            <h4 className="alert-heading">{props.title}</h4>
            <p>{props.message}</p>
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={props.onClose}></button>
        </div>
          
    );
  };
  
  export default Alert;
  