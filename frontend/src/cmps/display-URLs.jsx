import { useEffect, useState } from "react"
import { urlService } from "../services/url.service"
import { Loader } from "./loader"

export function DisplayURLs(){
    const [URLs, setURLs] = useState()

    useEffect(() => {
        loadURLs()
    }, [])
    
    async function loadURLs() {
        try {
            const urls = await urlService.query()
            urls.forEach(url => {
                url.short_url = `${url.short_url}`
                url.long_url = `${url.long_url}`  
            })
            setURLs(urls)
        } catch (err) {
            console.log('Had issues in URLs', err)
        }
    }

    if (!URLs) return <Loader/>

    return(
        <section className="display-urls">
          <table className="custom-table">
            <thead>
                <tr>
                    <th>Short URL</th>
                    <th>Long URL</th>
                </tr>
            </thead>
            <tbody>
                {URLs.map((url, index) => {
                    return (
                        <tr key={index}>
                            <td className="cell">{window.location.origin}/{url.short_url}</td>
                            <td className="cell"><a href={url.long_url}>{url.long_url}</a></td>
                        </tr>
                    )
                }
                )}
            </tbody>
        </table>       
      </section>
    )
}