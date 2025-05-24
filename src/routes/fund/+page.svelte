<script>
	import { base } from '$app/paths';
	import ParquetViewer from '$lib/assets/parquet-viewer.jpg';
	import proposal from '$lib/assets/proposal.png';
	import liquidEvict from '$lib/assets/LiquidCache-prelim-3.pdf';
	import '../../app.css';
</script>

<div class="fund-page">
	<div class="report-container">
		<header class="report-header">
			<a href="{base}/" class="back-link">← Back</a>
			<h1>Fund my PhD for $50k</h1>
			<div class="date">Last updated: May 2025</div>
		</header>

		<main class="report-content">
			<section class="executive-summary">
				<h2>TL;DR</h2>
				<p>
					You donate (charitable giving) $50k to support my PhD through graduation (ETA: June 2026).
				</p>
				<ol>
					<li>
						Together, we build <a href="https://github.com/XiangpengHao/liquid-cache">LiquidCache</a
						>, a disaggregated caching system for disk-less cloud analytics.
					</li>
					<li>
						I acknowledge your support through blog posts, research papers, academic/industry talks,
						and my thesis report/defense.
					</li>
				</ol>
			</section>

			<section class="qualifications">
				<h2>What I did last year (2024.09-2025.05) when InfluxData funded me</h2>

				<h3>Coding</h3>
				<ul>
					<li>
						Kickstart the ambitious <a href="https://github.com/XiangpengHao/liquid-cache"
							>LiquidCache</a
						>
						project. With 20k lines of Rust (and increasing) building on top of DataFusion, it is able
						to run all TPC-H and ClickBench queries. We see up to 10x latency and cost reduction for
						scan intensive workloads compared to existing caching systems. We expect it to be the
						<strong>infrastructure for the next generation of cloud analytics</strong>. We
						acknowledge InfluxData's support in the repo README.
					</li>
					<li>
						For shorter term impacts, I build the <a href="https://parquet-viewer.xiangpeng.systems"
							>Parquet Viewer</a
						>, an online tool (also VSCode/Cursor extension) to explore Parquet data as well as its
						schema and file layout. It compiles DataFusion/Arrow/Parquet to WASM for efficient edge
						computing. We acknowledge InfluxData in both the open source repo and in the tool
						itself.
						<img src={ParquetViewer} alt="Parquet Viewer" />
					</li>
					<li>
						Contribute directly to Apache DataFusion, Arrow and Parquet. List of merged PRs
						(2024.09-2025.05):
						<ul class="pr-list">
							<li>
								<a href="https://github.com/apache/datafusion/pull/12405"
									>apache/datafusion #12405</a
								>
							</li>
							<li>
								<a href="https://github.com/apache/datafusion/pull/12575"
									>apache/datafusion #12575</a
								>
							</li>
							<li>
								<a href="https://github.com/apache/datafusion/pull/14116"
									>apache/datafusion #14116</a
								>
							</li>
							<li>
								<a href="https://github.com/apache/datafusion/pull/14139"
									>apache/datafusion #14139</a
								>
							</li>
							<li>
								<a href="https://github.com/apache/datafusion/pull/15102"
									>apache/datafusion #15102</a
								>
							</li>
							<li>
								<a href="https://github.com/apache/datafusion/pull/15449"
									>apache/datafusion #15449</a
								>
							</li>
							<li>
								<a href="https://github.com/apache/datafusion/pull/15460"
									>apache/datafusion #15460</a
								>
							</li>
							<li>
								<a href="https://github.com/apache/datafusion/pull/15595"
									>apache/datafusion #15595</a
								>
							</li>
							<li>
								<a href="https://github.com/apache/datafusion/pull/15827"
									>apache/datafusion #15827</a
								>
							</li>
							<li>
								<a href="https://github.com/apache/arrow-rs/pull/6623">apache/arrow-rs #6623</a>
							</li>
							<li>
								<a href="https://github.com/apache/arrow-rs/pull/6930">apache/arrow-rs #6930</a>
							</li>
							<li>
								<a href="https://github.com/apache/arrow-rs/pull/6931">apache/arrow-rs #6931</a>
							</li>
							<li>
								<a href="https://github.com/apache/arrow-rs/pull/6945">apache/arrow-rs #6945</a>
							</li>
							<li>
								<a href="https://github.com/apache/arrow-rs/pull/6961">apache/arrow-rs #6961</a>
							</li>
							<li>
								<a href="https://github.com/apache/arrow-rs/pull/7229">apache/arrow-rs #7229</a>
							</li>
						</ul>
					</li>
				</ul>

				<h3>Writing</h3>
				<ul>
					<li>
						I wrote five blog posts related to the DataFusion ecosystem, all of them acknowledge
						InfluxData's support.
						<ul>
							<a href="https://blog.xiangpeng.systems/posts/parquet-to-arrow/"
								>Parquet pruning in DataFusion</a
							>
							(cross posted to
							<a href="https://datafusion.apache.org/blog/2025/03/20/parquet-pruning/"
								>DataFusion blog</a
							>)
						</ul>
						<ul>
							<a href="https://blog.xiangpeng.systems/posts/caching-datafusion/"
								>Caching in DataFusion</a
							>
						</ul>
						<ul>
							<a href="https://blog.xiangpeng.systems/posts/parquet-viewer/"
								>Online Parquet Viewer with Rust</a
							>
						</ul>
						<ul>
							<a href="https://blog.xiangpeng.systems/posts/parquet-pushdown/"
								>Efficient Filter Pushdown in Parquet</a
							>
							(cross posted to
							<a href="https://datafusion.apache.org/blog/2025/03/21/parquet-pushdown/"
								>DataFusion blog</a
							>)
						</ul>
						<ul>
							<a href="https://blog.xiangpeng.systems/posts/build-s3-select/"
								>Build your own S3-Select in 400 lines of Rust</a
							>
						</ul>
					</li>
					<li>
						I wrote <a
							href="https://github.com/XiangpengHao/liquid-cache/blob/main/dev/doc/liquid-cache-vldb.pdf"
							>a VLDB paper about LiquidCache</a
						> that, once published (ETA: 2025.08), will acknowledge InfluxData's support.
					</li>
				</ul>

				<h3>Presentations</h3>
				All of the presentations acknowledge InfluxData's support.
				<ul>
					<li>
						<a href="https://www.youtube.com/watch?v=woqXLE25gMc"
							>I presented LiquidCache at the DataFusion Chicago Meetup.</a
						>
					</li>
					<li>
						I <a href="https://csd-web-01.andrew.cmu.edu/calendar/database-seminar-xiangpeng-hao"
							>presented LiquidCache to the CMU database group</a
						> and advertised to Andy Pavlo how InfluxData funded me.
					</li>
					<li>I presented LiquidCache to InfluxData's engineering team.</li>
					<li>I presented LiquidCache at Vyas Sekar's networking group at CMU.</li>
					<li>
						I presented LiquidCache to the CS department at UW-Madison as part of my PhD preliminary
						exam; posters are shown below.
						<img src={proposal} alt="LiquidCache Proposal" />
					</li>
				</ul>
			</section>

			<section class="research-approach">
				<h2>What's next (now - 2026.06)?</h2>

				<h3>Coding</h3>
				<ol>
					<li>
						<strong>(new)</strong> Directly connect to the engineering team to help integrate/try LiquidCache
						in your infrastructure.
					</li>
					<li>
						Building LiquidEvict (as part of LiquidCache), a cache management system designed from
						the ground up for Arrow-native memory management. Aims to achieve efficient memory and
						disk usage. Full proposal is
						<a href={liquidEvict}>here</a>.
					</li>
					<li>
						Continue contributing to Apache DataFusion, Arrow, and Parquet, making them more
						flexible, performant, and easier to use.
					</li>
				</ol>

				<h3>Writing</h3>
				<ol>
					<li>
						<strong>(new)</strong> I'm happy to directly write blog posts to your blog.
					</li>
					<li>Write a VLDB paper about LiquidCache, with acknowledgements to your support.</li>
					<li>
						Write a VLDB/SIGMOD paper about LiquidEvict, with acknowledgements to your support.
					</li>
					<li>Write multiple blog posts about LiquidCache and LiquidEvict.</li>
				</ol>

				<h3>Presentations</h3>
				<ol>
					<li>
						<strong>(new)</strong> I expect to present LiquidCache much more this year as we have more
						to discuss.
					</li>
					<li>Present LiquidCache at my PhD defense.</li>
				</ol>
			</section>

			<section class="contact">
				<h2>Let's connect</h2>
				<div class="contact-details">
					<p>
						<strong>Email:</strong>
						<a href="mailto:xiangpeng.hao@wisc.edu">xiangpeng.hao@wisc.edu</a>
					</p>
				</div>
			</section>
		</main>
	</div>
</div>

<style>
	/* Fund page wrapper styles */
	.fund-page {
		background-color: #ffffff;
		color: #222222;
		line-height: 1.6;
		margin: 0;
		padding: 0;
		min-height: 100vh;
	}

	/* Professional report styling */
	.report-container {
		font-family: 'Times New Roman', 'Georgia', serif;
		max-width: 850px;
		margin: 0 auto;
		padding: 2rem;
		background-color: #ffffff;
	}

	/* Header */
	.report-header {
		border-bottom: 2px solid #333333;
		padding-bottom: 1.5rem;
		margin-bottom: 2rem;
		position: relative;
	}

	.back-link {
		position: absolute;
		top: -0.5rem;
		left: 0;
		color: #666666;
		text-decoration: none;
		font-size: 0.9rem;
	}

	.back-link:hover {
		color: #333333;
		text-decoration: underline;
	}

	.fund-page h1 {
		font-size: 2.2rem;
		color: #222222;
		margin: 1rem 0 0.5rem 0;
		font-weight: bold;
		text-align: center;
	}

	.subtitle {
		text-align: center;
		font-size: 1.1rem;
		color: #555555;
		margin: 0.5rem 0;
		font-style: italic;
	}

	.date {
		text-align: right;
		font-size: 0.9rem;
		color: #666666;
		margin-top: 1rem;
	}

	/* Main content */
	.report-content {
		line-height: 1.7;
	}

	.fund-page section {
		margin-bottom: 2.5rem;
	}

	.fund-page h2 {
		font-size: 1.4rem;
		color: #222222;
		margin: 2rem 0 1rem 0;
		padding-bottom: 0.3rem;
		border-bottom: 1px solid #cccccc;
		font-weight: bold;
	}

	.fund-page h3 {
		font-size: 1.1rem;
		color: #333333;
		margin: 1.5rem 0 0.8rem 0;
		font-weight: bold;
	}

	.fund-page p {
		margin-bottom: 1rem;
		text-align: justify;
	}

	/* Executive summary highlight */
	.fund-page .executive-summary .highlight {
		background-color: #f8f9fa;
		border-left: 4px solid #333333;
		padding: 1rem 1.5rem;
		margin: 1rem 0;
		font-size: 1.05rem;
	}

	/* Lists */
	.fund-page ul,
	.fund-page ol {
		margin: 1rem 0;
		padding-left: 2rem;
	}

	.fund-page li {
		margin-bottom: 0.5rem;
	}

	/* Funding options */
	.funding-option {
		border: 1px solid #cccccc;
		padding: 1.5rem;
		margin: 1rem 0;
		background-color: #ffffff;
	}

	.funding-option.primary {
		border-left: 4px solid #333333;
	}

	.funding-option.unavailable {
		background-color: #f8f8f8;
		color: #666666;
	}

	.funding-details {
		margin: 1rem 0;
	}

	.funding-details div {
		margin: 0.5rem 0;
	}

	.status-note {
		background-color: #e8f4e8;
		border: 1px solid #c3e6c3;
		padding: 0.8rem;
		margin-top: 1rem;
		font-size: 0.95rem;
	}

	/* Focus areas */
	.focus-areas {
		margin: 1rem 0;
	}

	.area {
		display: inline-block;
		background-color: #f0f0f0;
		padding: 0.3rem 0.8rem;
		margin: 0.2rem 0.3rem 0.2rem 0;
		border: 1px solid #cccccc;
		font-size: 0.9rem;
	}

	/* Projects */
	.project {
		border-left: 3px solid #dddddd;
		padding-left: 1.5rem;
		margin: 1.5rem 0;
	}

	.project.custom {
		border-left-color: #333333;
		background-color: #f9f9f9;
		padding: 1rem 1.5rem;
	}

	.fund-page .project h3 {
		color: #333333;
		margin-top: 0;
	}

	/* Code blocks */
	.fund-page pre {
		background-color: #f5f5f5;
		border: 1px solid #dddddd;
		padding: 1rem;
		margin: 1rem 0;
		overflow-x: auto;
		font-family: 'Courier New', monospace;
		font-size: 0.9rem;
	}

	.fund-page code {
		font-family: 'Courier New', monospace;
		font-size: 0.9rem;
	}

	/* Contact section */
	.contact-details {
		background-color: #f8f9fa;
		border: 1px solid #dddddd;
		padding: 1.5rem;
	}

	.fund-page .contact-details p {
		margin: 0.5rem 0;
	}

	/* PR list styling for compactness */
	.pr-list {
		margin: 0.5rem 0;
		padding-left: 1.5rem;
		column-count: 2;
		column-gap: 2rem;
	}

	.pr-list li {
		margin-bottom: 0.2rem;
		break-inside: avoid;
	}

	@media (max-width: 768px) {
		.pr-list {
			column-count: 1;
		}
	}

	/* Links */
	.fund-page a {
		color: #1a365d;
		text-decoration: underline;
	}

	.fund-page a:hover {
		color: #2c5282;
	}

	/* Print styling */
	@media print {
		.report-container {
			max-width: none;
			margin: 0;
			padding: 1rem;
		}

		.back-link {
			display: none;
		}

		section {
			break-inside: avoid;
		}
	}

	/* Responsive adjustments */
	@media (max-width: 768px) {
		.report-container {
			padding: 1rem;
		}

		h1 {
			font-size: 1.8rem;
		}

		.funding-option {
			padding: 1rem;
		}
	}
</style>
