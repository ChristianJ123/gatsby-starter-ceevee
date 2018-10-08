import React from "react";

const isCurrent = (anchor, pathname) => (
  pathname.endsWith(anchor)
  ? 'current'
  : ''
)

class Navigation extends React.Component {
  state = {
    pathname: '#home'
  }
  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({pathname: window.location.href});
    })
  }
  render() {
    return (
    <nav id="nav-wrap">
      <a className="mobile-btn" href="#nav-wrap" />
      <ul id="nav" className="nav">
        <li className="current">
          <a className="smoothscroll" href="#home">
            Home
          </a>
        </li>
        <li>
          <a className="smoothscroll" href="#about">
            About
          </a>
        </li>
        <li>
          <a className="smoothscroll" href="#resume">
            Resume
          </a>
        </li>
        <li>
          <a className="smoothscroll" href="#portfolio">
            Works
          </a>
        </li>
        <li>
          <a className="smoothscroll" href="#testimonials">
            Testimonials
          </a>
        </li>
        <li>
          <a className="smoothscroll" href="#footer">
            Footer
          </a>
        </li>
      </ul>
    </nav>
  )}
};

export default Navigation;
