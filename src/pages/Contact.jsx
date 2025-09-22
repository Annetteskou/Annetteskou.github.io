// ========================================
// KONTAKT SIDE KOMPONENT - Contact.jsx
// ========================================
// Dette er kontakt siden hvor brugeren kan se kontakt information
// og udfylde et kontakt formular
//
// EMAILJS OPSÆTNING - FØLG DISSE TRIN:
// 1. Gå til https://www.emailjs.com/ og opret en gratis konto
// 2. Opret en Email Service (Gmail, Outlook, etc.)
// 3. Opret en Email Template med disse variabler:
//    - {{from_name}} - afsenderens navn
//    - {{from_email}} - afsenderens email
//    - {{phone}} - telefonnummer
//    - {{message}} - beskeden
//    - {{to_email}} - din email (Annette-skou@hotmail.com)
// 4. Kopier dine Service ID, Template ID og Public Key
// 5. Erstat "YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID" og "YOUR_PUBLIC_KEY" i koden
// 6. Nu vil du modtage alle beskedene direkte i din inbox!

// Importerer React hooks til state management
import { useState } from "react";
// Importerer EmailJS til email funktionalitet
import emailjs from "@emailjs/browser";
// Importerer CSS styles for kontakt siden
import styles from "./Contact.module.css";
// Importerer floating lights komponenten til baggrundseffekt
import FloatingLights from "../component/FloatingLights";

// Hovedkomponenten for kontakt siden
export default function Contact() {
  // State til at holde form data
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  // State til at holde styr på form status
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Funktion til at håndtere input ændringer
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Funktion til at håndtere form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // EmailJS konfiguration - alle nøgler er sat op
    const serviceID = "service_kk043lh"; // Din EmailJS service ID
    const templateID = "template_ptllolw"; // Din EmailJS template ID
    const publicKey = "pAwavl7ClJLoMnFBF"; // Din EmailJS public key

    try {
      // Send email via EmailJS
      await emailjs.send(
        serviceID,
        templateID,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        publicKey
      );

      setSubmitStatus("success");
      setFormData({ name: "", phone: "", email: "", message: "" }); // Reset form
    } catch (error) {
      console.error("Error submitting form:", error);
      console.error("Error details:", {
        serviceID,
        templateID,
        publicKey,
        formData,
      });
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <main className={styles.contactPage}>
      {/* Floating lights baggrundseffekt */}
      <FloatingLights />

      {/* Hovedcontainer for hele siden */}
      <div className={styles.container}>
        {/* Header sektion med titel og understregning */}
        <div className={styles.headerRow}>
          <h1 className={styles.title}>&gt; Kontakt</h1>
          <span className={styles.titleUnderline} />
        </div>

        {/* Grid layout med to kolonner */}
        <section className={styles.grid}>
          {/* ========================================
               VENSTRE KOLONNE - KONTAKT INFORMATION
               ======================================== */}
          <div className={styles.infoPanel}>
            <h2 className={styles.panelTitle}>Info</h2>

            {/* Navn information med profil ikon */}
            <div className={styles.infoItem}>
              <img
                className={styles.infoImgIcon}
                src="/images/profil.webp"
                alt="Profil"
              />
              <div className={styles.infoText}>
                <div className={styles.infoLabel}>Navn</div>
                <div className={styles.infoValue}>Annette Skou</div>
              </div>
            </div>

            {/* Email information med email ikon */}
            <div className={styles.infoItem}>
              <img
                className={styles.infoImgIcon}
                src="/images/email.png"
                alt="Email"
              />
              <div className={styles.infoText}>
                <div className={styles.infoLabel}>Email</div>
                <div className={styles.infoValue}>Annette-skou@hotmail.com</div>
              </div>
            </div>

            {/* Telefon information med telefon ikon */}
            <div className={styles.infoItem}>
              <img
                className={styles.infoImgIcon}
                src="/images/Phone-Icon-PNG-Picture.png"
                alt="Telefon"
              />
              <div className={styles.infoText}>
                <div className={styles.infoLabel}>Nummer</div>
                <div className={styles.infoValue}>+45 40 23 49 19</div>
              </div>
            </div>

            {/* Sociale medier links sektion */}
            <div className={styles.socialRow}>
              {/* LinkedIn link */}
              <a
                className={styles.socialLink}
                href="https://www.linkedin.com/in/annette-skou-5b2b3b1b4/"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/images/LINK.png" alt="LinkedIn" />
              </a>
              {/* GitHub link */}
              <a
                className={styles.socialLink}
                href="https://github.com/Annetteskou"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/images/GITHUB.png" alt="GitHub" />
              </a>
              {/* Instagram link */}
              <a
                className={styles.socialLink}
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/images/instagram.png" alt="Instagram" />
              </a>
              {/* Facebook link */}
              <a
                className={styles.socialLink}
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/images/facebook.png" alt="Facebook" />
              </a>
            </div>
          </div>

          {/* ========================================
               HØJRE KOLONNE - KONTAKT FORMULAR
               ======================================== */}
          <div className={styles.formPanel}>
            <h2 className={styles.panelTitle}>Kontakt mig</h2>

            {/* Kontakt formular */}
            <form className={styles.form} onSubmit={handleSubmit}>
              {/* Navn input felt */}
              <label className={styles.inputWrapper}>
                <input
                  className={styles.input}
                  type="text"
                  name="name"
                  placeholder="Navn"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </label>

              {/* Telefon input felt */}
              <label className={styles.inputWrapper}>
                <input
                  className={styles.input}
                  type="tel"
                  name="phone"
                  placeholder="Nummer"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </label>

              {/* Email input felt */}
              <label className={styles.inputWrapper}>
                <input
                  className={styles.input}
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </label>

              {/* Besked textarea felt */}
              <label className={styles.inputWrapper}>
                <textarea
                  className={styles.textarea}
                  name="message"
                  placeholder="Besked"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
              </label>

              {/* Status besked */}
              {submitStatus === "success" && (
                <div
                  style={{
                    color: "#4CAF50",
                    marginBottom: "1rem",
                    textAlign: "center",
                  }}
                >
                  Tak for din besked! Jeg vender tilbage til dig snart.
                </div>
              )}
              {submitStatus === "error" && (
                <div
                  style={{
                    color: "#f44336",
                    marginBottom: "1rem",
                    textAlign: "center",
                  }}
                >
                  Der opstod en fejl. Tjek browser console for detaljer.
                  <br />
                  <small>Prøv at genindlæse siden og prøv igen.</small>
                </div>
              )}

              {/* Submit knap container */}
              <div className={styles.actions}>
                <button
                  className={styles.submitBtn}
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sender..." : "Send"}
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* Dekorativ side figur (mobil) */}
        <img
          className={styles.sideCharacter}
          src="/images/mobil.png"
          alt="Figur"
        />
      </div>
    </main>
  );
}
