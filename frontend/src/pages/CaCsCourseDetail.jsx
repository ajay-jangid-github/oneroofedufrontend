import React from "react";

const CaCsCourseDetail = () => {
  const youtubeVideos = [
    {
      title: "Intro to CA/CS Course",
      url: "https://www.youtube.com/embed/9WZi3i-VMxg",
    },
    {
      title: "Why Choose CA as Career?",
      url: "https://www.youtube.com/embed/ZZScS-hJ8QE",
    },
  ];

  const selfHostedVideos = [
    {
      title: "CA Foundation Overview (Recorded)",
      src: "/videos/ca-foundation.mp4", // Place inside /public/videos/
    },
    {
      title: "CS Beginner Guide (Recorded)",
      src: "/videos/cs-beginner.mp4",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 dark:from-black dark:to-gray-900 text-black dark:text-white pt-28 pb-16 px-6 md:px-12 lg:px-24">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-[#FFD700] mb-12 font-[Cinzel] drop-shadow">
        CA / CS Course Details
      </h1>

      <div className="grid md:grid-cols-3 gap-12">
        {/* Left: Course Info */}
        <div className="md:col-span-2 space-y-10">
          <div className="space-y-6 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-yellow-300">What You'll Learn</h2>
            <ul className="list-disc list-inside text-lg space-y-2 text-gray-700 dark:text-gray-200">
              <li>Complete Syllabus Coverage (CA Foundation, Intermediate)</li>
              <li>Company Law, Accounts, Economics, Taxation & Audit</li>
              <li>Live + Recorded Classes with Notes</li>
              <li>Mock Tests with Analysis</li>
              <li>1:1 Mentorship & Career Guidance</li>
              <li>Doubt Solving Support</li>
            </ul>
          </div>

          <div className="space-y-6 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-yellow-300">Who Should Join?</h2>
            <p className="text-lg text-gray-700 dark:text-gray-200">
              Students of Class 11 & 12 (Commerce) or Graduates who aim to become
              Chartered Accountants or Company Secretaries with expert guidance.
            </p>
          </div>

          <div className="space-y-6 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-yellow-300">Features</h2>
            <ul className="list-disc list-inside text-lg space-y-2 text-gray-700 dark:text-gray-200">
              <li>Complete ICAI & ICSI Pattern Teaching</li>
              <li>100% Syllabus Completion Before Exams</li>
              <li>Affordable Plans for All Levels</li>
              <li>24x7 Chat + Live Support</li>
            </ul>
          </div>
        </div>

        {/* Right: Videos */}
        <div className="space-y-10">
          {/* Self-hosted videos */}
          <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-yellow-300 mb-4">
              Recorded Sessions (Self-Hosted)
            </h3>
            <div className="space-y-4">
              {selfHostedVideos.map((video, i) => (
                <div key={i}>
                  <video
                    src={video.src}
                    controls
                    className="w-full h-52 rounded-lg shadow"
                  ></video>
                  <p className="mt-2 text-sm font-medium text-gray-600 dark:text-gray-300">
                    {video.title}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* YouTube videos */}
          <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-yellow-300 mb-4">
              YouTube Demo Lectures
            </h3>
            <div className="space-y-4">
              {youtubeVideos.map((video, i) => (
                <div key={i}>
                  <iframe
                    width="100%"
                    height="200"
                    src={video.url}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-lg shadow"
                  ></iframe>
                  <p className="mt-2 text-sm font-medium text-gray-600 dark:text-gray-300">
                    {video.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaCsCourseDetail;
