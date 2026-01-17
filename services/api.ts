import { ConsultationFormData } from '../types';
import { GOOGLE_SCRIPT_URL } from '../constants';

export const submitConsultation = async (data: ConsultationFormData): Promise<boolean> => {
  // Simulate delay for UX
  await new Promise(resolve => setTimeout(resolve, 800));

  try {
    // We use 'no-cors' mode.
    // EXPLANATION: Google Apps Script redirects responses (HTTP 302), which standard browser 
    // fetch calls often block due to CORS security policies, causing the "Something went wrong" error
    // even though the data actually reached the sheet.
    // 
    // 'no-cors' tells the browser to send the data but treat the response as "opaque".
    // We can't read the response JSON, but we stop the browser from throwing an error.
    await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors", 
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
    });

    // Since 'no-cors' prevents us from reading the response status or body,
    // if the code reaches here without throwing a network error, we assume success.
    return true;

  } catch (error) {
    console.error("Submission Error:", error);
    return false;
  }
};