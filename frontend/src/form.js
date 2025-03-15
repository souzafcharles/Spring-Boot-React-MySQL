function Form({ buttonHidden, keyboardEvent, register, object }) {
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
          className="btn btn-primary"
          onClick={register} 
        />
      ) : (
        <div>
          <input type="button" value="Update" className="btn btn-warning" />
          <input type="button" value="Delete" className="btn btn-danger" />
          <input type="button" value="Cancel" className="btn btn-secondary" />
        </div>
      )}
    </form>
  );
}

export default Form;
