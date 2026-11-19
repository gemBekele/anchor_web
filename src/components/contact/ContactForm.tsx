"use client";

import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { products } from "@/content/products";
import { institutionTypes } from "@/content/site";
import { Button } from "@/components/ui/Button";

const initialState = {
  name: "",
  organization: "",
  email: "",
  phone: "",
  institutionType: "",
  product: "",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);

  const update = (key: keyof typeof form) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => setForm((prev) => ({ ...prev, [key]: event.target.value }));

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // NOTE: Connect this handler to your CRM, email service, or API route.
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-card border border-paper-line bg-white p-10 text-center shadow-soft">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent-100 text-accent-600">
          <CheckCircle2 className="h-7 w-7" />
        </span>
        <h3 className="mt-5 font-display text-[20px] font-bold text-ink">Inquiry received</h3>
        <p className="mt-2 max-w-sm text-[14px] leading-relaxed text-muted">
          Thank you. Our team will review your message and get back to you. (Demo confirmation —
          connect this form to your endpoint before launch.)
        </p>
        <button
          type="button"
          onClick={() => {
            setForm(initialState);
            setSubmitted(false);
          }}
          className="link-underline mt-6 text-[13.5px] font-semibold text-ink"
        >
          Send another inquiry
        </button>
      </div>
    );
  }

  const fieldClass =
    "h-12 w-full rounded-xl2 border border-paper-line bg-white px-4 text-[14px] text-ink placeholder:text-ink-300 transition-colors focus:border-ink-300 focus:outline-none";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-card border border-paper-line bg-white p-6 shadow-soft sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-2 sm:col-span-1">
          <span className="text-[12.5px] font-medium text-ink-500">Full Name</span>
          <input
            required
            value={form.name}
            onChange={update("name")}
            placeholder="Your name"
            className={fieldClass}
          />
        </label>

        <label className="flex flex-col gap-2 sm:col-span-1">
          <span className="text-[12.5px] font-medium text-ink-500">Organization</span>
          <input
            required
            value={form.organization}
            onChange={update("organization")}
            placeholder="Institution name"
            className={fieldClass}
          />
        </label>

        <label className="flex flex-col gap-2 sm:col-span-1">
          <span className="text-[12.5px] font-medium text-ink-500">Email</span>
          <input
            required
            type="email"
            value={form.email}
            onChange={update("email")}
            placeholder="name@institution.com"
            className={fieldClass}
          />
        </label>

        <label className="flex flex-col gap-2 sm:col-span-1">
          <span className="text-[12.5px] font-medium text-ink-500">Phone</span>
          <input
            type="tel"
            value={form.phone}
            onChange={update("phone")}
            placeholder="+000 000 0000"
            className={fieldClass}
          />
        </label>

        <label className="flex flex-col gap-2 sm:col-span-1">
          <span className="text-[12.5px] font-medium text-ink-500">Institution Type</span>
          <select
            required
            value={form.institutionType}
            onChange={update("institutionType")}
            className={fieldClass}
          >
            <option value="" disabled>
              Select institution type
            </option>
            {institutionTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>

        <label className="flex flex-col gap-2 sm:col-span-1">
          <span className="text-[12.5px] font-medium text-ink-500">Interested Product</span>
          <select
            value={form.product}
            onChange={update("product")}
            className={fieldClass}
          >
            <option value="">Not sure yet</option>
            {products.map((product) => (
              <option key={product.slug} value={product.name}>
                {product.name}
              </option>
            ))}
          </select>
        </label>

        <label className="flex flex-col gap-2 sm:col-span-2">
          <span className="text-[12.5px] font-medium text-ink-500">Message</span>
          <textarea
            required
            value={form.message}
            onChange={update("message")}
            rows={5}
            placeholder="Tell us about your institution and what you're looking for."
            className="w-full rounded-xl2 border border-paper-line bg-white px-4 py-3 text-[14px] text-ink placeholder:text-ink-300 transition-colors focus:border-ink-300 focus:outline-none"
          />
        </label>
      </div>

      <div className="mt-6 flex items-center justify-between gap-4">
        <p className="hidden text-[11.5px] text-ink-400 sm:block">
          We respond to inquiries during business hours.
        </p>
        <Button type="submit" variant="primary" size="lg" icon={<Send className="h-4 w-4" />}>
          Send Inquiry
        </Button>
      </div>
    </form>
  );
}
