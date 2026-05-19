import "../Footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="footer-container d-flex justify-content-between align-items-center">
      <div className="copyRight">
        <p className="m-auto">
          &copy; {year} Ahmed Gaballah. All Rights Reserved.
        </p>
      </div>

      <div className="buttons d-flex justify-content-center align-items-center gap-3">
        <p className="m-auto">Privacy Policy</p>
        <p className="m-auto">Terms & Conditions</p>
      </div>
    </div>
  );
}

export default Footer;
