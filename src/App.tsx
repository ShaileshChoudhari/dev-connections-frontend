import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./components/Login"
import Body from "./components/Body"
import { Provider } from "react-redux"
import { store } from "./utils/store"

function App() {
	return (
		<>
			<Provider store={store}>
				<BrowserRouter basename="/">
					<Routes>
						<Route path="/" element={<Body />}>
							<Route path="/" element={<div>Home</div>} />
							<Route path="/login" element={<Login />} />
						</Route>
					</Routes>
				</BrowserRouter>
			</Provider>
		</>
	)
}

export default App
