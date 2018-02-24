import _ from 'lodash'
import React from 'react'
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines'  //Third party component for building charts

function average(data){
    return _.round(_.sum(data)/data.length);
}

//Resuable component to render charts
export default (props) => {
    return (
      <div>
          <Sparklines height={80} width={140} data={props.data}>
            <SparklinesLine color={props.color} />
            <SparklinesReferenceLine type="avg" />
           </Sparklines>
           <div>{average(props.data)} {props.units}</div>
      </div>  
    );
}