import React, { useState } from 'react';
import CryptoJS from 'crypto-js';
import './AESEncryption.css'; // Import custom styles for elegance

const AESEncryption = () => {
  const [message, setMessage] = useState('');
  const [secretKey, setSecretKey] = useState('');
  const [encryptedMessage, setEncryptedMessage] = useState('');
  const [decryptedMessage, setDecryptedMessage] = useState('');

  const handleEncrypt = () => {
    if (message && secretKey) {
      const encrypted = CryptoJS.AES.encrypt(message, secretKey).toString();
      setEncryptedMessage(encrypted);
      setDecryptedMessage(''); // Clear decrypted message on new encryption
    }
  };

  const handleDecrypt = () => {
    if (encryptedMessage && secretKey) {
      try {
        const bytes = CryptoJS.AES.decrypt(encryptedMessage, secretKey);
        const decrypted = bytes.toString(CryptoJS.enc.Utf8);
        setDecryptedMessage(decrypted || 'Invalid Secret Key!');
      } catch (error) {
        setDecryptedMessage('Decryption Failed!');
      }
    }
  };

  return (
    <div className="aes-container">
      <h2>AES Encryption / Decryption</h2>
      
      <div className="input-group">
        <label>Message:</label>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter message to encrypt"
        />
      </div>

      <div className="input-group">
        <label>Secret Key:</label>
        <input
          type="password"
          value={secretKey}
          onChange={(e) => setSecretKey(e.target.value)}
          placeholder="Enter secret key"
        />
      </div>

      <div className="button-group">
        <button onClick={handleEncrypt} className="encrypt-btn">Encrypt</button>
        <button onClick={handleDecrypt} className="decrypt-btn">Decrypt</button>
      </div>

      <div className="output-group">
        <label>Encrypted Message:</label>
        <textarea
          readOnly
          value={encryptedMessage}
          placeholder="Your encrypted message will appear here"
        />
      </div>

      <div className="output-group">
        <label>Decrypted Message:</label>
        <textarea
          readOnly
          value={decryptedMessage}
          placeholder="Your decrypted message will appear here"
        />
      </div>
    </div>
  );
};

export default AESEncryption;
