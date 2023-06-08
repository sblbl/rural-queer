<script>
	import '../styles.css'
	import Mat from './components/mat.svelte'
	let text = '', 
		disabledSubmit = false,
		success = false

	export const validateData = () => {
		console.log('validating data')
	}

	export const publish = async () => {
		//if (text.length < 10) return
		disabledSubmit = true
		validateData()
		console.log('publishing')
		try {
			const res = await fetch('/api/write-db/', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({text})
			})
	
			let response = await res.json()
			console.log('ok', response)
			success = true
			setTimeout(() => {
				success = false
			}, 2000)
		} catch (error) {
			console.log(error)
		}

		text = ''
		disabledSubmit = false
	}
</script>

<svelte:head>
	<title>Home</title>
	<meta name='description' content='Home' />
</svelte:head>

<section class='w-full md:max-w-lg flex flex-col items-center py-8'>
	<div class='mb-4 '>
		<p>
			Marco Loi is a designer and artist based in the Netherlands and Sardinia.
			He is currently a Geo-Design student at the Design Academy Eindhoven.
		</p>
		<p>
			His practice takes shape from geographical explorations through trans-linguistic and trans-disciplinary research. Marco cross-weaves design, photography, performance and textile, investigating geo-political forces and socio-environmental instabilities inscribed within specific territorial formations.
		</p>
	</div>
	<form on:submit|preventDefault={publish} class='w-full text-center'>
		<input type='text' bind:value={text} minlength='10' maxlength='60' 
			placeholder='Share your experience here' 
			class='outline-none border-b-2 border-b-black w-4/5 focus:outline-none' />		
		<button class='button yellow' class:disabled={disabledSubmit || text.length < 10}>→</button>
	</form>
	<div class='w-full flex justify-right -mt-2	'>
		<span class='text-xs float-left text-right w-4/5'><span class:text-oioRed={text.length < 10}>{text.length}</span>/60</span>
	</div>
	<span class='float-left' class:hidden={!success}>✨ Submitted ✨</span>
	<div class='pt-6'>
		<Mat text={text}/>
	</div>
</section>

<style lang='postcss'>
	.button {
		@apply cursor-pointer p-2 pb-3 w-12 h-12 rounded-full text-black;
	}

	.disabled {
		@apply opacity-50 pointer-events-none;
	}

	.yellow {
		@apply bg-oioYellow;
	}
</style>