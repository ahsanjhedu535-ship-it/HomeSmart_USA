import ContactForm from "@/components/ContactForm";
export const metadata = { title: "Contact Us" };
export default function Contact() {
  return (
    <> <section className="page-hero"> <div className="eyebrow">WE’RE HERE TO LISTEN</div> <h1 className="page-title">Let’s talk about home.</h1> <p> Have a question, suggestion, correction, or topic you’d like us to cover? Send the HomeSmart USA team a message. </p> </section> <section className="contact-grid"> <aside className="contact-aside"> <div className="section-kicker">Contact the team</div> <h2>Your message matters.</h2> <p> Use the form to share feedback, ask a general question about our content, or suggest a future guide. Please don’t include sensitive personal, financial, or account information. </p> <div className="contact-detail"> <strong>General inquiries</strong> <span>homesmartusa.support@gmail.com</span> </div> <div className="contact-detail"> <strong>What happens next?</strong> <span> Once email delivery is configured, your message will be sent to our support inbox. </span> </div> </aside> <ContactForm /> </section> </>
  );
}
