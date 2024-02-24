<script>
	import portrait from '$lib/assets/xiangpeng.jpg';
	import { Tooltip } from '@svelte-plugins/tooltips';
	import { CollapsibleCard } from 'svelte-collapsible';

	import cv from '$lib/assets/Xiangpeng_Hao_CV.pdf';

	let paper_open = false;
</script>

<div>
	<div style="width: 1000px;">
		<div style="display: flex; flex-wrap: wrap; justify-content:center; margin-bottom:1em;">
			<h1>Xiangpeng Hao</h1>
			<h1>(he/him, pronunciations: Shyang-pung How)</h1>
			<div style="margin-left: 1px;">Last update: Feb 2024.</div>
		</div>

		<div style="display: flex;">
			<div class="card" style="line-height: 140%; width: 700px;">
				I'm a third year PhD student at the University of Wisconsin-Madison studying computer
				science with a focus on <a href="http://www.jfsowa.com/ikl/Stonebraker.pdf"
					>database/storage systems</a
				>.<br />
				<br />
				I enjoy <Tooltip
					content="Write code, and build system people can use, not just describe algorithms/protocols"
					theme="hxp"><strong>building</strong></Tooltip
				>
				<Tooltip content="Not LLM!" theme="hxp">data-intensive systems:</Tooltip>
				worked on multiple database storage engines and <Tooltip
					theme="hxp"
					content="aka, B-tree, LSM-tree, hash table, and ART (adaptive radix tree)."
				>
					in-memory/larger-than-memory key-value stores for the past few years.</Tooltip
				> <br />
				<br />
				I aim to <a href="http://herpolhode.com/rob/utah2000.pdf">build systems</a> that have <Tooltip
					theme="hxp"
					content="Not for next x years, but now! Not rely on anyone else to read and implement it, but I do it myself!"
					><strong>direct impact</strong></Tooltip
				> on people who use the system. I'm serious about building <Tooltip
					theme="hxp"
					content="Fearless high performance">reliable systems</Tooltip
				>: I <Tooltip theme="hxp" content="Sometimes C# if you pay as much as M$">(almost)</Tooltip>
				exclusively write in
				<strong>Rust</strong>, I fuzz test all the core components, I run systematic concurrency
				tests on all my multi-thread code.
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
					(Mt. Rainier, <Tooltip content="hard" theme="hxp">skyline loop trail.</Tooltip>)
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
			<div class="card" style="line-height: 140%; width: 700px;">
				While <Tooltip theme="hxp" content="... and being a reasonable person"
					>building systems</Tooltip
				>, I <Tooltip theme="hxp" content="Depends on luck and collaborators!"
					>publish papers</Tooltip
				> (not the reverse!).

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

			<div class="card" style="width:300px;">
				Design axioms (in order of importance)
				<ol>
					<li>
						<Tooltip
							theme="hxp"
							content="I hope this sub-optimized version of me can publish enough to graduate."
							>People-centric.</Tooltip
						> We build the system for people to use/build-upon/contribute, not just for academic records.
						We consider usability, fail-safe, documentation while designing the system.
					</li>
					<li>Correctness.</li>
					<li>
						<Tooltip theme="hxp" content="To publish and to graduate">High performance</Tooltip>
					</li>
				</ol>

				I'm an &nbsp;<a href="https://plato.stanford.edu/entries/existentialism/">existentialist</a
				>.
				<ul>
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
						<strong>Nihilism.</strong> (1) God is dead (2) life is regulated and controlled by faceless
						bureaucrats.
					</li>
				</ul>

				Good reads:
				<ol>
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
			</div>
		</div>

		<!-- <div style="display: flex; margin-top:1em;"></div> -->
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
</style>
