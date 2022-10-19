export default function Bubbles() {
    return (
      <div className="bubbles">
        <h2>How does it work?</h2>
        <div className="bubble-container">
            <div className="bubble">
                <h3>Step 1</h3>
                <p className="bubble-content">Create an account</p>
            </div>
            <div className="bubble">
                <h3>Step 2</h3>
                <p className="bubble-content">Enter your unique insurance identifier</p>
            </div>
            <div className="bubble">
                <h3>Step 3</h3>
                <p className="bubble-content">We use an API to populate your data and allow you to view it</p>
            </div>
        </div>
      </div>
    );
  }
  