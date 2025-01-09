/* eslint-disable react/prop-types */

import './Title.css'
export const Title = (props) => {
  return (
    <div className="Main1" >
       
        <h1>{props.name.toUpperCase()}</h1>
    </div>
  )
}
