use crate::data::project;
use crate::page::main::RouteApp;
use wasm_bindgen::{closure, JsCast};
use web_sys::{window, WheelEvent};
use yew::prelude::*;
use yew_router::prelude::*;

#[derive(Properties, PartialEq)]
pub struct Props {
  pub slug: String,
}

#[function_component(WorksListPage)]
pub fn works_list_page(props: &Props) -> Html {
  let myproject = project::PROJECTS
    .iter()
    .find(|project| project.slug == props.slug);
  match myproject {
    Some(project) => {
      html! {
        <main class="relative flex w-full items-center justify-center py-40 md:h-screen">
          <span class="fixed left-0 -bottom-32 origin-top-left -rotate-90 text-9xl font-extrabold text-secondary-dark md:bottom-0 md:rotate-0">
            {"WORKS"}
          </span>
          <div class="relative flex w-72 flex-col rounded-xl bg-primary-light p-2 md:w-3/4 md:flex-row md:justify-between">
            <div class="mb-3 w-full overflow-hidden rounded-lg md:mb-0 md:w-[480px]">
              <div class="relative mb-[6px] h-44 w-full md:h-[294px]">
                <img
                  src={format!("/images/projects/{}", project.img)}
                  alt={project.title}
                  class="relative"
                />
              </div>
              <div class="flex w-full justify-between bg-primary-dark text-center font-semibold text-primary-light">
                <a href={project.demo_url} target="_blank" rel="noreferrer noopener nofollow" class="w-[238px] rounded-bl-lg border-2 border-primary-dark py-1 transition-all duration-500 hover:bg-primary-light hover:text-primary-dark">
                  <span>{"View Demo"}</span>
                </a>
                <div class="w-[5px] bg-primary-light"></div>
                <a href={project.source_url} target="_blank" rel="noreferrer noopener nofollow" class="w-[238px] rounded-bl-lg border-2 border-primary-dark py-1 transition-all duration-500 hover:bg-primary-light hover:text-primary-dark">
                  <span>{"Source Code"}</span>
                </a>
              </div>
            </div>
            <div class="h-2 w-full rounded-lg bg-primary-dark md:h-auto md:w-2"></div>
            <div class="mt-3 flex w-full flex-col justify-center overflow-hidden rounded-lg bg-primary-dark p-5 md:mt-0 md:w-[480px]">
              <h2 class="relative mb-5 text-center text-4xl text-primary-light md:text-5xl">
                {project.title}
              </h2>
              <p class="relative text-justify">{project.desc}</p>
            </div>
          </div>
        </main>
      }
    }
    None => {
      html! {
        <Redirect<RouteApp> to={RouteApp::NotFound}/>
      }
    }
  }
}

#[function_component(WorksPage)]
pub fn works_page() -> Html {
  let wheel = use_state(|| 0.);
  let on_wheel_move = {
    let wheel = wheel.clone();

    move |_: WheelEvent| {
      let y = window().unwrap().scroll_y().unwrap();

      wheel.set(y);
    }
  };

  use_effect_with_deps(
    move |_| {
      let wheel_move_cb = closure::Closure::wrap(Box::new(on_wheel_move) as Box<dyn FnMut(_)>);
      window()
        .unwrap()
        .add_event_listener_with_callback("scroll", wheel_move_cb.as_ref().unchecked_ref())
        .unwrap();
      wheel_move_cb.forget();
    },
    (),
  );

  html! {
    <main class="relative flex h-[450vh] items-center justify-center">
      <span class="fixed left-0 -bottom-32 origin-top-left -rotate-90 text-9xl font-extrabold text-secondary-dark md:bottom-0 md:rotate-0">
        {"WORKS"}
      </span>
      <div class="fixed left-1/2 top-[30%] flex md:left-1/4" style={format!("transform: translateX(-{}px);", *wheel)}>
        {for project::PROJECTS.iter().map(|work| {
          html! {
            <div id={work.slug}>
              <div class="mx-12 flex w-72 flex-col items-center justify-center rounded-md border-4 border-primary-light bg-primary-light p-[2px]">
                <a href={format!("/works/{}", work.slug)} class="relative h-44 w-full overflow-hidden rounded-md bg-primary-dark">
                  <span><img alt={work.title} src={format!("/images/projects/{}", work.img)} class="relative transition-all duration-500 hover:scale-125" /></span>
                </a>
                <div class="py-2 text-xl font-medium text-primary-dark">{work.title}</div>
                <div class="flex w-full justify-between px-3 pt-1 pb-4">
                  <a href={work.demo_url} target="_blank" rel="noreferrer noopener nofollow">
                    <span class="rounded-md border-2 border-primary-dark px-3 py-2 font-semibold text-primary-dark transition-all duration-500 hover:bg-primary-dark hover:text-primary-light">
                      {"View Demo"}
                    </span>
                  </a>
                  <a href={work.source_url} target="_blank" rel="noreferrer noopener nofollow">
                    <span class="rounded-md border-2 border-primary-dark px-3 py-2 font-semibold text-primary-dark transition-all duration-500 hover:bg-primary-dark hover:text-primary-light">
                      {"Source Code"}
                    </span>
                  </a>
                </div>
              </div>
            </div>
          }
        })}
      </div>
      <div class="fixed top-0 -right-1 h-screen w-1/12 bg-primary-dark"></div>
      <div class="fixed top-0 -left-1 hidden h-3/4 w-1/12 bg-primary-dark md:block"></div>
      <div class="fixed bottom-40 flex flex-col items-center">
        <span class="text-primary-light">
          {"Scroll"}
        </span>
        <div class="absolute top-6 h-4 w-4 rotate-45 rounded border-b-4 border-r-4 border-secondary-light"></div>
        <div class="absolute top-6 h-7 w-7 rotate-45 rounded border-b-4 border-r-4 border-primary-light"></div>
      </div>
    </main>
  }
}
