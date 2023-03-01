import "./index.css";

function App() {
  return (
    <div className="App">
      <div className="login-ui">
        <h1>Hello!</h1>
        <p>
          Welcome to the login ui page which is responsive in both web and
          mobile.
        </p>
        <div className="username-input-field">
          <svg
            className="user-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-person"
            viewBox="0 0 16 16"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
          </svg>
          <input className="username" type="text" placeholder="Username" />
        </div>
        <div className="password-input-field">
          <svg
            className="lock-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-lock-fill"
            viewBox="0 0 16 16"
          >
            <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
          </svg>
          <input className="password" type="password" placeholder="Password" />
        </div>
        <div className="button-container">
          <button className="login-button">Log in</button>
        </div>
        <p className="alert">Forgot Password?</p>
      </div>
    </div>
  );
}

export default App;
