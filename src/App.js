import Left from "./components/Left";
import Right from "./components/Right";

function App() {
	return (
		<div className="flex h-full w-full overflow-auto bg-[#404040]">
			<Left />
			<Right />
		</div>
	);
}

export default App;
