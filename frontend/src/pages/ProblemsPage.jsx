import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

import { PROBLEMS } from "../data/problems";
import { ChevronRightIcon, Code2Icon } from "lucide-react";
import { getDifficultyBadgeClass } from "../lib/utils";

function ProblemsPage() {
  const problems = Object.values(PROBLEMS);

  const easyProblemsCount = problems.filter(
    (p) => p.difficulty === "Easy"
  ).length;
  const mediumProblemsCount = problems.filter(
    (p) => p.difficulty === "Medium"
  ).length;
  const hardProblemsCount = problems.filter(
    (p) => p.difficulty === "Hard"
  ).length;

  return (
    <div className="min-h-screen bg-linear-to-br from-[#0f0f10] via-[#131419] to-[#0a0a0c] text-white">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* HEADER */}
        <div className="mb-10 text-center">
          <h1 className="text-5xl font-extrabold bg-linear-to-r from-primary via-secondary to-accent bg-clip-text text-transparent drop-shadow-lg">
            Practice Problems
          </h1>
          <p className="text-base-content/70 mt-2 text-lg">
            Boost your coding interview skills with curated questions
          </p>
        </div>

        {/* PROBLEMS LIST */}
        <div className="space-y-4">
          {problems.map((problem) => (
            <Link
              key={problem.id}
              to={`/problem/${problem.id}`}
              className="block rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 
                         hover:border-primary/40 hover:bg-white/10 transition-all duration-300 
                         shadow-lg hover:shadow-primary/20 hover:scale-[1.02]"
            >
              <div className="p-6">
                <div className="flex items-center justify-between gap-4">
                  {/* LEFT */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="size-12 rounded-xl bg-primary/20 flex items-center justify-center border border-primary/40 shadow-md">
                        <Code2Icon className="size-6 text-primary drop-shadow" />
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <h2 className="text-xl font-bold tracking-wide">
                            {problem.title}
                          </h2>
                          <span
                            className={`badge ${getDifficultyBadgeClass(
                              problem.difficulty
                            )} text-sm px-3 py-1`}
                          >
                            {problem.difficulty}
                          </span>
                        </div>

                        <p className="text-sm text-base-content/60">
                          {problem.category}
                        </p>
                      </div>
                    </div>

                    <p className="text-base-content/80 leading-relaxed">
                      {problem.description.text}
                    </p>
                  </div>

                  {/* RIGHT */}
                  <div className="flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300">
                    <span className="">Solve</span>
                    <ChevronRightIcon className="size-5" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* STATS */}
        <div className="mt-12 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-6 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 bg-white/5 rounded-xl border border-white/10 shadow">
              <div className="text-base-content/70 text-sm">Total Problems</div>
              <div className="text-4xl font-bold text-primary">
                {problems.length}
              </div>
            </div>

            <div className="p-4 bg-white/5 rounded-xl border border-white/10 shadow">
              <div className="text-base-content/70 text-sm">Easy</div>
              <div className="text-4xl font-bold text-success">
                {easyProblemsCount}
              </div>
            </div>

            <div className="p-4 bg-white/5 rounded-xl border border-white/10 shadow">
              <div className="text-base-content/70 text-sm">Medium</div>
              <div className="text-4xl font-bold text-warning">
                {mediumProblemsCount}
              </div>
            </div>

            <div className="p-4 bg-white/5 rounded-xl border border-white/10 shadow">
              <div className="text-base-content/70 text-sm">Hard</div>
              <div className="text-4xl font-bold text-error">
                {hardProblemsCount}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProblemsPage;
