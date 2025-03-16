function Form({
  buttonHidden,
  keyboardEvent,
  register,
  object,
  cancel,
  remove,
  update,
  message,
  clearMessage, 
}) {
  return (
    <form>
      {message.text && (
        <div
          style={{
            color: message.type === "error" ? "red" : "blue",
            textAlign: "center",
            marginBottom: "10px",
            position: "relative",
          }}
        >
          {message.text}
          <button
            onClick={clearMessage} 
            style={{
              position: "absolute",
              right: "10px",
              top: "0",
              border: "none",
              background: "transparent",
              fontWeight: "bold",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            X
          </button>
        </div>
      )}
      <input
        type="text"
        value={object.name}
        onChange={keyboardEvent}
        name="name"
        placeholder="Name"
        className="form-control"
      />
      <input
        type="text"
        value={object.brand}
        onChange={keyboardEvent}
        name="brand"
        placeholder="Brand"
        className="form-control"
      />

      {buttonHidden ? (
        <input
          type="button"
          value="Register"
          onClick={register}
          className="btn btn-primary"
        />
      ) : (
        <div>
          <input
            type="button"
            value="Update"
            onClick={update}
            className="btn btn-warning"
          />
          <input
            type="button"
            value="Delete"
            onClick={remove}
            className="btn btn-danger"
          />
          <input
            type="button"
            value="Cancel"
            onClick={cancel}
            className="btn btn-secondary"
          />
        </div>
      )}
    </form>
  );
}

export default Form;
