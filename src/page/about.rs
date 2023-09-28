use crate::data::techstuff;
use yew::prelude::*;

#[function_component(AboutPage)]
pub fn about_page() -> Html {
  html! {
    <main class="relative flex w-full flex-col items-center justify-evenly py-40 md:h-screen md:flex-row md:overflow-hidden">
      <span class="fixed left-0 -bottom-32 origin-top-left -rotate-90 text-9xl font-extrabold text-secondary-dark md:bottom-0 md:rotate-0">
          {"ABOUT"}
      </span>
      <div class="relative order-2 flex w-3/4 flex-col items-end justify-end md:order-1 md:w-1/3">
        <div class="my-5 mr-2 text-left font-semibold text-primary-light">{ "Tech Stuff" }</div>
        <div class="flex w-4/5 flex-wrap justify-evenly">
          {for techstuff::TECH_STUFF.iter().map(|skill| {
            html! {
              <div class="my-2 ml-4 h-14 w-14 rounded-lg fill-secondary-light transition-all duration-500 hover:bg-secondary-dark hover:fill-primary-light">
                <svg id={skill.name}  class="p-2" role="img" viewBox="0 0 24 24">
                  <path d={skill.svg} />
                </svg>
              </div>
            }
          })}
        </div>
      </div>
      <section class="relative order-1 my-10 w-3/4 md:order-2 md:my-0 md:w-1/4">
        <p class="text-md mb-4 text-justify text-base font-light">
          {"My name is Arga Astri Bimantara, you can call me Aruga. I was born in Jakarta,
          Indonesia. I am a 17yo programmer, hope you all have good day \u{1f601}"}
        </p>
        <ul class="list-inside list-disc">
          <li class="text-md font-light text-primary-light">
            { "I \u{1f49d} to learn, develop and experiment with programs and awesome things on internet." }
          </li>
          <li class="text-md font-light text-primary-light">
            { "I \u{1f49d} to watch anime, read comics, and be a cosplayer." }
          </li>
          <li class="text-md font-light text-primary-light">
            { "I \u{1f49d} to connect with more people." }
          </li>
        </ul>
      </section>
    </main>
  }
}
