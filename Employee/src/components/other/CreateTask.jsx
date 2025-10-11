import React from "react";

const CreateTask = ()=>{
    return(
        <>
       
       
      {/* Form Card */}
      <div className="relative  z-10 w-full max-w-md bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl p-8 shadow-2xl">
        <header className="flex items-center gap-3 mb-6">
          <button className="text-white/70 hover:text-white transition text-2xl">←</button>
          <h1 className="text-2xl font-semibold text-white">Create Task</h1>
        </header>

        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          {/* Task Title */}
          <div>
            <label className="block text-white/80 text-sm mb-1">Task Title</label>
            <input
              type="text"
              placeholder="Make a UI design"
              className="w-full bg-white/10 placeholder-white/60 text-white rounded-lg px-4 py-3 outline-none border border-white/20 focus:border-white/40 transition"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-white/80 text-sm mb-1">Description</label>
            <textarea
              placeholder="Detailed description of task (Max 500 words)"
              className="w-full bg-white/10 placeholder-white/60 text-white rounded-lg px-4 py-3 outline-none border border-white/20 focus:border-white/40 transition h-28 resize-none"
              required
            ></textarea>
          </div>

          {/* Date */}
          <div>
            <label className="block text-white/80 text-sm mb-1">Date</label>
            <input
              type="date"
              className="w-full bg-white/10 text-white rounded-lg px-4 py-3 outline-none border border-white/20 focus:border-white/40 transition"
              required
            />
          </div>

          {/* Assign To */}
          <div>
            <label className="block text-white/80 text-sm mb-1">Assign To</label>
            <input
              type="text"
              placeholder="Enter employee name"
              className="w-full bg-white/10 placeholder-white/60 text-white rounded-lg px-4 py-3 outline-none border border-white/20 focus:border-white/40 transition"
              required
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-white/80 text-sm mb-1">Category</label>
            <input
              type="text"
              placeholder="Design, Development, etc."
              className="w-full bg-white/10 placeholder-white/60 text-white rounded-lg px-4 py-3 outline-none border border-white/20 focus:border-white/40 transition"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-white/20 to-white/10 text-white font-semibold border border-white/30 hover:scale-[1.02] transition-transform"
          >
            Create Task
          </button>
        </form>
      </div>
        </>
    )
}
export default CreateTask;