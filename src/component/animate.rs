use gloo::timers::callback::Timeout;
use web_sys::HtmlElement;
use yew::{function_component, html, use_node_ref, Children, Html, Properties};

#[derive(Properties, PartialEq)]
pub struct LineProps {
  pub width: &'static str,
  pub class: &'static str,
  #[prop_or_default]
  pub children: Children,
}

#[function_component(Line)]
pub fn line(props: &LineProps) -> Html {
  let div_ref = use_node_ref();

  {
    let div_ref = div_ref.clone();
    let width = props.width;
    Timeout::new(50, move || {
      if let Some(div) = div_ref.cast::<HtmlElement>() {
        div.style().set_property("width", width).unwrap();
      }
    })
    .forget();
  }

  html! {
    <div ref={div_ref} class={props.class} style="width: 0;transition: width 1s;">
      { for props.children.iter() }
    </div>
  }
}

#[derive(Properties, PartialEq)]
pub struct CardProps {
  pub transform: Option<&'static str>,
  pub class: &'static str,
  #[prop_or_default]
  pub children: Children,
}

#[function_component(WorkCard)]
pub fn work_card(props: &CardProps) -> Html {
  let div_ref = use_node_ref();

  {
    let div_ref = div_ref.clone();
    Timeout::new(50, move || {
      if let Some(div) = div_ref.cast::<HtmlElement>() {
        div.style().set_property("opacity", "1").unwrap();
        div
          .style()
          .set_property("transform", "translateX(0)")
          .unwrap();
      }
    })
    .forget();
  }

  html! {
    <div ref={div_ref} class={&format!("{} opacity-0 transform translate-x-40 transition-opacity duration-500 ease-in-out transition-transform", props.class)}>
      { for props.children.iter() }
    </div>
  }
}

#[function_component(HomeCard)]
pub fn home_card(props: &CardProps) -> Html {
  let div_ref = use_node_ref();

  {
    let div_ref = div_ref.clone();
    let transform = props.transform.unwrap();
    Timeout::new(50, move || {
      if let Some(div) = div_ref.cast::<HtmlElement>() {
        div.style().set_property("transform", transform).unwrap();
      }
    })
    .forget();
  }

  html! {
    <div ref={div_ref} class={&format!("{} transform transition-transform duration-1000 origin-center", props.class)}>
      { for props.children.iter() }
    </div>
  }
}

#[derive(Properties, PartialEq)]
pub struct Props {
  pub class: &'static str,
  #[prop_or_default]
  pub children: Children,
}

#[function_component(FooterFade)]
pub fn fade_footer(props: &Props) -> Html {
  let footer_ref = use_node_ref();

  {
    let footer_ref = footer_ref.clone();
    Timeout::new(50, move || {
      if let Some(footer) = footer_ref.cast::<HtmlElement>() {
        footer.style().set_property("opacity", "1").unwrap();
        footer
          .style()
          .set_property("--tw-translate-y", "0rem")
          .unwrap();
      }
    })
    .forget();
  }

  html! {
    <footer ref={footer_ref} class={&format!("{} opacity-0 transform translate-y-5 transition-opacity duration-700", props.class)}>
      { for props.children.iter()}
    </footer>
  }
}

#[function_component(HeaderFade)]
pub fn fade_header(props: &Props) -> Html {
  let header_ref = use_node_ref();

  {
    let header_ref = header_ref.clone();
    Timeout::new(50, move || {
      if let Some(header) = header_ref.cast::<HtmlElement>() {
        header.style().set_property("opacity", "1").unwrap();
        header
          .style()
          .set_property("--tw-translate-y", "0rem")
          .unwrap();
      }
    })
    .forget();
  }

  html! {
    <header ref={header_ref} class={&format!("{} opacity-0 transform translate-y-5 transition-opacity duration-700", props.class)}>
      { for props.children.iter()}
    </header>
  }
}

#[function_component(SpanFade)]
pub fn fade_span(props: &Props) -> Html {
  let span_ref = use_node_ref();

  {
    let span_ref = span_ref.clone();
    Timeout::new(50, move || {
      if let Some(span) = span_ref.cast::<HtmlElement>() {
        span.style().set_property("opacity", "1").unwrap();
        span
          .style()
          .set_property("--tw-translate-y", "0rem")
          .unwrap();
      }
    })
    .forget();
  }

  html! {
    <span ref={span_ref} class={&format!("{} opacity-0 transform translate-y-5 transition-opacity duration-700", props.class)}>
      { for props.children.iter() }
    </span>
  }
}

#[function_component(DivContent)]
pub fn div_content(props: &Props) -> Html {
  let div_ref = use_node_ref();

  {
    let div_ref = div_ref.clone();
    Timeout::new(350, move || {
      if let Some(div) = div_ref.cast::<HtmlElement>() {
        div.style().set_property("opacity", "1").unwrap();
        div
          .style()
          .set_property("transform", "translateY(0)")
          .unwrap();
      }
    })
    .forget();
  }

  html! {
    <div ref={div_ref} class={&format!("{} opacity-0 transform translate-y-30 transition-opacity duration-1000 ease-in-out transition-transform", props.class)}>
      { for props.children.iter() }
    </div>
  }
}

#[function_component(SectionContent)]
pub fn section_content(props: &Props) -> Html {
  let section_ref = use_node_ref();

  {
    let section_ref = section_ref.clone();
    Timeout::new(350, move || {
      if let Some(section) = section_ref.cast::<HtmlElement>() {
        section.style().set_property("opacity", "1").unwrap();
        section
          .style()
          .set_property("transform", "translateY(0)")
          .unwrap();
      }
    })
    .forget();
  }

  html! {
    <section ref={section_ref} class={&format!("{} opacity-0 transform translate-y-30 transition-opacity duration-1000 ease-in-out transition-transform", props.class)}>
      { for props.children.iter() }
    </section>
  }
}
