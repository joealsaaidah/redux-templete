import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionsCreators } from "./redux/index";
import "./App.css";
function App() {
  const account = useSelector((state) => state.account);
  const dispatch = useDispatch();
  const { depositMoney, withdrawMoney } = bindActionCreators(
    actionsCreators,
    dispatch
  );

  console.log(account);
  return (
    <div className='App'>
      <h1 className='title'>Redux example</h1>
      <div className='container'>
        <div className='accountContainer'>
          <span className='account'>{account}</span>
        </div>
        <div className='buttons'>
          <button
            className='btn'
            onClick={() => {
              depositMoney(1000);
            }}
          >
            deposit
          </button>
          <button
            className='btn'
            onClick={() => {
              withdrawMoney(1000);
            }}
          >
            withdraw
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
