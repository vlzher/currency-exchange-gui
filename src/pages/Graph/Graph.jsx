import React from 'react';
import { VictoryChart, VictoryLine, VictoryZoomContainer, VictoryAxis } from 'victory';
import './styles/graph.css';

const Graph = ({ graphData }) => {
  return (
    <div className="graph">
      <VictoryChart
        width={800}
        height={200}
        style={{
          axis: {
            stroke: 'white',
            strokeLinecap: 'round'
          },
          ticks: { stroke: 'white' }
        }}
        containerComponent={
          <VictoryZoomContainer zoomDimension="x" minimumZoom={{ x: 1 }} maximumZoom={{ x: 10 }} />
        }>
        <VictoryAxis
          style={{
            axis: {
              stroke: 'white',
              strokeWidth: 1
            },
            tickLabels: {
              fill: 'white',
              fontSize: 12,
              padding: 5
            }
          }}
        />
        <VictoryAxis
          dependentAxis
          style={{
            axis: {
              stroke: 'white',
              strokeWidth: 1
            },
            tickLabels: {
              fill: 'white',
              fontSize: 12,
              padding: 5
            }
          }}
        />
        <VictoryLine data={graphData} x="x" y="y" style={{ data: { stroke: '#a60bd9' } }} />
      </VictoryChart>
    </div>
  );
};

export default Graph;
