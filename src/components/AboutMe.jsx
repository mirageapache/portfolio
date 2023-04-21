import 'styles/css/aboutMe.css'
import avatar from 'assets/images/avatar.jpg';
import { ReactComponent as IconDownArrow } from 'assets/icons/arrow_down.svg';

export default function AboutMe(){
  function handleScroll(){
    window.scrollTo({ top: window.innerHeight*2+120, behavior: 'smooth'});
  }

  // 監聽頁面捲動
  window.addEventListener('scroll', () => {
    const scrollTop = Math.max(window.scrollY, window.pageYOffset);
    const clientHeight = window.innerHeight;
    if (scrollTop + clientHeight > (clientHeight*1.5)) {
      const title = document.querySelector('.about_title');
      title.classList.add('title_animate');
      const avatar = document.querySelector('.avatar');
      avatar.classList.add('avatar_animate');
      const content = document.querySelector('.content');
      content.classList.add('content_animate');
    }
  });

  return(
    <>
      <section className="about_me">
        <div className="title_div">
          <h1 className="title about_title">ABOUT ME</h1>
        </div>
        <div className="content_div">
          <div className='grid_div'>
            <div className="avatar">
              <img className='avatar_img' src={avatar} alt="" />
            </div>
            <div className="content">
              <p>
                大學開始學習程式語言，於是種下了成為軟體工程師的夢想，展開前端工程師的學習之路。
                畢業後並沒有如願的待在前端的領域，先是投筆從戎成為職業軍人
                但仍懷抱著工程師的夢想，因此役期屆滿時退伍轉而朝向工程師之路前進。
              </p>
              <p>
                退伍後參加Alpha Camp全端網路開發課程，強化自己的大學所學的程式基礎，以前端技術為主
                後端技術為輔的選課機制，全心專攻前端專業能力，並學會ReactJS前端框架的基本運用，
                持續學習、研究前端各項新技能，期望有朝一日成為頂尖的軟體工程師。
              </p>
            </div>
          </div>
        </div>
        <div className='scroll_btn_div'>
          <IconDownArrow className='scroll_btn' onClick={handleScroll}/>
        </div>
      </section>
    </>
  )
}