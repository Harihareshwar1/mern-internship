import './MyPage.css';
import logo from './assets/1.jpg'
export const MyPage = () => {
  return (
    <div className="Top">
      <div className="profile-container">
        <img src={logo} alt="harihareshwar" className="profile-image"/>
        <div className="profile-details">
          <p>Phone: 9952597230</p>
          <p>Email: harihareshwar08@gmail.com</p>
          <p><a href="https://www.linkedin.com/in/yourprofile">LinkedIn</a></p>
          <p><a href="https://github.com/yourprofile">GitHub</a></p>
        </div>
      </div>
    </div>
  )
}
