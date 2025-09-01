import React, { useRef } from "react"
import { useJsApiLoader } from "@react-google-maps/api"
import { Input } from "./ui/input"

export default function GooglePlacesAutocomplete({ onSelect }) {
    const inputRef = useRef(null)
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
        libraries: ["places"],
    })

    React.useEffect(() => {
        if (!isLoaded || !inputRef.current) return
        const autocomplete = new window.google.maps.places.Autocomplete(inputRef.current, {
            types: ["establishment"],
            componentRestrictions: { country: "za" },
        })
        autocomplete.addListener("place_changed", () => {
            const place = autocomplete.getPlace()
            if (!place.geometry) return
            const address = place.address_components || []
            const get = (type) => {
                const comp = address.find((c) => c.types.includes(type))
                return comp ? comp.long_name : ""
            }
            onSelect({
                address_line1: get("street_number") + " " + get("route"),
                city: get("locality"),
                province: get("administrative_area_level_1"),
                country: get("country"),
                postal_code: get("postal_code"),
                latitude: place.geometry.location.lat(),
                longitude: place.geometry.location.lng(),
                name: place.name.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
            })
        })
    }, [isLoaded, onSelect])

    return (
        <Input
            ref={inputRef}
            type="text"
            placeholder="Search facility location..."
        />
    )
}
