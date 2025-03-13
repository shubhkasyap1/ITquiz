export const loginUser = async (username, password) => {
  try {
    const response = await fetch(
      "https://quiz-application-rgaz.onrender.com/api/v1/auth/login",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Invalid credentials");
    }

    return data;
  } catch (error) {
    throw new Error("Server error. Please try again.");
  }
};


export const fetchUserData = async () => {
  try {
    const response = await fetch("http://localhost:5000/api/user");
    if (!response.ok) {
      throw new Error("Failed to fetch user data");
    }
    const data = await response.json();
    return data.name || "User";
  } catch (error) {
    console.error("Error fetching user data:", error);
    return "User";
  }
};