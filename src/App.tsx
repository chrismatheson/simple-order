import React from 'react';
import Amplify, {API} from "aws-amplify";
import awsExports from "./aws-exports";
import './App.module.css';

Amplify.configure(awsExports);

function sendOrder(ev:React.FormEvent) {
    const meh = ev.currentTarget;
    ev.preventDefault();
    ev.stopPropagation();
    API.get('simplorderapi', '/order', {
        body: {},
        headers: {}
    });
}

function App() {
  return (
    <div className="App">
      <form onSubmit={sendOrder}>
        <label>Write down your order.</label>
        <textarea name="ordertext"></textarea>
        <button name="Order">Order</button>
      </form>
    </div>
  );
}

export default App;
