import { React } from 'react';

function NumberLister() {
  return <div>
    <h2>Number Lister</h2>
    <br /><br />
      <input type="text" value={3} />
      <br />
      <br />
      <table >
        <tr><td>1</td></tr>
        <tr><td>2</td></tr>
        <tr><td>3</td></tr>
      </table>

  </div>;
}

export default NumberLister;
