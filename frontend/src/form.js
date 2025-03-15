function Form({ buttonHidden }) {
  return (
    <form>
      <input type="text" placeholder="Name" className="form-control" />
      <input type="text" placeholder="Brand" className="form-control" />

      {buttonHidden ? (
        <input type="button" value="Register" className="btn btn-primary" />
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
