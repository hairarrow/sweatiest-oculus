import React, { useState } from "react";
import firebase from "./firebase";
import Header from "./Header";
import ThankYouPage from "./ThankYouPage";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [didSignUp, setDidSignUp] = useState(false);

  function handleSubmit(formSubmit) {
    formSubmit.preventDefault();

    firebase
      .firestore()
      .collection("EmailLead")
      .add({
        email,
        createAt: firebase.firestore.Timestamp.now()
      })
      .then(() => {
        setDidSignUp(true);
      })
      .catch(() => {
        alert("Something went wrong! Please try again!");
      });
  }

  if (didSignUp) {
    return <ThankYouPage />;
  }

  return (
    <main>
      <Header />

      <section>
        <h2>You deserve a less sweaty Oculus</h2>
        <p>
          We're working hard to bring you an Oculus experience you can share
          with your friends and loved ones without sharing all that sweat.
        </p>

        <p>
          If you're interested in learning more, sign up to be notified as soon
          as we release!
        </p>
      </section>

      <form onSubmit={handleSubmit}>
        <label>Your Email</label>
        <input
          type="email"
          value={email}
          onChange={(inputChange) => {
            setEmail(inputChange.currentTarget.value);
          }}
        />
        <input type="submit" value="Get Notified!" />
      </form>
    </main>
  );
}

export default App;
