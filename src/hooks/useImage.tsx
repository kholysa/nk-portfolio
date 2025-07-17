import {useEffect, useState} from 'react'

const useImage = (fileName: string) => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<any>(null)
    const [image, setImage] = useState("")

    useEffect(() => {
        const fetchImage = async () => {
            try {
                const response = await import(`../assets/img/${fileName}`) // change relative path to suit your needs
                setImage(response.default)
            } catch (err: any) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }
        fetchImage()
    }, [fileName])

    return {
        loading,
        error,
        image,
    }
}

export default useImage
