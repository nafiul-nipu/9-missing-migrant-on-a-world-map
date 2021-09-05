import './App.css';

import { useWorldAtlas } from './components/useWorldAtlas';
import {useData} from './components/useData'
import { WorldMap } from './components/WorldMap';
import { scaleSqrt, max } from 'd3';

const width = 960;
const height = 500;

function App() {
  const worldAtlas = useWorldAtlas()
  const data = useData()

  if(!worldAtlas || !data){
    return <pre>Loading ...</pre>
  }

  const sizeValue = d => d['Total Dead and Missing'];
  const maxRadius = 15;

  const sizeScale = scaleSqrt()
                    .domain([0, max(data, sizeValue)])
                    .range([0, maxRadius])
 

  return (
    <svg width={width} height={height}>      
      <WorldMap 
        worldAtlas={worldAtlas}
        data={data}
        sizeScale={sizeScale}
        sizeValue = {sizeValue}
      />
    </svg>
  );

}

export default App;
 