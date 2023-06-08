import { json } from '@sveltejs/kit'

export async function POST({request}) {
	try {
        console.log('hello')
        let requestOptions = {
            method: 'GET',
            redirect: 'follow'
        }
		let response = await fetch('https://us-central1-tappeti-28ed0.cloudfunctions.net/app/mats' )        
        response = await response.json()
		return json(response, { status: 200 })
	} catch	(err) {
		console.log(err)
		return json({error: err}, { status: 500 })
	}
}