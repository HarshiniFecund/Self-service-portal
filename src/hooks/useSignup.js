

// importing useState
import { useState } from "react"

export const useSignup = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const [showPopup, setShowPopup] = useState(false)

    const signup = async(firstName, lastName, email, password, phone) => {
        setIsLoading(true)
        setError(null)
        try{
            const response = await fetch('http://localhost:4000/api/user/signup',{
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({firstName, lastName, email, password, phone}),
            })

            const json = await response.json()
            console.log(json)

            if (!response.ok){
                throw new Error(json.message)
            }
            if (response.ok){
                setShowPopup(!showPopup)
            }
        } catch (error) {
            setError(error.message)
        }finally {
            setIsLoading(false)
        }
    }
    return { signup, error, isLoading, showPopup }
}  