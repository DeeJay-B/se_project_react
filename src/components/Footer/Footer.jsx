import "./Footer.css";

function Footer() {
  const currentYear = new Date().toLocaleString("default", {
    year: "numeric",
  });

  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__copyright">&copy; DeJon Bell</p>
        <p className="footer__year">{currentYear}</p>
      </div>
    </footer>
  );
}

export default Footer;
