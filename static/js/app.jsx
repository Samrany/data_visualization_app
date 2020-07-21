"use strict";

class App extends React.Component{
	constructor(){
		super();
		this.state={
			locationChosen: ""

		};

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(evt){
		this.setState({[evt.target.id]: evt.target.value});
		}




	render(){
		console.log(this.state);
		return (
			<div> 
				<form>
					<select id="locationChosen" placeholder="choose location" value={this.state.locationChosen} onChange={this.handleChange}> 
						<option value="locationA"> Location A </option>
						<option value="locationB"> Location B </option>
						<option value="locationC"> Location C </option>				
					</select>

				</form>


			</div>
			)
	}

}


ReactDOM.render(
  <App />,
  document.querySelector('#app')
);
