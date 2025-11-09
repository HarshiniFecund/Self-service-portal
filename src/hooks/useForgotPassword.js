
// importing useState and useNavigate
import { useState } from "react"

export const useForgotPassword = () => {
    const [error, setError] = useState(" ")
    const [isVerifying, setIsVerifying] = useState(null)
    const [showPopup, setShowPopup] = useState(false)

    const forgotPassword = async ({ type, input, newPassword } )  => {
        setIsVerifying(true)
        setError(null)

        try{
            const response = await fetch('http://localhost:4000/api/user/forgotPassword',{
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ type, input, newPassword }),
            })

            const json = await response.json()
             console.log(json)

            if (!response.ok) {
                throw new Error(json.message);
              } else {
                setShowPopup(!showPopup)
              }
        } catch (error) {
            setError(error.message)
        }finally {
            setIsVerifying(false)
        }
    }
    return { forgotPassword, error, showPopup }
}  