use crate::{component, page};
use wasm_bindgen::{closure, JsCast};
use web_sys::{window, MouseEvent};
use yew::prelude::*;
use yew_hooks::use_timeout;
use yew_router::prelude::*;

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
  #[not_found]
  #[at("/404")]
  NotFound,
}

pub fn switch(routes: RouteApp) -> Html {
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
    RouteApp::NotFound => html! { <h1>{ "404" }</h1> },
  }
}

#[function_component]
pub fn App() -> Html {
  let current_path = window().unwrap().location().pathname().unwrap();
  let loading = use_state(|| true);
  let mouse = use_state(|| (-150, -50));

  {
    let loading = loading.clone();
    use_timeout(
      move || {
        loading.set(match *loading {
          true => false,
          false => true,
        });
      },
      950,
    );
  };

  let on_mouse_move = {
    let mouse = mouse.clone();

    move |event: MouseEvent| {
      let x = event.client_x();
      let y = event.client_y();

      mouse.set((x - 14, y - 14));
    }
  };

  use_effect_with_deps(
    move |_| {
      let mouse_move_cb = closure::Closure::wrap(Box::new(on_mouse_move) as Box<dyn FnMut(_)>);
      window()
        .unwrap()
        .add_event_listener_with_callback("mousemove", mouse_move_cb.as_ref().unchecked_ref())
        .unwrap();
      mouse_move_cb.forget();
    },
    0,
  );

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
