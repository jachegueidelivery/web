import React,{Component} from "react";

class Clock extends Component{
	constructor(props){
		super(props);
		this.state = {date: new Date()};
	}
	
	render(){
		return(
			<>
				 <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
			</>
		);
	}
}

class App extends Component{
	
	constructor(props){
		super(props);
	}
	
	render(){
		return(
			<div>
				<Clock />
				<Clock />
				<Clock />
				<Clock />
				<Clock />
				<Clock />
			</div>
		);
	}
}



export default App;