import React,{ Component} from 'react'
import Table from './Table';
import Form from './Form';
// import Api from './Api';
class List  extends Component {
    state = {
 characters : []
    }

    removeCharacter =  index =>{
        const { characters } = this.state;

        this.setState({
            characters : characters.filter((character, i ) =>{
                return i !== index
            })
        })
    }
    handleSubmit = character =>{
        this.setState({
            characters : [...this.state.characters, character]
        })
    }
 render(){
     const { characters } = this.state;

    return (
      <div className="container">
        <Form handleSubmit={this.handleSubmit} />
        <Table dataOb={characters} removeCharacter={this.removeCharacter} />

        {/* <Api/> */}
      </div>
    );
 }

};

export default List;