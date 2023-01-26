import "./rightbar.css"
import { Users} from "../../dummyData";
import Online from "../online/Online";
export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rigtbarWrapper">
        <div className="birthdayContainer">
          <img className="birthdayImg" src="assets/gift.png" alt="" />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 others friends</b> have their birthday today
          </span>
        </div>
        <img className="rightBarAd" src="/assets/ad.png" alt="" />
        <h4 className="rigtbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map(u=>(
            <Online key={u.id} user={u}/>
          ))}
        </ul>
      </div>      
    </div>
  )
}
