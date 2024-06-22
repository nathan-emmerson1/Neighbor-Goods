
import request from "superagent";

export async function useIsUser() {
  try {
    const req = await request.post('api/users/checkuser');
    const isUser = req.body;
    return isUser;
  } catch (error) {
    console.error("Error in useIsUser:", error);
    return null;  // or handle the error as needed
  }
}

