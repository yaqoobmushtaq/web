import logo from './assets/profile.png'
import './App.css'



function Filter(props) {
  return (
    <>
      <ul className="filters flex list-style">
        {props.filter.map(element => <ListItem item={element} />)}
      </ul>
    </>
  )
}

const ListItem = (props) => {
  return (
    <li>{props.item}</li>
  )
}

const ListHeading = ()=>{

  return (
    <>
      <ul className="list-heading flex justify-between list-style">
          <li className="check flex item-center">
            <input type="checkbox" name="checkbox" id="checkbox" />
            <span>Order ID</span>
          </li>
          <li>Created</li>
          <li className="width-30">Customer</li>
          <li className="width-30">Fulfilment</li>
          <li>Total</li>
          <li>Profit</li>
          <li className="width-30">Status</li>
          <li>Updated</li>
        </ul>
    </>
  )
}

function List() {
  
  return (
    <>
    <ul className="list flex justify-between list-style item-center">
          <li className="check flex item-center">
            <input type="checkbox" name="checkbox" id="checkbox" />
            <span>121 096</span>
          </li>
          <li>jul 17, 2019</li>
          <li className="width-30 flex item-center">
            <img
              src={logo}
              width="30px"
              height="30px"
              alt=""
              srcset=""
            /><span>Patrica Vaughn</span>
          </li>
          <li className="width-30">
            <select name="fulfilled" id="fulfilled">
              <option value="">fulfilled</option>
              <option value=""></option>
            </select>
          </li>
          <li>$402.50</li>
          <li>$83</li>
          <li className="width-30">
            <select name="authorized" id="authorized">
              <option value="">authorized</option>
              <option value=""></option>
            </select>
          </li>
          <li>26 july, 2020</li>
        </ul>
    </>
  )
}


function App() {

  return (
    <>
      <div className="container margin-auto">
        <Filter filter={["All orders","Active","Unpaid","Unfulfiled"]} />
        <ListHeading />
        <List />
      </div>
    </>
  )
}

export default App
