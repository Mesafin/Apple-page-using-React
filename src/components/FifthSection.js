import React from 'react'
import tvLogo from '../commonResources/images/icons/apple-tv-logo.png'
import banker from '../commonResources/images/home/banker.png'
import watchSeriousLogo from '../commonResources/images/icons/watch-series5-logo.png'

function FifthSection() {
  return (
    <div>
      <section className="fifth-heghlight-wrapper">
		<div className="container-fluid">
			<div className="row">
				<div className="left-side-wrapper col-sm-12 col-md-6">
					<div className="left-side-container">
						<div className="top-logo-wrapper">
							<div className="logo-wrapper">
								<img alt="image" src={tvLogo} />
							</div>
						</div>

						<div className="tvshow-logo-wraper">
							<img alt="image" src={banker} />
						</div>

						<div className="watch-more-wrapper">
							<a href="http://www.aple.com">Watch now on the Apple TV App</a>
						</div>
					</div>
				</div>
				<div className="right-side-wrapper col-sm-12 col-md-6">
					<div className="right-side-container">
						<div className="top-logo-wrapper">
							<div className="logo-wrapper">
								<img alt="image" src={watchSeriousLogo} />
							</div>
						</div>
						<div className="description-wraper">
							With the Always-On Retina display.<br />
							You’ve never seen a watch like this.
						</div>
						<div className="links-wrapper">
							<ul>
								<li><a href="http://www.aple.com">Learn more</a></li>
								<li><a href="http://www.aple.com">Buy</a></li>
							</ul> 
						</div>
					</div>
				</div>					
			</div>
		</div> 
	</section>
    </div>
  )
}

export default FifthSection
