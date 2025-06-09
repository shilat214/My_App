import '../LoginPage.css';
import React, { useState } from "react";
import { Link, useParams, useNavigate } from 'react-router-dom';


const LoginPage = () => {
    const navigate = useNavigate();
    const [id, setId]= useState();
    const { type } = useParams(); // volunteer / service

    const handleSubmit = async (event) => {
        event.preventDefault();

        const checkUrl = type === 'volunteer'
            ? `https://localhost:44348/api/VolunteerBLL/GetVolunteerById/${id}`
            : `https://localhost:44348/api/CarHelpRequestersBLL/GetRequesterById/${id}`;

        try {
            const response = await fetch(checkUrl);
            if (response.ok) {
                const user = await response.json();
                if (user && user.Name) {
                    alert("המשתמש קיים במערכת.");
                    if (type === 'volunteer') {
                        navigate(`/Home/${user.Name}/${type}/${user.IdVolunteer}`);
                    }
                    else {
                        navigate(`/Home/${user.Name}/${type}/${user.IdRequester}`);
                    }

                } else {
                    alert("המשתמש לא נמצא או אין לו שם מוגדר.");
                }

            } else if (response.status === 404) {
                alert("לא נמצא משתמש עם תעודת זהות זו.");
            } else {
                throw new Error("שגיאה בשרת");
            }
        } catch (error) {
            console.error("שגיאה בבדיקה:", error);
            alert("אירעה שגיאה בעת הבדיקה");
        }
    };

    const renderNavLinks = () => {
        if (type === 'volunteer') {
            return (

                <ul>
                    <li><Link to={`/ListVolunteers/${id}`}>מתנדבים</Link></li>
                    <li><Link to={`/MyRequestPage/${id}`}>הבקשות שעלי למלא</Link></li>
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
        <>
            <div className="login-page">
                <nav className="navbar">
                    <img src="/logo.PNG" alt="לוגו" className="navbar-logo" />
                    {renderNavLinks()}
                </nav>
                <div className="login-container">
                    <form className="login-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="id">תעודת זהות</label>
                            <input
                                type='text'
                                id="id"
                                placeholder="תעודת הזהות שלך"
                                onChange={(e) => setId(e.target.value)}
                                required
                            />
                        </div>


                        <button type="submit">התחבר</button>
                        <p>אין לך חשבון? <Link to={`/SignUp/${type}`}>הרשם כאן</Link></p>
                    </form>
                </div>
            </div>

            <footer className="footer">
                <div className="scrolling-text">
                    <span>התנדבות למשפחות ברוכות • יש לך שעה פנויה? הרכב פנוי ? למה לא לעשות חסד • מאגר מתנדבים - מאגר זכויות • </span>
                    <span>התנדבות למשפחות ברוכות • יש לך שעה פנויה? הרכב פנוי ? למה לא לעשות חסד • מאגר מתנדבים - מאגר זכויות • </span>
                </div>
            </footer>
        </>
    );
};

export default LoginPage;
