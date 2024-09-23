
import Button from "./components/button/button.js"
import Listcomponent from "./components/list/list.js"
import Forms from "./components/forms/forms.js"
import"./App.css";

function Hello(){
  return(
    <div>
      <h3>REACT APPLICATION FORM</h3>
      <Forms/>
      <h3>Applications</h3>
      <Listcomponent/>
      <Button/>
      <h3>i am sai kiran</h3>
      <Button/>
    </div>
  )
}
export default Hello