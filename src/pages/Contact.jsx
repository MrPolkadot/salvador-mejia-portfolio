import { useState, useEffect } from "react";
import "../styles/Contact.css";
import Navigation from "../components/Navigation";


const Contact = () => {
  const [email, setEmail] = useState(" ");
  const [message, setMessage] = useState(" ");
  const [inputFields, setInputFields] = useState({ text: "", textArea: "" })
  const [errors, setErrors] = useState({})
  


  //Checks if there is any input value, else it sends an error message
  const validateValues = (inputValues) => {
    let errors = {};
    if (inputValues.text.length < 1) {
      errors.text = "Please enter name";
    }
    if (inputValues.textArea.length < 1) {
      errors.text = "Please enter message";
    }
    return errors;
  };

  //updates the state from the input value entered
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
  setInputFields({...inputFields, [name]: value})
  }
  





  const handleEmail = (e) => {
    let inputValue = e.target.value;
    setEmail(inputValue);


 
  


    let mailFormat = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    if (!mailFormat.test(inputValue)) {
       setMessage(
        <p className="help is-danger">This email is invalid</p>
      );
    } else setMessage("");
  }

 



  return (
    <>
      <Navigation />
      <div className="contact-form has-text-centered is-flex is-flex-direction-column is-align-content-center is-flex-wrap-wrap has-background-white">
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input className="input" type="text" placeholder="Text input" value={inputFields.text} onChange={handleInput} required/>
          </div>
          {errors.text ? (
            <p>Please enter name</p>
          ) : null}
        </div>
        <div className="field">
          <label className="label">Email</label>
          <div className="control has-icons-left has-icons-right">
            <input
              className="input is-danger"
              type="email"
              value={email}
              onChange={handleEmail}
              placeholder="email@mail.com"
            />
            <span className="icon is-small is-left">
              <i className="fas fa-envelope" />
            </span>
            
          </div>
          {message}
        </div>

        <div className="field">
          <label className="label">Message</label>
          <div className="control">
            <textarea
              className="textarea"
              placeholder="Textarea"
              value={inputFields.textArea}
              onChange={handleInput}
              required
            />
          </div>
        </div>

        <div className="field is-grouped">
          <div className="control">
            <button className="button is-link" type="submit">Submit</button>
          </div>
          <div className="control">
            <button className="button is-link is-light">Cancel</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
