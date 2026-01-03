import { useState, useEffect } from 'react';
import { Battery } from './components/Battery';
import { formatDate, getYearRemainingPercentage } from './utils/yearProgress';
import './App.css';

function App() {
  const [currentDate, setCurrentDate] = useState(() => new Date());
  const [remainingPercentage, setRemainingPercentage] = useState(() => 
    getYearRemainingPercentage(new Date())
  );

  useEffect(() => {
    // Update every second for real-time display
    const intervalId = setInterval(() => {
      const now = new Date();
      setCurrentDate(now);
      setRemainingPercentage(getYearRemainingPercentage(now));
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const formattedDate = formatDate(currentDate);
  const year = currentDate.getFullYear();

  return (
    <div className="app">
      <main className="container">
        {/* Header with current date */}
        <header className="header">
          <h1 className="date">{formattedDate}</h1>
        </header>

        {/* Battery indicator */}
        <section className="battery-section">
          <Battery percentage={remainingPercentage} />
        </section>

        {/* Progress text */}
        <p className="progress-text">
          There is <span className="highlight">{remainingPercentage.toFixed(2)}%</span> remaining of {year}
        </p>
      </main>
    </div>
  );
}

export default App;
