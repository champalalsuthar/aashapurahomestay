export async function sendEmailToBackend(payload) {
    const res = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + "/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (!res.ok) {
        throw new Error(data?.message || "Email sending failed");
    }

    return data;
}
