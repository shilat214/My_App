import React, { useState } from 'react';
import '../LoginPage.css';
import { Link, useParams } from 'react-router-dom';

const NewRequestPage = () => {
  const [requestContent, setRequestContent] = useState('');
  const [date, setDate] = useState('');
  const [hours, setHours] = useState('');
  const [service, setService] = useState('');
  const { id } = useParams();

  const getServiceCodeByName = async (s) => {
  const url = `https://localhost:44348/api/ServiceBLL/GetServicesByName/${encodeURIComponent(s)}`;
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("שגיאה בקבלת השירות מהשרת");

    const code = await response.json(); // מחזיר מספר בלבד
    return code;

  } catch (error) {
    console.error("שגיאה:", error);
    return null;
  }
};

  const handleSubmit = async (e) => {
    e.preventDefault();

    const serviceCode = await getServiceCodeByName(service);
    if (!serviceCode) {
      alert("לא נמצא קוד שירות עבור: " + service);
      return;
    }

    const new_request = {
      IdRequester: id,
      IdService: serviceCode,
      RequestText: requestContent,
      RequestStatus: "Pending",
      RequestDate: date,
      RequestedHours: hours
    };

    try {
      const response = await fetch("https://localhost:44348/api/RequestsBLL/Add_request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(new_request)
      });

      if (!response.ok) throw new Error("שגיאה בקריאת השרת");

      const data = await response.json();
      console.log("הבקשה נוספה בהצלחה", data);

      alert(`הבקשה הוגשה!\nתוכן: ${requestContent}\nתאריך: ${date}\nמספר שעות: ${hours}\nשירות: ${service}`);
      setRequestContent('');
      setDate('');
      setHours('');
      setService('');

    } catch (error) {
      console.error("שגיאה:", error);
      alert("שגיאה בשליחת הבקשה");
    }
  };

  return (
    <div className="login-page">
      <nav className="navbar">
        <img src="/logo.PNG" alt="לוגו" className="navbar-logo" />
        <ul>
          <li><Link to={`/NewRequestPage/${id}`}>בקשה חדשה</Link></li>
          <li><Link to={`/ListVolunteers/${id}`}>מתנדבים</Link></li>
          <li><Link to={`/Service/${id}`}>שירותי ההתנדבות</Link></li>
        </ul>
      </nav>

      <div className="login-container" style={{ width: '13cm', height: '15cm', marginTop: '80px' }}>
        <h1 style={{ color: '#FF6F00', textAlign: 'center', marginBottom: '25px' }}>בקשה חדשה</h1>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="requestContent">תוכן בקשה</label>
            <input
              type="text"
              id="requestContent"
              value={requestContent}
              onChange={(e) => setRequestContent(e.target.value)}
              required
              placeholder="הזן את תוכן הבקשה"
            />
          </div>

          <div className="form-group">
            <label htmlFor="date">תאריך</label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="hours">מספר שעות</label>
            <input
              type="number"
              id="hours"
              value={hours}
              onChange={(e) => setHours(e.target.value)}
              min="0"
              required
              placeholder="הזן מספר שעות"
            />
          </div>

          <div className="form-group">
            <label htmlFor="service">בחירת שירות</label>
            <select
              id="service"
              value={service}
              onChange={(e) => setService(e.target.value)}
              required
            >
              <option value="" disabled>בחר שירות</option>
              <option value="השכרת רכב">השכרת רכב</option>
              <option value="שטיפה חיצונית לרכב">שטיפה חיצונית לרכב</option>
              <option value="ניקוי פנימי לרכב">ניקוי פנימי לרכב</option>
              <option value="ניקוי פנימי +שטיפה חיצונית">ניקוי פנימי +שטיפה חיצונית</option>
            </select>
          </div>

          <button type="submit">שלח בקשה</button>
        </form>
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

export default NewRequestPage;
