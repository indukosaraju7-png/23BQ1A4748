const API_URL =
  "http://4.224.186.213/evaluation-service/notifications";

const TOKEN = import.meta.env.VITE_TOKEN;
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