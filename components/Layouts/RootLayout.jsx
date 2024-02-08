import Header from "../__shared_one_time/Header/Header";

const RootLayouts = ({ children }) => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>{children}</main>
    </>
  );
};

export default RootLayouts;
