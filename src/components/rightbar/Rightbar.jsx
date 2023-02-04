import "./rightbar.css"
import { Users} from "../../dummyData";
import Online from "../online/Online";
export default function Rightbar({profile}) {
  const HomeRightBar = () => {
    return(
      <>
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
      </>
    )
  }

  const ProfileRightBar = () => {
    return(
      <> 
      <h4 className="rightBarTitle">User Information</h4>
      <div className="rightBarInfo">
        <div className="rightBarInfoItem">
          <span className="rightBarInfoKey">City: </span>
          <span className="rightBarInfoValue">New York </span>
        </div>
        <div className="rightBarInfoItem">
          <span className="rightBarInfoKey">From: </span>
          <span className="rightBarInfoValue">Madrid </span>
        </div>
        <div className="rightBarInfoItem">
          <span className="rightBarInfoKey">Relationship: </span>
          <span className="rightBarInfoValue">Single </span>
        </div>
      </div>
      <h4 className="rightBarTitle">User Friends</h4>
      <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img src="assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/2.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/3.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/4.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/5.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
      </div>

      </>
    )
  }

  return (
    <div className="rightbar">
      <div className="rigtbarWrapper">
        {profile?<ProfileRightBar/>:<HomeRightBar/>}
      </div>      
    </div>
  )
}
