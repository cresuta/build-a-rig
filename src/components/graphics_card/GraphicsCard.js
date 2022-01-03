import {Badge, Button} from 'react-bootstrap'

// Library of available gpu list - will feature hover over modal with additional details
export const GraphicsCard = ({gpu}) => {
    if (gpu.brand === "Nvidia") {
        return (
            <Button variant="dark" className="card-btn">
            {gpu.name}<Badge className="card-brand" bg="success">{gpu.brand}</Badge>
            </Button> 
        )
    } else {
        return (
            <Button variant="dark" className="card-btn">
            {gpu.name}<Badge className="card-brand" bg="danger">{gpu.brand}</Badge>
            </Button>  
        )
    }
}

export const GraphicsCardOption = ({gpu}) => {
    return (
        <option value={gpu.id}>{gpu.name}</option>
    )
}