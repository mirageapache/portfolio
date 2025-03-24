import "../styles/scss/aboutMe.scss";
import avatar from "assets/images/avatar.jpg";
import { ReactComponent as IconDownArrow } from "assets/icons/arrow_down.svg";

export default function AboutMe() {
  function handleScroll() {
    let next_section = document.querySelector("#skill_section");
    window.scrollTo({ top: next_section.offsetTop, behavior: "smooth" });
  }

  // 監聽頁面捲動
  window.addEventListener("scroll", () => {
    const scrollTop = Math.max(window.scrollY, window.pageYOffset);
    const clientHeight = window.innerHeight;
    const section = document.querySelector("#about_me_section");
    if (scrollTop + clientHeight > section.offsetTop + clientHeight * 0.5) {
      const title = document.querySelector(".about_title");
      title.classList.add("title_animate");
      const avatar = document.querySelector(".avatar");
      avatar.classList.add("avatar_animate");
      const content = document.querySelector(".content");
      content.classList.add("content_animate");
    }
  });

  return (
    <>
      <section id="about_me_section" className="about_me">
        <div className="title_div">
          <h1 className="title about_title">ABOUT ME</h1>
        </div>
        <div className="content_div">
          <div className="grid_div">
            <div className="avatar">
              <img className="avatar_img" src={avatar} alt="" />
            </div>
            <div className="content">
              <p>
                從高中開始學習程式語言，於是種下了成為軟體工程師的夢想，展開前端工程師的學習之路。
              </p>
              <p>
                畢業後並雖然沒有如願在軟體相關的領域，即便投筆從戎成為職業軍人但仍懷抱著工程師的夢想，因此役期屆滿時決定退伍轉而朝向工程師的職涯前進。
                退伍後參加Alpha
                Camp全端網路開發課程，學習React與Next開發。
              </p>
              <p>
                現任為東南旅遊前端工程師，並持續學習各項全端開發技術，期望自己成為頂尖的全端工程師！
              </p>
            </div>
          </div>
        </div>
        <div className="scroll_btn_div">
          <IconDownArrow className="scroll_btn" onClick={handleScroll} />
        </div>
      </section>
    </>
  );
}
