import sections from '../data/sections.json'
import Nav from 'react-bootstrap/Nav';

export default function AppNav() {
    return (
        <div>
            <Nav>
                {sections.map(section => {
                        return (
                        <Nav.Item key={section.label}>
                            <Nav.Link href={`/#/sections/${section.tag}`} key={section.label}>
                            {section.label}
                            </Nav.Link>
                        </Nav.Item>)
                    })}
            </Nav>
        </div>
    )
}