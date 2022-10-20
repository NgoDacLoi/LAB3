import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
/*root.render(
  <p>
      hello, <strong> JSK</strong>
  </p>
)*/
root.render(
        <div>
            <button />
             <code />
             <input />
            <label />
             <p />
             <pre />
             <select />
             <table />
             <ul />
        </div>
)

root.render(
    <section>
      <header>
        <h1>Header</h1>
        </header>  
        <nav>
          <a href='item'>Nav Item</a>
        </nav>
        <main>
          <p> the main content ...</p>
        </main>
        <footer>
          <small>&copy; 2021</small>
        </footer>
    </section>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
