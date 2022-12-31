import React, { useEffect, useState } from 'react'
import { ShowToDo } from './ShowToDo'







const getitemLocalStorage=()=>
{
    let list=localStorage.getItem('lists')
    if(list)
    {
        return JSON.parse(list)
    }
    else{
        return [];
    }
}


export const Component = () => {

    const[title,setTitle]=useState(" ")
    const[description,setdescription]=useState(" ")
    const[editor,seteditor]=useState(" ")
    const[date,setdate]=useState(" ")
    const[data,setdata]=useState(getitemLocalStorage());

    const handler=(e)=>
    {
        e.preventDefault();
        if(title===" " || description===" " || editor===" ")
        {
            return
        }
        let newdata={
            title:title,
            description:description,
            editor:editor,
            enddate:date
        }
        setdata([...data,newdata])
        setTitle(" ")
        setdescription(" ")
        seteditor(" ")
        setdate(" ")

    }

    const removeItem=(a)=>
    {
        let final=data.filter((val,index)=>
        {
            return a!==index
        })
        setdata(final)
    }

    const edit=(title,description,editor,enddate,id)=>
    {
        let newdata={
            title,
            description,
            editor,
            enddate
        }
        let temp=data;
        temp[id]=newdata
        setdata([...temp])
    }

    useEffect(()=>
    {
        localStorage.setItem("lists" , JSON.stringify(data))
    },[data])
  return (
   <>
   <div className='main'>
    <h2>To Do App</h2>
    <div className='input'>
        <form onSubmit={handler}>
            <label htmlFor="title">Title</label><br />
            <input type="text" id='title' onChange={(e)=>setTitle(e.target.value)} value={title}/><br/><br/>
            <label htmlFor="description">Description</label><br />
            <input type="text" id='description' onChange={(e)=>setdescription(e.target.value)} value={description}/><br/><br/>
            <label htmlFor="editor">Editor Name</label><br />
            <input type="text" id='editor' onChange={(e)=>seteditor(e.target.value)} value={editor}/><br/><br/>
            
            <input type="date"  onChange={(e)=>setdate(e.target.value)} value={date}/><br/><br/>
            <button className='btn'>Add</button>
        </form>
    </div>
    {
        data.map((value,index)=>
        {
            return<ShowToDo
            key={index}
            id={index}
            task={value}
            Remove={removeItem}
            edit={edit}
            />
        })
    }

   </div>
   </>
  )
}
