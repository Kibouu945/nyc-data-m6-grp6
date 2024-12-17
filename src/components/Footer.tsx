// src/components/Footer.tsx

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-600 py-6">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} NYC Urban Data Analytics. Tous droits réservés.</p>
        <div className="mt-2 flex justify-center gap-4">
          <a
            href="https://github.com/Kibouu945/nyc-data-m6-grp6"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            GitHub
          </a>
          <a
            href="https://api.citybik.es"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            API CityBikes
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
