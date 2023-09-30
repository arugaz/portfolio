use yew::{function_component, html, use_state, Callback, Html};

use crate::{
  component::animate::{DivContent, SpanFade},
  data::contact::CONTACTS,
};

#[function_component(ContactPage)]
pub fn contact_page() -> Html {
  let open_modal = use_state(|| false);

  let set_open_modal = {
    let open_modal = open_modal.clone();
    Callback::from(move |_| {
      open_modal.set(match *open_modal {
        true => false,
        false => true,
      })
    })
  };

  html! {
    <main class="relative flex w-full flex-col items-center justify-evenly py-40 md:h-screen md:flex-row md:overflow-hidden">
      <SpanFade class="fixed left-0 -bottom-32 origin-top-left -rotate-90 text-9xl font-extrabold text-secondary-dark md:bottom-0 md:rotate-0">
        {"CONTACT"}
      </SpanFade>
      <DivContent class="relative my-10 w-9/12 text-right md:my-0 md:w-2/5">
        { for CONTACTS.iter().map(|contact| {
          html! {
            <a
              target="_blank"
              href={contact.url}
              rel="noreferrer noopener nofollow"
              class="my-4 flex justify-end fill-secondary-light transition-all duration-500 hover:fill-primary-light hover:text-primary-light">
              <div class="mr-8">
                <h4 class="text-base">{contact.name}</h4>
                <h3 class="text-sm font-extralight">{contact.value}</h3>
              </div>
              <div class="h-12 w-12">
                <svg
                  class="p-1"
                  role="img"
                  viewBox="0 0 24 24">
                  <path d={contact.svg} />
                </svg>
              </div>
            </a>
          }
        })}
      </DivContent>
      <DivContent class="relative my-10 w-9/12 md:my-0 md:w-1/3">
        <div class="relative w-full md:w-4/5">
          <form>
            <input
              type="text"
              name="name"
              class="mb-3 w-full rounded-md border border-secondary-light bg-primary-dark px-4 py-1 transition duration-500 ease-in-out placeholder:text-secondary-light hover:border-primary-light hover:bg-secondary-dark hover:text-primary-light hover:outline-none focus:border-primary-light focus:bg-secondary-dark focus:text-primary-light focus:outline-none"
              placeholder="Name"
              required={true}
            />
            <input
              type="email"
              name="email"
              class="mb-3 w-full rounded-md border border-secondary-light bg-primary-dark px-4 py-1 transition duration-500 ease-in-out placeholder:text-secondary-light hover:border-primary-light hover:bg-secondary-dark hover:text-primary-light hover:outline-none focus:border-primary-light focus:bg-secondary-dark focus:text-primary-light focus:outline-none"
              placeholder="Email"
              required={true}
            />
            <textarea
              name="message"
              class="mb-2 h-40 w-full rounded-md border border-secondary-light bg-primary-dark px-4 py-1 transition duration-500 ease-in-out placeholder:text-secondary-light hover:border-primary-light hover:bg-secondary-dark hover:text-primary-light hover:outline-none focus:border-primary-light focus:bg-secondary-dark focus:text-primary-light focus:outline-none"
              placeholder="Write your message..."
              required={true}
            />
            <button
              type="submit"
              class="w-full cursor-none rounded-md border border-secondary-light bg-primary-dark px-4 py-1 font-semibold transition duration-500 ease-in-out placeholder:text-secondary-light hover:border-primary-light hover:bg-secondary-dark hover:text-primary-light hover:outline-none focus:border-primary-light focus:bg-secondary-dark focus:text-primary-light focus:outline-none">
              { "Send Message" }
            </button>
          </form>

          <div class={&format!("absolute left-0 -top-12 flex w-full justify-center rounded-md border border-secondary-light bg-secondary-dark py-1 transition-all duration-500 md:-left-[80%]{}", if *open_modal { "" } else { " hidden" })}>
            // <p class="font-semibold text-primary-light">
            //   {messageAlert ? 'Message Sent!' : 'Sorry, Message Not Sent!'}
            // </p>
            <p
              class="absolute right-0 top-0 py-[3px] px-4 font-bold transition-all duration-500 hover:text-primary-light"
              onclick={set_open_modal}>
              {"x"}
            </p>
          </div>
        </div>
      </DivContent>
    </main>
  }
}
