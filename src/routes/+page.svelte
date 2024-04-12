<script>
	import portrait from '$lib/assets/xiangpeng.jpg';
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
			<div style="margin-left: 1px;">Last update: {formattedDate}.</div>
		</div>

		<div style="display: flex;">
			<div class="card" style="line-height: 140%; width: 700px;">
				I'm a third year PhD student at the University of Wisconsin-Madison studying computer
				science with a focus on <a href="http://www.jfsowa.com/ikl/Stonebraker.pdf"
					>database/storage systems</a
				>.<br />
				<br />
				I enjoy <strong>building</strong>
				data-intensive systems: worked on multiple database storage engines and in-memory/larger-than-memory
				key-value stores for the past few years. (BigTable, Spanner,
				<a href="https://github.com/microsoft/FASTER">FASTER</a>,
				<a href="https://github.com/microsoft/garnet">Garnet</a>,
				<a href="https://dl.acm.org/doi/10.1145/3639286">Two-trees</a>,
				<a href="https://github.com/XiangpengHao/congee">Congee</a>)<br />
				<br />
				I aim to <a href="http://herpolhode.com/rob/utah2000.pdf">build systems</a> that solve
				today's problem and have <strong>direct impact</strong> on people who use the system. I
				believe <strong>real</strong> impacts stem from first-person experience of the
				<strong>real</strong>
				problems. I believe system research without being grounded by <strong>real</strong>
				systems/workloads/use-cases, is a waste of intelligence and time.
				<br />
				<br />

				I care about <Tooltip
					theme="hxp"
					content="Not (just) academic achievements, money, big houses, etc."
					><strong>people</strong></Tooltip
				>.
				<br />
				<a href="https://www.cs.sfu.ca/~tzwang/">Tianzheng Wang</a> was my undergraduate advisor. He
				is a rock-star database researcher, I learned a lot from him. He introduced me to the
				database research, and I still love it.
				<br />
				<a href="https://pages.cs.wisc.edu/~yxy/">Xiangyao Yu</a> was my PhD advisor for the first
				three and a half years.
				<br />
				<a href="https://www.cs.cmu.edu/~yixinluo/">Yixin Luo</a> was my intern mentor @Google. We
				did great work on database auto-tuning. Sad that I can't continue participating in the
				project due to external restrictions.
				<br />
				<a href="https://www.microsoft.com/en-us/research/people/badrishc/">Badrish Chandramouli</a>
				was my intern mentor @MSR. He is a great researcher and mentor. He reasons about what I said,
				and his attrition to details is incredible.
				<br />

				Many many other people have helped me along the way. I'm grateful for all of them.
			</div>
			<div class="card" style="width: 300px;">
				<img src={portrait} class="pure-img" alt="Xiangpeng on Mt. Rainier" style="width: 100%;" />
				<p style="margin: -0.3em;">
					(🌈 Mt. Rainier, skyline loop trail, <a
						href="https://www.linkedin.com/in/dujian-ding-250123133">credit</a
					>)
				</p>
				<div style="max-width:100%;display: flex; justify-content: space-between; margin-top:1em;">
					<div><a href={cv}>CV</a></div>
					<div><a href="https://t.me/life_xiangpeng">Life (Chinese)</a></div>
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
						<Tooltip
							theme="hxp"
							content="I hope this sub-optimized version of me can publish enough to graduate."
							>People-centric.</Tooltip
						> We design the system for people to {'{'}use | build-upon | contribute{'}'}, not just
						for academic records. We are serious about usability, fail-proof, and documentation.
					</li>
					<li>
						Correctness. I (almost) exclusively write in
						<strong>Rust</strong>, fuzz test all the core components, run systematic concurrency
						tests on all multi-threaded code.
					</li>
					<li>
						<Tooltip theme="hxp" content="To publish and to graduate">High performance.</Tooltip>
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
						<a href="https://www.goodreads.com/en/book/show/17895842"
							>Returning to Reims (回归故里)</a
						>
					</li>
					<li>
						<a href="https://www.goodreads.com/en/book/show/4934"
							>The Brothers Karamazov (卡拉马佐夫兄弟)</a
						>
					</li>
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
				>, I <Tooltip theme="hxp" content="Depends on luck and collaborators!"
					>publish papers</Tooltip
				> (not the opposite!).

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
