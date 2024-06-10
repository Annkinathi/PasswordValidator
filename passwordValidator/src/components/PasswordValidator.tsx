import React, { useState } from 'react';


const PasswordValidator: React.FC = () => {
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(false);

  const validatePassword = (pwd: string) => {
    const isValid = pwd.length >= 8 && /[a-zA-Z]/.test(pwd) && /[0-9]/.test(pwd);
    setIsValid(isValid);
    setPassword(pwd);
  };

  console.log("test")

  return (
    <div className="PasswordValidator">
      <input
        type="password"
        value={password}
        onChange={(e) => validatePassword(e.target.value)}
        placeholder="Enter your password"
      />
      <div className={`message ${isValid ? 'valid' : 'invalid'}`}>
        {isValid ? 'Password is valid!' : 'Password must be at least 8 characters long and contain both letters and numbers.'}
      </div>
    </div>
  );
};

export default PasswordValidator;
