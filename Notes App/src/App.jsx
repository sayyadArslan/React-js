import React, { useState } from "react";

export default function App() {
  const [Title, SetTitle] = useState('');
  const [Detail, SetDetail] = useState('');
  const [Notes, SetNotes] = useState([]);
  const SubmitHandle = (e) => {
    e.preventDefault();
    //console.log(Title, Detail);
    SetTitle('');
    SetDetail('')
    const copytask = [...Notes];
    copytask.push({ Title, Detail });
    SetNotes(copytask);
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-center mb-6">Notes App</h1>

        {/* Input fields */}
        <div className="space-y-3 mb-4">
          <form onSubmit={SubmitHandle}>
            <input
              type="text"
              value={Title}
              onChange={(e) => SetTitle(e.target.value)}
              placeholder="Title"
              className="w-full border rounded-md px-3 mb-2 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Detail"
              rows="3"
              value={Detail}
              onChange={(e) => SetDetail(e.target.value)}
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >

            </textarea>
            <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
              Add Note
            </button>
          </form>

        </div>

        {/* Notes list */}
        <div className="space-y-3">
          {/* Example Note Card */}

          {
            Notes.map(function (elem,index) {
              return <div key={index} className="border rounded-md p-3 shadow-sm bg-gray-50">
                <h2 className="font-semibold text-lg">{elem.Title}</h2>
                <p className="text-sm text-gray-700 mt-1">
                  {elem.Detail}
                </p>
              </div>
            })

          }

        </div>
      </div>
    </div>
  );
}
