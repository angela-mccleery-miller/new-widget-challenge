import React from "react";

export default function App() {
  const str = "Jordan Hudgen's voice makes my ears and brain bleed.";
  const [msg, setMsg] = React.useState(null);

  return (
    <div className="strLength">
      <p className="sentence">
        Click the button to return the number of characters in the string below!
      </p>
      <div className="str1">
        {str}
        <div>
          <button onClick={() => setMsg(str.length)}>Try it</button>
        </div>
        <div className="result">{msg}</div>
      </div>
    </div>
  );
}
