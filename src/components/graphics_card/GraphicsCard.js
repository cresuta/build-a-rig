import {Badge, Button} from 'react-bootstrap'

// For click/drag card components under graphics card list container
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