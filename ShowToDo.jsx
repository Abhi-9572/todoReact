import React, { useState } from 'react'

export const ShowToDo = (props) => {
    const[updatetitle,setupdatetitle]=useState(props.task.title)
    const[updatedescription,setupdatedescription]=useState(props.task.description)
    const[updateeditor,setupdateeditor]=useState(props.task.editor)
    const[updatedate,setupdatedate]=useState(props.task.enddate?.toString())
    const[edit,isEdit]=useState(false);

    const hadler=()=>
    {
       props.edit(updatetitle,updatedescription,updateeditor,updatedate,props.id) 
       isEdit(false)
    }
  return (
   <>
    {
        edit?
        <div className='output'>
                <label htmlFor="title">Title</label><br />
            <input type="text" id='title' onChange={(e)=>setupdatetitle(e.target.value)} value={updatetitle}/><br/><br/>
            <label htmlFor="description">Description</label><br />
            <input type="text" id='description' onChange={(e)=>setupdatedescription(e.target.value)} value={updatedescription}/><br/><br/>
            <label htmlFor="editor">Editor Name</label><br />
            <input type="text" id='editor' onChange={(e)=>setupdateeditor(e.target.value)} value={updateeditor}/><br/><br/>
            
            <input type="date"  onChange={(e)=>setupdatedate(e.target.value)} value={updatedate}/><br/><br/>
        </div>:
        <div className='output'>
        <h3>Title:{props.task.title}</h3>
        <h3>Description:{props.task.description}</h3>
        <h3>Editor Name:{props.task.editor}</h3>
        <h3>{`Start Date: ${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`}</h3>
        <h3>End Date:{props.task.enddate?.toString()}</h3>
    </div>
    }

    <div className='outputBtn'>
        <button className='btn1' onClick={()=>props.Remove(props.id)}>Remove</button>
        <button className='btn2' onClick={()=>!edit?isEdit(true):hadler()}>Edit</button>
    </div>
   </>
  )
}
