import 'styles/css/experience.css'

export default function Experience(){
  // 監聽頁面捲動
  window.addEventListener('scroll', () => {
    const scrollTop = Math.max(window.scrollY, window.pageYOffset);
    const clientHeight = window.innerHeight;
    if (scrollTop + clientHeight > (clientHeight*2.5)) {
      const title = document.querySelector('.exp_title');
      title.classList.add('title_animate');
    }
  });

  return(
    <>
      <section className="experience">
        <div className='title_div'>
          <h1 className='title exp_title'>EXPERIENCE</h1>
        </div>
        <div className='secquence'>
          <div className='secquence_item'>
            <span>Sep. 2011 - Jun. 2015</span>
            <h3>國立勤益科技大學 - 資訊管理系畢業</h3>
            <p>
              在學期間成續優良且為程式語言打下基礎，並於升大四暑假開始參與實習直至畢業。
              實習階段在專案團隊擔任前端工程師的角色，主要負責前端頁面切版及資料串接。
            </p>
            <div className='tag_div'>
              <label className='tag'>Bootstrap</label>
              <label className='tag'>JQuery</label>
              <label className='tag'>AJAX</label>
            </div>
          </div>
          <div className='secquence_item'>
            <span>Aug. 2015 - Oct. 2022</span>
            <h3>職業軍人 - 專業軍官班</h3>
            <p>
              投身軍旅時期雖然脫離學習程式的環境但還是讓我有所收獲，身為軍官要學會的技能也不少，
              要領導部隊、規劃任務、跨層級(部門)溝通協調...等，這個階段學到更多這類在職場上必備的軟實力。
            </p>
            <br />
            <p>
              另外在2019年時，被選派擔任指揮部資訊開發小組，協助部內開發一套任務管理系統，為期約4個月的時間，
              雖然沒學習到新技術但能運用過去所學技術完成小組的專案開發，讓有點淡忘程式開發手感的我，
              又燃起想成為工程師的憧景。
            </p>
            <div className='tag_div'>
              <label className='tag'>團隊合作</label>
              <label className='tag'>溝通力</label>
            </div>
          </div>
          <div className='secquence_item'>
            <span>Nov. 2022 - Apr. 2023</span>
            <h3>ALPHA CAMP - 全端開發課程</h3>
            <p>
              為了強化前端技術所以選擇參加Alpha Camp的課程，在這裡先是複習過去大學期間所學的前端基礎，
              同時也學習時下最熱門的套件及React的技術，課程的最後階段還設計了多人協作的專案Simple Twitter，
              讓學生將為期半年的課程中所學到的技術，而我在小組內一樣擔任前端工程師的角色，使用React來開發前端介面
              並與後端完成資料串接，兩週內完成一個小型專案。
            </p>
            <div className='tag_div'>
              <label className='tag'>React</label>
              <label className='tag'>NodeJs</label>
              <label className='tag'>RESTful API</label>
              <label className='tag'>Git</label>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}