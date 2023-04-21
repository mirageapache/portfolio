import 'styles/css/experience.css'
import { secq_data } from 'assets/dummyData/exp_data.js'
import { ReactComponent as IconDownArrow } from 'assets/icons/arrow_down.svg';

export default function Experience(){
  function handleScroll(){
    window.scrollTo({ top: window.innerHeight*5-100, behavior: 'smooth'});
  }

  // 監聽頁面捲動
  window.addEventListener('scroll', () => {
    const scrollTop = Math.max(window.scrollY, window.pageYOffset);
    const clientHeight = window.innerHeight;
    if (scrollTop + clientHeight > (clientHeight*3.5)) {
      const title = document.querySelector('.exp_title');
      title.classList.add('title_animate');
      const secq = document.querySelector('.secquence');
      let timeout = 300;
      for(let i=0; i<secq_data.length;i++){
        let secq_item = secq.children[i];
        setTimeout(() => {
          secq_item.classList.add('secq_animate');
        },timeout*i)
        
      }
    }
  });

  const secquence_data = secq_data.map((item, index) => {
    return <SecquenceItem key={index} data={item} />
  })

  return(
    <>
      <section className="experience">
        <div className='title_div'>
          <h1 className='title exp_title'>EXPERIENCE</h1>
        </div>
        <div className='secquence'>
          {secquence_data}
        </div>
        <div className='scroll_btn_div'>
          <IconDownArrow className='scroll_btn' onClick={handleScroll}/>
        </div>
      </section>
    </>
  )
}

function SecquenceItem({ data }){



  const paragraphs = data.content.map((item, index) => {
    return <p key={index}>{item}</p>
  })
  const tags = data.tag.map((item, index) =>{
    return <label key={index} className='tag'>{item}</label>
  })

  return(
    <div className='secquence_item'>
      <span>{data.time}</span>
      <h3>{data.title}</h3>
      {paragraphs}
      <div className='tag_div'>
        {tags}
      </div>
    </div>
  )
}