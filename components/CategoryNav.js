import React from "react";
import { Dropdown, Link } from "@nextui-org/react";

const CategoryNav = ({properties}) => {
    const {childrens, name} = properties; 
    return (
        <Dropdown>
            <Dropdown.Button light>
                {name}
            </Dropdown.Button>
            <Dropdown.Menu
                variant="light"
                aria-label="Actions"
            >
                {
                    childrens.map((item, i) => {
                        return (
                            <Dropdown.Item key={i}>
                                <Link href={item.link}>{item.name}</Link>
                            </Dropdown.Item>
                        )
                    })
                }
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default CategoryNav;
