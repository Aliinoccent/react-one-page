import {  useState,useEffect } from "react";
import { useContext } from "react";
import { dataFlow } from "./work";
const SmallBar = () => {
  const {btnId, setBtn} = useContext(dataFlow);
  const [Id, setId] = useState({ id: 0, type: "" });
  const btn = [
    {
      id: "1",
      type: "All",
    },
    {
      id: "2",
      type: "Branding",
    },
    {
      id: "3",
      type: "Illustraiton",
    },
    {
      id: "4",
      type: "Web",
    },
  ];
 

function setObject(idNum){
   const selectedId={ id: idNum, type: idNum.type }
   setId(selectedId);
    setBtn(selectedId);

  }
  useEffect(() => {
    console.log(Id);
    console.log(btnId, 'setit');
  }, [Id, btnId]);

  return (
    <div className="container-fluid d-flex justify-content-between">
      <div className="flex-1 d-flex justify-content-around  gap-4 mb-3">
        {btn.map((idNum, index) => (
          <button
            style={{
              height: 40,
              width: 100,
              border: "none",
              backgroundColor: "yellow",
              borderRadius: 20,
            }}
            onClick={()=>setObject(idNum)}
          >
            {idNum.type}
          </button>
        ))}
      </div>
      <div className="flex-2">
        <select
          className="form-select form-select-sm"
          aria-label=".form-select-sm example"
          style={{ border: "none" }}
        >
          <option selected>Newest first</option>
          <option value="1">Newest</option>
          <option value="2">Oldest</option>
        </select>
      </div>
    </div>
  );
};
export default SmallBar;