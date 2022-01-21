<script lang="ts" context="module">
	import { handleChange, form } from '$lib/form';
</script>

<script lang="ts">
	export let type: string;
	export let name: string;
    export let value = null;
	// TODO Fix typing later
</script>

<!-- NOTE Cannot use dynamic name here, as bind:value has been used  -->
{#if type === 'text'}
	<label>
		<span class="govuk__label">
			<slot />
		</span>
		<input
			class="govuk__input"
			bind:value={$form[name]}
			type="text"
			{name}
			on:input
			on:change
			on:input={handleChange}
		/>
	</label>
{:else if type === 'file'}
	<label>
		<span class="govuk__label">
			<slot />
		</span>
		<input
			class="govuk__uploader"
			accept="image/png, image/jpeg"
			bind:value={$form[name]}
			type="file"
			{name}
			on:input
			on:change
			on:input={handleChange}
		/>
	</label>
{:else if type === 'number'}
	<label>
		<span class="govuk__label">
			<slot />
		</span>
		<input
			class="govuk__input"
			bind:value={$form[name]}
			type="number"
			{name}
			on:input
			on:change
			on:input={handleChange}
		/>
	</label>
{:else if type === 'email'}
	<label>
		<span class="govuk__label">
			<slot />
		</span>
		<input
			class="govuk__input"
			bind:value={$form[name]}
			type="email"
			{name}
			on:input
			on:change
			on:input={handleChange}
		/>
	</label>
{:else if type === 'tel'}
	<label>
		<span class="govuk__label">
			<slot />
		</span>
		<input
			class="govuk__input"
			bind:value={$form[name]}
			type="tel"
			{name}
			on:input
			on:change
			on:input={handleChange}
		/>
	</label>
{:else if type === 'checkbox'}
	<label class="govuk__checkbox__container">
		<span class="govuk__label">
			<span class="govuk__checkbox__label">
				<slot />
			</span>
		</span>
        <!-- FIXME how to use multi bind:value?  -->
        <!--  on:input={handleChange}  -->
		<div class="govuk__checkbox">
			<input
				class="govuk__checkbox__inner"
				type="checkbox"
				{name}
				on:input
				on:change
                bind:checked={value}
			/>
			<span class="govuk__checkbox__tick" />
		</div>
	</label>
{:else if type === 'textarea'}
	<label>
		<span class="govuk__label">
			<slot />
		</span>
		<textarea
			class="govuk__textarea"
			{name}
			on:input
			on:change
			on:input={handleChange}
			bind:value={$form[name]}
		/>
	</label>
{/if}

<style lang="scss">
	.govuk__checkbox__label {
		margin-left: 12px;
	}

	.govuk__input {
		@include input-field;
		width: 100%;
		height: 40px;
		padding: 12px;
	}

	.govuk__uploader {
		width: 100%;
		cursor: pointer;
	}

	.govuk__checkbox__container {
		display: flex;
		align-items: center;
		flex-direction: row-reverse;
		justify-content: flex-end;
		cursor: pointer;
	}

	.govuk__checkbox {
		@include input-field;
		width: 40px;
		height: 40px;
		position: relative;
	}

	.govuk__checkbox__inner {
		width: 100%;
		height: 100%;
		cursor: pointer;
	}

	.govuk__checkbox__inner:checked + .govuk__checkbox__tick {
		height: 32px;
		width: 32px;
		position: absolute;
		top: 50%;
		left: 50%;
		background: $green;
		transform: translate(-50%, -50%);
	}

	.govuk__textarea {
		@include input-field;
		width: 100%;
		resize: none;
		padding: 12px;
		height: 225px;
	}
</style>
