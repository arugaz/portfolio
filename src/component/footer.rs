use yew::prelude::*;

#[function_component(Footer)]
pub fn footer() -> Html {
  html! {
   <footer class="fixed right-0 -bottom-20 z-40 flex w-full justify-end pb-28 md:bottom-0">
     <div class="flex w-1/2 items-baseline justify-end">
       <div class="flex w-full flex-col items-end md:w-2/3">
         <div class="h-1 rounded-tl-md rounded-bl-md bg-primary-light w-[40%]"></div>
         <div class="mt-1 h-1 rounded-tl-md rounded-bl-md bg-primary-light w-full"></div>
         <div class="mt-1 h-1 rounded-tl-md rounded-bl-md bg-primary-light w-[67%]"></div>
       </div>
     </div>
   </footer>
  }
}
