function Form({
  buttonHidden,
  keyboardEvent,
  register,
  object,
  cancel,
  remove,
  update,
}) {
  return (
    <form>
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
