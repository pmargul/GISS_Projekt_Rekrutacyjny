const Modal = (props) => {
  return (
    <div className="modal fade" id={props.id} tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className={`modal-header modal-${props.type}`}>
            <h5 className="modal-title" id="modalTitle">
              {props.title}
            </h5>
          </div>
          <div className="modal-body">{props.body}</div>
          <div className="modal-footer">
            <button
              type="button"
              className={`btn btn-${
                props.cancelButtonType ? props.cancelButtonType : "danger"
              }`}
              data-bs-dismiss="modal"
            >
              {props.cancelLabel}
            </button>
            <button
              type="button"
              data-bs-dismiss="modal"
              onClick={props.onSuccess}
              className={`btn btn-${
                props.successButtonType ? props.successButtonType : "success"
              }`}
            >
              {props.successLabel}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
