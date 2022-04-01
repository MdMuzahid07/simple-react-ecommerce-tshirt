import { useEffect, useState } from "react"

const useTshirt = () => {
    const [tshirts, setTshirt] = useState([]);
    useEffect( () => {
        fetch('tshirts.json')
        .then(response => response.json())
        .then(data => setTshirt(data))
    }, []);

    return [tshirts, setTshirt];
}

export default useTshirt;
