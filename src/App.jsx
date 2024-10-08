
const App = () => {
  return (
   
   <div className="mt-[7%] w-[25%] h-[20%] flex rounded-3xl border justify-around items-center ">
     <div className="text-yellow-100">
      <h1 className="text-3xl font-bold">Let's ToDo</h1>
      <p>keep doing things</p>
     </div>
     <form className="w-[25%] flex px-5 my-[2%]">
      <input type="text" placeholder="your task here..." name="task" className="px-5 py-3 text-yellow-100 outline-none w-[85%] rounded-xl bg-zinc-700" />
      <button className="outline-none text-4xl font-extrabold flex justify-center items-center w-[50px] h-[50px] rounded-full bg-orange-600">+</button>
     </form>
     <ul>
      <li>
        <div>
          <h3>taskName</h3>
        </div>
      </li>
     </ul>
     <div>
      0/0
     </div>



   </div>
   
  )
}

export default App
