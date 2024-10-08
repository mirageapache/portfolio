import '../styles/scss/contact.scss';
import { ReactComponent as IconEmail } from 'assets/icons/email.svg';
import { ReactComponent as IconGithub } from 'assets/icons/github.svg';
import { ReactComponent as IconLinkedIn } from 'assets/icons/linkedin.svg';
// import { ReactComponent as IconInstagram } from 'assets/icons/instagram.svg';

export default function Contact(){
  window.addEventListener('scroll', () => {
    const scrollTop = Math.max(window.scrollY, window.pageYOffset);
    const clientHeight = window.innerHeight;
    const section = document.querySelector('#contact_section');
    if (scrollTop + clientHeight > (section.offsetTop + clientHeight*0.5)) {
      const title = document.querySelector('.contact_title');
      title.classList.add('title_animate');
      const contact_list = document.querySelector('.contact_list');
      let timeout = 300;
      for(let i=0; i<3;i++){
        let contact_item = contact_list.children[i];
        setTimeout(() => {
          contact_item.classList.add('item_animate');
        },timeout*i)
        
      }
    }
  });
  return(
    <>
      <section id='contact_section' className="contact">
        <div className="title_div">
          <h1 className="title contact_title">CONTACT</h1>
        </div>
        <div className='contact_list'>
          <div className='contact_card' onClick={()=>{window.open('mailto:mirageapache@gmail.com','_blank')}}>
            <div className='item'>
              <IconEmail className='icon email_icon' />
              <h3 className='item_title'>Email</h3>
            </div>
          </div>
          <div className='contact_card' onClick={()=>{window.open('https://github.com/mirageapache','_blank')}}>
            <div className='item'>
              <IconGithub className='icon github_icon' />
              <h3 className='item_title'>Github</h3>
            </div>
          </div>
          <div className='contact_card' onClick={()=>{window.open('https://www.linkedin.com/in/james-859032112/','_blank')}}>
            <div className='item'>
              <IconLinkedIn className='icon Linkedin_icon' />
              <h3 className='item_title'>Linkedin</h3>
            </div>
          </div>
          {/* <div className='contact_card' onClick={()=>{window.open('https://www.instagram.com/mirageapache/','_blank')}}>
            <div className='item'>
              <IconInstagram className='icon instagram_icon' />
              <h3 className='item_title'>instagram</h3>
            </div>
          </div> */}
        </div>
      </section>
    </>
  )
}
