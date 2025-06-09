import React from 'react';
import { useParams } from 'react-router-dom';
import '../LoginPage.css';
import { Link } from 'react-router-dom';

const Home = () => {
    const { name, type, id } = useParams();
    const renderNavLinks = () => {
        if (type === 'volunteer') {
            return (
                <ul>
                    <li><Link to={`/ListVolunteers/${id}`}>מתנדבים</Link></li>
                    <li><Link to={`/MyAssigment/${id}`}>הבקשות שעלי למלא</Link></li>
                    <li><Link to={`/Requests/${id}`}>בקשות</Link></li>
                </ul>
            );
        } else {
            return (
                <ul>
                    <li><Link to={`/NewRequestPage/${id}`}>בקשה חדשה</Link></li>
                    <li><Link to={`/ListVolunteers/${id}`}>מתנדבים</Link></li>
                    <li><Link to={`/Service/${id}`}>השירותים שלנו</Link></li>
                </ul>
            );
        }
    };
    return (
        <div className="login-page">
            <nav className="navbar">
                <img src="/logo.PNG" alt="לוגו" className="navbar-logo" />
                {renderNavLinks()}
            </nav>
            <div className="login-container">
                <h2 style={{ textAlign: 'center', fontSize: '24px', color: '#FF6F00' }}>
                    ברוך הבא, {name}!
                </h2>
                <p style={{
                    textAlign: 'center',
                    fontSize: '18px',
                    marginTop: '20px',
                    color: '#333'
                }}>
                    שמחים לראות אותך שוב במערכת 🙌
                </p>
            </div>
             <footer className="footer">
                <div className="scrolling-text">
                    <span>התנדבות למשפחות ברוכות • יש לך שעה פנויה? הרכב פנוי ? למה לא לעשות חסד • מאגר מתנדבים - מאגר זכויות • </span>
                    <span>התנדבות למשפחות ברוכות • יש לך שעה פנויה? הרכב פנוי ? למה לא לעשות חסד • מאגר מתנדבים - מאגר זכויות • </span>
                </div>
            </footer>
        </div>
    );
};

export default Home;
