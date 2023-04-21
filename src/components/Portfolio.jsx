import 'styles/css/portfolio.css';
import { portfolio_data } from 'assets/dummyData/portfolio_data.js';

export default function Portfolio(){ 
  // 監聽頁面捲動
  window.addEventListener('scroll', () => {
    const scrollTop = Math.max(window.scrollY, window.pageYOffset);
    const clientHeight = window.innerHeight;
    if (scrollTop + clientHeight > (clientHeight*4.5)) {
      const title = document.querySelector('.portfolio_title');
      title.classList.add('title_animate');
      const project = document.querySelector('.project');
      let timeout = 300;
      for(let i=0; i<portfolio_data.length;i++){
        let project_item = project.children[i];
        setTimeout(() => {
          project_item.classList.add('item_animate');
        },timeout*i)
        
      }
    }
  });

  return(
    <>
      <section className="portfolio">
        <div className="title_div">
          <h1 className="title portfolio_title">PORTFOLIO</h1>
        </div>
        <div className='project'>
          <ProjectItem data={portfolio_data}/>
        </div>
      </section>
    </>
  )
}

function ProjectItem({ data }){
  const items = data.map((item, index) =>{
    return(
      <div key={index} className='project_item'>
        <div className='snapshot_div'>
          <span className='link' onClick={()=>{window.open(item.link,'_blank')}}></span>
          <img className='snapshot' src={item.image} alt=''  />
        </div>
        <div className='description'>
          <div className='text'>
            <p className='title'>{item.title}</p>
            <p className='content'>{item.content}</p>
          </div>
          <div className='tags_div'>
            <Tags data={item.tag} />
          </div>
        </div>
      </div>
    )
  })

  return(
    <>{items}</>
  )
}

function Tags({ data }){
  const tags = data.map((tag, index)=>{
    return <label key={index} className='tag'>{tag}</label>
  })

  return(<>{tags}</>)
}
