
import { Dropdown } from 'react-bootstrap'

export const MotherboardCard = ({mobo}) => {
    
    return (
        // <Button variant="dark" className="card-btn">
        // {mobo.name}<Badge className="card-brand" bg="success">{mobo.num_of_cards_supported}</Badge>
        // </Button> 
        <Dropdown.Item href="#">
        {mobo.name}
      </Dropdown.Item>
    )
}