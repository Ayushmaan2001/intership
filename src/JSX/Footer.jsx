import "../CSS/footer.css";

function Footer() {
  return (
    <>
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <p className="col-md-4 mb-0 text-muted">2022 Company, Copyright reserved</p>
        <ul className="nav col-md-4 justify-content-end">
          <li className="nav-item">
            <a href="/" className="nav-link px-2 text-muted">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="/sample" className="nav-link px-2 text-muted">
              About
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}

export default Footer;
