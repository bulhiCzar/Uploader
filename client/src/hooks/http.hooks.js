import { useCallback, useState } from "react"


export const useHttp = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const request = useCallback(async (url, method = 'GET', body, toJSON, headers) => {
        setLoading(true)

        try {
            // console.log(url)
            // if (body.toString() == '[object FormData]') {
            //     console.log(56576)
            // }
            if (toJSON) {
                body = JSON.stringify(body)
            }
            // console.log(body)
            //  
            const response = await fetch(url, { method, body, headers })
            const data = await response.json()

            // console.log(!response.ok)
            if (!response.ok) {
                setLoading(false)
                setError(data)
                // return new Error(data.message || 'Что-то пошло не так')
            }


            setLoading(false)

            return data
        } catch (error) {
            setLoading(false)
            setError(error)
            // throw error

        }
    }, [])


    const clearError = useCallback(() => setError(null), [])

    return { loading, request, error, clearError }
}