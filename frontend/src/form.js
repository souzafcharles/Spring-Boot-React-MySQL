function Form() {
  return (
    <form>
        <h1>Register</h1>
      <input type="text" placeholder="Name" className="form-control" />
      <input type="text" placeholder="Brand" className="form-control" />

      <input type="button" value="Register" className="btn btn-primary" />
      <input type="button" value="Update" className="btn btn-warning" />
      <input type="button" value="Delete" className="btn btn-danger" />
      <input type="button" value="Cancel" className="btn btn-secondary" />
    </form>
  );
}

export default Form;
