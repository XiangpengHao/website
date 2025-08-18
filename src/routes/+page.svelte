<script>
	import portrait from '$lib/assets/xiangpeng.jpg';
	import lgbtFlag from '$lib/assets/lgbt.gif';
	import cv from '$lib/assets/Xiangpeng_Hao_CV.pdf';
	import { base } from '$app/paths';
	import '../app.css';
	import LiquidCache from '$lib/assets/liquid-cache.png';
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
				<div class="text-cyan-800 mb-4" style="font-family: Helvetica, Arial, sans-serif">
					<strong
						><a href="https://github.com/XiangpengHao/liquid-cache">
							<img src={LiquidCache} class="h-16 inline" alt="LiquidCache" /></a
						>: distributed pushdown caching for DataFusion.
					</strong>
				</div>
				<div class="flex flex-col md:flex-row">
					<div class="md:basis-[70%] md:max-w-[70%] md:pr-6">
						<p>
							I'm a fifth year PhD student at the University of Wisconsin-Madison studying computer
							science with a focus on database/storage systems.
						</p>
						<p>
							I'm advised by
							<a href="https://pages.cs.wisc.edu/~dusseau/">Andrea Arpaci-Dusseau</a>
							and <a href="https://pages.cs.wisc.edu/~remzi/">Remzi H. Arpaci-Dusseau</a>.
						</p>
						<p>
							My research focuses on building
							<a href="https://github.com/XiangpengHao/liquid-cache">LiquidCache</a>, a caching
							infrastructure designed for the next decade of cloud-native analytical systems.
						</p>

						<div class="mt-4">
							<div>
								<strong>
									<a href="{base}/fund">Funding I raised for my PhD:</a>
								</strong>
							</div>
							<div class="funding-table">
								<table class="w-full border-collapse border border-gray-300">
									<thead>
										<tr class="bg-gray-100">
											<th class="border border-gray-300 px-4 py-1 text-left">Academic year</th>
											<th class="border border-gray-300 px-4 py-1 text-left">Funding sources</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td class="border border-gray-300 px-4 py-1">2025-2026</td>
											<td class="border border-gray-300 px-4 py-1">
												<div class="flex flex-wrap gap-4 items-center">
													<a href="https://www.bauplanlabs.com">BauPlan</a>
													<a href="https://www.influxdata.com"> InfluxData </a>
													<a href="https://spiraldb.com">Spiral</a>
													<!-- <a href="https://www.titletowntech.com">TitleTownTech</a> -->
												</div>
											</td>
										</tr>
										<tr>
											<td class="border border-gray-300 px-4 py-1">2024-2025</td>
											<td class="border border-gray-300 px-4 py-1">
												<a href="https://www.influxdata.com"> InfluxData </a>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
					<div class="md:basis-[30%] md:max-w-[30%]">
						<img src={portrait} class="w-full md:w-4/5 mx-auto" alt="Xiangpeng on Mt. Rainier" />
						<div class="flex flex-wrap justify-between mt-4 gap-2">
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
					</div>
				</div>

				<div class="mt-4">
					People I have worked closely:
					<br />
					<a href="https://www.cs.sfu.ca/~tzwang/">Tianzheng Wang</a>: my undergraduate advisor. He
					is a rock-star database researcher.
					<br />
					<a href="https://pages.cs.wisc.edu/~yxy/">Xiangyao Yu</a>: my PhD advisor for the first
					two and a half years.
					<br />
					<a href="https://www.cs.cmu.edu/~yixinluo/">Yixin Luo</a>: my intern mentor @Google. We
					did great work on database auto-tuning.
					<br />
					<a href="https://www.microsoft.com/en-us/research/people/badrishc/"
						>Badrish Chandramouli</a
					>
					: my intern mentor @MSR. He is a great researcher and
					<a href="https://blog.xiangpeng.systems/posts/good-advisor/">mentor</a>. He reasons what I
					said, and his attention to details is incredible.
					<br />
					<a href="http://andrew.nerdnetworks.org">Andrew Lamb</a>: my
					<a href="https://blog.xiangpeng.systems/posts/working-at-influxdata/">intern</a>
					mentor @InfluxData. His passion and professionalism in DataFusion development have reshaped
					my research to connect more closely to real-world applications.
					<br />
				</div>

				<!-- Many other people helped me along the way, I'm grateful for all of them. -->
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
</style>
