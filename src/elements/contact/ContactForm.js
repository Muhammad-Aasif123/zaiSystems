import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { init } from "@emailjs/browser";

function ContactForm({ props, formStyle }) {
  const initialValues = { username: "", email: "", phone: "", subject: "", message: "" };
  const [formValues, setformValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIssubmit] = useState(false);

  const form = useRef();
  init("8r6iUINi3pC_HOCoL");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIssubmit(true);

  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformValues({ ...formValues, [name]: value });
  }
  const validate = (values) => {
    const errors = {};
    const emailRegx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const phoneRegx = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
    if (!values.username) {
      errors.username = "Please Enter Valid username"
    }
    if (!values.email) {
      errors.email = "Please Enter Valid email Address"
    }
    else if(!emailRegx.test(values.email))
    {
      errors.email = "This is not Valid email Address"
    }
    if (!values.phone) {
      errors.phone = "Please Enter Valid phone number" 
    }
    if (!values.subject) {
      errors.subject = "Please Enter Valid subject"
    }
    if (!values.message) {
      errors.message = "Please Enter Valid message"
    }
    return errors;
  }

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      emailjs
        .sendForm(
          "service_5hujz4g",
          "template_epxon3y",
          form.current,
          "8r6iUINi3pC_HOCoL"
        )
        .then(
          (result) => {
            alert("Message sent Successfully");
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  }, [formErrors])

  return (
    <form className={`${formStyle}`} onSubmit={handleSubmit} ref={form}>
      <div className="form-group">
        <input type="text" name="username" placeholder="Your Name" value={formValues.username} onChange={handleChange} />
      </div>

      <div className="form-group">
        <input type="email" name="email" placeholder="Email Address" value={formValues.email} onChange={handleChange} />
      </div>

      <div className="form-group">
        <input type="text" name="phone" placeholder="Phone Number" value={formValues.phone} onChange={handleChange} />
      </div>

      <div className="form-group">
        <input type="text" name="subject" placeholder="Subject" value={formValues.subject} onChange={handleChange} />
      </div>

      <div className="form-group">
        <textarea name="message" placeholder="Your Message" value={formValues.message} onChange={handleChange}></textarea>
      </div>

      <div className="form-group">
        <button className="btn-default btn-large">Submit Now</button>
      </div>

      {/* <div className="form-group">{result ? <Result /> : null}</div> */}
    </form>
  );
}
export default ContactForm;
