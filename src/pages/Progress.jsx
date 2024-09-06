import React from "react";

const Progress = () => {
  const reports = [
    {
      title: "Course Progress",
      description: "View learners progress report for Courses.",
    },
    {
      title: "Test Series Progress",
      description: "View learners progress report for Test series.",
    },
    {
      title: "Bundle Progress",
      description: "View how bundles are performing and evaluate based on report.",
    },
    {
      title: "Subscriptions Report",
      description: "View learners progress report for Subscriptions.",
    },
    {
      title: "Ebook Progress",
      description: "View learners progress report for Ebooks.",
    },
    {
      title: "Podcast Progress",
      description: "View learners progress report for Podcasts.",
    },
    {
      title: "Webinar Progress",
      description: "View learners progress report for Webinars.",
    },
    {
      title: "Digital Product Progress",
      description: "View learners progress report for Digital Products.",
    },
    {
      title: "Course Quiz Scores",
      description: "View learners Score report for Course Quizzes created.",
    },
    {
      title: "Mock Test Scores",
      description: "View learners Score report for Mock tests created.",
    },
    {
      title: "Test Series Scores",
      description: "View learners Score report for Section Test Series created.",
    },
    {
      title: "Bundle Quiz Scores",
      description: "View learners Score report for Bundle Quizzes created.",
    },
    {
      title: "Play Store App Reviews",
      description: "View reviews of your app on play store.",
    },
  ];

  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold mb-4">Progress & Score Reports</h1>
      <p className="mb-8 text-gray-600">All detailed analytics to evaluate the quality of the courses and track the learners activity.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reports.map((report, index) => (
          <div key={index} className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center mb-2">
              <div className="bg-gray-200 h-8 w-8 rounded-md mr-2"></div>
              <h2 className="text-lg font-medium">{report.title}</h2>
            </div>
            <p className="text-gray-500">{report.description}</p>
            <button className="mt-4 text-blue-600 hover:underline">View</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Progress;
