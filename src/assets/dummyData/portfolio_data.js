import simple_twitter from "assets/project_img/simple_twitter.png";
import github_issue from "assets/project_img/github_issue.jpg";
import my_portfolio from "assets/project_img/portfolio.jpg";
import fire_message from "assets/project_img/fire_message.png";
import live_chat_app from "assets/project_img/live_chat_app.jpg";
import blog_system from "assets/project_img/blog_system.png";

export const portfolio_data = [
  {
    image: fire_message,
    id: "fire_message",
    title: "Fire Message",
    content: "使用Next搭配Firebase開發的即時聊天室系統。",
    link: "https://github.com/mirageapache/FireMessage",
    demo_link: "https://fire-message.vercel.app/",
    tag: [
      "Next",
      "Tailwind",
      "TypeScript",
      "Redux",
      "Firebase",
      "RWD",
    ],
  },
  {
    image: blog_system,
    id: "blog_system",
    title: "Blog System",
    content: "參考Substack平台構想並實作的部落格系統，全端開發。",
    link: "https://github.com/mirageapache/BlogSystem_FE",
    demo_link: "https://blog-system-fe.vercel.app/",
    tag: [
      "React",
      "Tailwind",
      "RWD",
      "TypeScript",
      "Redux",
      "ReactQuery",
      "Express",
      "MongoDB",
    ],
  },
  {
    image: my_portfolio,
    id: 'my_portfolio',
    title: "My Portfolio",
    content:
      "個人網站，使用 React 框架及 RWD 模式開發，並使用Github Pages部署。",
    link: "https://github.com/mirageapache/portfolio",
    demo_link: "https://mirageapache.github.io/portfolio/",
    tag: ["React", "SCSS", "RWD", "Github Pages"],
  },
  {
    image: simple_twitter,
    id: "simple_twitter",
    title: "Simple Twitter",
    content: "AC的畢業專題，與組員一起完成一個簡易的社群平台系統。",
    link: "https://github.com/mirageapache/simple_twitter_frontend",
    demo_link: "",
    tag: ["React", "axios", "Github Pages", "多人協作"],
  },
  {
    image: github_issue,
    id: "github_issue",
    title: "Github Issue",
    content:
      "使用React開發並透過Express串接Github提供的API，可以簡易的操作個人Github Issue。",
    link: "https://github.com/mirageapache/github_issue_client",
    demo_link: "https://mirageapache.github.io/github_issue_client",
    tag: ["React", "SCSS", "Bootstrap", "axios", "Express"],
  },
  // {
  //   image: simple_dashboard,
  //   id: "simple_dashboard",
  //   title: "Simple Dashboard",
  //   content:
  //     "簡易的戶口統計網站，串接政府資料開放平臺所提供的API資料，並以圖表型式呈現。",
  //   link: "https://github.com/mirageapache/Simple_Dashboard",
  //   demo_link: "https://mirageapache.github.io/Simple_Dashboard",
  //   tag: ["React", "SCSS", "axios", "TypeScript", "Highcharts"],
  // },
  {
    image: live_chat_app,
    id: "live_chat_app",
    title: "Live Chat",
    content: "使用 React 框架搭配 Socket.io 套件，製作線上聊天室系統。",
    link: "https://github.com/mirageapache/Socketio_chat_app",
    demo_link: "https://mirageapache.github.io/Socketio_chat_app/",
    tag: [
      "React",
      "SCSS",
      "TypeScript",
      "Socket.io",
      "Redux Toolkit",
      "Express",
    ],
  },
];
