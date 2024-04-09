
import AdminApp from "./admin/adminapp";
import UserApp from "./User/UserApp";

function App() {
        if( localStorage.getItem("sellerid") == null )
			return (<UserApp/>);
		else 
			return (<AdminApp/>);
}

export default App;
