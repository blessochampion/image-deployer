  /**
   * CONSTANTS
   */

  const API_KEY = "patctKm5qno8d8Yzl.29ea5fb5f7006d5d8dc95fd2a20a73a24b038ad8c5414ea7c926ebc36cf4b016"
  const BASE_ID = "appLWSGsM7ea5aIdP"
  const USER_TABLE = "tbl9N0zsqlnHJMoNt"
  const COMPANY_TABLE = "tblIfbYAQMrmZGIQ4"
  const SECTOR_TABLE = "tblhYUkdSxuxXU02J"
  const TECHNOLOGY_TABLE = "tblaUDRxDAjHDjTMt"
  const GEOGRAPHY_TABLE = "tblM6MGoJ4HeonRTM"
  
  /***
     * 
     * AIRTABLE IMPLEMENTATION
     */

  // AI Technology: ['rec473cJgs1TmhZe1']

async function fetchAirtableData(table) {
  const url = `https://api.airtable.com/v0/${BASE_ID}/${table}`;

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    });

    const data = await response.json();

    return data.records; // Returns the records for further use
  } catch (error) {
    console.error('Error fetching data from Airtable:', error);
  }
}

/**
 * Get the current date in MM/DD/YYYY format
 * @returns  the current date in MM/DD/YYYY format
 */

function getCurrentDate() {
  const today = new Date();
  
  // Get the month, add 1 because months are 0-indexed (0 = January, 11 = December)
  const month = String(today.getMonth() + 1).padStart(2, '0'); // pad single digits with leading 0
  
  // Get the day and year
  const day = String(today.getDate()).padStart(2, '0'); // pad single digits with leading 0
  const year = today.getFullYear();
  
  return `${month}/${day}/${year}`;
}

// Function to save name and email to Airtable
async function saveToAirtable(name, email) {
  const url = `https://api.airtable.com/v0/${BASE_ID}/${USER_TABLE}`;
  
  // The data object you want to send to Airtable
  const recordData = {
    fields: {
      Name: name,     // Airtable field "Name"
      Email: email ,   // Airtable field "Email"
      Created_at: getCurrentDate() // Airtable field "Created_at"
    }
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        records: [recordData] // Airtable expects an array of records
      })
    });

    const data = await response.json();

    if (data && data.records && data.records.length > 0) {
      return Promise.resolve({success: true});
    } else {
      return Promise.resolve({success: false});
    }
  } catch (error) {
    return Promise.resolve({success: false});
  }
}