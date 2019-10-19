import React, { Component } from 'react'    

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
      </tr>
    </thead>
  );
};

const TableBody = data => {
    const rows = data.dataOb.map((row, index) => {
      return (
        <tr key={index}>
          <td>{row.name}</td>
          <td>{row.job}</td>
          <td> <button onClick={()=> data.removeCharacter(index)}>Delete</button></td>
        </tr>
      );
    });
  return <tbody>{rows}</tbody>
      
  ;
};


class Table extends Component {
  render() {

      const { dataOb, removeCharacter } = this.props;
    return (
      <table>
        <TableBody dataOb={dataOb} removeCharacter={removeCharacter} />
        <TableHeader />
      </table>
    );
  }
}

 export default Table;