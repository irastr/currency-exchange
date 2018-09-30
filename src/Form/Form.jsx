import React, { Component } from "react";

class Form extends Component {
  state = {
    email: "",
    login: "",
    password: ""
  };

  onSubmit = (e) => {

    e.preventDefault();

    fetch("http://vast-inlet-25341.herokuapp.com/user", {
      headers: {
        'Accept': "application/json",
        'Content-Type': "application/json"
      },

      method: 'POST',
      body: JSON.stringify(

        this.state
      )
    })
      .then(response => {
        if (response.status === 201) {
          alert("User registered successfully")
          return;
        } else if (response.status === 409) {
          alert("You're already registered")
        }

      })
      .catch(function (err) {
        console.log("Fetch Error :-S", err);
        alert("Fetch Error :-S", err)
      });
  }


  render() {
    return (
      <div className="form-wrap">
        <h1 className="form__title">Registration form</h1>
        <form onSubmit={this.onSubmit} className="form">

          <div class="search__input-wrap">
            <input type="email" name="email" placeholder="Email" onChange={e => this.setState({ email: e.target.value })} />
            <span className="bar" />


          </div>
          <div class="search__input-wrap">
            <input type="text" name="login" placeholder="Login" onChange={e => this.setState({ login: e.target.value })} />
            <span className="bar" />

          </div>
          <div class="search__input-wrap">
            <input type="password" name="password" placeholder="Password" onChange={e => this.setState({ password: e.target.value })} />
            <span className="bar" />

          </div>
          <button className="form__submit-btn wiggle" type="submit">Submit</button>

        </form>
      </div>

    );
  }
}

export default Form;


// 