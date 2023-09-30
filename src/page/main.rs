use crate::{component, page};
use gloo::{timers::callback::Timeout, utils::window};
use wasm_bindgen::{closure, JsCast};
use web_sys::MouseEvent;
use yew::{function_component, html, use_effect_with, use_state, Html};
use yew_router::{BrowserRouter, Routable, Switch};

#[derive(Clone, Routable, PartialEq)]
pub enum RouteApp {
  #[at("/")]
  Home,
  #[at("/about")]
  About,
  #[at("/works")]
  Works,
  #[at("/works/:slug")]
  WorksList { slug: String },
  #[at("/contact")]
  Contact,
  #[not_found]
  #[at("/404")]
  NotFound,
}

fn switch(routes: RouteApp) -> Html {
  match routes {
    RouteApp::Home => html! {
     <page::home::HomePage />
    },
    RouteApp::About => html! {
     <page::about::AboutPage />
    },
    RouteApp::Works => html! {
     <page::works::WorksPage />
    },
    RouteApp::WorksList { slug } => html! {
    <page::works::WorksListPage slug={slug} />
    },
    RouteApp::Contact => html! {
     <page::contact::ContactPage />
    },
    RouteApp::NotFound => html! { <h1>{ "404" }</h1> },
  }
}

#[function_component]
pub fn App() -> Html {
  let current_path = window().location().pathname().unwrap();
  let loading = use_state(|| true);
  let mouse = use_state(|| (-150, -50));

  {
    let loading = loading.clone();
    Timeout::new(950, move || loading.set(false)).forget();
  };

  let on_mouse_move = {
    let mouse = mouse.clone();

    move |event: MouseEvent| {
      let x = event.client_x();
      let y = event.client_y();

      mouse.set((x - 14, y - 14));
    }
  };

  use_effect_with((), move |_| {
    let mouse_move_cb = closure::Closure::wrap(Box::new(on_mouse_move) as Box<dyn FnMut(_)>);
    window()
      .add_event_listener_with_callback("mousemove", mouse_move_cb.as_ref().unchecked_ref())
      .unwrap();
    mouse_move_cb.forget();
  });

  html! {
    <BrowserRouter>
      <component::seo::Seo path={current_path.clone()}>
        if *loading {
          <component::loading::Loading />
        } else {
          <component::header::Header path={current_path.clone()}/>
          <Switch<RouteApp> render={switch} />
          <component::footer::Footer />
          <div class="pointer-events-none fixed left-0 top-0 z-50 h-7 w-7 rounded-full bg-primary-light" style={format!("transform: translateX({}px) translateY({}px) translateZ(0px); mix-blend-mode: exclusion;", mouse.0, mouse.1)}></div>
        }
      </component::seo::Seo>
    </BrowserRouter>
  }
}
