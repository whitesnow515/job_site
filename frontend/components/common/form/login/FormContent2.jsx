import Link from "next/link";
import LoginWithSocial from "./LoginWithSocial";

const FormContent2 = () => {
  return (
    <div className="form-inner">
      <h3>Login to Jobyz</h3>

      {/* <!--Login Form--> */}
      <form method="post">
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
          <button
            className="theme-btn btn-style-one"
            type="submit"
            name="log-in"
          >
            Log In
          </button>
        </div>
        {/* login */}
      </form>
      {/* End form */}

      <div className="bottom-box">
        <div className="text">
          Don&apos;t have an account? <Link href="/register">Signup</Link>
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

export default FormContent2;
