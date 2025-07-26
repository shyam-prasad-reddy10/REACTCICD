import React from 'react'

function Hello(props){
    const v=props;
    return(
        <h1>
            Hello world! {v.abc}  {v.bc}
        </h1>
    );
 
}
export default Hello