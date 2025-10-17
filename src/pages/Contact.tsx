// src/components/Contact.tsx
import ContactUs from "../components/contact/ContactUs";
import HeroBanner from "../components/HeroBanner";

export default function Contact() {
  return (
    <>
      <HeroBanner
        title="Contact Us"
        tagline="Reach out for partnerships, collaborations, or business enquiries — our team responds within 24 hours."
      />
      <ContactUs />
    </>
  );
}
