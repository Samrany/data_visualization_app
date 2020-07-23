"use strict";
// const RD3Component = rd3.Component;
// const LineChart = rd3.createLineChart;
const BarChart = ReactChartjs2.Bar;


class App extends React.Component{
	constructor(){
		super();
		this.state={
			locationChosen: "",
			salesInfo: {}
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(evt){
		this.setState({[evt.target.id]: evt.target.value});
		}

	handleSubmit(evt){
		evt.preventDefault();
		

		fetch(`/api/get_data?locationChosen=${this.state.locationChosen}`)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    salesInfo: data,
                    // loading: false
                })
            })

		// fetch('/api/dataset', {
  //               headers: {
  //                   'Content-Type': 'application/json'
  //               },
  //               method: 'get',
  //               // body: JSON.stringify(formData) post in body
  //           })
  //               .then(res => res.json())
  //               .then(data => {
  //                   if (typeof data[0] == 'number') {
  //                       this.props.setLoggedIn(data);
  //                   } else {
  //                       alert(data);
  //                       if (data == 'It looks like this is your first time logging in. Please create an account to complete your login.') {
  //                           this.setState({ signIn: false });
  //                       }
  //                   }
  //               })

	}




	render(){
		console.log(this.state);
		// const data = {}
		// data.dataset = this.state.salesInfo;
		// data.xAxisID = 'Time';
		// data.yAxisID = 'Money';

		const data = {
			labels: this.state.salesInfo.labels,
			datasets: [{
				label: this.state.locationChosen,
				backgroundColor: 'rgb(255, 99, 132)',
				borderColor: 'rgb(255, 99, 132)',
				data: this.state.salesInfo.data
			},
			// {
			// 	label: 'My Second dataset',
			// 	backgroundColor: 'rgb(0, 99, 132)',
			// 	borderColor: 'rgb(0, 99, 132)',
			// 	data: [10, 15, 7, 20, 2, 3, 47]
			// }
		]
		}

		return (
			<div> 
				<BarChart data={data} width="500" height="450"/>

				<form onSubmit={this.handleSubmit}>
					<select id="locationChosen" placeholder="choose location" value={this.state.locationChosen} onChange={this.handleChange}> 
						<option value="locationA"> Location A </option>
						<option value="locationB"> Location B </option>
						<option value="locationC"> Location C </option>				
					</select>
					<input type="submit"/> 

				</form>


			</div>
			)
	}

}


ReactDOM.render(
  <App />,
  document.querySelector('#app')
);
