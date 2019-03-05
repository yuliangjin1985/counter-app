import React from "react";

export class MyContent extends React.Component {
  render() {
    const { lines, handleAdd, handleDeleteLine } = this.props;
    return (
      <div>
        Lines number is: {lines.length};
        {lines.map((line, index) => (
          <div>
            <div key={index}>
              {line}
              {"   "}
              <button
                className="btn btn-primary btn-sm m-2"
                onClick={() => handleDeleteLine({ index })}
              >
                Delete
              </button>
            </div>
          </div>
          //   <h3 key={index}>{line}</h3>
        ))}
        <button onClick={handleAdd}>Add a line</button>
      </div>
    );
  }
}
