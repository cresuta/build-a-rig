import { Dropdown} from "react-bootstrap"
import { MotherboardList } from "./MotherboardList"

export const MotherboardDropdown = () => {
    return (
        <>
        <Dropdown>
        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
        Pick A Motherboard
        </Dropdown.Toggle>

        <Dropdown.Menu variant="dark">
            <MotherboardList />
        </Dropdown.Menu>
        </Dropdown>

        </>
    )
}