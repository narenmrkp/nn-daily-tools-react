import React from 'react';
import './App.css';

function App() {
  // Placeholder functions for tool actions
  const handleToolClick = (toolName) => {
    alert(`${toolName} functionality will be implemented here.`);
  };

  // List of tools
  const tools = [
    { name: 'PDF to Word', description: 'Convert PDF files to Word documents.' },
    { name: 'JPG to PNG', description: 'Convert JPG images to PNG format.' },
    { name: 'Audio Converter', description: 'Convert audio files to MP3, WAV, etc.' },
    { name: 'File Compressor', description: 'Compress files to reduce size.' },
    { name: 'Currency Converter', description: 'Convert between global currencies.' },
    { name: 'Temperature Converter', description: 'Convert between Celsius and Fahrenheit.' },
    { name: 'Weight Converter', description: 'Convert between Kilograms and Pounds.' },
    { name: 'Distance Converter', description: 'Convert between Kilometers and Miles.' },
    { name: 'World Clock', description: 'Check time in different timezones.' },
    { name: 'Live Stock Market', description: 'View live stock market data.' },
    { name: 'Live News', description: 'Top 10 global news headlines.' },
    { name: 'QR Code Generator', description: 'Generate QR codes for URLs.' },
    { name: 'Password Generator', description: 'Create strong passwords.' },
    { name: 'Unit Converter', description: 'Convert various units.' },
    { name: 'Text to Speech', description: 'Convert text to audio.' },
    { name: 'Image Resizer', description: 'Resize images to specific dimensions.' },
    { name: 'File Splitter', description: 'Split large files into smaller parts.' },
    { name: 'Video Converter', description: 'Convert video files to MP4, AVI, etc.' },
    { name: 'Data Encryption', description: 'Encrypt sensitive data.' },
    { name: 'Data Decryption', description: 'Decrypt encrypted data.' },
  ];

  return (
    <div className="App">
      {/* Aquarium Animation - Top */}
      <div className="aquarium-top">
        <div className="fish fish1"></div>
        <div className="fish fish2"></div>
        <div className="fish fish3"></div>
      </div>

      <h1>Daily Tools 🛠️</h1>

      <div className="container">
        {tools.map((tool, index) => (
          <div key={index} className="tool-card" onClick={() => handleToolClick(tool.name)}>
            <h2>{tool.name}</h2>
            <p>{tool.description}</p>
            <button>Open</button>
          </div>
        ))}
      </div>

      {/* Ad Banner */}
      <div className="ad-banner">
        Advertisement Banner (728x90)
      </div>

      {/* Aquarium Animation - Bottom */}
      <div className="aquarium-bottom">
        <div className="fish fish4"></div>
        <div className="fish fish5"></div>
        <div className="fish fish6"></div>
      </div>

      {/* Footer */}
      <footer>
        <p>© 2023 Daily Tools. All rights reserved. | <a href="#">Privacy Policy</a></p>
      </footer>
    </div>
  );
}

export default App;
