import Link from "next/link";
import LoginWithSocial from "./LoginWithSocial";

const FormContent = () => {

  function loginUser1() {

    var obj;

    fetch('http://localhost:8095/users/login', {
      method: "POST",
      body: JSON.stringify({
        username: document.getElementById('loginUsername').value,
        password: document.getElementById('loginPassword').value
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(res => res.json())
    .then(data => {
      obj = data;
     })
    .then(() => {
      if (obj) {
        window.location.replace("/candidates-dashboard/dashboard");
      } else {
        alert("falsches Passwort");
      }
     });

  }

  return (
    <div className="form-inner">
      <h3>Login to Jobyz</h3>

      {/* <!--Login Form--> */}
      
        <div className="form-group">
          <label>Username</label>
          <input id="loginUsername" type="text" name="username" placeholder="Username" required />
        </div>
        {/* name */}

        <div className="form-group">
          <label>Password</label>
          <input id="loginPassword"
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </div>
        {/* password */}

        <div className="form-group">
          <div className="field-outer">
            <div className="input-group checkboxes square">
              <input type="checkbox" name="remember-me" id="remember" />
              <label htmlFor="remember" className="remember">
                <span className="custom-checkbox"></span> Remember me
              </label>
            </div>
            <a href="#" className="pwd">
              Forgot password?
            </a>
          </div>
        </div>
        {/* forgot password */}

        <div className="form-group">
          <button onClick={loginUser1}
            className="theme-btn btn-style-one"
            name="log-in"
          >
            Log In
          </button>
        </div>
        {/* login */}
      
      {/* End form */}

      <div className="bottom-box">
        <div className="text">
          Don&apos;t have an account?{" "}
          <Link
            href="#"
            className="call-modal signup"
            data-bs-toggle="modal"
            data-bs-target="#registerModal"
          >
            Signup
          </Link>
        </div>

        <div className="divider">
          <span>or</span>
        </div>

        <LoginWithSocial />
      </div>
      {/* End bottom-box LoginWithSocial */}
    </div>
  );
};

export default FormContent;
