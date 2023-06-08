<script>
	import '../../styles.css'
	export let text = ''
	export let _class = 'px-2 pt-12 pb-4 font-pixel text-white text-4xl bg-black w-52 flex justify-center items-end'
</script>

<div class='break-inside-avoid flex flex-col items-center justify-center'>
	<div class='w-52 overflow-hidden text-center leading-tight'>||||||||||||||||||||||||||||||||||||||||||||||||||||</div>
	<div class={_class}>
		<p class='w-full'>
			{text}
		</p>
	</div>
	<div class='w-52 overflow-hidden text-center leading-tight rotate-180'>||||||||||||||||||||||||||||||||||||||||||||||||||||</div>
</div>

<style lang='postcss'>
</style>