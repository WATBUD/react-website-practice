import React from 'react';
import { Link } from 'react-router-dom';

import './DemoListUI.css';
// function DemoListUI() {
//   return (
//     <div id="Area1" class="GroupArea" >
//       <div id="Practice Example" class="list-group">
//         <input id="toggle2" class="btn-toggle" type="checkbox" checked />
//           <label class="toggleBtn" htmlFor="toggle2">Practice Example</label>
//           <ul>
//             <li><Link to="/Line_Graph">Line_Graph</Link></li>
//           </ul>
//       </div>
//     </div>
//   );
// }
// var style1 = {
//   position: 'absolute', marginTop: '100px'
// };
class DemoListUI extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      candidateSelected: false
    }
  }

  onSelectCandidatesClick() {
    this.setState({
      candidateSelected: !this.state.candidateSelected
    });
  }

  render() {
    const host = {
      Top: `${'0vh'}`,
    };
    return (
      <div id="Area1" style={{ marginTop: `${host.Top}` }} className="GroupArea" >
        <div id="Practice Example" className="list-group">
          <input id="toggle2" className="btn-toggle" type="checkbox" checked={this.state.candidateSelected} onChange={e => { this.onSelectCandidatesClick() }} />
          <label className="toggleBtn" htmlFor="toggle2">Practice Example</label>
          <ul>
            {/* <li><Link to={`/NativeHTML:222`} state={{ from: "props-v-state" }}>NativeHTML</Link></li> */}
            {/* <li><Link to="/DemoListUI">DemoListUI</Link></li> */}

            <li key="1"><Link to="/NativeHTML/GeneratorSlopeEquation">GeneratorSlopeEquation</Link></li>
            <li key="2"><Link to="/NativeHTML/Canvas Fireball Follow Exercise">Canvas Fireball Follow Exercise</Link></li>
            <li key="5"><Link to="/OptionsMap">OptionsMap</Link></li>
            <li key="6"><Link to="/CSSTutorial">CSSTutorial</Link></li>
            <li key="7"><Link to="/ProgressDIYUse">ProgressDIYUse</Link></li>
            <li key="3"><Link to="/TestHooks">useHooks</Link></li>
            <li key="8"><Link to="/UseState">useState</Link></li>
            <li key="9"><Link to="/TestUseCallback">useCallback</Link></li>
            <li key="10"><Link to="/TraversingAndRendering">TraversingAndRendering</Link></li>
            <li key="11"><Link to="/RPG_Game">RPG_Game</Link></li>

          </ul>
        </div>
      </div>
    );
  }
}


//export default DemoListUI;
export default DemoListUI;
