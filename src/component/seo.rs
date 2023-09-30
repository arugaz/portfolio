use crate::data::{page::PAGES, project::PROJECTS};
use gloo::utils::document;
use yew::{function_component, html, Children, Html, Properties};

#[derive(Properties, PartialEq)]
pub struct Props {
  pub path: String,
  #[prop_or_default]
  pub children: Children,
}

#[function_component(Seo)]
pub fn seo(props: &Props) -> Html {
  let (title, description) = find_title_and_description(&props.path);
  set_seo_properties(&title, &description);

  html! {
    <>
    { for props.children.iter() }
    </>
  }
}

fn find_title_and_description(path: &str) -> (&str, &str) {
  let (title, description) = PAGES
    .iter()
    .find(|page| page.path == path)
    .map(|page| ((page.title), (page.desc)))
    .unwrap_or_else(|| {
      PROJECTS
        .iter()
        .find(|project| path.contains(&project.slug))
        .map(|project| ((project.title), (project.desc)))
        .unwrap_or_else(|| (("404"), ("Page not found.")))
    });

  (title, description)
}

fn set_seo_properties(title: &str, description: &str) {
  document().set_title(&format!("ArugaZ - {}", &title));

  if let Some(desc) = document()
    .query_selector("meta[name='description']")
    .unwrap()
  {
    desc.set_attribute("content", &description).unwrap();
  }
}
