import { ConsultationFormData } from '../types';
import { GOOGLE_SCRIPT_URL } from '../constants';

export const submitConsultation = async (data: ConsultationFormData): Promise<boolean> => {
  // Simulate delay for UX
  await new Promise(resolve => setTimeout(resolve, 800));

  // In a real scenario without the script deployed, this fetch might fail or return 404.
  // We use no-cors mode because Google Apps Script redirects.
  // However, getting a specific response in 'no-cors' is limited.
  // Standard practice for GAS is POST with redirect following.
  
  try {
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      body: JSON.stringify(data),
      // 'Content-Type': 'text/plain' prevents preflight OPTIONS check issues in some browsers with GAS
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
    });

    if (!response.ok) {
        // Fallback for simple testing if URL is invalid
        console.warn("API request failed, possibly due to invalid URL or CORS.");
        throw new Error("Network response was not ok");
    }

    const result = await response.json();
    return result.result === "success";

  } catch (error) {
    console.error("Submission Error:", error);
    // If we are just testing the UI without a valid backend URL, we might want to throw
    // But for the purpose of the deliverable expecting a working flow, we pass if it's a specific mock mode
    // Re-throw to let component handle the UI error state
    throw error;
  }
};