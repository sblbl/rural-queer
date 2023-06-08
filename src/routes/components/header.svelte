<script>
	import { navigating } from '$app/stores'
	import { onMount } from 'svelte'
	import '../../styles.css'

	export let title = 'Home'

	
	let currentPath
	onMount(() => {
		currentPath = window.location.pathname
	})
	const updatePath = () => {
		console.log('updating path', window.location.pathname)
		currentPath = $navigating.to.url.pathname
	}
	$ : if($navigating) updatePath()
</script>
<header class='fixed top-0 left-0 w-screen flex px-4 py-2 text-sm font-regular font-secondary z-50'>
	<a href='/' class='mr-4 font-bold w-1/2'><h1>{title}</h1></a>
	<nav class='list-none w-1/2 flex justify-end'>
		<li><a href='/about' class:active={currentPath == ('/about')}>About</a></li>
		<li><a href='/archive' class:active={currentPath == ('/archive')}>Archive</a></li>
	</nav>
</header>
<style lang="postcss">
	li {
		@apply px-1;
	}

	.active {
		@apply font-bold;
	}
</style>