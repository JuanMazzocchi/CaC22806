import React, { useState, useEffect} from "react";
 


const Lista= ()=>{

const [nuevaTarea,setNuevaTarea] =useState([]);
const [nombre,setNombre]=useState(null);
const [descripcion,setDescripcion]=useState(null);
const [itemTarea,setItemtarea]=useState({
    id:"",
    nombre:"",
    descripcion:""
})

// let itemTarea={
//     id:"",
//     nombre:"",
//     descripcion:""
// };

const handleNombre=(e)=>{
    setNombre(e.target.value);
    };

const handleDescripcion=(e)=>{
    setDescripcion(e.target.value)
};

const borrarTarea=(e)=>{
    // console.log(e.target.id)
    // console.log(nuevaTarea);
    for (let i = 0; i < nuevaTarea.length; i++) {
        if (nuevaTarea[i].id==e.target.id){
            // console.log(nuevaTarea[i].id + "es igual a"+ e.target.id);
            nuevaTarea.splice(i,1);        
                    };
    };

    // console.log(nuevaTarea );
    // console.log("esta es la lista modificada")
     
    setNuevaTarea(nuevaTarea);
 };

const ingresarNuevaTarea= ()=>{
let tareanueva={ 
    id:"",
nombre:"",
descripcion:""

} ;

tareanueva.id=Date.now();
tareanueva.nombre=nombre;
tareanueva.descripcion=descripcion;
setItemtarea(tareanueva);

document.getElementById("inputNombre").value="";
document.getElementById("inputDescripcion").value=""; //limpio la visual

};
useEffect(()=>{
   console.log("efecto");
   console.log(nuevaTarea);
   if(itemTarea.id==="" & itemTarea.nombre==="" & itemTarea.descripcion===""){ console.log("lista vacia")}
   else {nuevaTarea.push(itemTarea);
    setNuevaTarea(nuevaTarea);}
    

},[itemTarea]);
 
// if (nuevaTarea) {
//     setNombre("");
//     setDescripcion("");
// }

 
return <>
<h1>Lista de Tareas</h1>

{/* {nuevaTarea!==[] && nuevaTarea.map((tarea,index)=>{
    return (
    <div key={index} style={{display :"flex",justifyContent:"space-around", flexWrap:"wrap"}}>
        <p>ID:{tarea.id}</p> 
        <p>Nombre:{tarea.nombre}</p>
        <p>Descripcion:{tarea.descripcion}</p>
        <button onClick={borrarTarea} id={tarea.id}>Borrar Tarea</button>
    </div>)
                              }
                )} */}

{nuevaTarea.map((tarea,index)=>{
    return (
    <div key={index} style={{display :"flex",justifyContent:"space-around", flexWrap:"wrap"}}>
        <p>ID:{tarea.id}</p> 
        <p>Nombre:{tarea.nombre}</p>
        <p>Descripcion:{tarea.descripcion}</p>
        <button onClick={borrarTarea} id={tarea.id}>Borrar Tarea</button>
    </div>)
                              }
                )
};


<h2>Nueva Tarea</h2>
<input id="inputNombre" type="text" name="nombre" onChange={handleNombre} ></input>
<input id="inputDescripcion" type="text" name="descripcion" onChange={handleDescripcion}  ></input>
<button onClick={ingresarNuevaTarea} id="btnIngresarTarea" >Ingresar Tarea</button>
<button onClick={()=>{console.log(nuevaTarea)}}></button>

{/* <Tareas tareas={tareas} /> */}

</>




};





export default Lista;