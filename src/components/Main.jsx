import reactHalfLogo from "../assets/reactjs-icon.png";

function Main() {
  return (
    <main className="main">
      <h1 className="main--title">Fun facts about React</h1>
      <img className="main--logo" src={reactHalfLogo} alt="reactHalfLogo" />

      <ul className="main--list">
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </main>
  );
}
export default Main;
