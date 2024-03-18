const FormContent = () => {

  function registerUser() {

    fetch('http://localhost:8095/users', {
      method: "POST",
      body: JSON.stringify({
        username: document.getElementById('registerUsername').value,
        password: document.getElementById('registerPassword').value
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    });

  }

  return (
    <form method="post" action="add-parcel.html">
      <div className="form-group">
        <label>Email Address</label>
        <input id="registerUsername" type="email" name="username" placeholder="Username" required />
      </div>
      {/* name */}

      <div className="form-group">
        <label>Password</label>
        <input
          id="registerPassword"
          type="password"
          name="password"
          placeholder="Password"
        />
      </div>
      {/* password */}

      <div className="form-group">
        <button onClick={registerUser} className="theme-btn btn-style-one" type="submit">
          Register
        </button>
      </div>
      {/* login */}
    </form>
  );
};

export default FormContent;
