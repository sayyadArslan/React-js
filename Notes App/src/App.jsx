import React, { useState } from "react";

const App = () => {
  const[Title,SetTilte] = useState('');
  const [Paragraph,SetParagraph] = useState('');
  const formhandling = (e)=>{
    e.preventDefault();
    console.log(Title);
    console.log(Paragraph);
  }
  return (
    <>
      <h1 className="m-2 font-2xl">My Notes App</h1>
      <div>
        <form onSubmit={formhandling}>
          <input
            type="text"
            placeholder="Notes Title"
            onChange={(e) =>  SetTilte(e.target.value) }
            value={Title}
          />
          <input
            type="text"
            placeholder="Write your Notes"
            onChange={(e) => SetParagraph(e.target.value)}
            value={Paragraph}
          />
          <input type="submit"/>
        </form>
      </div>
    <div className="notes">

      <div className="note">
          <h1>{Title}</h1>
          <p>{Paragraph}</p>
      </div>

    </div>

    </>

  )
}
export default App;