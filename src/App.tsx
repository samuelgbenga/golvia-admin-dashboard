import DownwordCaretIcon from "./assets/icons/DownwordCaretIcon";
import BarChartCard from "./components/BarChartCard";
import BottomPieChartCard from "./components/BottomPieChartCard";
import PieChartCard from "./components/PieChartCard";
import SideNavbar from "./components/SideNavbar";
import Table from "./components/Table";
import TopNavbar from "./components/TopNavbar";

function App() {
  return (
    <div className="w-full grid grid-cols-6 gap-1 relative">
      <div className=" bg-white h-full  fixed">
        <SideNavbar />
      </div>
      <div className="bg-light-gray min-h-screen w-[95%] col-start-2 col-end-7 relative">
        <div className="h-full w-full p-10 grid grid-rows-11 gap-4">
          <div className="w-full h-full ">
            <TopNavbar />
          </div>
          <div className="w-full h-full  row-span-5">
            <div className="w-full h-full grid grid-cols-6 gap-4">
              <div className="w-full h-full bg-white col-span-4 rounded-lg">
                <div className="flex justify-between p-4">
                  <div className="flex gap-1 items-center">
                    <p className="text-2xl font-bold">
                     <span className="text-black">Posts</span>  <span className="font-light">(702)</span>
                    </p>
                    <button className="flex items-center gap-1 ml-1 border border-gray-300 p-1 rounded-lg">
                      Most trending <DownwordCaretIcon />
                    </button>
                  </div>
                  <div className="text-dark-blue-80">
                    See all
                  </div>
                </div>
                <div>
                  <Table/>
                </div>
              </div>
              <div className="w-full h-full bg-white col-span-2 rounded-lg">
                <PieChartCard/>
              </div>
            </div>
          </div>
          <div className="w-full h-full row-span-4">
            <div className="w-full h-full grid grid-cols-6 gap-4">
              <div className="w-full h-full bg-white col-span-4 rounded-lg">
                <BarChartCard/>
              </div>
              <div className="w-full h-full bg-white col-span-2 rounded-lg">
                <BottomPieChartCard/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
