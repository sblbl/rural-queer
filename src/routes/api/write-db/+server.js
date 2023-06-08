import { json } from '@sveltejs/kit'

const postText = async (text) => {
	let headers = new Headers()
	headers.append('Content-Type', 'application/json')

	let raw = JSON.stringify({
		'text': text
	})

	let requestOptions = {
					method: 'POST',
					headers: headers,
					body: raw,
					redirect: 'follow'
	}

	let res = await fetch('https://us-central1-tappeti-28ed0.cloudfunctions.net/app/mats/add', requestOptions)
	return res
}

export async function POST({request}) {
	try {
		const r = await request.json()
		const text = r.text
		const response = await postText(text)
		console.log(response)
		return json({ status: 200 })
	} catch	(err) {
		console.log(err)
		return json({error: err}, { status: 500 })
	}
}