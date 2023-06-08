<script>
	import '../styles.css';
	import Header from './components/header.svelte'
	import Footer from './components/footer.svelte'

	const title = 'Rural Queer'
</script>
<!--TODO add correct data and images-->
<svelte:head>
    <title>{title}</title>
</svelte:head>

<div class='app font-default w-screen flex flex-col items-center antialiased'>
	<Header title={title}/>		
	<main class='w-screen flex flex-row justify-center content-center p-4 pt-8 text-xl'>
		<slot />
	</main>
	<Footer />
</div>

<style global lang="postcss">
</style>
