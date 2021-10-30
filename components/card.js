import utilstyle from "../styles/utils.module.css";

export default function Card(props) {
    console.log(props.data)
  return (
    <div>
      <div className="bg-yellow-200 rounded-md max-w-lg h-80 mx-5 my-5 hover:shadow-2xl shadow-xl overflow-auto hide-scrollbar">
        <div className="flex bg-yellow-100 relative pb-1 rounded-sm">
          <div className="flex absolute top-1 left-1 shadow-lg py-0.5">
            <div className="w-5 h-5 bg-red-500 rounded-full"></div>
            <div className="w-5 h-5 mx-0.5 bg-yellow-500 rounded-full"></div>
            <div className="w-5 h-5 mx-0.5 bg-green-500 rounded-full"></div>
          </div>
          <div className="text-center w-full">C++</div>
        </div>
        <div className="px-5">
          <h1 className="text-lg font-semibold">{props.title}</h1>
          <pre><code>{props.data}</code></pre>
        </div>
      </div>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar { 
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        pre{
            white-space:break-spaces;
        }
      `}</style>
    </div>
  );
}
