import React, {useState, useEffect} from 'react';

function App() {
  const [num, setNum] = useState(0);
  const [nums, setNums] = useState(0);

  // useEffect hook alway expect a function.
  // jese hi component render ho jayga uske turant bad ye automatically run ho jayga.
  // abhi ye useEffect page ke load hone par bhi chal jayga, pahle button click pr bhi or doosre button click pr bhi
  // but hm chahte hai ki ye use effect bs first time jab page ko refresh kare tabhi chale uske bad kabhi ni chale
  // to annonimous function ke bad comma karke [] de dena hai.

  // useEffect(
  //   () => {
  //     alert('Button Clicked');
  //   }
  // )

  // useEffect(
  //   () => {
  //     alert('Button Clicked');
  //   }, []
  // )

  useEffect(
    () => {
      alert('Button Clicked');
    }, [num]
  )
  // second argument tabhi dena hai jab ham chahe ki page ke reload hone pr hi dikhe uske bad kabhi na dikhe
  // yadi hm is [] me "num" pass kar de to ye useEffect bas tabhi chalega jabki num ki state change ho
  return (
    <>
      <button onClick={() => {
        setNum(num + 1);
      }}>Click me {num} </button>
      <hr />
      <button onClick={() => {
        setNums(nums + 1);
      }}>Click me {nums} </button>
    </>
  );
}

export default App;
