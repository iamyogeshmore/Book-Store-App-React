import React from "react";
import '../Footer/Footer.css'

const Footer = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();

    return (
        <footer className="footer">
            <p>All rights reserved by Bookstore Information Service Pvt Ltd.</p>
            <p>
                Powered by: Prints Publications Pvt Ltd | &copy; {year} —{" "}
                <strong>Boookstore</strong>
            </p>
        </footer>
    );
};

export default Footer;
