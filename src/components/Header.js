

import logo from '../commonResources/images/icons/logo-sm.png'
import search from '../commonResources/images/icons/search-icon-sm.png'
import cart from '../commonResources/images/icons/cart-sm.png';


function Header() {
  return (
    <div>
      <div className="nav-wrapper fixed-top">
		<div className="container">
			<nav className="navbar navbar-toggleable-sm navbar-expand-md">
			    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target=".navbar-collapse">
			        ☰
			    </button>
			    <a className="navbar-brand mx-auto" href="https://www.apple.com" ><img alt ="image" src= {logo} /></a>

			    <div className="navbar-collapse collapse">
			        <ul className="navbar-nav nav-justified w-100 nav-fill">
						<li className="nav-item"><a className="nav-link js-scroll-trigger" href="/mac/">Mac</a></li>
						<li className="nav-item"><a className="nav-link js-scroll-trigger" href="https://www.apple.com">iphone</a></li>
						<li className="nav-item"><a className="nav-link js-scroll-trigger" href="https://www.apple.com">ipad</a></li>
						<li className="nav-item"><a className="nav-link js-scroll-trigger" href="https://www.apple.com">watch</a></li>
						<li className="nav-item"><a className="nav-link js-scroll-trigger" href="https://www.apple.com">tv</a></li>
						<li className="nav-item"><a className="nav-link js-scroll-trigger" href="https://www.apple.com">Music</a></li>
						<li className="nav-item"><a className="nav-link js-scroll-trigger" href="https://www.apple.com">Support</a></li>
						<li className="nav-item"><a className="nav-link js-scroll-trigger" href="/search/"><img alt ="image" src={search} /></a></li>
						<li className="nav-item"><a  className="nav-link js-scroll-trigger" href="/cart/"><img alt ="image" src={cart} /></a></li>
			        </ul>
			    </div>
			</nav>
		</div>
	</div>
	<section className="alert-section top-50">
		<div className="container">
			<div className="alert-title">
				We’re open for you.
			</div>
			<div className="alert-text">
				Our retail stores are closed, but you can buy our products here online and get fast, free delivery. If you need help finding the right product or have a question on your order, chat online with a Specialist or call 1-800-MY-APPLE.<br />
				For service and support, visit <a href="https://support.apple.com/">support.apple.com</a>.
			</div>
		</div>
	</section>
    </div>
  )
}

export default Header
