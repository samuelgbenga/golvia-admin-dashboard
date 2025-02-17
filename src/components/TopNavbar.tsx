const TopNavbar = () => {
  return (
    <div className="w-full h-full flex flex-col-reverse">
      <div className="w-full flex justify-between">
        <div>
          <h1 className="font-semibold text-2xl text-black">Hello Admin,</h1>
          <p className="font-normal text-base">Welcome to your Dashboard</p>
        </div>
        <form className="flex items-center gap-7 font-semibold text-lg text-black ml-1">
          <div>
            <input type="radio" id="html" name="fav_language" value="HTML" className="mr-2"/>
            <label>All posts</label>
          </div>
          <div>
            <input type="radio" id="html" name="fav_language" value="HTML" className="mr-2" />
            <label>Challenge posts</label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TopNavbar;
