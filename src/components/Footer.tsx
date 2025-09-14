const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-600 text-white text-center p-4 mt-6">
      <p>&copy; {new Date().getFullYear()} My Business. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
