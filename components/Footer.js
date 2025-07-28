export default function Footer() {
  return (
    <footer className="bg-black text-white py-5">
      <div className="container">
        <div className="row">
          {/* Left Side */}
          <div className="col-md-6">
            <h5 className="fw-bold">Harizaldy Cahya Pratama</h5>
            <p className="text-white">Fullstack Web Developer</p>
          </div>

          {/* Right Side */}
          <div className="col-md-6 text-md-end mt-3 mt-md-0">
            <a href="#" className="text-white me-3">
              LinkedIn
            </a>
            <a href="#" className="text-white me-3">
              GitHub
            </a>
            <a href="#" className="text-white">
              Email
            </a>
            <p className="mt-3 small text-white">© 2025 All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}