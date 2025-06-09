import '../LoginPage.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const Requests = () => {
      const {id } = useParams();

  const [requests, setRequests] = useState([]);

  useEffect(() => {
    axios.get('https://localhost:44348/api/RequestsBLL/Get_All_Requests')
      .then(response => {
        setRequests(response.data);
      })
      .catch(error => {
        console.error('שגיאה בטעינת הבקשות:', error);
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


        </ul>
      </nav>

      {/* קופסה מרכזית */}
      <div className="login-container">
        <h2 style={{ textAlign: 'center', color: '#FF6F00' }}>בקשות שעדיין לא לקחו</h2>
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
                <th style={tableHeaderStyle}>תוכן הבקשה</th>
                <th style={tableHeaderStyle}>תאריך</th>
                <th style={tableHeaderStyle}>מספר שעות</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((v, index) => (
                <tr key={index} style={index % 2 === 0 ? rowStyleEven : rowStyleOdd}>
                  <td style={cellStyle}>{v.RequestText}</td>
                  <td style={cellStyle}>{v.RequestDate}</td>
                  <td style={cellStyle}>{v.RequestedHours}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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

export default Requests;
