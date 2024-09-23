  /**
   * CONSTANTS
   */

  const API_KEY = "patnA5SnjK3WxSgQk.34a8a25d3ae2165bf88163c9badf073e6de64bc2d74118bfcab56ed0b66d828a"
  const BASE_ID = "appLWSGsM7ea5aIdP"
  const USER_TABLE = "tbl9N0zsqlnHJMoNt"
  const COMPANY_TABLE = "tblIfbYAQMrmZGIQ4"
  const SECTOR_TABLE = "tblhYUkdSxuxXU02J"
  const USECASE_TABLE = "tbl2fhMvGjNYL5fsj"
  const TECHNOLOGY_TABLE = "tblaUDRxDAjHDjTMt"
  const GEOGRAPHY_TABLE = "tblM6MGoJ4HeonRTM"
  
  /***
     * 
     * AIRTABLE IMPLEMENTATION
     */

  // AI Technology: ['rec473cJgs1TmhZe1']


async function fetchAirtableData(table) {
  const url = `https://api.airtable.com/v0/${BASE_ID}/${table}`;
  let allRecords = [];
  let offset = null;

  try {
    do {
      // Build the request URL, including the offset if it's provided
      const fullUrl = offset ? `${url}?offset=${offset}` : url;

      // Fetch the data
      const response = await fetch(fullUrl, {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      });

      const data = await response.json();

      // Append the fetched records to the list of all records
      allRecords = [...allRecords, ...data.records];

      // Update the offset for the next request (if any)
      offset = data.offset;

    } while (offset); // Continue looping if there is an offset

    return allRecords; // Return the accumulated records

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
async function saveToAirtable(fields) {
  const url = `https://api.airtable.com/v0/${BASE_ID}/${USER_TABLE}`;
  
  // The data object you want to send to Airtable
  const recordData = {
    fields
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