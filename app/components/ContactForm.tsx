"use client";

export default function ContactForm() {
  return (
    <form
      onSubmit={async (e: any) => {
        e.preventDefault();

        const data = {
          email: e.target.email.value,
          message: e.target.message.value,
        };

        await fetch("/api/contact", {
          method: "POST",
          body: JSON.stringify(data),
        });

        alert("Message sent.");
      }}
      className="space-y-4"
    >
      <input
        name="email"
        placeholder="Your email"
        className="w-full p-4 bg-black/50 border border-white/20 rounded-xl text-white"
      />

      <textarea
        name="message"
        placeholder="What do you need?"
        className="w-full p-4 bg-black/50 border border-white/20 rounded-xl text-white h-32"
      />

      <button className="w-full bg-white text-black py-4 rounded-full font-semibold">
        Send Message
      </button>
    </form>
  );
}