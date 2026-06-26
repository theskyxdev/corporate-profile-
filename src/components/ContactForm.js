"use client";

import { useState } from "react";
import styles from "@/styles/ContactForm.module.css";

export default function ContactForm({ defaultService = "General Inquiry" }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    serviceInterest: defaultService,
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMessage, setErrorMessage] = useState("");

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = "Please enter a valid email address";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error as user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Failed to submit message. Please try again.");
      }
    } catch (err) {
      console.error("Form submission error:", err);
      setStatus("error");
      setErrorMessage("A network error occurred. Please check your connection.");
    }
  };

  if (status === "success") {
    return (
      <div className={styles.successContainer}>
        <div className={styles.successIcon}>
          <svg width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className={styles.successTitle}>Inquiry Sent</h3>
        <p className={styles.successMessage}>
          Thank you, {formData.name}! Your inquiry regarding <strong>{formData.serviceInterest}</strong> has been transmitted securely. Our operations desk will contact you within 4 business hours.
        </p>
        <button
          onClick={() => {
            setFormData({
              name: "",
              email: "",
              company: "",
              phone: "",
              serviceInterest: defaultService,
              message: ""
            });
            setStatus("idle");
          }}
          className="btn-secondary"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      {status === "error" && (
        <div style={{ background: "rgba(239, 68, 68, 0.1)", border: "1px solid #ef4444", borderRadius: "8px", padding: "1rem", color: "#fca5a5", fontSize: "0.9rem" }}>
          {errorMessage}
        </div>
      )}

      <div className={styles.row}>
        <div className={styles.group}>
          <label htmlFor="name" className={styles.label}>Full Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            className={styles.input}
          />
          {errors.name && <span className={styles.errorText}>{errors.name}</span>}
        </div>

        <div className={styles.group}>
          <label htmlFor="email" className={styles.label}>Corporate Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@company.com"
            className={styles.input}
          />
          {errors.email && <span className={styles.errorText}>{errors.email}</span>}
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.group}>
          <label htmlFor="company" className={styles.label}>Company Name</label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Acme Corp"
            className={styles.input}
          />
        </div>

        <div className={styles.group}>
          <label htmlFor="phone" className={styles.label}>Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+1 (555) 019-2834"
            className={styles.input}
          />
        </div>
      </div>

      <div className={styles.group}>
        <label htmlFor="serviceInterest" className={styles.label}>Area of Interest</label>
        <select
          id="serviceInterest"
          name="serviceInterest"
          value={formData.serviceInterest}
          onChange={handleChange}
          className={styles.select}
        >
          <option value="General Inquiry">General Corporate Inquiry</option>
          <option value="Offshore Staffing Solutions">Offshore Staffing Solutions</option>
          <option value="BPO & Customer Operations">BPO & Customer Operations</option>
          <option value="Digital & Custom Tech Solutions">Digital & Custom Tech Solutions</option>
          <option value="IT Strategy & Advisory">IT Strategy & Advisory</option>
        </select>
      </div>

      <div className={styles.group}>
        <label htmlFor="message" className={styles.label}>Project Objectives / Requirements *</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Describe your operational bottleneck, scaling goals, or technical requirements..."
          className={styles.textarea}
        ></textarea>
        {errors.message && <span className={styles.errorText}>{errors.message}</span>}
      </div>

      <button
        type="submit"
        className="btn-primary styles.submitBtn"
        style={{ width: "100%", padding: "1rem", marginTop: "1rem" }}
        disabled={status === "loading"}
      >
        <span>
          {status === "loading" ? (
            <>
              <span className={styles.spinner}></span>
              Processing...
            </>
          ) : (
            "Transmit Project Inquiry"
          )}
        </span>
      </button>
    </form>
  );
}
