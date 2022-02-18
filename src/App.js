import { Switch, Route, withRouter } from "react-router-dom";
import Step1 from "./PAGES/STEP1";
import Step2 from "./PAGES/STEP2";
import Step3 from "./PAGES/STEP3";
import "./App.css";
function App(props) {
  const { location } = props;
  return (
    <Switch location={location}>
      <Route path="/" exact component={Step1} />
      <Route path="/step2" exact component={Step2} />
      <Route path="/step3" exact component={Step3} />
    </Switch>
  );
}

export default withRouter(App);
