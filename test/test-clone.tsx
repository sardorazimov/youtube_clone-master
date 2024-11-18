import React from "react";

const Test = () => {
  return (
    <div>
      <div>
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
          <a href="/projects/jira-clone">
            <div className="group hover:shadow-sm border transition overflow-hidden rounded-lg h-full flex flex-col bg-white">
              <div className="flex-1">
                <div className="relative w-full aspect-video rounded-t-md overflow-hidden border-b">
                  <img
                    alt="Build a Jira clone"
                    className="duration-700 ease-in-out scale-100 blur-0 grayscale-0 object-cover"
                  />
                </div>
                <div className="flex flex-col pt-2 px-3">
                  <div className="text-sm md:text-base font-medium group-hover:text-sky-700 transition line-clamp-1">
                    Build a Jira clone
                  </div>

                  <div className="my-3 flex items-center gap-x-2 text-xs">
                    <div className="flex items-center gap-x-1 text-slate-500">
                      <div className="inline-flex items-center border rounded-md px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-sky-500/10 text-sky-800">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="lucide lucide-book-open h-4 w-4 mr-2"
                        >
                          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                        </svg>
                        <span>41 Chapters</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-3 pb-3"></div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Test;
