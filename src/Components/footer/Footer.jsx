import { FaClock } from "react-icons/fa";

const Footer = () => {
  const lastUpdate = "30th July 2025";
  return (
    <footer className="bg-black border-t border-slate-800 py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-slate-500">
          © {new Date().getFullYear()} Aditya Mandal. ©ATLUS. ©SEGA
        </p>
        <p className="flex justify-center gap-2 items-center text-slate-500">
          <FaClock />
          {lastUpdate}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
