import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import { urlService } from "../services/url.service"
import { Loader } from "./loader"

export function RedirectsPage(){

    const [longURL, setLongURL] = useState('')
    const [shortURL, setShortURL] = useState('')
    const { url } = useParams()

    useEffect(() => {
        loadURLs()
    })
    
    async function loadURLs() {
        try {
            const URLs = await urlService.getByShortURL(url)
            setLongURL(URLs.long_url)
            setShortURL(URLs.short_url)
        } catch (err) {
            console.log('Had issues in this URL', err)
        }
    }
    
    if (!shortURL || !longURL) return <Loader/>
    
    return(
        <section className="redirects-page">
            <p className="url">{window.location.origin}/{shortURL}</p>
            <p>Redirects to:</p>
            <a href={longURL} className="url">{longURL}</a>
        </section>
    )
}