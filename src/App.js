import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { isDisabled } from '@testing-library/user-event/dist/utils';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div classNameNameName="App">
      <Nav count={count} setCount={setCount} />
      <Head />
      <Sec count={count} setCount={setCount} />
      <Foo />
    </div>
  );
}

function Nav({ count, setCount }) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container px-4 px-lg-5">
          <a className="navbar-brand" href="#!">Start Bootstrap</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <li className="nav-item"><a className="nav-link active" aria-current="page" href="#!">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#!">About</a></li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#!">All Products</a></li>
                  <li><hr className="dropdown-divider"></hr></li>
                  <li><a className="dropdown-item" href="#!">Popular Items</a></li>
                  <li><a className="dropdown-item" href="#!">New Arrivals</a></li>
                </ul>
              </li>
            </ul>
            <form className="d-flex">
              <button className="btn btn-outline-dark" type="submit">
                <i className="bi-cart-fill me-1"></i>
                Cart
                <span className="badge bg-dark text-white ms-1 rounded-pill">{count}</span>
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>

  )
}
function Head() {
  return (
    <div>
      <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">Shop in style</h1>
            <p className="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
          </div>
        </div>
      </header>
    </div>
  )
}


function Foo() {
  return (
    <div>
      <footer className="py-5 bg-dark">
        <div className="container"><p className="m-0 text-center text-white">Copyright © Your Website 2023</p></div>
      </footer>
    </div>
  )
}
function Sec({ count, setCount }) {
  const [show, setShow] = useState(true);
  const [show1, setShow1] = useState(true);
  const [show2, setShow2] = useState(true);
  const [show3, setShow3] = useState(true);
  const [show4, setShow4] = useState(true);
  const [show5, setShow5] = useState(true);
  const style1 = {
    top: "0.5rem",
    right: "0.5rem",
  }
  return (
    <div>
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            <div className="col mb-5">
              <div className="card h-100">

                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..."></img>

                <div className="card-body p-4">
                  <div className="text-center">

                    <h5 className="fw-bolder">Fancy Product</h5>

                    $40.00 - $80.00
                  </div>
                </div>

                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                </div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="card h-100">

                <div className="badge bg-dark text-white position-absolute" style={style1}>Sale</div>

                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />

                <div className="card-body p-4">
                  <div className="text-center">

                    <h5 className="fw-bolder">Special Item</h5>

                    <div className="d-flex justify-content-center small text-warning mb-2">
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                    </div>

                    <span className="text-muted text-decoration-line-through">$20.00</span>
                    $18.00
                  </div>
                </div>

                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#" onClick={
                    () => {
                      // setCount(count + 1)
                      { show == true ? setCount(count + 1) : setCount(count - 1) }
                      setShow(!show)
                    }}>
                    {show ? "Add to cart" : "Remove from card"}
                  </a></div>
                </div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="card h-100">

                <div className="badge bg-dark text-white position-absolute" style={style1}>Sale</div>

                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />

                <div className="card-body p-4">
                  <div className="text-center">

                    <h5 className="fw-bolder">Sale Item</h5>
                    <span className="text-muted text-decoration-line-through">$50.00</span>
                    $25.00
                  </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#" onClick={
                    () => {
                      // setCount(count + 1)
                      { show1 == true ? setCount(count + 1) : setCount(count - 1) }
                      setShow1(!show1)
                    }}>
                    {show1 ? "Add to cart" : "Remove from card"}
                  </a></div>
                </div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="card h-100">
                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className="fw-bolder">Popular Item</h5>
                    <div className="d-flex justify-content-center small text-warning mb-2">
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                    </div>
                    $40.00
                  </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#" onClick={
                    () => {
                      // setCount(count + 1)
                      { show2 == true ? setCount(count + 1) : setCount(count - 1) }
                      setShow2(!show2)
                    }}>
                    {show2 ? "Add to cart" : "Remove from card"}
                  </a></div>
                </div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="card h-100">
                <div className="badge bg-dark text-white position-absolute" style={style1}>Sale</div>
                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className="fw-bolder">Sale Item</h5>
                    <span className="text-muted text-decoration-line-through">$50.00</span>
                    $25.00
                  </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#" onClick={
                    () => {
                      // setCount(count + 1)
                      { show3 == true ? setCount(count + 1) : setCount(count - 1) }
                      setShow3(!show3)
                    }}>
                    {show3 ? "Add to cart" : "Remove from card"}
                  </a></div>
                </div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="card h-100">
                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className="fw-bolder">Fancy Product</h5>
                    $120.00 - $280.00
                  </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                </div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="card h-100">
                <div className="badge bg-dark text-white position-absolute" style={style1}>Sale</div>
                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className="fw-bolder">Special Item</h5>
                    <div className="d-flex justify-content-center small text-warning mb-2">
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                    </div>
                    <span className="text-muted text-decoration-line-through">$20.00</span>
                    $18.00
                  </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center"><a className="btn btn-outline-dark mt-auto" href='#' onClick={
                    () => {
                      // setCount(count + 1)
                      { show4 == true ? setCount(count + 1) : setCount(count - 1) }
                      setShow4(!show4)
                    }}>
                    {show4 ? "Add to cart" : "Remove from card"}
                  </a></div>
                </div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="card h-100">
                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className="fw-bolder">Popular Item</h5>
                    <div className="d-flex justify-content-center small text-warning mb-2">
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                    </div>
                    $40.00
                  </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#" onClick={
                    () => {
                      // setCount(count + 1)
                      { show5 == true ? setCount(count + 1) : setCount(count - 1) }
                      setShow5(!show5)
                    }}>
                    {show5 ? "Add to cart" : "Remove from card"}</a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default App;