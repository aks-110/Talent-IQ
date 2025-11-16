import { Link } from "react-router-dom";
import {
  ArrowRightIcon,
  CheckIcon,
  Code2Icon,
  SparklesIcon,
  UsersIcon,
  VideoIcon,
  ZapIcon,
} from "lucide-react";
import { SignInButton } from "@clerk/clerk-react";

function HomePage() {
  return (
    <div className="min-h-screen bg-[#141414] text-gray-300">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-black/20 border-b border-white/20">
        <div className="max-w-7xl mx-auto p-4 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 hover:scale-105 transition-all duration-200"
          >
            <div className="size-10 rounded-xl bg-linear-to-br from-purple-500 via-pink-500 to-blue-500 flex items-center justify-center shadow-lg">
              <SparklesIcon className="size-6 text-white" />
            </div>

            <div className="flex flex-col">
              <span className="font-extrabold text-xl bg-linear-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent tracking-wide">
                Talent IQ
              </span>
              <span className="text-xs text-gray-400">Code Together</span>
            </div>
          </Link>

          {/* CTA */}
          <SignInButton mode="modal">
            <button className="group px-6 py-3 bg-linear-to-r from-purple-500 to-blue-500 rounded-xl text-white font-semibold text-sm hover:scale-110 hover:shadow-xl transition-all flex items-center gap-2">
              <span>Get Started</span>
              <ArrowRightIcon className="size-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </SignInButton>
        </div>
      </nav>

      {/* HERO */}
      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600/20 text-purple-400 rounded-full text-sm border border-purple-500/40">
              <ZapIcon className="size-4" />
              Real-Time Collaboration
            </div>

            <h1 className="text-5xl lg:text-7xl font-black leading-tight">
              <span className="bg-linear-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent drop-shadow-md">
                Code Together,
              </span>
              <br />
              <span className="text-white">Learn Faster</span>
            </h1>

            <p className="text-lg text-gray-300/90 max-w-xl leading-relaxed">
              A premium real-time collaboration platform for coding interviews
              with video calls, AI assistance, and powerful debugging tools.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3">
              {[
                "Video Chat",
                "Collaborative Editor",
                "AI Helper",
                "Multi-Language",
                "Code Execution",
              ].map((item, idx) => (
                <span
                  key={idx}
                  className="flex items-center gap-2 px-3 py-2 text-sm bg-white/10 hover:bg-white/20 border border-white/20 rounded-full transition-all cursor-pointer"
                >
                  <CheckIcon className="size-4 text-green-400" />
                  {item}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <SignInButton mode="modal">
                <button className="px-6 py-3 bg-linear-to-r from-purple-600 to-blue-600 rounded-xl text-white font-semibold shadow-lg hover:scale-105 transition-all">
                  Start Coding
                </button>
              </SignInButton>

              <button className="px-6 py-3 border border-white/20 bg-white/10 text-white rounded-xl hover:bg-white/20 transition-all flex items-center gap-2">
                <VideoIcon className="size-5" />
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-5">
              {[
                ["10K+", "Active Users"],
                ["50K+", "Sessions"],
                ["99.9%", "Uptime"],
              ].map(([value, title], i) => (
                <div
                  key={i}
                  className="p-6 bg-black/20 rounded-2xl border border-white/20 text-center shadow-xl hover:scale-105 transition-all"
                >
                  <div className="text-3xl font-bold bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    {value}
                  </div>
                  <div className="text-gray-400 text-sm">{title}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative group">
            <div className="absolute inset-0 bg-linear-to-r from-purple-500/20 to-blue-500/20 blur-3xl rounded-3xl opacity-50 group-hover:opacity-70 transition-all"></div>

            <img
              src="/hero.png"
              alt="Hero"
              className="w-full rounded-3xl shadow-2xl border border-white/20 group-hover:scale-105 transition-all duration-700"
            />
          </div>
        </div>
      </div>

      {/* FEATURES */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            Everything You Need to{" "}
            <span className="bg-linear-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
              Succeed
            </span>
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto mt-2">
            Tools built for professional coding interviews & real-time
            collaboration.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              icon: <VideoIcon className="size-8 text-purple-400" />,
              title: "HD Video Calls",
              desc: "Crystal clear communication while coding together.",
            },
            {
              icon: <Code2Icon className="size-8 text-blue-400" />,
              title: "Live Code Editor",
              desc: "Collaborate on code in real-time with instant updates.",
            },
            {
              icon: <UsersIcon className="size-8 text-pink-400" />,
              title: "Team Collaboration",
              desc: "Work with peers and interviewers seamlessly.",
            },
          ].map((f, idx) => (
            <div
              key={idx}
              className="bg-black/20 border border-white/20 p-8 rounded-3xl shadow-xl hover:bg-black/30 hover:scale-[1.03] transition-all duration-300 text-center"
            >
              <div className="mb-4">{f.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                {f.title}
              </h3>
              <p className="text-gray-300">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
