import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../DualLoginPage.css';

const DualLoginPage = () => {
  const navigate = useNavigate();

  return (
    <div className="l">
      <nuv><img src="/logo.PNG" alt="לוגו" className="navbar-logo" />
      </nuv>
      <div className="lc">
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
          <button
            onClick={() =>  navigate(`/LoginPage/volunteer/`)}
            style={{
              background: 'linear-gradient(45deg, #FF8C00, #FF6F00)',
              color: '#fff',
              border: 'none',
              borderRadius: '50px 0 0 50px',
              padding: '16px 32px',
              fontSize: '18px',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 12px rgba(255, 111, 0, 0.3)',
            }}
            onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 6px 20px rgba(255, 111, 0, 0.5)'}
            onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 4px 12px rgba(255, 111, 0, 0.3)'}
          >
            כניסה למתנדב
          </button>
          <button
            onClick={() => navigate(`/LoginPage/service/`)}
            style={{
              background: 'linear-gradient(45deg, #FF8C00, #FF6F00)',
              color: '#fff',
              border: 'none',
              borderRadius: '0 50px 50px 0',
              padding: '16px 32px',
              fontSize: '18px',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 12px rgba(255, 111, 0, 0.3)',
              marginRight: '1px',
            }}
            onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 6px 20px rgba(255, 111, 0, 0.5)'}
            onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 4px 12px rgba(255, 111, 0, 0.3)'}
          >
            כניסה למבקש שירות
          </button>
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

export default DualLoginPage;
