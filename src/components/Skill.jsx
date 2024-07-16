import '../styles/scss/skill.scss';
import { ReactComponent as IconCode} from 'assets/icons/code.svg';
import { ReactComponent as IconGlobe} from 'assets/icons/globe.svg';
import { ReactComponent as IconDataBase} from 'assets/icons/db.svg';
import { ReactComponent as IconDownArrow } from 'assets/icons/arrow_down.svg';

const frontEnd = ['HTML5', 'CSS/SCSS', 'JavaScript',
                  'Bootrstrap', 'Tailwind', 'ReactJS', 'Redux',
                  'ReactQuery', 'GraphQL', 'TypeScript'
                ];
const backEnd = ['Node.js', 'Express', 'MongoDB', 'FireBase']
const language = ['中文', 'English', '日本語'];


export default function Skill(){
  function handleScroll(){
    let next_section = document.querySelector('#experience_section');
    window.scrollTo({ top: next_section.offsetTop, behavior: 'smooth'});
  }

  // 監聽頁面捲動
  window.addEventListener('scroll', () => {
    const scrollTop = Math.max(window.scrollY, window.pageYOffset);
    const clientHeight = window.innerHeight;
    const section = document.querySelector('#skill_section');
    if (scrollTop + clientHeight > (section.offsetTop + clientHeight*0.5)) {
      const title = document.querySelector('.skill_title');
      title.classList.add('title_animate');
      const card = document.querySelector('.card_panel');
      card.classList.add('card_animate');
    }
  });

  return(
    <>
      <section id='skill_section' className="skill">
        <div className="title_div">
          <h1 className="title skill_title">SKILL</h1>
        </div>
        <div className='card_panel'>
          <Card title='FrontEnd Skill' icon={<IconCode />} style_name='dev_item' list={frontEnd}/>
          <Card title='BackEnd Skill' icon={<IconDataBase />} style_name='lang_item' list={backEnd}/>
          {/* <Card title='Language' icon={<IconGlobe />} style_name='lang_item' list={language}/> */}
        </div>
        <div className='scroll_btn_div'>
          <IconDownArrow className='scroll_btn' onClick={handleScroll}/>
        </div>
      </section>
    </>
  )
}

function Card({ title, icon, style_name, list }){
  return(
    <div className='card'>
      <span className='icon'>{icon}</span>
      <h3>{title}</h3>
      <div className='item_panel'>
        <ListItem style_name={style_name} list={list} />
      </div>
    </div>
  )
}

function ListItem({style_name, list }){
  const items = list.map((item, index) => {
    return <label key={index} className='skill_item'>{item}</label>
  })

  return(
    <div className={style_name}>{items}</div>
  )
}