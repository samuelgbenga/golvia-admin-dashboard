import ClapIcon from "../assets/icons/ClapIcon";
import { thItems, ThProps, User, users } from "../mockApiHooks/tableHooks";

const Table = () => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border-gray-300">
        <thead>
          <tr className=" border-gray-300">
            {thItems.map((item, index) => (
              <ThItems key={index} {...item} />
            ))}
          </tr>
        </thead>
        <tbody>
          {users.map((user: User) => (
            <tr key={user.id} className="border-t border-gray-300 first:border-t-0 text-center">
              <td className="p-3 pl-4 w-[17rem] ">
                <div className="w-12 flex gap-2 relative">
                  <div className="w-12 h-12 min-w-[4rem] min-h-[3rem] rounded">
                    <img
                      src={user.image}
                      alt={user.name}
                      className="w-full h-full object-cover rounded"
                    />
                  </div>

                  {user.clap && (
                    <span className="bg-yellow absolute top-1 left-1">
                      <ClapIcon />
                    </span>
                  )}
                  <div className="flex flex-col items-start">
                    <h1 className="whitespace-nowrap">{user.name}</h1>
                    <span className="text-xs bg-gray-200 p-1 rounded">
                      {user.country}
                    </span>
                  </div>
                </div>
              </td>
              <td className="p-2 align-middle">{user.score1}</td>
              <td className="p-2 align-middle">{user.score2}</td>
              <td className="p-2 align-middle">{user.score3}</td>
              <td className="p-2 align-middle">{user.score4}</td>
              <td className="p-2 pr-2 align-middle">{user.score5}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

const ThItems: React.FC<ThProps> = ({ name }) => {
  return <th className="p-3 font-light text-sm">{name}</th>;
};
