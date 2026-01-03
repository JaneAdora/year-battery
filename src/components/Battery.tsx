import { useMemo } from 'react';
import { getBatteryColor } from '../utils/yearProgress';
import './Battery.css';

interface BatteryProps {
  percentage: number;
}

export function Battery({ percentage }: BatteryProps) {
  const fillColor = useMemo(() => getBatteryColor(percentage), [percentage]);
  
  // Calculate the fill height as a percentage of the battery body
  const fillHeight = `${Math.max(0, Math.min(100, percentage))}%`;

  return (
    <div className="battery-container">
      {/* Battery terminal/cap at top */}
      <div className="battery-cap" />
      
      {/* Battery body */}
      <div className="battery-body">
        {/* Battery fill - grows from bottom */}
        <div 
          className="battery-fill"
          style={{ 
            height: fillHeight,
            backgroundColor: fillColor,
          }}
        />
        
        {/* Percentage text overlay */}
        <div className="battery-percentage">
          {percentage.toFixed(1)}%
        </div>
      </div>
    </div>
  );
}
