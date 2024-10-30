import '../styles/scss/contact.scss';
import { ReactComponent as IconEmail } from 'assets/icons/email.svg';
import { ReactComponent as IconGithub } from 'assets/icons/github.svg';
import { ReactComponent as IconLinkedIn } from 'assets/icons/linkedin.svg';

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
          <a id='email-link' className='contact_card' href='mailto:mirageapache@gmail.com' target='_black'>
            <div className='item'>
              <IconEmail className='icon email_icon' />
              <h3 className='item_title'>Email</h3>
            </div>
          </a>
          <a id='github-link' className='contact_card' href='https://github.com/mirageapache' target='_blank' rel="noreferrer">
            <div className='item'>
              <IconGithub className='icon github_icon' />
              <h3 className='item_title'>Github</h3>
            </div>
          </a>
          <a id='linkedin-link' className='contact_card' href='https://www.linkedin.com/in/james-859032112/' target='_blank' rel="noreferrer">
            <div className='item'>
              <IconLinkedIn className='icon Linkedin_icon' />
              <h3 className='item_title'>Linkedin</h3>
            </div>
          </a>
        </div>
      </section>
    </>
  )
}
