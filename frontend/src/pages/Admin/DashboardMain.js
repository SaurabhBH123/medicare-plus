import Dashboard from "./Dashboard";
import Header from "./Header";

const DashboardMain = () => {
  return (
    <>
      <Header></Header>
      <main class="content">
        <Dashboard />
      </main>
    </>
  );
};

export default DashboardMain;
