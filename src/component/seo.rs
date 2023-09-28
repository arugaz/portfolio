use crate::data::{page, project};
use web_sys::window;
use yew::prelude::*;

#[derive(Properties, PartialEq)]
pub struct Props {
  pub path: String,
  #[prop_or_default]
  pub children: Children,
}

#[function_component(Seo)]
pub fn seo(props: &Props) -> Html {
  let document = window().unwrap().document().unwrap();

  let mut title = page::PAGES
    .iter()
    .find(|page| page.path == props.path)
    .map(|page| page.title)
    .unwrap_or("");
  if title == "" {
    title = project::PROJECTS
      .iter()
      .find(|project| project.slug == props.path)
      .map(|project| project.title)
      .unwrap_or("");
  }
  document.set_title(&format!("ArugaZ - {}", title));

  let desc = document
    .query_selector("meta[name='description']")
    .unwrap()
    .unwrap();
  let mut description = page::PAGES
    .iter()
    .find(|page| page.path == props.path)
    .map(|page| page.desc)
    .unwrap_or("");
  if description == "" {
    description = project::PROJECTS
      .iter()
      .find(|project| project.slug == props.path)
      .map(|project| project.desc)
      .unwrap_or("");
  }
  desc.set_attribute("content", description).unwrap();

  html! {
    <>
    { for props.children.iter() }
    </>
  }
}
