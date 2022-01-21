<script lang="ts" context="module">
	import Separator from '$lib/Separator.svelte';
    import { form } from '$lib/form'
    import { dummyBuildingData } from '$lib/dummy'
    import { format } from 'date-fns'
</script>

<script lang="ts">
    let current = new Date()
</script>

<div class="email-shell">
	<header class="email-header">
		<div class="recipient-icon">
			<svg
				width="34"
				height="34"
				viewBox="0 0 34 34"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M0 17C0 26.3888 7.61116 34 17 34C26.3888 34 34 26.3888 34 17C34 7.61116 26.3888 0 17 0C7.61116 0 0 7.61116 0 17Z"
					fill="#D8DDE0"
				/>
				<path
					d="M7.616 11.952H8.864V16.384H13.84V11.952H15.072V22H13.84V17.456H8.864V22H7.616V11.952ZM18.3191 11.952H21.2631C22.2765 11.952 23.1565 12.16 23.9031 12.576C24.6498 12.9867 25.2285 13.568 25.6391 14.32C26.0498 15.072 26.2551 15.9573 26.2551 16.976C26.2551 17.984 26.0498 18.864 25.6391 19.616C25.2285 20.368 24.6498 20.9547 23.9031 21.376C23.1565 21.792 22.2765 22 21.2631 22H18.3191V11.952ZM19.5671 13.056V20.912H21.2631C22.0205 20.912 22.6711 20.7413 23.2151 20.4C23.7645 20.0587 24.1858 19.592 24.4791 19C24.7778 18.4027 24.9271 17.728 24.9271 16.976C24.9271 16.2187 24.7778 15.5467 24.4791 14.96C24.1858 14.368 23.7645 13.904 23.2151 13.568C22.6711 13.2267 22.0205 13.056 21.2631 13.056H19.5671Z"
					fill="white"
				/>
			</svg>
		</div>
		<div class="email-metadata">
			<span>NHS New Fault Notification</span>
			<span>To: <span class="email-recepient-name">Test Helpdesk</span></span>
		</div>
	</header>

	<Separator size={12} />

	<div class="email-divider" />

	<Separator size={12} />

	<h1>New fault submission</h1>

	<Separator size={16} />

	<svg width="99" height="40" viewBox="0 0 99 40" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M0 39.842H98.2032V0H0V39.842Z"
			fill="#005EB8"
		/>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M10.7941 4.54517H21.4078L27.9267 26.6246H28.0167L32.4824 4.54517H40.5035L33.7631 36.3847H23.1858L16.5353 14.3532H16.4453L12.0211 36.3847H4L10.7941 4.54517Z"
			fill="white"
		/>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M43.6465 4.54517H52.1649L49.6623 16.7259H59.7314L62.2398 4.54517H70.7582L64.1493 36.3847H55.6309L58.4565 22.7478H48.3816L45.556 36.3847H37.0376L43.6465 4.54517"
			fill="white"
		/>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M93.1764 11.753C91.5363 10.9799 89.3037 10.2968 86.1608 10.2968C82.7906 10.2968 80.055 10.7945 80.055 13.3525C80.055 17.8644 92.4045 16.1807 92.4045 25.8513C92.4045 34.653 84.245 36.9361 76.8642 36.9361C73.5834 36.9361 69.8001 36.1571 67.0229 35.2881L69.0282 28.8112C70.7105 29.9077 74.0864 30.6387 76.8642 30.6387C79.5098 30.6387 83.6525 30.1352 83.6525 26.852C83.6525 21.7412 71.3029 23.6583 71.3029 14.6765C71.3029 6.46212 78.5043 4 85.4784 4C89.3989 4 93.087 4.41343 95.2296 5.41353L93.1764 11.753"
			fill="white"
		/>
	</svg>

	<Separator size={20} />

	<h2 class="email-content-heading">Submitted on {format(current, "yyyy-MM-dd")}, {format(current, "HH:mm")}</h2>

	<Separator size={16} />

	<div class="info-group">
		<span>Name: {$form.name}</span>
		<span>Email: {$form.email}</span>
		<span>Telephone: {$form.phone}</span>
	</div>

	<Separator size={28} />

	<div class="info-group">
		<span>Location ID: {$form.location_id}</span>
		<span>Asset ID: {$form.asset_id}</span>
		<span>Site ID: {$form.building_id || "N/A"}</span>
		<span>Floor: {$form.floor_id || "N/A"}</span>
	</div>

	<Separator size={28} />

	<div class="info-group">
		<span>Restricted Access: {$form.restricted}</span>
		<span>Access details: {$form.restricted_access_description || "N/A"}</span>
	</div>

	<Separator size={28} />

	<div class="info-group">
		<span>Photo Link: {$form.photo || "N/A"}</span>
		<span>Fault details: {$form.description}</span>
	</div>
</div>

<style lang="scss">
	.email-shell {
		padding: 60px 16px;
	}

	.email-divider {
		width: 100%;
		display: block;
		height: 1px;
		background: #eeeeee;
	}

	.email-header {
		display: flex;
		align-items: center;
		justify-content: flex-start;
	}

	.email-metadata {
		display: flex;
		flex-direction: column;
		margin-left: 20px;
	}

	.recipient-icon {
		grid-row: 1/3;
		display: flex;
		align-items: center;
	}

	.email-recepient-name {
		color: #979797;
	}

	.email-content-heading {
		font-weight: 700;
	}

	.info-group {
		display: flex;
		flex-direction: column;
	}
</style>
