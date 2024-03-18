const BillingDetails = () => {
  return (
    <div className="default-form">
      <div className="row">
        {/* <!--Form Group--> */}
        <div className="form-group col-lg-6 col-md-12 col-sm-12">
          <div className="field-label">
            First name <sup>*</sup>
          </div>
          <input type="text" name="field-name" placeholder="" />
        </div>

        {/* <!--Form Group--> */}
        <div className="form-group col-lg-6 col-md-12 col-sm-12">
          <div className="field-label">
            Last name <sup>*</sup>
          </div>
          <input type="text" name="field-name" placeholder="" />
        </div>

        {/* <!--Form Group--> */}
        <div className="form-group col-lg-12 col-md-12 col-sm-12">
          <div className="field-label">Company name (optional)</div>
          <input type="text" name="field-name" placeholder="" />
        </div>

        {/* <!--Form Group--> */}
        <div className="form-group col-lg-12 col-md-12 col-sm-12">
          <div className="field-label">
            Country <sup>*</sup>
          </div>
          <select
            name="billing_country"
            className="select2 sortby-select form-select"
            autoComplete="country"
          >
            <option>Select a country&hellip;</option>
            <option value="AX">&#197;land Islands</option>
            <option value="AF">Afghanistan</option>
            <option value="AL">Albania</option>
            <option value="DZ">Algeria</option>
            <option value="AS">American Samoa</option>
            <option value="AD">Andorra</option>
            <option value="AO">Angola</option>
            <option value="AI">Anguilla</option>
            <option value="AQ">Antarctica</option>
            <option value="AG">Antigua and Barbuda</option>
            <option value="AR">Argentina</option>
          </select>
        </div>

        {/* <!--Form Group--> */}
        <div className="form-group col-lg-12 col-md-12 col-sm-12">
          <div className="field-label">
            Street address <sup>*</sup>
          </div>
          <input
            type="text"
            name="field-name"
            placeholder="House number and street name"
          />
          <input
            type="text"
            name="field-name"
            placeholder="Apartment,suite,unit etc. (optional)"
          />
        </div>

        {/* <!--Form Group--> */}
        <div className="form-group col-lg-6 col-md-12 col-sm-12">
          <div className="field-label">
            Town / City <sup>*</sup>
          </div>
          <input type="text" name="field-name" placeholder="" required="" />
        </div>

        {/* <!--Form Group--> */}
        <div className="form-group col-lg-6 col-md-12 col-sm-12">
          <div className="field-label">
            State / County <sup>*</sup>
          </div>
          <input type="text" name="field-name" placeholder="" required="" />
        </div>

        {/* <!--Form Group--> */}
        <div className="form-group col-lg-6 col-md-12 col-sm-12">
          <div className="field-label">
            Postcode/ ZIP <sup>*</sup>
          </div>
          <input type="text" name="field-name" placeholder="" required="" />
        </div>

        {/* <!--Form Group--> */}
        <div className="form-group col-lg-6 col-md-12 col-sm-12">
          <div className="field-label">Phone</div>
          <input type="text" name="field-name" placeholder="" />
        </div>

        {/* <!--Form Group--> */}
        <div className="form-group col-lg-12 col-md-12 col-sm-12">
          <div className="field-label">Email Address</div>
          <input type="text" name="field-name" placeholder="" />
        </div>

        {/* <!--Form Group--> */}
        <div className="form-group col-lg-12 col-md-12 col-sm-12">
          <h3 className="title">Additional information</h3>
          <div className="field-label">Order notes (optional)</div>
          <textarea
            className=""
            placeholder="Notes about your order, e.g. special notes for delivery."
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default BillingDetails;
