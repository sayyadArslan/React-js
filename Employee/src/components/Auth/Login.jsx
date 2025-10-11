import React, { useState } from "react";

// Glassmorphism Login Component
// Usage: import GlassLogin from './GlassLogin'
// Make sure Tailwind CSS is configured in your project and that you have
// `backdrop-filter` support (modern browsers) — Tailwind's `backdrop-blur` utility is used.

export default function GlassLogin({handlelogin}) {
    const [Email,setEmail] =useState('');
    const [Password,setPassword] = useState('');
    const submit = (e)=>{
            e.preventDefault();
           // console.log(Email,Password);
            handlelogin(Email,Password)
            setEmail('');
            setPassword('');
    }
  return (
    <div className="min-h-screen flex items-center justify-center">
      {/* Backdrop overlay for subtle darkening */}
      <div className="absolute inset-0 bg-black/100 pointer-events-none" />

      <div className="relative z-10 w-full max-w-md">
        <div className="rounded-2xl bg-white/6 backdrop-blur-lg border border-white/10 shadow-2xl p-8">
          <header className="mb-6 text-center">
            <h1 className="text-2xl font-semibold text-white">Welcome back</h1>
            <p className="text-sm text-white/70 mt-1">Sign in to continue to your account</p>
          </header>

          <form className="space-y-4" onSubmit={submit}>
            <label className="block">
              <span className="sr-only">Email</span>
              <input
                onChange={(e)=>{setEmail(e.target.value)}}
                value={Email}
                type="email"
                required
                placeholder="Email"
                className="w-full bg-white/4 placeholder-white/60 text-white rounded-lg px-4 py-3 outline-none ring-0 border border-white/6 focus:border-white/25 transition"
              />
            </label>

            <label className="block">
              <span className="sr-only">Password</span>
              <input
                 onChange={(e)=>{setPassword(e.target.value)}}
                value={Password}
                type="password"
                required
                placeholder="Password"
                className="w-full bg-white/4 placeholder-white/60 text-white rounded-lg px-4 py-3 outline-none ring-0 border border-white/6 focus:border-white/25 transition"
              />
            </label>

            <div className="flex items-center justify-between text-sm text-white/80">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="h-4 w-4 rounded accent-white/80" />
                <span>Remember me</span>
              </label>
              <button type="button" className="text-white/70 hover:underline">
                Forgot?
              </button>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-gradient-to-r from-white/12 to-white/8 backdrop-brightness-125 border border-white/8 text-white font-medium shadow-sm hover:scale-[1.01] transition-transform"
            >
              Sign in
            </button>
          </form>

          <div className="mt-6 text-center text-white/70">
            <p className="text-sm">Or continue with</p>
            <div className="mt-4 flex gap-3 justify-center">
              <button className="flex items-center gap-2 px-4 py-2 rounded-md bg-white/4 border border-white/6 text-white text-sm">
                {/* You can replace these spans with icons if using lucide-react */}
                <span>Google</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 rounded-md bg-white/4 border border-white/6 text-white text-sm">
                <span>GitHub</span>
              </button>
            </div>
          </div>

          <footer className="mt-6 text-center text-white/70 text-sm">
            Don’t have an account? <button className="text-white/90 font-medium hover:underline">Sign up</button>
          </footer>
        </div>

        {/* soft floating glass accent */}
        <div className="pointer-events-none absolute -inset-6 blur-2xl opacity-30" />
      </div>
    </div>
  );
}
