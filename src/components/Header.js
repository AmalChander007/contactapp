import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return (
        <div >
                <Navbar className="bg-secondary" >
                    
                        <Navbar.Brand href="#">
                            <h2 className='ms-5' > CONTACTS
                            </h2>
                        </Navbar.Brand>
                </Navbar>
        </div>
    )
}

export default Header