import simple_twitter from 'assets/project_img/simple_twitter.png';
import github_issue from 'assets/project_img/github_issue.jpg';
import my_portfolio from 'assets/project_img/portfolio.jpg';
import simple_dashboard from 'assets/project_img/simple_dashboard.jpg';



export const portfolio_data = [
  {
    'image': my_portfolio,
    'title': 'My Portfolio',
    'content': '個人網站，使用 React 框架及 RWD 模式開發，並使用Github Pages部署。',
    'link': 'https://github.com/mirageapache/portfolio',
    'tag': ['React', 'Scss', 'Github Pages']
  },
  {
    'image': simple_twitter,
    'title': 'Simple Twitter',
    'content': 'AC的畢業專題，與組員一起完成一個簡易的社群平台系統。',
    'link': 'https://github.com/mirageapache/simple_twitter_frontend',
    'tag': ['React', 'axios', 'Github Pages','多人協作']
  },
  {
    'image': github_issue,
    'title': 'Github Issue',
    'content': '使用React開發並透過Express串接Github提供的API，可以簡易的操作個人Github Issue。',
    'link': 'https://github.com/mirageapache/github_issue_client',
    'tag': ['Scss', 'Bootstrap', 'React', 'axios', 'Express']
  },
  {
    'image': simple_dashboard,
    'title': 'Simple Dashboard',
    'content': '簡易的戶口統計網站，串接政府資料開放平臺所提供的API資料，並以圖表型式呈現。',
    'link': 'https://github.com/mirageapache/Simple_Dashboard',
    'tag': ['Scss', 'React', 'axios', 'TypeScript', 'Highcharts']
  },
]