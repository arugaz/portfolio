use yew::prelude::*;

#[function_component(HomePage)]
pub fn home_page() -> Html {
  html! {
    <main class="relative flex w-full flex-col items-center justify-evenly py-40 md:h-screen md:flex-row md:overflow-hidden">
      <span class="fixed left-0 -bottom-32 origin-top-left -rotate-90 text-9xl font-extrabold text-secondary-dark md:bottom-0 md:rotate-0">
          {"HOME"}
      </span>
      <div class="relative order-2 flex w-1/2 justify-end md:order-1 md:w-1/3">
          <div class="absolute mt-20 h-64 w-full rounded-xl bg-[#464646] md:h-72 md:w-64 lg:h-80 transform rotate-[-12deg]"></div>
          <div class="absolute mt-20 h-64 w-full rounded-xl bg-secondary-light md:h-72 md:w-64 lg:h-80 transform rotate-[-3deg]"></div>
          <div class="relative mt-20 h-64 w-full rounded-xl bg-primary-light md:h-72 md:w-64 lg:h-80 transform rotate-[2deg]">
            <div class="relative flex h-full w-full items-center justify-center overflow-hidden rounded-xl">
              <img
                src="/images/pages/profile.jpg"
                alt="Arga Astri Bimantara"
                class="relative rounded-full"
              />
            </div>
        </div>
      </div>
      <section class="relative order-1 w-1/3 md:order-2">
        <h3 class="-mb-5 text-base font-normal">
          {"Hi there! i'm..."}
        </h3>
        <h3 class="-ml-1 text-7xl font-bold text-primary-light">
          {"arugaz"}
        </h3>
        <p class="text-base font-light transition-all duration-500 hover:text-primary-light">
          {"kobeni's husband"}
        </p>
      </section>
    </main>
  }
}
