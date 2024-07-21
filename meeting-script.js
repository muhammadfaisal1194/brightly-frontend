const modeBtn = document.getElementById("mode");

// Function to set the data-url dynamically
function setCalendlyUrl(url) {
  const calendalyNode = document.querySelector("#calendly-widget");
  const existingWidget = document.querySelector(".calendly-inline-widget");

  if (existingWidget) {
    // Optionally remove or clear the existing widget
    existingWidget.parentNode.removeChild(existingWidget);
  }

  // Create a new widget element
  const newWidget = document.createElement("div");
  newWidget.className =
    "calendly-inline-widget grow p-0 mt-10 lg:mt-0 h-[600px] md:h-[700px]";
  newWidget.setAttribute("data-url", url);

  // Append the new widget to the DOM
  calendalyNode.appendChild(newWidget);
  // existingWidget.parentNode.appendChild(newWidget);

  // Re-initialize the Calendly widget
  Calendly.initInlineWidget({
    url: url,
    parentElement: newWidget,
    prefill: {},
    utm: {},
  });
}

modeBtn.onchange = (e) => {
  if (modeBtn.checked === true) {
    document.documentElement.classList.remove("light");
    document.documentElement.classList.add("dark");
    window.localStorage.setItem("mode", "dark");

    //handle calendaly styles
    const newUrl = `https://calendly.com/join-brightly/30min?background_color=1a1a1a&text_color=ffffff&hide_event_type_details=1&hide_gdpr_banner=1`;
    setCalendlyUrl(newUrl);

    // text-col-btn;
    const element4 = document.getElementById("textcol");
    element4.classList.add("darktextcol-btn");
    element4.classList.remove("lighttextcol-btn");
    // text-col1-btn;
    const element5 = document.getElementById("textcol1");
    element5.classList.add("darktextcol1-btn");
    element5.classList.remove("lighttextcol1-btn");
  } else {
    document.documentElement.classList.remove("dark");
    document.documentElement.classList.add("light");
    window.localStorage.setItem("mode", "light");

    const newUrl = `https://calendly.com/join-brightly/30min?hide_event_type_details=1&hide_gdpr_banner=1`;
    setCalendlyUrl(newUrl);

    const element4 = document.getElementById("textcol");
    element4.classList.add("lighttextcol-btn");
    element4.classList.remove("darktextcol-btn");
    // text-col1;

    const element5 = document.getElementById("textcol1");
    element5.classList.add("lighttextcol1-btn");
    element5.classList.remove("darktextcol1-btn");
  }
};

const mode = window.localStorage.getItem("mode") || "light";
if (mode == "dark") {
  modeBtn.checked = true;
  document.documentElement.classList.remove("light");
  document.documentElement.classList.add("dark");

  const newUrl = `https://calendly.com/join-brightly/30min?background_color=1a1a1a&text_color=ffffff&hide_event_type_details=1&hide_gdpr_banner=1`;
  setCalendlyUrl(newUrl);

  const element4 = document.getElementById("textcol");
  element4.classList.add("darktextcol-btn");
  element4.classList.remove("lighttextcol-btn");
  // text-col1;
  const element5 = document.getElementById("textcol1");
  element5.classList.add("darktextcol1-btn");
  element5.classList.remove("lighttextcol1-btn");
}

if (mode == "light") {
  modeBtn.checked = false;
  document.documentElement.classList.remove("dark");
  document.documentElement.classList.add("light");

  const newUrl = `https://calendly.com/join-brightly/30min?hide_event_type_details=1&hide_gdpr_banner=1`;
  setCalendlyUrl(newUrl);

  const element4 = document.getElementById("textcol");
  element4.classList.add("lighttextcol-btn");
  element4.classList.remove("darktextcol-btn");
  // text-col1;
  const element5 = document.getElementById("textcol1");
  element5.classList.add("lighttextcol1-btn");
  element5.classList.remove("darktextcol1-btn");

  // switcher
  const element14 = document.getElementById("svg5btn");
  element14.classList.add("lightsvg5-btn");
  element14.classList.remove("darksvg5-btn");
  // switcher;
  const element15 = document.getElementById("svg6btn");
  element15.classList.add("lightsvg6-btn");
  element15.classList.remove("darksvg6-btn");
}
