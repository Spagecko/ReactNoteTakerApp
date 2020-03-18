import React from 'react';

const  userOutput = (props) =>
{

    const today = new Date();

    const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

    const style1 = {

        display: 'inline-table', 
        padding: '15x', 
        textAlign: 'left',
         margin: '10px',    
         border: '1px solid black',
         backgroundColor: 'grey',
    
         

    };
    const style2 = {

        display: 'inline-table', 
        padding: '16px', 
        textAlign: 'left',
         margin: '10px',    
         border: '1px solid black',
         backgroundColor: 'yellow',
    
         

    };

    const style3 = {

        display: 'inline-table', 
         backgroundColor: 'yellow',
         width: '220px',
        height: '200px'
         

    };

    return(

        <div style ={style1}> 
        <p>task created on</p> 
        <p>{date}</p>
        <div style = {style2}>
          
            
            <div>
            <textarea value = {props.Output} style = {style3}/> 
            </div>
           
        
        <button onClick={props.click} > End Task</button>
        
        </div>
        
        </div>
    );
};

export default userOutput;
