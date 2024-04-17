import { createContext, useState } from 'react'
import axios from 'axios'

// URLs
import { URL_SIGN } from '../urls/Urls'

// Créez un contexte d'authentification
export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    // Etat pour suivre si l'authentification est en cours
    const [ isLoading, setIsLoading ] = useState(false)

    // Etat pour stocker les informations de l'utilisateur connecté
    const [ user, setUser ] = useState(null)

    // Fonction pour gérer l'authentification de l'utilisateur
    const login = async (dataForm) => {
        // API
        setIsLoading(true)
        try {
            const { data, status } = await axios.post(URL_SIGN, dataForm) 
            if (status === 200) {
            // Mettre à jours l'état du state (user) avec les données de l'utilisateur
            setUser(data)
            console.log(data)
            // Stockez les données de l'utilissateur dans le asynctorage
            localStorage.setItem('user_id', JSON.stringify(data._id))

            // Met isLoading à false apres une authentification réussie.
            setIsLoading(false)
            }
        } catch(e) {
            console.log(e);
            setIsLoading(false)
        }
    }
    return (
        <AuthContext.Provider value={{ login, user, isLoading }}>
            {children}
        </AuthContext.Provider>
    )
}