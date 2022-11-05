
import zuri_logo from "../components/assets/Vector.png"
import G from "../components/assets/ingressive.png"

export const Footer = () => {

    return (
        <footer>
              <div className='footer_line'></div>
              <div className="footer">
                  <div className="footer_logo_1_container">
                    <img src={zuri_logo} alt="footer_logo_1" className="footer_logo_1"  />
                  </div>
                  <p className="footer_para">HNG Internship 9 Frontend Task</p>
                  <img src={G} alt="footer__logo_2" className="footer__logo_2" />
              </div>
        </footer>
    )

}