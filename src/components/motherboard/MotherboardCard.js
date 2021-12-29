import { Dropdown } from "react-bootstrap"

export const MotherboardCard = ({mobo}) => {
    
    return (
        <Dropdown.Item href="#">{mobo.name}</Dropdown.Item>
    )
}