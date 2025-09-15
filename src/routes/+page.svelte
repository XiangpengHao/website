<script>
	import portrait from '$lib/assets/xiangpeng.jpg';
	import lgbtFlag from '$lib/assets/lgbt.gif';
	import cv from '$lib/assets/Xiangpeng_Hao_CV.pdf';
	import { base } from '$app/paths';
	import '../app.css';
	import LiquidCache from '$lib/assets/liquid-cache.png';
	import Ruby from '$lib/assets/ruby.jpg';
</script>

<div class="flex justify-center items-center min-h-screen p-4 bg-gray-100">
	<div class="max-w-[1000px] w-full bg-white p-2 md:p-4 shadow-sm rounded">
		<div class="flex flex-wrap justify-center mb-2">
			<div class="w-full text-center">
				<h1 class="text-3xl md:text-4xl font-semibold mb-2">Xiangpeng Hao</h1>
				<p class="text-lg md:text-xl text-gray-700 mb-1">
					(he/him, pronunciations: Shyang-pung How)
				</p>
				<div class="text-sm md:text-base text-gray-600">
					<a href="{base}/life" class="block md:inline md:ml-6 text-blue-600">Non-academic</a>
					<a href="{base}/work-with-me" class="block md:inline md:ml-6 text-blue-600"
						>Work with me</a
					>
				</div>
			</div>
		</div>

		<div class="flex flex-col md:flex-row">
			<div class="card w-full leading-normal">
				<div class="flex flex-col md:flex-row">
					<div class="md:basis-[65%] md:max-w-[65%] md:pr-6">
						<p class="mb-0">
							📢📢📢 <a href="https://aoli.al">My partner (Ao)</a> and I are on the tenure track faculty
							job market this year, both seeking positions in computer science and related areas.
						</p>
						<hr class="my-2" />

						<p>
							I'm a final year PhD student at the University of Wisconsin-Madison studying computer
							science with a focus on database/storage systems.
						</p>
						<p>
							I'm advised by
							<a href="https://pages.cs.wisc.edu/~dusseau/">Andrea Arpaci-Dusseau</a>
							and <a href="https://pages.cs.wisc.edu/~remzi/">Remzi Arpaci-Dusseau</a>.
						</p>
						<p>
							I build <span class="font-bold"
								>efficient, cost-effective storage systems for the cloud</span
							>. My research treats <span class="font-bold">real-world impact</span> as a core goal:
							not only proposing ideas that advance academic knowledge, but also
							<span class="font-bold">delivering them</span> through careful engineering that pays
							attention to every detail. I have built:
							<a href="https://dl.acm.org/doi/10.1145/3639286">caching structures</a>
							(SIGMOD '24) for multi-tier memory systems,
							<a href="https://github.com/XiangpengHao/bf-tree-docs">BfTree</a>
							(VLDB '24), a novel range index that leverages variable-length buffer pools for efficient
							caching;
							<a href="https://github.com/XiangpengHao/liquid-cache">LiquidCache</a> (VLDB '26), a novel
							pushdown-based disaggregated caching system that evaluates filters on cache servers before
							transmitting data to compute nodes.
						</p>
					</div>
					<div class="md:basis-[35%] md:max-w-[35%]">
						<img src={portrait} class="mx-auto w-3/5" alt="Xiangpeng and Ruby (his dog)" />
						<div class="text-sm text-gray-500 text-center">
							Xiangpeng and Ruby <a href={Ruby} class="text-gray-600">(professional photo)</a>
						</div>
						<div class="flex flex-wrap justify-between gap-2 mt-2">
							<div><a href={cv}>CV</a></div>
							<div><a href="https://blog.xiangpeng.systems">Blog</a></div>
							<div class="flex items-center gap-2">
								<a href="https://t.me/life_xiangpeng">Life</a>
								<a href="https://aoli.al"
									><img src={lgbtFlag} class="logo-large" alt="LGBT flag" /></a
								>
							</div>
							<div><a href="https://github.com/XiangpengHao">GitHub</a></div>
							<div><a href="https://www.linkedin.com/in/hao-xiangpeng/">LinkedIn</a></div>
						</div>
						<div class="mt-2">
							Two passions that guide my research:
							<ol class="passions-list">
								<li>To build practical systems for the public good.</li>
								<li>To pursue and propagate human knowledge.</li>
							</ol>
						</div>
					</div>
				</div>
				<div class="mt-4 mb-4">
					<div>
						<strong>
							<a href="{base}/fund">Funding I raised for my PhD:</a>
						</strong>
					</div>
					<div class="funding-table">
						<table class="w-full border-collapse border border-gray-300">
							<thead>
								<tr class="bg-gray-100">
									<th class="border border-gray-300 px-4 py-1 text-left w-1/3"></th>
									<th class="border border-gray-300 px-4 py-1 text-left w-1/3">2024-2025</th>
									<th class="border border-gray-300 px-4 py-1 text-left w-1/3">2025-2026</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td class="border border-gray-300 px-4 py-1 font-semibold bg-gray-50"
										>Funding sources</td
									>
									<td class="border border-gray-300 px-4 py-1">
										<a href="https://www.influxdata.com"> InfluxData </a>
									</td>
									<td class="border border-gray-300 px-4 py-1">
										<div class="flex flex-wrap gap-4 items-center">
											<a href="https://www.influxdata.com"> InfluxData </a>
											<a href="https://spiraldb.com">Spiral</a>
											<a href="https://www.bauplanlabs.com">BauPlan</a>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>

				<div class="flex flex-col md:flex-row mt-2">
					<div class="md:basis-[40%] md:max-w-[40%] md:pr-6">
						<div>Advisors and mentors:</div>
						<div class="text-sm">
							<a href="https://www.cs.sfu.ca/~tzwang/">Tianzheng Wang</a>: my undergraduate advisor.
							He is a rock-star database researcher.
							<br />
							<a href="https://pages.cs.wisc.edu/~yxy/">Xiangyao Yu</a>: my PhD advisor for the
							first two and a half years.
							<br />
							<a href="https://www.cs.cmu.edu/~yixinluo/">Yixin Luo</a>: my intern mentor @Google.
							We did great work on database auto-tuning.
							<br />
							<a href="https://www.microsoft.com/en-us/research/people/badrishc/"
								>Badrish Chandramouli</a
							>
							: my intern mentor @MSR. He is a great researcher and
							<a href="https://blog.xiangpeng.systems/posts/good-advisor/">mentor</a>. He reasons
							what I said, and his attention to details is incredible.
							<br />
							<a href="http://andrew.nerdnetworks.org">Andrew Lamb</a>: my
							<a href="https://blog.xiangpeng.systems/posts/working-at-influxdata/">intern</a>
							mentor @InfluxData. His passion and professionalism in DataFusion development have reshaped
							my research to connect more closely to real-world applications.
							<br />
						</div>
					</div>
					<div class="md:basis-[25%] md:max-w-[25%]">
						<div>Students I advise:</div>
						<ul class="text-sm pl-1">
							<li>
								2024-09 - now: <a href="https://www.linkedin.com/in/yibo-wu-226200219/">Yibo Wu</a>
							</li>
							<li>
								2025-01 - now: <a href="https://www.linkedin.com/in/nayak-nikhil/">Nikhil Nayak</a>
							</li>
							<li>2025-01 - now: <a href="https://github.com/JP-Reddy">JP Guthi</a></li>
							<li>
								2025-03 - now: <a href="https://www.linkedin.com/in/proteet-paul/">Proteet Paul</a>
							</li>
							<li>
								2025-05 - now: <a href="https://www.linkedin.com/in/hrishikeshh-shinde/"
									>Hrishikesh Shinde</a
								>
							</li>
							<li>2025-06 - now: Saeshu Karthika Murugan Indumathi</li>
							<li>
								2025-09 - now: <a href="https://www.linkedin.com/in/zixuan-peng-7a59a3330/"
									>Zixuan Peng</a
								>
							</li>
						</ul>
					</div>
					<div class="md:basis-[35%] md:max-w-[35%]">
						<div>Talks:</div>
						<ol class="pl-1 overflow-y-auto max-h-[200px] text-sm talks-list">
							<a href="https://what-is-liquid-cache.xiangpeng.systems">What is LiquidCache?</a>
							<li>
								2025-08: <a href="https://www.linkedin.com/company/bengaluru-systems/">
									Bengaluru Systems</a
								> (LiquidCache)
							</li>
							<li>
								2025-08: <a href="https://dcsystems.wtf">DC Systems</a> (LiquidCache)
							</li>
							<li>
								2025-07: <a href="https://syslab.cs.washington.edu"
									>University of Washington system lab</a
								> (LiquidCache)
							</li>
							<li>
								2025-05: <a href="https://madsystems.cs.wisc.edu">UW-Madison</a> (LiquidCache)
							</li>
							<li>
								2025-01: <a href="https://www.cylab.cmu.edu">CMU Cylab</a> (LiquidCache)
							</li>
							<li>
								2025-01: <a href="https://db.cs.cmu.edu">CMU DB group</a> (LiquidCache)
							</li>
							<li>
								2024-12: <a href="https://lu.ma/eq5myc5i">Chicago DataFusion meetup</a> (LiquidCache)
							</li>
							<li>
								2024-12: <a href="https://www.influxdata.com">InfluxData</a> (LiquidCache)
							</li>
							<li>
								2024-06: <a href="https://cornelldb.github.io/dbgrouphp/">Cornell</a>
								(Bf-Tree)
							</li>
						</ol>
					</div>
				</div>
			</div>
		</div>

		<div class="flex flex-col md:flex-row mt-4">
			<div class="card systems w-full leading-normal">
				<div class="space-y-8">
					<div>
						<div class="mb-4">I build <strong>systems</strong></div>
						<div>
							I contribute to open-source:
							<ol>
								<li>
									I co-created and maintain <a href="https://github.com/XiangpengHao/liquid-cache"
										>LiquidCache</a
									>, a distributed pushdown caching for DataFusion.
								</li>
								<li>
									I build <a href="https://parquet-viewer.xiangpeng.systems">Parquet Viewer</a>, an
									online tool to explore Parquet schema and data.
								</li>
								<li>I actively contribute to Apache DataFusion, Arrow, and Parquet.</li>
							</ol>
						</div>

						<div class="mt-6">Building principles</div>
						<ol>
							<li>
								People-centric. I build systems for people to {'{'}use | build-upon | contribute{'}'},
								not just for academic records.
							</li>
							<li>
								Reliability. I code in Rust,
								<a href="https://github.com/rust-fuzz/cargo-fuzz">fuzz test</a>
								all the core components, run
								<a href="https://github.com/awslabs/shuttle">systematic concurrency tests</a> on all
								multi-threaded code.
							</li>
							<li>
								Performance, <a href="https://motherduck.com/blog/perf-is-not-enough/"
									>from keyboard to screen.</a
								>
							</li>
						</ol>
					</div>

					<div class="quote mt-2">
						It’s the disease of thinking that a really great idea is 90% of the work. And if you
						just tell all these other people “here’s this great idea,” then of course they can go
						off and make it happen. And the problem with that is that there’s just a tremendous
						amount of craftsmanship in between a great idea and a great product. And as you evolve
						that great idea, it changes and grows. It never comes out like it starts because you
						learn a lot more as you get into the subtleties of it. -- Steve Jobs
					</div>
				</div>
			</div>
			<div class="card papers w-full leading-normal">
				<div class="mb-4">I publish <strong>papers</strong></div>
				<ol class="overflow-y-auto max-h-[800px]">
					<li>
						LiquidCache: Efficient Pushdown Caching for Cloud-Native Data Analytics.<br />
						<strong>Xiangpeng Hao</strong>, Andrew Lamb, Yibo Wu, Andrea Arpaci-Dusseau, Remzi
						Arpaci-Dusseau. (VLDB 2025) [<a href="https://github.com/XiangpengHao/liquid-cache"
							>code</a
						>,
						<a
							href="https://github.com/XiangpengHao/liquid-cache/blob/main/dev/doc/liquid-cache-vldb.pdf"
							>paper</a
						>]
					</li>
					<li>
						Bf-Tree: A Modern Read-Write-Optimized Concurrent Larger-Than-Memory Range Index.<br />
						<strong>Xiangpeng Hao</strong>, Badrish Chandramouli. (VLDB 2024) [<a
							href="https://github.com/XiangpengHao/bf-tree-docs">more</a
						>]
					</li>
					<li>
						Shadow Filesystems: Recovering from Filesystem Runtime Errors via Robust Alternative
						Execution.<br />
						Jing Liu, <strong>Xiangpeng Hao</strong>, Andrea Arpaci-Dusseau, Remzi Arpaci-Dusseau,
						Tej Chajed. (HotStorage '24)
					</li>
					<li>
						Towards Buffer Management with Tiered Main Memory.<br />
						<strong>Xiangpeng Hao</strong>, Xinjing Zhou, Xiangyao Yu, Michael Stonebraker. (SIGMOD
						2024)
					</li>

					<li>
						Blink-hash: An Adaptive Hybrid Index for In-Memory Time-Series Databases<br />
						Hokeun Cha, <strong>Xiangpeng Hao</strong>, Tianzheng Wang, Huanchen Zhang, Aditya
						Akella, Xiangyao Yu. Proceedings of the VLDB Endowment (VLDB 2023)
					</li>

					<li>
						Towards Accelerating Data Intensive Application's Shuffle Process Using SmartNICs <br />
						Jiaxin Lin, Tao Ji, <strong>Xiangpeng Hao</strong>, Hokeun Cha, Yanfang Le, Xiangyao Yu,
						Aditya Akella Proceedings of the ACM on Measurement and Analysis of Computing Systems
					</li>
					<li>
						PiBench Online: Interactive Benchmarking of Persistent Memory Indexes (Demo). <br
						/><strong>Xiangpeng Hao</strong>, Lucas Lersch, Tianzheng Wang, Ismail Oukid. 45th
						International Conference on Very Large Data Bases (VLDB 2020)
					</li>
					<li>
						DASH: Dynamic and Scalable Hashing on Persistent Memory.<br /> Baotong Lu,
						<strong>Xiangpeng Hao</strong>, Tianzheng Wang, Eric Lo. 45th International Conference
						on Very Large Data Bases (VLDB 2020)
					</li>
					<li>
						Evaluating Persistent Memory based Range Indexes.<br /> Lucas Lersch,
						<strong>Xiangpeng Hao</strong>, Ismail Oukid, Tianzheng Wang, Thomas Willhalm. 45th
						International Conference on Very Large Data Bases (VLDB 2020)
					</li>
					<li>
						Evaluating Colour Constancy on the new MIST dataset of Multi-Illuminant Scenes.<br />
						<strong>Xiangpeng Hao</strong>, Brian Funt, Hanxiao Jiang. 27th Color Image Conference
					</li>
					<li>
						A Multi-illuminant Synthetic Image Test Set.<br /> <strong>Xiangpeng Hao</strong>, Brian
						Funt. Color Research and Application
					</li>
				</ol>
			</div>
		</div>
	</div>
</div>

<style>
	.card {
		@apply border-2 border-gray-100 p-2 rounded mb-2 md:ml-2;
	}

	/* Subtle, desaturated borders for systems (blueish) and papers (reddish) */
	.systems {
		border-color: rgba(65, 66, 152, 0.15); /* indigo-500 @ 15% */
	}

	.papers {
		border-color: rgba(103, 22, 22, 0.15); /* red-500 @ 15% */
	}

	ul {
		list-style-type: none;
	}

	ul li {
		padding: 0;
		margin: 0;
	}

	.talks-list li {
		margin: 0;
	}

	ol li {
		padding: 0;
		margin: 0.5em;
	}

	.passions-list {
		padding: 0;
		margin: 0;
	}

	.passions-list li {
		margin: 0em;
		padding: 0;
	}
</style>
