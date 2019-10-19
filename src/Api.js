import React, { Component } from 'react'
class Api extends Component {
  state = {
    data: []
  };

  async componentDidMount() {
    const url =
      "https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*";

    const datas = await fetch(url);
    const result = await datas.json();

    this.setState({ data: result });
  }

  delete = del => {
       const { data } = this.state;
       const deletes = data.map((item, index)=> index !== del );
           this.setState({ data: deletes });
  };
  render() {
    const { data } = this.state;
    const wiki = data.map((entry, index) => {
      return (
        <div>
 <li key={index}>{entry}</li>
      {/* <button onClick={()=> this.delete(index)}>Delete</button>; */}
        </div>
      )
    });

    return <ul>{wiki}</ul>;
  }
}
 
export default Api;