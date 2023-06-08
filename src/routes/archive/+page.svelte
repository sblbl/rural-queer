<script>
	import '../../styles.css'
	import Mat from '../components/mat.svelte'
	import { onMount } from 'svelte'

	let mats = []

	const getMats = async() => {
		try {
			const res = await fetch('/api/read-db/', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({})
			})
			let response = await res.json()
			console.log(response)
			mats = response.mats
		} catch (error) {
			console.log(error)
		}
	}

	onMount(async() => {
		console.log('mounted')
		await getMats()
	})
</script>

<svelte:head>
	<title>Gallery</title>
	<meta name='description' content='Gallery' />
</svelte:head>

<section class='w-screen xl:max-w-5xl min-h-screen px-0 md:px-24  xl:px-8 pt-4 pb-12 columns-1 md:columns-3 lg:columns-4'>
	{#each mats as mat}
		<Mat text={mat} />
	{/each} 
</section>

<style lang='postcss'>
</style>
