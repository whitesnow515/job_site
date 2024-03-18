module.exports = [
  {
    id: 1,
    title: "Info",
    menuList: [
      { name: "Browse Jobs", route: "/job-list/job-list-v11" },
      { name: "Browse Categories", route: "/job-list/job-list-v3" },
      { name: "Candidate Dashboard", route: "/candidates-dashboard/dashboard" },
      { name: "Job Alerts", route: "/candidates-dashboard/job-alerts" },
      {
        name: "My Bookmarks",
        route: "/candidates-dashboard/short-listed-jobs",
      },
    ],
  },
  {
    id: 2,
    title: "Kooperation",
    menuList: [
      {
        name: "International",
        route: "/candidates-list/candidates-list-v1",
      },
      {
        name: "Partnerschaften",
        route: "/",
      },
    ],
  },
  {
    id: 3,
    title: "About Us",
    menuList: [
      { name: "Über Jobyz", route: "/about" },
      { name: "Team", route: "/team" },
      { name: "Karriere", route: "/karriere" },
      { name: "Contact", route: "/contact" },
    ],
  },
  {
    id: 4,
    title: "Helpful Resources",
    menuList: [
      { name: "Terms of Jobyz", route: "/" },
      { name: "Terms of Jobyz+", route: "/terms" },
      { name: "Privacy Center", route: "/" },
      { name: "Security Center", route: "/" },
      { name: "Accessibility Center", route: "/" },
    ],
  },
];
