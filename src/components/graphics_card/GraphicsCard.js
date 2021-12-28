import {Badge, Button} from 'react-bootstrap'

// For click/drag card components under graphics card list container
export const GraphicsCard = ({gpu}) => {
    if (gpu.brand === "Nvidia") {
        return (
        <Button variant="light" className="card">
        {gpu.name}<Badge bg="success">{gpu.brand}</Badge>
        </Button> 
        )
    } else {
        return (
        <Button variant="light" className="card">
        {gpu.name}<Badge bg="danger">{gpu.brand}</Badge>
        </Button>  
        )
    }
}