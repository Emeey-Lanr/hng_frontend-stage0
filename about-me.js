
const test = () => {
  let ids = [
    "test-about-page",
    "test-about-bio",
    "test-about-bio",
    "test-about-goals",
    "test-about-confidence",
    "test-about-future-note",
    "test-about-extra",
  ];

  for (let i = 0; i < ids.length; i++) {
    const element = document.querySelector(`[data-testid="${ids[i]}"]`);

    if (element) {
      console.log(`found`, ids[i]);
    } else {
      console.error("Not found", ids[i]);
    }
  }
};

test();