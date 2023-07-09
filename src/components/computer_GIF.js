import React from "react";

const computer_GIF = () => {
  return (
    <div>
      <h1>My Component</h1>
      <iframe
        src="https://giphy.com/embed/11JTxkrmq4bGE0"
        width="480"
        height="369"
        frameBorder="0"
        className="giphy-embed"
        allowFullScreen
      ></iframe>
      <p>
        <a href="https://giphy.com/gifs/cat-computer-working-11JTxkrmq4bGE0">
          via GIPHY
        </a>
      </p>
    </div>
  );
};

export default computer_GIF;
