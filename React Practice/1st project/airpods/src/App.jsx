import './App.css'
import logo from "./assets/logo.png";

const Menu = function(props) {
  return (
    <>
    <div className="nav-menu flex item-center">
        <div className="logo">
          <img src={logo} alt="logo" srcset="" />
        </div>
        <div className="nav-list">
          <ul className="menu-list flex list-style">
            <li>{props.navlist[0]}</li>
            <li>{props.navlist[1]}</li>
            <li>{props.navlist[2]}</li>
            <li>{props.navlist[3]}</li>
         
          </ul>
        </div>
      </div>
  </>
  )
}

function NavBtns(props) {
  return (
    <>
      <div className="nav-btn-container">
            <button className="nav-btn">{props.button[0]}</button>
            <button className="nav-btn">{props.button[1]}</button>
      </div>
    </>
  )
}
// logo = 'Jj'
// menu = ''

const Navbar = (props) => {
  return (
    <>
    
      <div className="header flex justify-between item-center">
        <Menu navlist={["Product", "App","About", "FAQS"]}/>
        <NavBtns button={props.button} /> 
      </div>
    </>
  )
}


function BlackBox(props){
  return(
    <>
      <div className="blackBox flex flex1 column justify-between border-radius-15">
          <div className="blaackBox content">
            <h6>MORE OFFERS</h6>
            <p>{props.text}</p>
          </div>
          <div className="product flex justify-between item-center">
            <div className="product-content">
                <span>Shop</span>
                <h5>All Products</h5>
            </div>
            <div>
                <i className="fa-solid fa-cart-shopping"></i>
            </div>
          </div>
        </div>
    </>
  )
}


const GrayBox = (props) => {
  return(
    <>
      <div className="grayBox flex flex1 column justify-between border-radius-15 padding-15">
            <h6 className="heading">{props.object.heading}</h6>
            <p>{props.object.subHeading}{props.number}{props.boolean}</p>
          </div>
    </>
  )
}

const GreenBox = function() {
  return(
    <>
      <div className="greenBox flex flex1 column justify-between border-radius-15 padding-15">
              <h6>Have<br />Some Question</h6>
              <p>Contact Us</p>
            </div>
    </>
  )
}

function BluevioletBox(){
  return(
    <div className="purpleBox flex flex1 column justify-between border-radius-15 padding-15">
              <h6>Discover<br />Our History</h6>
              <p>About us</p>
            </div>
  )
}

const BlueGreen = () => {
  return (
    <>
      <div className="flex flex1 purple-green gap-20">
        <BluevioletBox />
        <GreenBox />
      </div>
    </>
  )
}

const BlueGreenGray = () => {
  return(
    <>
    <div className="flex column flex1">
      <GrayBox object={{ 
        heading:"WORLD OF HEARING TECHNOLOGY",
        subHeading: "View our blog"
      }} number={2} boolean={2>3?"true":"false"}/>
      <BlueGreen />
    </div>
    </>
  )
}

function AllBox(){
  return (
    <>
      <div className="box-container flex margin-auto gap-20">
        <BlackBox text={"THERE IS SOMETHING ELSE FOR YOU"} />
        <BlueGreenGray />
      </div>
    </>
  )
}

function App() {
  const payload= {
    menu:  ["Product", "App","About", "FAQS"],
    button: ["LogIN","SignUP"]
  }
  return (
    <>
    <div className="bg-white-container margin-auto">
      <Navbar menu={["Product", "App","About", "FAQS"]} button={["LogIN","SignUP"]} />
      <Navbar {...payload} />
      <AllBox />
    </div>
    </>
  )
}

export default App
