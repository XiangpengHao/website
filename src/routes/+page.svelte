<script>
	import portrait from '$lib/assets/xiangpeng.jpg';
	import lgbtFlag from '$lib/assets/lgbt.gif';
	import cv from '$lib/assets/Xiangpeng_Hao_CV.pdf';
	import { base } from '$app/paths';
	import '../app.css';
	import LiquidCache from '$lib/assets/liquid-cache.png';
</script>

<div class="flex justify-center items-center min-h-screen p-4 bg-gray-100">
	<div class="max-w-[1000px] w-full bg-white p-4 md:p-8 shadow-sm rounded">
		<div class="flex flex-wrap justify-center mb-8">
			<div class="w-full text-center">
				<h1 class="text-3xl md:text-4xl font-semibold mb-2">Xiangpeng Hao</h1>
				<p class="text-lg md:text-xl text-gray-700 mb-4">
					(he/him, pronunciations: Shyang-pung How)
				</p>
				<div class="text-sm md:text-base text-gray-600 space-y-2 md:space-y-0">
					<a href="{base}/life" class="block md:inline md:ml-6 text-blue-600">Non-academic</a>
					<a href="{base}/work-with-me" class="block md:inline md:ml-6 text-blue-600"
						>Work with me</a
					>
				</div>
			</div>
		</div>

		<div class="flex flex-col md:flex-row">
			<div class="card w-full md:w-[700px] leading-normal">
				<div class="text-cyan-800 mb-4" style="font-family: Helvetica, Arial, sans-serif">
					<strong
						><a href="https://github.com/XiangpengHao/liquid-cache">
							<img src={LiquidCache} class="h-16 inline" alt="LiquidCache" /></a
						>-- distributed S3 cache for DataFusion-based systems.
					</strong>
				</div>
				I'm a fifth year PhD student at the University of Wisconsin-Madison studying computer science
				with a focus on database/storage systems.
				<br />
				I'm advised by
				<a href="https://pages.cs.wisc.edu/~dusseau/">Andrea Arpaci-Dusseau</a>
				and <a href="https://pages.cs.wisc.edu/~remzi/">Remzi H. Arpaci-Dusseau</a>.
				<div class="mt-2">
					<strong>
						<a href="{base}/fund">Fund my PhD:</a>
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
				<div class="mt-2">
					My research focuses on building
					<a href="https://github.com/XiangpengHao/liquid-cache">LiquidCache</a>, a caching
					infrastructure designed for the next decade of cloud-native analytical systems.
				</div>

				<div class="mt-4">
					People I have worked closely:
					<br />
					<a href="https://www.cs.sfu.ca/~tzwang/">Tianzheng Wang</a> -- my undergraduate advisor.
					He is a rock-star database researcher, I learned a lot from him. He introduced me to the
					database research, and I still love it.
					<br />
					<a href="https://pages.cs.wisc.edu/~yxy/">Xiangyao Yu</a> -- my PhD advisor for the first
					two and a half years.
					<br />
					<a href="https://www.cs.cmu.edu/~yixinluo/">Yixin Luo</a> -- my intern mentor @Google. We
					did great work on database auto-tuning.
					<br />
					<a href="https://www.microsoft.com/en-us/research/people/badrishc/"
						>Badrish Chandramouli</a
					>
					-- my intern mentor @MSR. He is a great researcher and
					<a href="https://blog.xiangpeng.systems/posts/good-advisor/">mentor</a>. He reasons what I
					said, and his attention to details is incredible.
					<br />
					<a href="http://andrew.nerdnetworks.org">Andrew Lamb</a> -- my
					<a href="https://blog.xiangpeng.systems/posts/working-at-influxdata/">intern</a>
					mentor @InfluxData. His passion and professionalism in DataFusion development have reshaped
					my research to connect more closely to real-world applications.
					<br />
				</div>

				<!-- Many other people helped me along the way, I'm grateful for all of them. -->
			</div>
			<div class="card w-full md:w-[300px]">
				<img src={portrait} class="w-full" alt="Xiangpeng on Mt. Rainier" />
				<div class="flex flex-wrap justify-between mt-4 gap-2">
					<div><a href={cv}>CV</a></div>
					<div><a href="https://blog.xiangpeng.systems">Blog</a></div>
					<div class="flex items-center gap-2">
						<a href="https://t.me/life_xiangpeng">Life</a>
						<a href="https://aoli.al"><img src={lgbtFlag} class="logo-large" alt="LGBT flag" /></a>
					</div>
					<div><a href="https://github.com/XiangpengHao">GitHub</a></div>
					<div><a href="https://www.linkedin.com/in/hao-xiangpeng/">LinkedIn</a></div>
				</div>
			</div>
		</div>

		<div class="flex flex-col md:flex-row mt-4">
			<div class="card w-full md:w-[700px] leading-normal">
				<div class="space-y-8">
					<div>
						<div class="mb-4">
							I build <a href="http://herpolhode.com/rob/utah2000.pdf">systems</a>
						</div>
						<ol class="mt-2">
							<li>
								People-centric. I build systems for people to {'{'}use | build-upon | contribute{'}'},
								not just for academic records.
							</li>
							<li>
								Correctness. I code in Rust,
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

					<div>
						<div class="mb-4">
							I'm an <a href="https://plato.stanford.edu/entries/existentialism/">existentialist</a>
						</div>
						<ul class="mt-2">
							<li>
								<strong>Existence Precedes Essence.</strong> We exist for ourselves as self-making or
								self-defining beings, and we are always in the process of making or defining ourselves
								through the situated choices we make as our lives unfold.
							</li>
							<li>
								<strong>Freedom.</strong> It is true that we are free to create ourselves, but it is
								also true that we are already created by our situation.
							</li>
							<li>
								<strong>Nihilism.</strong> (1) individualism and loneliness (2) life is regulated and
								controlled by faceless bureaucrats.
							</li>
						</ul>
						<p class="mt-4">Leap of faith: Be nice; Be good to society.</p>
					</div>

					<div>
						<div class="mb-4">Good reads</div>
						<ol class="mt-2">
							<li>
								<a href="https://www.goodreads.com/en/book/show/17895842">Returning to Reims</a>
							</li>
							<li><a href="https://www.goodreads.com/book/show/12505.The_Idiot">The Idiot</a></li>
						</ol>
					</div>

					<div class="quote mt-2">
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
				</div>
			</div>
			<div class="card w-full md:w-[300px] leading-normal">
				<div class="mb-4">I publish papers</div>
				<div class="overflow-y-auto max-h-[800px] text-sm">
					<p>
						LiquidCache: Efficient Pushdown Caching for Cloud-Native Data Analytics.<br />
						<strong>Xiangpeng Hao</strong>, Andrew Lamb, Yibo Wu, Andrea Arpaci-Dusseau, Remzi
						Arpaci-Dusseau. (VLDB 2025) [<a href="https://github.com/XiangpengHao/liquid-cache"
							>code</a
						>,
						<a
							href="https://github.com/XiangpengHao/liquid-cache/blob/main/dev/doc/liquid-cache-vldb.pdf"
							>paper</a
						>]
					</p>
					<p>
						Bf-Tree: A Modern Read-Write-Optimized Concurrent Larger-Than-Memory Range Index.<br />
						<strong>Xiangpeng Hao</strong>, Badrish Chandramouli. (VLDB 2024) [<a
							href="https://github.com/XiangpengHao/bf-tree-docs">more</a
						>]
					</p>
					<p>
						Shadow Filesystems: Recovering from Filesystem Runtime Errors via Robust Alternative
						Execution.<br />
						Jing Liu, <strong>Xiangpeng Hao</strong>, Andrea Arpaci-Dusseau, Remzi Arpaci-Dusseau,
						Tej Chajed. (HotStorage '24)
					</p>
					<p>
						Towards Buffer Management with Tiered Main Memory.<br />
						<strong>Xiangpeng Hao</strong>, Xinjing Zhou, Xiangyao Yu, Michael Stonebraker. (SIGMOD
						2024)
					</p>

					<p>
						Blink-hash: An Adaptive Hybrid Index for In-Memory Time-Series Databases<br />
						Hokeun Cha, <strong>Xiangpeng Hao</strong>, Tianzheng Wang, Huanchen Zhang, Aditya
						Akella, Xiangyao Yu. Proceedings of the VLDB Endowment (VLDB 2023)
					</p>

					<p>
						Towards Accelerating Data Intensive Application's Shuffle Process Using SmartNICs <br />
						Jiaxin Lin, Tao Ji, <strong>Xiangpeng Hao</strong>, Hokeun Cha, Yanfang Le, Xiangyao Yu,
						Aditya Akella Proceedings of the ACM on Measurement and Analysis of Computing Systems
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
						A Multi-illuminant Synthetic Image Test Set.<br /> <strong>Xiangpeng Hao</strong>, Brian
						Funt. Color Research and Application
					</p>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.card {
		@apply border-2 border-gray-100 p-2 rounded mb-4 md:ml-2;
	}
</style>
