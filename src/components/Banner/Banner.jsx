import "./Banner.css";

const Banner = ({ conocer }) => {
  return (
    <header className="banner">
      <img src={conocer} alt="O banner principal da página Organo." />
    </header>
  )
}

export default Banner