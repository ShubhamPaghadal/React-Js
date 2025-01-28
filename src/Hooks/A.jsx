import useCustom_Hook from "./useCustom_Hook";

function A() {
  const data = useCustom_Hook();

  // const data = Custom_Hook("https://api.github.com/users");
  // console.log(data);
  // // for (let d of data) {
  // //   console.log(d);
  // // }

  return (
    <div>
      <h1>counter : {data.count}</h1>
      <button onClick={data.setdata}>increment</button>
    </div>
  );
}

export default A;
