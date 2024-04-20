import HomePage from "./WebsitePages/Home";
import SLPage from "./WebsitePages/SL";
import IconPack from "./WebsitePages/IconPack";
import Contact from "./WebsitePages/Contact";

import Header from "./WebsiteHeaders/Header";
import Footer from "./WebsiteHeaders/Footer";

export default function Home() {
  return (
    <main className="bg-slate-100">
      <Header />
      <HomePage />
      <Footer />
    </main>
  );
}
