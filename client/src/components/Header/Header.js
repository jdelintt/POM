import React from 'react';
import "../Header/Header.css"

function Header() {
    return (
            <div className="mainHeader"
            style={{backgroundColor: "#4D7C69"}}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            {/* Column 1 */}
                            <h1>Peace of Mind</h1>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Header;