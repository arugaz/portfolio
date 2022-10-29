import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { contacts } from '@/data/contacts';
import { contentAnimation, fadeAnimation } from '@/data/animations';

const Contact = () => {
  const formRef = useRef();
  const [openModal, setOpenModal] = useState(false);
  const [messageAlert, setMessageAlert] = useState(false);

  const submitForm = async e => {
    e.preventDefault();
    try {
      const resp = await fetch('/api/contact-form', {
        method: 'POST',
        body: JSON.stringify({
          name: e.target.name.value,
          email: e.target.email.value,
          message: e.target.message.value,
        }),
      });

      if (resp.status !== 200) throw '';

      formRef.current.reset();
      setMessageAlert(true);
      setOpenModal(true);
    } catch {
      setMessageAlert(false);
      setOpenModal(true);
    }
  };

  return (
    <section className="relative flex w-full flex-col items-center justify-evenly py-40 md:h-screen md:flex-row md:overflow-hidden">
      <motion.span
        {...fadeAnimation}
        className="fixed left-0 -bottom-32 origin-top-left -rotate-90 text-9xl font-extrabold text-secondary-dark md:bottom-0 md:rotate-0">
        CONTACT
      </motion.span>

      <motion.div
        {...contentAnimation}
        className="relative my-10 w-9/12 text-right md:my-0 md:w-2/5">
        {contacts.map((contact, id) => (
          <a
            key={id}
            target="_blank"
            href={contact.url}
            rel="noreferrer noopener nofollow"
            className="my-4 flex justify-end fill-secondary-light transition-all duration-500 hover:fill-primary-light hover:text-primary-light">
            <div className="mr-8">
              <h4 className="text-base">{contact.name}</h4>
              <h3 className="text-sm font-extralight">{contact.value}</h3>
            </div>
            <div className="h-12 w-12">
              <svg
                className="p-1"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path d={contact.svg} />
              </svg>
            </div>
          </a>
        ))}
      </motion.div>

      <motion.div {...contentAnimation} className="relative my-10 w-9/12 md:my-0 md:w-1/3">
        <div className="relative w-full md:w-4/5">
          <form ref={formRef} onSubmit={submitForm}>
            <input
              type="text"
              name="name"
              className="mb-3 w-full rounded-md border border-secondary-light bg-primary-dark px-4 py-1 transition duration-500 ease-in-out placeholder:text-secondary-light hover:border-primary-light hover:bg-secondary-dark hover:text-primary-light hover:outline-none focus:border-primary-light focus:bg-secondary-dark focus:text-primary-light focus:outline-none"
              placeholder="Name"
              required
            />
            <input
              type="email"
              name="email"
              className="mb-3 w-full rounded-md border border-secondary-light bg-primary-dark px-4 py-1 transition duration-500 ease-in-out placeholder:text-secondary-light hover:border-primary-light hover:bg-secondary-dark hover:text-primary-light hover:outline-none focus:border-primary-light focus:bg-secondary-dark focus:text-primary-light focus:outline-none"
              placeholder="Email"
              required
            />
            <textarea
              name="message"
              className="mb-2 h-40 w-full rounded-md border border-secondary-light bg-primary-dark px-4 py-1 transition duration-500 ease-in-out placeholder:text-secondary-light hover:border-primary-light hover:bg-secondary-dark hover:text-primary-light hover:outline-none focus:border-primary-light focus:bg-secondary-dark focus:text-primary-light focus:outline-none"
              placeholder="Write your message..."
              required
            />
            <button
              type="submit"
              className="w-full cursor-none rounded-md border border-secondary-light bg-primary-dark px-4 py-1 font-semibold transition duration-500 ease-in-out placeholder:text-secondary-light hover:border-primary-light hover:bg-secondary-dark hover:text-primary-light hover:outline-none focus:border-primary-light focus:bg-secondary-dark focus:text-primary-light focus:outline-none">
              Send Message
            </button>
          </form>

          <div
            className={`absolute left-0 -top-12 flex w-full justify-center rounded-md border border-secondary-light bg-secondary-dark py-1 transition-all duration-500 md:-left-[80%] ${
              !openModal ? 'hidden' : ''
            }`}>
            <p className="font-semibold text-primary-light">
              {messageAlert ? 'Message Sent!' : 'Sorry, Message Not Sent!'}
            </p>
            <p
              className="absolute right-0 top-0 py-[3px] px-4 font-bold transition-all duration-500 hover:text-primary-light"
              onClick={() => setOpenModal(false)}>
              x
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
