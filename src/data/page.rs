pub struct Page {
  pub path: &'static str,
  pub title: &'static str,
  pub desc: &'static str,
}

pub const PAGES: [Page; 4] = [
  Page {
      path: "/",
      title: "Home",
      desc: "ArugaZ is one of the developers from Indonesia. My name is Arga Astri Bimantara, feel free to say hi.",
  },
  Page {
      path: "/about",
      title: "About",
      desc: "My name is Arga Astri Bimantara, you can call me Aruga. I was born in Jakarta, Indonesia.",
  },
  Page {
      path: "/works",
      title: "Works",
      desc: "List of works that I am involved in...",
  },
  Page {
      path: "/contact",
      title: "Contact",
      desc: "Have a question? Drop us a note here and I will be in touch soon....",
  },
];
