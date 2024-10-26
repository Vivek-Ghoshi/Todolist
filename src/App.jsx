import React, { useState } from "react";

const App = () => {
  const [tasks, settasks] = useState([]);
  const [title, settitle] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const newtask = {title, completed: false}

    const copytask = [...tasks];
    copytask.push(newtask);
    settasks(copytask);

    settitle('')
  };

  const clickHandler = (e,i) =>{
     const copytask = [...tasks]
     copytask[i].completed = !copytask[i].completed;
     settasks(copytask)
  };

  const deleteHandler = (e,i) =>{
    const copytask = [...tasks]
    copytask.splice(i,1);
    settasks(copytask)
  }
  let renderTasks = (
    <h1 className="text-3xl mt-10 text-white text-center font-semibold">No Pending Task</h1>
  );


  if(tasks.length > 0){
    renderTasks = tasks.map((task,index) => (
         <li key={index} className="mb-5 flex justify-between items-center border border-orange-300 rounded-full p-5">
            <div className="flex items-center">
              <div
              onClick={(e)=>{clickHandler(e,index)}}
                className={`${task.completed ? "bg-green-600" : "border-2"} mr-4 rounded-full w-[30px] h-[30px] border-orange-600 `}
              ></div>
              <h1 className={`${task.completed ? "line-through" : "" } text-2xl font-extrabold text-yellow-100`}>
                {task.title}
              </h1>
            </div>
            <div className="flex gap-3 text-2xl text-yellow-100">
              <i className="ri-file-edit-line"></i>
              <i onClick={(e)=>{deleteHandler(e,index)}} className="ri-delete-bin-3-line"></i>
            </div>
          </li>
    ));
  }
  return (
    <>
      <div className="w-screen  h-screen flex flex-col items-center justify-center  bg-zinc-800">
        <div className="w-[37%] h-[20%] rounded-xl p-10 border-2 border-orange-600">
          <div className="flex w-full h-full justify-between items-center">
            <h1 className="font-extrabold text-3xl text-white">Let's ToDo</h1>
            <div className="w-[30%] h-22  flex items-center justify-center rounded-full bg-orange-600">
              <h2 className=" font-extrabold text-4xl text-white py-5">{tasks.filter(task => task.completed).length}/{tasks.length}</h2>
            </div>
          </div>
        </div>
        <form onSubmit={submitHandler} className="my-4 flex gap-6">
          <input
            onChange={(e) => {
              settitle(e.target.value);
            }}
            value={title}
            className="outline-none bg-transparent border-2 text-white px-6 py-2 rounded-md placeholder:text-white"
            type="text"
            placeholder="Task Name..."
          />
          <button className="bg-orange-600 px-4 py-3 rounded-full text-xl text-white">
            Create
          </button>
        </form>
        <ul className="w-[35%] h-1/3">
          {renderTasks}
        </ul>
      </div>
    </>
  );
};

export default App;
