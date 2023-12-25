import BASEURL from "./baseURL";

export default async function LoginFormSubmit(email, password) {
  const URL = BASEURL + "/user/login";

  let response = await fetch(URL, {
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return await response.json();
}

export async function GetProfile(token) {
  console.log(token.token);
  const URL = BASEURL + "/user/profile";

  try {
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token.token}`,
      },
    });
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}

export async function SetProfile({ firstName, lastName, token }) {
  const URL = BASEURL + "/user/profile";
  try {
    let response = await fetch(URL, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        firstName,
        lastName,
      }),
    });

    return await response.json();
  } catch (error) {
    return error;
  }
}
