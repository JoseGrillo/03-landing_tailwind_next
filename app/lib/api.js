export const sendContactForm = async (data) =>
  fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json", Accept: "application/json" },
  }).then((res) => {
    // manejador de posible error
    if (!res.ok) throw new Error("Failed to send message 1 No se pudo enviar el mensaje (ver Fetch)");
    return res.json();
  });