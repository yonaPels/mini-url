import { useState } from "react"
import { urlService } from "../services/url.service"

export function ShortenUrl(){

    const [longURL, setLongURL ] = useState('')
    const [shortURL, setShortURL ] = useState('')

    const [receptionMode, setReceptionMode] = useState(true)

    function handleChange(ev) {
        setLongURL(ev.target.value)
    }

    async function onShortenURL(ev = null){
        if (ev) ev.preventDefault()
        try{
            const URLs = await urlService.save(longURL)
            setShortURL(URLs.short_url)  
            setLongURL(URLs.long_url)
            setReceptionMode(false)
        } catch (err) {
            console.log('Had issues in shorten url', err)
        }
    }

    return (
        <section className="shorten-url">
            <div className="urls-container">
                {receptionMode &&<form className="enter-url" onSubmit={onShortenURL}>
                    <p>Shorten a long URL</p>
                    <input
                        type="text"
                        name="longurl"
                        value={longURL}
                        placeholder="Enter long link here"
                        onChange={handleChange}
                        required
                    />
                    <button>Shorten URL</button>
                </form>}
                {!receptionMode && <div className="enter-url">
                    <p>Your Long URL</p>
                    <p className="show-url">{longURL}</p>
                    <p>miniURL</p>
                    <p className="show-url">{window.location.origin}/{shortURL}</p>
                </div>}
            </div>
            {/* <div className="txt-container">
                <h1>
                    The Original URL Shortener
                    Create shorter URLs with TinyURL.
                </h1>
                <h4>
                    Want more out of your link shortener? Track link analytics, 
                    use branded domains for fully custom links, 
                    and manage your links with our paid plans.
                </h4>
            </div> */}
        </section>
    )
}