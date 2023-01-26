import "./rightbar.css"

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
          <li className="rigtbarFriend">
            <div className="rightbarProgileImgContainer">
              <img src="assets/person/3.jpeg" alt="" className="rightbarProfileImg" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUserName">John Carter</span>
          </li>
          <li className="rigtbarFriend">
            <div className="rightbarProgileImgContainer">
              <img src="assets/person/3.jpeg" alt="" className="rightbarProfileImg" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUserName">John Carter</span>
          </li>
          <li className="rigtbarFriend">
            <div className="rightbarProgileImgContainer">
              <img src="assets/person/3.jpeg" alt="" className="rightbarProfileImg" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUserName">John Carter</span>
          </li>
          <li className="rigtbarFriend">
            <div className="rightbarProgileImgContainer">
              <img src="assets/person/3.jpeg" alt="" className="rightbarProfileImg" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUserName">John Carter</span>
          </li>
        </ul>
      </div>      
    </div>
  )
}
