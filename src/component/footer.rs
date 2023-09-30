use crate::component::animate::{FooterFade, Line};
use yew::{function_component, html, Html};

#[function_component(Footer)]
pub fn footer() -> Html {
  html! {
   <FooterFade class="fixed right-0 -bottom-20 z-40 flex w-full justify-end pb-28 md:bottom-0">
     <div class="flex w-1/2 items-baseline justify-end">
       <div class="flex w-full flex-col items-end md:w-2/3">
         <Line width="40%" class="h-1 rounded-tl-md rounded-bl-md bg-primary-light" />
         <Line width="100%" class="mt-1 h-1 rounded-tl-md rounded-bl-md bg-primary-light" />
         <Line width="67%" class="mt-1 h-1 rounded-tl-md rounded-bl-md bg-primary-light" />
       </div>
     </div>
   </FooterFade>
  }
}
