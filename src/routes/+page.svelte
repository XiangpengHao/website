<script>
	import portrait from '$lib/assets/xiangpeng.jpg';
	import lgbtFlag from '$lib/assets/lgbt.gif';
	import { Tooltip } from '@svelte-plugins/tooltips';
	import { CollapsibleCard } from 'svelte-collapsible';

	import cv from '$lib/assets/Xiangpeng_Hao_CV.pdf';

	let paper_open = false;

	const currentDate = new Date();
	const formattedDate = currentDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
</script>

<div>
	<div style="width: 1000px;">
		<div style="display: flex; flex-wrap: wrap; justify-content:center; margin-bottom:1em;">
			<h1>Xiangpeng Hao</h1>
			<h1>(he/him, pronunciations: Shyang-pung How)</h1>
			<div style="margin-left: 1px;">
				<span>Last update: {formattedDate}.</span><a href="/life" style="margin-left: 1em;"
					>Non-academic</a
				>
			</div>
		</div>

		<div style="display: flex;">
			<div class="card" style="line-height: 140%; width: 700px;">
				<!-- <strong style="font-family: Helvetica, Arial, sans-serif;"
					>Want my 100% time for only 50% SWE cost? <a href="/fund">Fund my PhD research!</a
					></strong
				> -->
				<!-- <br /> -->
				<!-- <br /> -->
				I'm a third year PhD student at the University of Wisconsin-Madison studying computer science
				with a focus on database/storage systems.
				<br />
				My PhD advisor is
				<a href="https://pages.cs.wisc.edu/~remzi/">Remzi H. Arpaci-Dusseau</a>. My PhD is
				<a href="/fund">funded</a>
				(2024-2025) by
				<a href="https://www.influxdata.com">
					<img
						src="https://influxdata.github.io/branding/img/downloads/influxdata-logo--full--castle.svg"
						class="logo"
						alt="InfluxData logo"
					/>
				</a>
				to work on Apache <a href="https://github.com/apache/datafusion">DataFusion</a>/<a
					href="https://github.com/apache/arrow-rs">Arrow</a
				>/<a href="https://github.com/apache/arrow-rs/tree/master/parquet">Parquet</a>.
				<br />

				<br />
				I worked on multiple database engines and key-value stores -- Arrow, DataFusion, Parquet, BigTable,
				Spanner,
				<a href="https://github.com/microsoft/FASTER">FASTER</a>,
				<a href="https://github.com/microsoft/garnet">Garnet</a>,
				<a href="https://www.vldb.org/pvldb/vol17/p3442-hao.pdf">Bf-Tree</a>,
				<a href="https://dl.acm.org/doi/10.1145/3639286">Two-trees</a>,
				<a href="https://github.com/XiangpengHao/congee">Congee</a>.<br />
				<br />
				<a href="https://blog.haoxp.xyz/posts/research-statement/">My research</a>
				solves today's problems and directly connects to users . I believe
				<strong>real</strong>
				impacts stem from the first-person experience of
				<strong>real</strong>
				problems.
				<a
					href="http://databasearchitects.blogspot.com/2023/01/for-systems-research-is-development-and.html"
					>System</a
				> <a href="http://www.jfsowa.com/ikl/Stonebraker.pdf">research</a>
				<a href="http://herpolhode.com/rob/utah2000.pdf">without</a> being grounded by
				<strong>real</strong>
				systems, is a waste of intelligence and time.
				<br />
				<br />

				People I have worked closely:
				<br />
				<a href="https://www.cs.sfu.ca/~tzwang/">Tianzheng Wang</a> -- my undergraduate advisor. He
				is a rock-star database researcher, I learned a lot from him. He introduced me to the
				database research, and I still love it.
				<br />
				<a href="https://pages.cs.wisc.edu/~yxy/">Xiangyao Yu</a> -- my PhD advisor for the first
				three and a half years.
				<br />
				<a href="https://www.cs.cmu.edu/~yixinluo/">Yixin Luo</a> -- my intern mentor @Google. We
				did great work on database auto-tuning.
				<br />
				<a href="https://www.microsoft.com/en-us/research/people/badrishc/">Badrish Chandramouli</a>
				-- my intern mentor @MSR. He is a great researcher and
				<a href="https://blog.haoxp.xyz/posts/good-advisor/">mentor</a>. He reasons what I said, and
				his attrition to details is incredible.
				<br />
				<a href="http://andrew.nerdnetworks.org">Andrew Lamb</a> -- my
				<a href="https://blog.haoxp.xyz/posts/working-at-influxdata/">intern</a>
				mentor @InfluxData. His passion and professionalism in DataFusion development have reshaped my
				research to connect more closely to real-world applications.
				<br />

				<!-- Many other people helped me along the way, I'm grateful for all of them. -->
			</div>
			<div class="card" style="width: 300px;">
				<img src={portrait} class="pure-img" alt="Xiangpeng on Mt. Rainier" style="width: 100%;" />
				<p style="margin: -0.3em;">
					(<a href="https://aoli.al"><img src={lgbtFlag} class="logo-large" alt="LGBT flag" /></a>
					Mt. Rainier,
					<a href="https://www.linkedin.com/in/dujian-ding-250123133">credit</a>)
				</p>
				<div style="max-width:100%;display: flex; justify-content: space-between; margin-top:1em;">
					<div><a href={cv}>CV</a></div>
					<div><a href="https://blog.haoxp.xyz">Blog</a></div>
					<div><a href="https://t.me/life_xiangpeng">Life (CN)</a></div>
					<div><a href="https://github.com/XiangpengHao">GitHub</a></div>
					<div><a href="https://www.linkedin.com/in/hao-xiangpeng/">LinkedIn</a></div>
				</div>
			</div>
		</div>

		<div style="display: flex; margin-top: 1em; ">
			<div class="card" style="width:700px;">
				Design axioms (ordered)
				<ol style="margin-top: 0.5em;">
					<li>
						People-centric. I build systems for people to {'{'}use | build-upon | contribute{'}'},
						not just for academic records.
					</li>
					<li>
						Correctness. I code in
						<strong>Rust</strong>, <a href="https://github.com/rust-fuzz/cargo-fuzz">fuzz test</a>
						all the core components, run
						<a href="https://github.com/awslabs/shuttle">systematic concurrency tests</a> on all multi-threaded
						code.
					</li>
					<li>
						Performance, <a href="https://motherduck.com/blog/perf-is-not-enough/"
							>between keyboard and screen.</a
						>
					</li>
				</ol>

				I'm an &nbsp;<a href="https://plato.stanford.edu/entries/existentialism/">existentialist</a
				>.
				<ul style="margin-top: 0.5em;">
					<li>
						<strong>Existence Precedes Essence.</strong> We exist for ourselves as self-making or self-defining
						beings, and we are always in the process of making or defining ourselves through the situated
						choices we make as our lives unfold.
					</li>
					<li>
						<strong>Freedom.</strong> It is true that we are free to create ourselves, but it is also
						true that we are already created by our situation.
					</li>
					<li>
						<strong>Nihilism.</strong> (1) individualism and loneliness (2) life is regulated and controlled
						by faceless bureaucrats.
					</li>
				</ul>
				<section>Leap of faith: Be nice; Be good to society.</section>

				<br />

				<p style="margin-bottom: 0">Good reads:</p>
				<ol style="margin-top: 0">
					<li>
						<a href="https://www.goodreads.com/en/book/show/17895842">Returning to Reims</a>
					</li>
					<li><a href="https://www.goodreads.com/book/show/12505.The_Idiot">The Idiot</a></li>
					<!-- <li> -->
					<!-- <a href="https://www.goodreads.com/en/book/show/4934">The Brothers Karamazov</a> -->
					<!-- </li> -->
				</ol>

				<section>
					<div class="quote" style="margin-top: 0.5em;">
						It’s the disease of thinking that a really great idea is 90% of the work. And if you
						just tell all these other people “here’s this great idea,” then of course they can go
						off and make it happen. And the problem with that is that there’s just a tremendous
						amount of craftsmanship in between a great idea and a great product. And as you evolve
						that great idea, it changes and grows. It never comes out like it starts because you
						learn a lot more as you get into the subtleties of it. And you also find there are
						tremendous tradeoffs that you have to make... Designing a product is keeping five
						thousand things in your brain and fitting them all together in new and different ways to
						get what you want. -- Steve Jobs
					</div>
				</section>
			</div>
			<div class="card" style="line-height: 140%; width: 300px;">
				While <Tooltip theme="hxp" content="... and being a reasonable person"
					>building systems</Tooltip
				>, I publish papers (not the opposite!).

				<CollapsibleCard open={paper_open}>
					<u slot="header">Click to show.</u>
					<div slot="body">
						<p>
							Towards Buffer Management with Tiered Main Memory.<br />
							<strong>Xiangpeng Hao</strong>, Xinjing Zhou, Xiangyao Yu, Michael Stonebraker. SIGMOD
							2024, to appear.
						</p>

						<p>
							Blink-hash: An Adaptive Hybrid Index for In-Memory Time-Series Databases<br />
							Hokeun Cha, <strong>Xiangpeng Hao</strong>, Tianzheng Wang, Huanchen Zhang, Aditya
							Akella, Xiangyao Yu. Proceedings of the VLDB Endowment (VLDB 2023)
						</p>

						<p>
							Towards Accelerating Data Intensive Application's Shuffle Process Using SmartNICs <br
							/>
							Jiaxin Lin, Tao Ji, <strong>Xiangpeng Hao</strong>, Hokeun Cha, Yanfang Le, Xiangyao
							Yu, Aditya Akella Proceedings of the ACM on Measurement and Analysis of Computing
							Systems
						</p>
						<p>
							PiBench Online: Interactive Benchmarking of Persistent Memory Indexes (Demo). <br
							/><strong>Xiangpeng Hao</strong>, Lucas Lersch, Tianzheng Wang, Ismail Oukid. 45th
							International Conference on Very Large Data Bases (VLDB 2020)
						</p>
						<p>
							DASH: Dynamic and Scalable Hashing on Persistent Memory.<br /> Baotong Lu,
							<strong>Xiangpeng Hao</strong>, Tianzheng Wang, Eric Lo. 45th International Conference
							on Very Large Data Bases (VLDB 2020)
						</p>
						<p>
							Evaluating Persistent Memory based Range Indexes.<br /> Lucas Lersch,
							<strong>Xiangpeng Hao</strong>, Ismail Oukid, Tianzheng Wang, Thomas Willhalm. 45th
							International Conference on Very Large Data Bases (VLDB 2020)
						</p>
						<p>
							Evaluating Colour Constancy on the new MIST dataset of Multi-Illuminant Scenes.<br />
							<strong>Xiangpeng Hao</strong>, Brian Funt, Hanxiao Jiang. 27th Color Image Conference
						</p>
						<p>
							A Multi-illuminant Synthetic Image Test Set.<br /> <strong>Xiangpeng Hao</strong>,
							Brian Funt. Color Research and Application
						</p>
					</div>
				</CollapsibleCard>
			</div>
		</div>
	</div>
</div>

<style>
	:global(.tooltip.hxp) {
		--tooltip-background-color: rgb(54, 54, 54);
		--tooltip-arrow-size: 5px;
		--tooltip-border-radius: 1px;
		--tooltip-font-size: 11px;
		--tooltip-line-height: 1rem;
		--tooltip-offset-y: 5px !important;
		--tooltip-padding: 8px;
		--tooltip-offset-x: 5px;
	}

	:global(body) {
		font-family: 'Cormorant Garamond', serif;
		/* font-family: 'Open Sans', sans-serif; */
		font-size: 1.1rem;
		font-weight: 500;
		font-style: normal;
	}

	.logo {
		height: 1.2em; /* Set the height to match the line height */
		vertical-align: middle; /* Align the image vertically to the middle */
	}

	.logo-large {
		height: 1.4em; /* Set the height to match the line height */
		vertical-align: middle; /* Align the image vertically to the middle */
	}

	.card {
		border: 2px solid #f5f5f5;
		padding: 0.5em;
		border-radius: 1px;
		margin-bottom: 1em;
		margin-left: 0.5em;
	}

	h1 {
		margin-top: 0;
		margin-bottom: 0;
	}

	.quote {
		line-height: 1.5;
		background-color: #f9f9f9;
		border-left: 10px solid #ccc;
		margin: 1.5em 10px;
		padding: 0.5em 10px;
		quotes: '\201C' '\201D' '\2018' '\2019';
		font-family: 'Cormorant Garamond', serif;
	}
	.quote:before {
		color: #ccc;
		content: open-quote;
		font-size: 4em;
		line-height: 0.1em;
		margin-right: 0.25em;
		vertical-align: -0.4em;
	}
</style>
