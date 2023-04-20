import 'styles/css/skill.css'
import { ReactComponent as IconCode} from 'assets/icons/code.svg'
import { ReactComponent as IconGlobe} from 'assets/icons/globe.svg'

const web_dev = ['HTML5', 'CSS/SCSS',
                  'Bootrstrap', 'JavaScript',
                  'NodeJs', 'Express',
                  'Axios', 'TypeScript',
                  'ReactJS', 'Git'
                ];
const language = ['Chinese', 'Taiwanese', 'English', 'French'];


export default function Skill(){

  window.addEventListener('scroll', () => {
    const scrollTop = Math.max(window.scrollY, window.pageYOffset);
    const clientHeight = window.innerHeight;
    if (scrollTop + clientHeight > (clientHeight*2.5)) {
      const title = document.querySelector('.skill_title');
      title.classList.add('title_animate');
      const card = document.querySelector('.card_panel');
      card.classList.add('card_animate');
    }
  });

  return(
    <>
      <section className="skill">
        <div className="title_div">
          <h1 className="title skill_title">SKILL</h1>
        </div>
        <div className='card_panel'>
          <Card title='Web development' icon={<IconCode />} style_name='dev_item' list={web_dev}/>
          <Card title='Language' icon={<IconGlobe />} style_name='lang_item' list={language}/>
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
      <ListItem style_name={style_name} list={list} />
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