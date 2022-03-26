import { useState } from "react";
import "./App.css";

export default function Todo() {
  const [input, setInput] = useState("");
  const [item, setItem] = useState([]);
  const [toggle, setToggle] = useState(true);
  const [edited, SetEdited] = useState(null);

  // $4$$44$$$4$ ADD Function $$$4444$$4$4
  const addItem = () => {
    if (input === "") {
      alert("Add Plan First");
    } else if (input && !toggle) {
      setItem(
        item.map((elem) => {
          if (elem.id === edited) {
            return { ...elem, name: input };
          }
          return elem;
        })
      );
      setToggle(true);
      setInput("");
      SetEdited(null);
    } else {
      const allInputData = { id: new Date().getTime().toString(), name: input };
      setItem([...item, allInputData]);

      // setItem([...item, input]);
      setInput("");
    }
  };

  // $4$$44$$$4$ DELETE Function $$$4444$$4$4
  const deleteItem = (index) => {
    const updatedItems = item.filter((elem) => {
      return index !== elem.id;
    });
    setItem(updatedItems);
  };

  // $4$$44$$$4$ EDIT Function $$$4444$$4$4
  // 1. get id and name of data which user clicked to edit
  // 2. set the toggle mode to change the submit button into edit button
  // 3. now update the value of the setInput with new updated value to edit
  // 4. to pass the current element ID to new state variable for reference

  const editItem = (id) => {
    let newEditItem = item.find((elem) => {
      return elem.id === id;
    });
    setToggle(false);
    setInput(newEditItem.name);
    SetEdited(id);
  };
  // $4$$44$$$4$ FOR REMOVING ALL $$$4444$$4$4
  const removeall = () => {
    setItem([]);
  };

  return (
    <div className="mainContainer">
      <div className="inputbox">
      <h1>What to do today</h1>
        <input
          type="text"
          className="inputField"
          placeholder="What's Plan"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        {/* FOR ICONS COPY THE CDN LINK OF FONT-AWESOME FROM index.html */}
        {toggle ? (
          <button className="btn" onClick={addItem}>Add Plan</button>
        ) : (
          <button className="btn" onClick={addItem}>Edit Plan</button>
        )}
      </div>
      <div>
        {item.map((elem) => {
          return (
            <div key={elem.id} className="secondCont">
              <div className="itmes">
                <h3>{elem.name}</h3>
                <div className="secondIconsCont">
                  <button
                    className="btn DE-icons"
                    onClick={() => editItem(elem.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn DE-icons"
                    onClick={() => deleteItem(elem.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <button className="Rbtn" onClick={removeall}>
          Remove all
        </button>
      </div>
    </div>
  );
}
