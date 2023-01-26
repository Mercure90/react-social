import "./online.css";

export default function Online({user}) {
  return (
    <li className="rigtbarFriend">
      <div className="rightbarProgileImgContainer">
        <img src={user.profilePicture} alt="" className="rightbarProfileImg" />
        <span className="rightbarOnline"></span>
      </div>
      <span className="rightbarUserName">{user.username}</span>
    </li>
  );
}
