import { Avatar } from "../components/avatar"
import { LinksArray } from '../utils/linksArray';
import slack from "../components/assets/slack.png"
import github from "../components/assets/github.png"
import { Icon } from '../components/icon';
import { Footer } from "../components/footer";
import { Link } from "react-router-dom"


export const Profile = () => {

    return (
        <div className="inner_container">
            <div className="header_main">
              <Avatar />
              <div className="links_ar_container">
                {LinksArray.map(link => {
                  return link.id === 'contact' ? (
                    <Link key={link.id} to={link.href} id={link.id} title={link?.title}>{link.name}</Link>
                  ) : (
                    <a key={link.id} href={link.href} id={link.id} title={link?.title} target="_blank">{link.name}</a>
                  )
                })}
              </div>
              <div style={{ padding:"50px 0 100px 0",  display:"flex", justifyContent: "center", gap: "24px"}}>
                <Icon image={slack} />
                <Icon image={github} />
              </div>
            </div>
            <Footer />
          </div>
    )

}