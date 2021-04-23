import React, { useEffect, useState } from 'react'

const useGeoLocation = () => {
    const [] = useState({
        loaded: false,
        coordinates: { lat: "", lng: "" }
    })

    const onSuccess = location => {
        setLocation({
            loaded: true,
            coordinates: {
                lat: location.coords.latitude,
                lng: location.coords.longitude
            }
        })
    }

    useEffect(() => {
        if (!("geolocation" in navigator)) {
            setLocation(state => ({
                ...state,
                loaded: true,
                error: {
                    code: 0,
                    message: "Geolocation not supported"
                }
            }))
        }
        navigator.geolocation.getCurrentPosition(onSuccess, onError)
    }, [])
    return
}

export default useGeoLocation