use crate::data::page;
use yew::prelude::*;

#[derive(Properties, PartialEq)]
pub struct Props {
  pub path: String,
}

#[function_component(Header)]
pub fn header(props: &Props) -> Html {
  let close = use_state(|| true);

  let set_close = {
    let close = close.clone();
    move |_| {
      close.set(match *close {
        true => false,
        false => true,
      });
    }
  };

  html! {
    <header class="fixed left-0 -top-12 z-40 flex w-full justify-between pt-24 md:top-0">
      <div class="flex w-1/2 items-baseline">
        <div class="w-3/5 md:w-2/5">
          <div class="mb-1 h-1 rounded-tr-md rounded-br-md bg-primary-light w-1/4"></div>
          <div class="mb-1 h-1 rounded-tr-md rounded-br-md bg-primary-light w-full"></div>
          <div class="h-1 rounded-tr-md rounded-br-md bg-primary-light w-[67%]"></div>
        </div>
      </div>
      <div class="relative flex w-1/2 flex-col items-end justify-end md:flex-row">
        <div onclick={set_close} class="mr-12 flex w-8 cursor-pointer flex-col items-end md:hidden">
          <div class={format!("my-[3px] h-1 w-1/2 rounded-md bg-white transition-all duration-300{}", if *close { "" } else { "  !w-full origin-top-right -rotate-45" })}></div>
          <div class={format!("my-[3px] h-1 w-full rounded-md bg-white transition-all duration-300{}", if *close { "" } else { " -mr-10 scale-0" })}></div>
          <div class={format!("my-[3px] h-1 w-2/3 rounded-md bg-white transition-all duration-300{}", if *close { "" } else { " !w-full origin-top-right -rotate-45" })}></div>
        </div>
        <div class="absolute top-12 right-0 md:relative md:top-0 md:mr-10 md:w-11/12 lg:mr-40 lg:w-1/2">
          <nav class={format!("flex flex-col justify-evenly rounded-md bg-secondary-dark bg-opacity-75 p-5 font-medium backdrop-blur-md transition-all duration-300 md:mr-0 md:w-full md:flex-row md:rounded-none md:bg-transparent md:p-0 md:backdrop-blur-none{}", if *close { " -mr-96" } else { " mr-12" })}>
            {for page::PAGES.iter().map(|link| {
              html! {
                <a href={link.path} class={format!("transition-all duration-500 hover:text-primary-light{}", if link.path == props.path { " text-primary-light" } else { "" } )}>
                  {link.title}
                </a>
              }
            })}
          </nav>
        </div>
      </div>
    </header>
  }
}
