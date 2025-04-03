const Footer = () => {
    return (
      <footer className="bg-gray-100 text-center py-6 mt-16 text-sm text-gray-500 static bottom-0">
        <div className="max-w-7xl mx-auto px-4">
          <p>© {new Date().getFullYear()} Maria. Alle Rechte vorbehalten.</p>
          <p className="mt-1">
            <a href="mailto:mariawallberg04@gmail.com" target="_blank" rel="noopener noreferrercome" className="underline hover:text-gray-700">
              Kontakt per E-Mail
            </a>
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  