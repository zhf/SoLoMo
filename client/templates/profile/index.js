const index = () => <div className="profile">
  <img className="profile-pic" src='http://i.pravatar.cc/300' />
  <div className="profile-username">John Smith</div>
  <div className="profile-github">@github</div>
  <ul className="profile-skills">
    <li>
      <img src='/logos/pc.png' />
      <span className="skill-title">PC</span>
      <span className="skill-type">Platform</span>
    </li>
    <li>
      <img src='/logos/javascript.png' />
      <span className="skill-title">Javascript</span>
      <span className="skill-type">Language</span>
    </li>
    <li>
      <img src='/logos/react.png' />
      <span className="skill-title">React</span>
      <span className="skill-type">Frontend</span>
    </li>
    <li>
      <img src='/logos/mongodb.png' />
      <span className="skill-title">MongoDB</span>
      <span className="skill-type">Backend</span>
    </li>
  </ul>
  <p className="profile-intro">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
  <a href="#" className="send-message-btn">SEND MESSAGE</a>
</div>

export default index
