const API_URL =
  "http://4.224.186.213/evaluation-service/notifications";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJpbmR1a29zYXJhanU3QGdtYWlsLmNvbSIsImV4cCI6MTc4MDYzOTE0NywiaWF0IjoxNzgwNjM4MjQ3LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiYTlhMDE4MGYtYzAzYi00Y2U5LWFjY2YtZmEzODUxMjBkNzJiIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoiaW5kaXJhIHByaXlhZGFyc2luaSIsInN1YiI6ImE3Yzk2YTlmLTg1NGUtNDQwZS04N2YxLThhNTQ5MzhlMGFjOCJ9LCJlbWFpbCI6ImluZHVrb3NhcmFqdTdAZ21haWwuY29tIiwibmFtZSI6ImluZGlyYSBwcml5YWRhcnNpbmkiLCJyb2xsTm8iOiIyM2JxMWE0NzQ4IiwiYWNjZXNzQ29kZSI6IlFRZEVZeSIsImNsaWVudElEIjoiYTdjOTZhOWYtODU0ZS00NDBlLTg3ZjEtOGE1NDkzOGUwYWM4IiwiY2xpZW50U2VjcmV0IjoiV2ZZWVV3WnVWUlBEZ2ZYWSJ9.r8i6I66o6wzqtU4u2AHe7gbqPKeOFVp2cnMp9pdacqg";

export const getNotifications = async () => {
  try {
    const response = await fetch(API_URL, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });

    console.log("Status:", response.status);

    const data = await response.json();

    console.log("API DATA:", data);

    return data.notifications || [];
  } catch (error) {
    console.error("API ERROR:", error);
    return [];
  }
};