import '../LoginPage.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const Service = () => {
  const [service, setService] = useState([]);
  const { id } = useParams();


  useEffect(() => {
    axios.get('https://localhost:44348/api/ServiceBll/GetServices')
      .then(response => {
        setService(response.data);
      })
      .catch(error => {
        console.error('שגיאה בטעינת השירותים:', error);
      });
  }, []);

  return (

    <div className="login-page list-volunteers-page">

      {/* סרגל עליון */}
      <nav className="navbar">
        <ul>
          <li><Link to={`/ListVolunteers/${id}`}>מתנדבים</Link></li>
          <li><Link to={`/NewRequestPage/${id}`}>בקשה חדשה</Link></li>
          <li><Link to={`/Service/${id}`}>השירותים שלנו</Link></li>
          <img src="/logo.PNG" alt="לוגו" className="navbar-logo" />

        </ul>
      </nav>

      {/* קופסה מרכזית */}
      <div className="login-container">
        <h2 style={{ textAlign: 'center', color: '#FF6F00' }}>רשימת שירותי ההתנדבות</h2>
        <div style={{ overflowX: 'auto' }}>
          <table style={{
            width: '100%',
            borderCollapse: 'collapse',
            backgroundColor: '#FFF3E0',
            color: '#333',
            borderRadius: '10px',
            overflow: 'hidden',
            direction: 'rtl'
          }}>
            <thead>
              <tr style={{ backgroundColor: '#FFCC80' }}>
                <th style={tableHeaderStyle} > שם שירות</th>
              </tr>
            </thead>
            <tbody>
              {service.map((v, index) => (
                <tr key={index} style={index % 2 === 0 ? rowStyleEven : rowStyleOdd}>
                  <td style={cellStyle}>{v.ServiceName}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <footer className="footer">
          <div className="scrolling-text">
            <span>התנדבות למשפחות ברוכות • יש לך שעה פנויה? הרכב פנוי ? למה לא לעשות חסד • מאגר מתנדבים - מאגר זכויות • </span>
            <span>התנדבות למשפחות ברוכות • יש לך שעה פנויה? הרכב פנוי ? למה לא לעשות חסד • מאגר מתנדבים - מאגר זכויות • </span>
          </div>
        </footer>
      </div>
    </div>
  );
};

const tableHeaderStyle = {
  padding: '12px',
  fontWeight: 'bold',
  fontSize: '14px',
  borderBottom: '2px solid #FF6F00',
};

const cellStyle = {
  padding: '10px',
  textAlign: 'right',
  fontSize: '14px',
};

const rowStyleEven = {
  backgroundColor: '#FFF8E1',
};

const rowStyleOdd = {
  backgroundColor: '#FFFFFF',
};

export default Service;
