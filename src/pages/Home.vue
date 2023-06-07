<template>
	<div class="page page-home">
		<div class="hero">
			<header>
				<div class="container-fluid">
					<div class="row">
						<div class="col-md-2">
							<h1>Joey.</h1>
						</div>
						<div class="col-md-8" v-if="false">
							<ul>
								<li><a href="#" class="active">Home</a></li>
								<li><a href="#">About</a></li>
								<li><a href="#">What I Do</a></li>
								<li><a href="#">Resume</a></li>
								<li><a href="#">Portfolio</a></li>
								<li><a href="#">Contact</a></li>
							</ul>
						</div>
						<div class="col-md-2"></div>
					</div>
				</div>
			</header>

			<div class="caption">
				<h3>Hello!</h3>
				<h2>I'm <span id="type-container"></span></h2>
				<p>Based in Newcastle, England</p>
				<a href="/images/CV.docx">Download CV</a>
			</div>

			<div class="hero-mask"></div>
		</div>

		<section class="content-section about">
			<div class="content-title">
				<h3>About Me</h3>
				<h2>Know Me More</h2>
			</div>

			<div class="content-body">
				<div class="container">
					<div class="row">
						<div class="col-md-8">
							<h2>I'm <span>Joey Emery,</span> a full-stack developer</h2>
							<p>I help you build brand for your business at an affordable price. Thousands of clients have procured exceptional results while working with our dedicated team. when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
							<p>Delivering work within time and budget which meets client’s requirements is our moto. Lorem Ipsum has been the industry's standard dummy text ever when an unknown printer took a galley.</p>
						</div>
						<div class="col-md-4">
							<div class="quick-info">
								<p><strong>Name:</strong> &nbsp; Joey Emery</p>
								<p><strong>Email:</strong> &nbsp; <a href="#">joey@letushost.co.uk</a></p>
								<p><strong>Age:</strong> &nbsp; 31</p>
								<p><strong>From:</strong> &nbsp; Newcastle, England</p>

								<a href="/images/CV.docx" class="cv">Download CV</a>
							</div>
						</div>
					</div>
				</div>
				<div class="container-fluid" v-if="false">
					<ul class="quick-stats">
						<li>
							<h2>12+</h2>
							<p>Years Experience</p>
						</li>
						<li>
							<h2>250+</h2>
							<p>Happy Clients</p>
						</li>
						<li>
							<h2>650+</h2>
							<p>Completed Projects</p>
						</li>
						<li>
							<h2>15</h2>
							<p>Awards</p>
						</li>
					</ul>
				</div>
			</div>
		</section>

		<section class="content-section services" v-if="false">
			<div class="content-title">
				<h3>Services</h3>
				<h2>What I Do</h2>
			</div>

			<div class="content-body">
				<div class="container">
					<div class="item-list">
						<div class="row">
							<div class="col-md-6">
								<div class="item-list-item">
									<div class="icon-wrapper">
										<span class="icon"><em class="fa fa-desktop"></em></span>
									</div>
									<div class="text-wrapper">
										<h2>Web Design &amp; Development</h2>
										<p>Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
									</div>
								</div>

								<div class="item-list-item">
									<div class="icon-wrapper">
										<span class="icon"><em class="fa fa-browsers"></em></span>
									</div>
									<div class="text-wrapper">
										<h2>UI/UX Design</h2>
										<p>Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
									</div>
								</div>

								<div class="item-list-item">
									<div class="icon-wrapper">
										<span class="icon"><em class="fa fa-server"></em></span>
									</div>
									<div class="text-wrapper">
										<h2>Server Creation &amp; Maintenance</h2>
										<p>Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
									</div>
								</div>
							</div>

							<div class="col-md-6">
								<div class="item-list-item">
									<div class="icon-wrapper">
										<span class="icon"><em class="fa fa-mobile"></em></span>
									</div>
									<div class="text-wrapper">
										<h2>App Design &amp; Development</h2>
										<p>Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
									</div>
								</div>

								<div class="item-list-item">
									<div class="icon-wrapper">
										<span class="icon"><em class="fa fa-paintbrush"></em></span>
									</div>
									<div class="text-wrapper">
										<h2>Graphic Design</h2>
										<p>Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
									</div>
								</div>

								<div class="item-list-item">
									<div class="icon-wrapper">
										<span class="icon"><em class="fa fa-rectangle-ad"></em></span>
									</div>
									<div class="text-wrapper">
										<h2>SEO &amp; Marketing</h2>
										<p>Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="content-section experience" v-if="false">
			<div class="content-title">
				<h3>Experience</h3>
				<h2>Resume</h2>
			</div>

			<div class="content-body">
				<div class="container">
					<div class="work-experience-list">
						<h4>More detailed information available in <span>my CV</span></h4>
						<div class="row">
							<div class="col-md-6">
								<div class="work-experience-item">
									<span class="badge">2020 - Present</span>
									<h2>CTO</h2>
									<h3>Letushost</h3>
									<p>As one of the founders and sole developer of Letushost I was tasked with building our entire stack of hospitality focused technology. API, POS, ordering apps, etc</p>
								</div>

								<div class="work-experience-item">
									<span class="badge">2014 - 2016</span>
									<h2>Lead Developer</h2>
									<h3>Molekula</h3>
									<p>Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
								</div>

								<div class="work-experience-item">
									<span class="badge">2012 - 2013</span>
									<h2>UI/UX Designer</h2>
									<h3>Performance Horizon</h3>
									<p>Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
								</div>
							</div>

							<div class="col-md-6">
								<div class="work-experience-item">
									<span class="badge">2016 - 2020</span>
									<h2>Lead Developer</h2>
									<h3>Codeplayground.io</h3>
									<p>Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
								</div>

								<div class="work-experience-item">
									<span class="badge">2013 - 2014</span>
									<h2>Senior Developer &amp; Designer</h2>
									<h3>iResources</h3>
									<p>Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
								</div>

								<div class="work-experience-item">
									<span class="badge">2011 - 2012</span>
									<h2>Web Developer &amp; Designer</h2>
									<h3>Givey</h3>
									<p>Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
								</div>
							</div>
						</div>
					</div>

					<div class="my-skills">
						<h2>My Skills</h2>

						<div class="row row-xl">
							<div class="col-md-6">
								<div class="skill">
									<h3>Mobile Applications <span class="pull-right">100%</span></h3>
									<div class="progress">
									  	<div class="progress-bar" role="progressbar" style="width: 100%"></div>
									</div>
								</div>
								<div class="skill">
									<h3>PHP/Laravel <span class="pull-right">100%</span></h3>
									<div class="progress">
									  	<div class="progress-bar" role="progressbar" style="width: 100%"></div>
									</div>
								</div>
								<div class="skill">
									<h3>Wordpress <span class="pull-right">100%</span></h3>
									<div class="progress">
									  	<div class="progress-bar" role="progressbar" style="width: 100%"></div>
									</div>
								</div>
								<div class="skill">
									<h3>MySQL/Database Design <span class="pull-right">100%</span></h3>
									<div class="progress">
									  	<div class="progress-bar" role="progressbar" style="width: 100%"></div>
									</div>
								</div>
							</div>
							<div class="col-md-6">
								<div class="skill">
									<h3>HTML/CSS/SASS <span class="pull-right">100%</span></h3>
									<div class="progress">
									  	<div class="progress-bar" role="progressbar" style="width: 100%"></div>
									</div>
								</div>
								<div class="skill">
									<h3>Javascript <span class="pull-right">100%</span></h3>
									<div class="progress">
									  	<div class="progress-bar" role="progressbar" style="width: 100%"></div>
									</div>
								</div>
								<div class="skill">
									<h3>Vue <span class="pull-right">100%</span></h3>
									<div class="progress">
									  	<div class="progress-bar" role="progressbar" style="width: 100%"></div>
									</div>
								</div>
								<div class="skill">
									<h3>React <span class="pull-right">90%</span></h3>
									<div class="progress">
									  	<div class="progress-bar" role="progressbar" style="width: 90%"></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="content-section portfolio">
			<div class="container">
				<div class="content-title">
					<h3>Portfolio</h3>
					<h2>Recent Work</h2>
				</div>

				<div class="recent-work">
					<h2>Tap on any project for <span>more information</span></h2>

					<div class="row row-xs">
						<div class="col-md-4">
							<a href="/public/images/work/ora-app-home.png" class="work glightbox" data-gallery="ora-app" style="background: #c3a75b;">
								<img src="/public/images/logos/ora.png" style="width: 45%;" />
								<h3>Mobile Application</h3>
							</a>

							<a href="/public/images/work/ora-app-rewards.png" class="work glightbox" data-gallery="ora-app" style="display: none;"></a>

							<a href="/public/images/work/tower-home.png" class="work glightbox" data-gallery="tower" style="background: #222;">
								<img src="/public/images/logos/hadrianstower.svg" style="width: 55%;" />
								<h3>Mobile Application</h3>
							</a>

							<a href="/public/images/work/tower-profile.png" class="work glightbox" data-gallery="tower" style="display: none;"></a>

							<div class="work" style="background: #fff;" v-if="false">
								<img src="/public/images/logos/diamond.png" style="width: 50%;" />
								<h3 style="color: rgba(0, 0, 0, .7)">Website &amp; Branding</h3>
							</div>

							<a href="/public/images/work/manage-reports.png" class="work glightbox" data-gallery="manage" style="background: #1A1A1A;">
								<img src="/public/images/logos/letushost.png" style="width: 60%;" />
								<h3>Full Management Suite</h3>
							</a>

							<a href="/public/images/work/manage-menu.png" class="work glightbox" data-gallery="manage" style="display: none;"></a>
						</div>
						<div class="col-md-4">
							<a href="/public/images/work/buddha-website-home.png" class="work glightbox" data-gallery="buddha-website" style="background: #0B1517;">
								<img src="/public/images/logos/buddha.png" style="width: 45%;" />
								<h3>Website &amp; Branding</h3>
							</a>

							<a href="/public/images/work/buddha-website-whatson.png" class="work glightbox" data-gallery="buddha-website" style="display: none;"></a>

							<div class="work" style="background: #9d191b;" v-if="false">
								<img src="/public/images/logos/bar52.webp" style="width: 50%;" />
								<h3>Mobile Application</h3>
							</div>

							<div class="work" style="background: #111;" v-if="false">
								<img src="/public/images/logos/longhorns.png" style="width: 70%;" />
								<h3>Website &amp; Branding</h3>
							</div>

							<a href="/public/images/work/ora-website-home.png" class="work glightbox" data-gallery="ora-website" style="background: #c3a75b;">
								<img src="/public/images/logos/ora.png" style="width: 50%;" />
								<h3>Website &amp; Branding</h3>
							</a>

							<a href="/public/images/work/ora-website-menu.png" class="work glightbox" data-gallery="ora-website" style="display: none;"></a>

							<a href="/public/images/work/dockyard-home.png" class="work glightbox" data-gallery="dockyard" style="background: #fff;">
								<img src="/public/images/logos/dockyard.png" style="width: 100%;" />
								<h3 style="color: rgba(0, 0, 0, .7)">Mobile Application</h3>
							</a>

							<a href="/public/images/work/dockyard-menu.png" class="work glightbox" data-gallery="dockyard" style="display: none;"></a>
						</div>
						<div class="col-md-4">
							<a href="/public/images/work/pos-tableplan.png" class="work glightbox" data-gallery="pos" style="background: #1A1A1A;">
								<img src="/public/images/logos/letushost.png" style="width: 60%;" />
								<h3>Point of Sales System</h3>
							</a>

							<a href="/public/images/work/pos-orders.png" class="work glightbox" data-gallery="pos" style="display: none;"></a>

							<a href="/public/images/work/davanti-home.png" class="work glightbox" data-gallery="davanti" style="background: #111;">
								<img src="/public/images/logos/davanti.png" style="width: 45%;" />
								<h3>Website &amp; Branding</h3>
							</a>

							<a href="/public/images/work/privilege-home.webp" class="work glightbox" data-gallery="privilege" style="background: #150A0E;">
								<img src="/public/images/logos/privilege.png" style="width: 70%;" />
								<h3>Mobile Application</h3>
							</a>

							<a href="/public/images/work/privilege-map.webp" class="work glightbox" data-gallery="privilege" style="display: none;"></a>
							<a href="/public/images/work/privilege-venue.webp" class="work glightbox" data-gallery="privilege" style="display: none;"></a>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
	export default {
		mounted()
		{
			$('.hero').css('height', $(window).height());

			console.log(window.GLightbox);

			ityped.init(document.querySelector('#type-container'), {
				showCursor: true,
				disableBackTyping: false,
				loop: true,
				backSpeed: 40,
				strings: [
					'Joey Emery',
					'a Full-Stack Developer',
					'CTO of a Start-Up',
					'a UI/UX Designer',
					'a Mobile App Developer',
					'a Cat Dad',
				]
			});

			const lightbox = GLightbox();
		}
	}
</script>