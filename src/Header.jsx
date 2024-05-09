import navImg from './assets/images/nav-img.png'

export const Header = () => {
    return (
      <>
  
        <div className="container header__container">
          <header className="header" id="header">
            <p className="header__logo">YOUR LOGO</p>
            <nav className="header__nav">
              <a href="#" className="header__link">HOME</a>
              <a href="#" className="header__link">SHOP</a>
              <a href="#" className="header__link">LOOKBOOK</a>
              <a href="#" className="header__link">FEATURES</a>
              <a href="#" className="header__link">PAGES</a>
              <a href="#" className="header__link">BLOG</a>
            </nav>
            <aside className='header__menu'>
              <img src={navImg} />
            </aside>
          </header>
        </div>
  
      </>
    );
  }