import "./styles.css";
import { useEffect, useState } from "react";
export default function InfiniteScroll() {
  const [count, setCount] = useState(50);

  const onScroll = () => {
    let scrollY = window.scrollY;
    let innerHeight = window.innerHeight;
    let offsetHeight = document.body.offsetHeight;
    console.log(scrollY + innerHeight - offsetHeight);
    if (scrollY + innerHeight > offsetHeight - 30) {
      debugger;
      setCount(count + 50);
    }
  };
  window.addEventListener("scroll", onScroll);
  useEffect(() => {
    return () => window.removeEventListener("scroll", onScroll);
  });

  return (
    <div className="App">
      <div className="scroll-table">
        {new Array(count).fill(0).map((item, index) => {
          return <div>{index}</div>;
        })}
      </div>
    </div>
  );
}
