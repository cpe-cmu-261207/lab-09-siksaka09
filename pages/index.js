import Detail from "../components/Detail";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Profile from "../components/Profile";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Profile />
      <Detail />
      <Footer />
    </div>
  );
}
