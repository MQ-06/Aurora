const BASE_URL = "http://127.0.0.1:3000/api";

export const sendContactMessage = async (messageData) => {
  try {
    const response = await fetch(`${BASE_URL}/contact_messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ contact_message: messageData }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.errors?.join(", ") || "Something went wrong");
    }

    return await response.json();
  } catch (error) {
    console.error("Error sending contact message:", error);
    throw error;
  }
};
