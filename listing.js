const jsonData = {
    // ... (your JSON data here)
    
        
      };
  
  function isPhoneNumberUnique(phoneNumber, jsonData) {
    for (const key in jsonData.messages) {
      if (jsonData.messages.hasOwnProperty(key)) {
        if (jsonData.messages[key].phone === phoneNumber) {
          return false; // Phone number is not unique
        }
      }
    }
    return true; // Phone number is unique
  }
  
  const phoneNumberToCheck = '9370805845'; // Replace with the phone number you want to check
  
  const isUnique = isPhoneNumberUnique(phoneNumberToCheck, jsonData);
  
  if (isUnique) {
    console.log(`${phoneNumberToCheck} is a unique phone number.`);
  } else {
    console.log(`${phoneNumberToCheck} is not unique.`);
  }
