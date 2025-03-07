<script>
	import { base } from '$app/paths';
</script>

<div class="academic-container">
	<a href="{base}/" class="back-link">Back</a>
	<h1>Fund my PhD for $55k/year</h1>
	<h2>Why it is a great deal?</h2>
	<div>
		<p>
			I'm a fifth year PhD student building cloud-native database systems, especially the <a
				href="https://github.com/XiangpengHao/liquid-cache">caching subsystems</a
			>, published
			<a href="https://scholar.google.com/citations?user=j9DShRMAAAAJ">multiple papers</a> in top-tier
			conferences, worked for Google, Microsoft, and InfluxData.
		</p>
		<p>
			I write real Rust -- more than <a href="https://github.com/XiangpengHao"
				>50k accumulated lines</a
			>. I'm an
			<a href="https://github.com/apache/arrow-rs/commits/master/?author=XiangpengHao"
				>active contributor</a
			> to Arrow/Parquet/DataFusion. If you depend on these projects, you might already using my code.
		</p>
		<p>
			$55k can fund me for a year, much much cheaper than a FTE with PhD degree. Need more flexible?
			See below.
		</p>
	</div>
	<h2>Funding tiers</h2>

	<div>
		<strong>100% of my time.</strong> You make $55K charitable giving to the
		<a href="https://www.advanceuw.org">university</a>
		under
		<a href="https://pages.cs.wisc.edu/~remzi/">my advisor's</a> name, I work full time on the
		project.
		<strong
			>I'm currently funded by InfluxData during 2024-2025 for working on Apache
			DataFusion/Arrow/Parquet.</strong
		>
	</div>
	<br />
	<div>
		<del
			>20-50% of my time. I work as a part-time intern for your company during Spring/Fall
			semesters.</del
		>
	</div>
	<h2>Example projects</h2>
	<div>
		General goal: we make two deliverables -- <strong>the system</strong> we build together, and
		<strong>the paper</strong> that publish in top-tier conference. We will build a cool and crazy system
		that is useful for your company/product. Then we tell the world how cool it is -- in a scientific
		way.
	</div>
	<br />
	<div>Keywords: Rust; Data intensive systems; Cloud.</div>
	<!-- I work on the project, -->
	<!-- likely directly implement a crazy idea on your product, and eventually I write a paper that publish -->
	<!-- in top-tier conferences. -->
	<br style="margin-top: 2em;" />
	<div>
		<p>
			<strong>Example 1: cloud-native storage engine.</strong>
			An infinitely scalable, low latency storage engine build purely on object storage. Aim to achieve
			1ms latency and 11 nine availability. What's more cool? It automatically tiers your data to most
			suitable storage backend -- big money saver!
		</p>
		<p>
			<strong>Example 2: fast parquet reader for ML workloads.</strong> Love parquet but
			<a href="https://www.influxdata.com/blog/how-good-parquet-wide-tables/"
				>worry its performance</a
			>
			on machine learning data? We will build a
			<a href="https://github.com/apache/arrow-rs/pull/5856">specialized parquet reader</a> that never
			slows you down!
		</p>
		<p>
			<strong>Example 3: SQL query with ML power.</strong>
			Query anything with intelligence:
			<code>SELECT * FROM images WHERE color(cat) = 'rainbow';</code>
			Just register your data, and the system do the rest for you: it automatically detects the schema,
			selects the best ML model, caches the expensive computation, and more!
		</p>
		<p>
			<strong>Real project: Solve YOUR problem!</strong>
			I'd love to hear real world problems, and I'm open to work on various topics!
		</p>
	</div>
	<h2>Connect</h2>
	<div><a href="mailto:xiangpeng.hao@wisc.edu">xiangpeng.hao@wisc.edu</a></div>
	<div>Last update March 2025, act fast while I'm available!</div>
	<br />
</div>

<style>
	/* Base academic styling */
	:global(body) {
		background-color: #f8f8f8;
		line-height: 1;
		color: #333;
	}

	.academic-container {
		font-family: 'Times New Roman', serif;
		max-width: 800px;
		margin: 2rem auto;
		padding: 2rem;
		background-color: white;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
		border-left: 4px solid #3a5683;
	}

	h1 {
		font-size: 2rem;
		color: #2c3e50;
		margin-top: 0;
		margin-bottom: 1.5rem;
		padding-bottom: 0.5rem;
		border-bottom: 1px solid #eee;
	}

	h2 {
		font-size: 1.5rem;
		color: #34495e;
		margin-top: 1.8em;
		margin-bottom: 0.8em;
	}

	p {
		margin-bottom: 1rem;
	}

	a {
		color: #3a5683;
		text-decoration: none;
		border-bottom: 1px dotted #3a5683;
	}

	a:hover {
		color: #1a356d;
		border-bottom: 1px solid #1a356d;
	}

	.back-link {
		display: inline-block;
		margin-bottom: 1.5rem;
		border-bottom: none;
	}

	code {
		background-color: #f5f5f5;
		padding: 2px 5px;
		border-radius: 3px;
		font-family: Consolas, Monaco, 'Andale Mono', monospace;
		font-size: 0.9em;
	}

	strong {
		color: #2c3e50;
	}

	del {
		color: #777;
	}
</style>
