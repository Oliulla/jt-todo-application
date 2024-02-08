import Sidebar from "../__shared_one_time/SideBar/SideBar";

const RootLayouts = ({ children }) => {
  return (
    <>
      <header className="container">
        <Sidebar />
      </header>
      <main className="container">{children}</main>
    </>
  );
};

export default RootLayouts;
