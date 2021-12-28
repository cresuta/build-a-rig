import { Dropdown } from "react-bootstrap";

export const MotherboardCard = ({mobo}) => {
    return (
        <Dropdown.Item href="#" active>{mobo.name}</Dropdown.Item>    
    )
}