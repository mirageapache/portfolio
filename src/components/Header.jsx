import 'styles/css/header.css'
import { ReactComponent as IconDownArrow } from 'assets/icons/arrow_down.svg';

export default function Header(){

  function handleScroll(){
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth'});
  }

  return(
    <>
      <section className="header">
        <div className="banner">
          <h1>Hi, I'm James</h1>
          <h2>Welcome to my website</h2>
        </div>
        <div className='scroll_btn_div'>
          <IconDownArrow className='scroll_btn' onClick={handleScroll}/>
        </div>
      </section>
    </>
  )
}