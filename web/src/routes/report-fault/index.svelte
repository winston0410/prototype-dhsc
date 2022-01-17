<script lang="ts" context="module">
	import Button from '$lib/Button.svelte';
	import Separator from '$lib/Separator.svelte';
</script>

<script lang="ts">
</script>

<section class="govuk__warning">
	<header class="govuk__warning__header">
		Call 5555 if the fault is:
		<div class="govuk__warning__tip">
			<svg
				width="29"
				height="29"
				viewBox="0 0 29 29"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<rect y="14.1421" width="20" height="20" transform="rotate(-45 0 14.1421)" fill="#D5281B" />
			</svg>
		</div>
	</header>
	<div class="govuk__warning__content">
		<ul class="govuk__warning__list" role="list">
			<li>
				<span>A threat to life</span>
			</li>
			<li>
				<span>Requires an emergency response</span>
			</li>
		</ul>
        <Separator size={10} />
		<p>You will get a faster response by calling the faults helpdesk on 5555</p>
	</div>
</section>

<Separator size={30} />

<p>
	This is a prototype intended to demonstrate a user flow of reporting a fault or requesting a
	service in an NHS trust.
</p>

<Separator size={20} />

<Button href="/report-fault/check-location-id">Report a fault</Button>

<style lang="scss">
	.govuk__warning {
		color: $white;
	}

	.govuk__warning__tip {
		position: absolute;
	}

	.govuk__warning__header {
		background: hsla(4, 78%, 47%, 1);
		padding: 15px;
		font-size: 20px;
		font-weight: 700;
		position: relative;
	}

	.govuk__warning__list {
		display: flex;
		flex-direction: column;
        padding: 0;
        margin: 0;
        list-style: inside disc;
	}

	.govuk__warning__list li:not(:last-of-type) {
		margin-bottom: 10px;
	}

	.govuk__warning__content {
		background: hsla(205, 20%, 16%, 1);
		padding: 24px 12px;
	}
</style>
