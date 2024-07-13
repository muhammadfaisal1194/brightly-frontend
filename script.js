const modeBtn = document.getElementById("mode");

modeBtn.onchange = (e) => {
  if (modeBtn.checked === true) {
    document.documentElement.classList.remove("light");
    document.documentElement.classList.add("dark");
    window.localStorage.setItem("mode", "dark");

    // email-btn;
    const element = document.getElementById("email-btn");
    element.classList.add("dark-btn");
    element.classList.remove("light-btn");
    // svg-btn;
    const element1 = document.getElementById("svg-btn");
    element1.classList.add("darksvg-btn");
    element1.classList.remove("lightsvg-btn");
    // flower - btn;
    const element2 = document.getElementById("flower");
    element2.classList.add("darkflower-btn");
    element2.classList.remove("lightflower-btn");
    // textcolor-btn;
    const element3 = document.getElementById("textcolor");
    element3.classList.add("darktextcolor-btn");
    element3.classList.remove("lighttextcolor-btn");
    // text-col-btn;
    const element4 = document.getElementById("textcol");
    element4.classList.add("darktextcol-btn");
    element4.classList.remove("lighttextcol-btn");
    // text-col1-btn;
    const element5 = document.getElementById("textcol1");
    element5.classList.add("darktextcol1-btn");
    element5.classList.remove("lighttextcol1-btn");
    // boxshadow-btn;
    const element6 = document.getElementById("boxshadow");
    element6.classList.add("darkboxshadow-btn");
    element6.classList.remove("lightboxshadow-btn");
    // text-col2;
    const element7 = document.getElementById("textcol2");
    element7.classList.add("darktextcol2-btn");
    element7.classList.remove("lighttextcol2-btn");
    //text-col3;
    const element8 = document.getElementById("textcol3");
    element8.classList.add("darktextcol3-btn");
    element8.classList.remove("lighttextcol3-btn");
    // text-col4;
    const element9 = document.getElementById("textcol4");
    element9.classList.add("darktextcol4-btn");
    element9.classList.remove("lighttextcol4-btn");
    // svg1-btn;
    const element10 = document.getElementById("svg1btn");
    element10.classList.add("darksvg1-btn");
    element10.classList.remove("lightsvg1-btn");
    // svg2-btn;
    const element11 = document.getElementById("svg2btn");
    element11.classList.add("darksvg2-btn");
    element11.classList.remove("lightsvg2-btn");
    // svg3-btn;
    const element12 = document.getElementById("svg3btn");
    element12.classList.add("darksvg3-btn");
    element12.classList.remove("lightsvg3-btn");
    // svg4-btn;
    const element13 = document.getElementById("svg4btn");
    element13.classList.add("darksvg4-btn");
    element13.classList.remove("lightsvg4-btn");
    // logo-btn;
    // const element14 = document.getElementById("logo");
    // element14.classList.add("darklogo-btn");
    // element14.classList.remove("lightlogo-btn");
    // console.log(element14);

    // logo2-btn;
    // const element16 = document.getElementById("logo2");
    // element16.classList.add("darklogo2-btn");
    // element16.classList.remove("lightlogo2-btn");
    // console.log(element16);
  } else {
    document.documentElement.classList.remove("dark");
    document.documentElement.classList.add("light");
    window.localStorage.setItem("mode", "light");

    // email-btn;

    const element = document.getElementById("email-btn");
    element.classList.add("light-btn");
    element.classList.remove("dark-btn");
    // svg-btn;

    const element1 = document.getElementById("svg-btn");
    element1.classList.add("lightsvg-btn");
    element1.classList.remove("darksvg-btn");
    // flower-btn;

    const element2 = document.getElementById("flower");
    element2.classList.add("lightflower-btn");
    element2.classList.remove("darkflower-btn");
    // textcolor;

    const element3 = document.getElementById("textcolor");
    element3.classList.add("lighttextcolor-btn");
    element3.classList.remove("darktextcolor-btn");
    // text-col;

    const element4 = document.getElementById("textcol");
    element4.classList.add("lighttextcol-btn");
    element4.classList.remove("darktextcol-btn");
    // text-col1;

    const element5 = document.getElementById("textcol1");
    element5.classList.add("lighttextcol1-btn");
    element5.classList.remove("darktextcol1-btn");
    // boxshadow;

    const element6 = document.getElementById("boxshadow");
    element6.classList.add("lightboxshadow-btn");
    element6.classList.remove("darkboxshadow-btn");
    // textcol2;

    const element7 = document.getElementById("textcol2");
    element7.classList.add("lighttextcol2-btn");
    element7.classList.remove("darktextcol2-btn");
    // textcol3;

    const element8 = document.getElementById("textcol3");
    element8.classList.add("lighttextcol3-btn");
    element8.classList.remove("darktextcol3-btn");
    // textcol4;

    // const element9 = document.getElementById("textcol4");
    // element9.classList.add("lighttextcol4-btn");
    // element9.classList.remove("darktextcol4-btn");
    // svg1-btn;

    const element10 = document.getElementById("svg1btn");
    element10.classList.add("lightsvg1-btn");
    element10.classList.remove("darksvg1-btn");
    // svg2-btn;

    // const element11 = document.getElementById("svg2btn");
    // element11.classList.add("lightsvg2-btn");
    // element11.classList.remove("darksvg2-btn");
    // svg3-btn;

    const element12 = document.getElementById("svg3btn");
    element12.classList.add("lightsvg3-btn");
    element12.classList.remove("darksvg3-btn");
    // svg4-btn;
    const element13 = document.getElementById("svg4btn");
    element13.classList.add("lightsvg4-btn");
    element13.classList.remove("darksvg4-btn");
    // logo-btn;
    // const element14 = document.getElementById("logo");
    // element14.classList.add("lightlogo-btn");
    // element14.classList.remove("darklogo-btn");
    // console.log(element14);

    // logo2-btn;
    // const element16 = document.getElementById("logo2");
    // element16.classList.add("lightlogo2-btn");
    // element16.classList.remove("darklogo2-btn");
    // console.log(element16);
  }
};

const mode = window.localStorage.getItem("mode") || "light";
if (mode == "dark") {
  modeBtn.checked = true;
  document.documentElement.classList.remove("light");
  document.documentElement.classList.add("dark");

  // email-btn;
  const element = document.getElementById("email-btn");
  element.classList.add("dark-btn");
  element.classList.remove("light-btn");
  // svg-btn;
  const element1 = document.getElementById("svg-btn");
  element1.classList.add("darksvg-btn");
  element1.classList.remove("lightsvg-btn");
  // flower-btn;
  const element2 = document.getElementById("flower");
  element2.classList.add("darkflower-btn");
  element2.classList.remove("lightflower-btn");
  // textcolor;
  const element3 = document.getElementById("textcolor");
  element3.classList.add("darktextcolor-btn");
  element3.classList.remove("lighttextcolor-btn");
  // text-col;
  const element4 = document.getElementById("textcol");
  element4.classList.add("darktextcol-btn");
  element4.classList.remove("lighttextcol-btn");
  // text-col1;
  const element5 = document.getElementById("textcol1");
  element5.classList.add("darktextcol1-btn");
  element5.classList.remove("lighttextcol1-btn");
  // boxshadow;
  const element6 = document.getElementById("boxshadow");
  element6.classList.add("darkboxshadow-btn");
  element6.classList.remove("lightboxshadow-btn");
  // textcol2;
  const element7 = document.getElementById("textcol2");
  element7.classList.add("darktextcol2-btn");
  element7.classList.remove("lighttextcol2-btn");
  // textcol3;
  const element8 = document.getElementById("textcol3");
  element8.classList.add("darktextcol3-btn");
  element8.classList.remove("lighttextcol3-btn");
  // textcol4;
  // const element9 = document.getElementById("textcol4");
  // element9.classList.add("darktextcol4-btn");
  // element9.classList.remove("lighttextcol4-btn");
  // svg1-btn;
  const element10 = document.getElementById("svg1btn");
  element10.classList.add("darksvg1-btn");
  element10.classList.remove("lightsvg1-btn");
  // svg2-btn;
  // const element11 = document.getElementById("svg2btn");
  // element11.classList.add("darksvg2-btn");
  // element11.classList.remove("lightsvg2-btn");
  // svg3-btn;
  const element12 = document.getElementById("svg3btn");
  element12.classList.add("darksvg3-btn");
  element12.classList.remove("lightsvg3-btn");
  // svg4-btn;
  const element13 = document.getElementById("svg4btn");
  element13.classList.add("darksvg4-btn");
  element13.classList.remove("lightsvg4-btn");
  // logo-btn;
  // const element14 = document.getElementById("logo");
  // element14.classList.add("darklogo-btn");
  // element14.classList.remove("lightlogo-btn");
  // console.log(element14);

  // logo2-btn;
  // const element16 = document.getElementById("logo2");
  // element16.classList.add("darklogo2-btn");
  // element16.classList.remove("lightlogo2-btn");
}

if (mode == "light") {
  modeBtn.checked = false;
  document.documentElement.classList.remove("dark");
  document.documentElement.classList.add("light");

  // email-btn;
  const element = document.getElementById("email-btn");
  element.classList.add("light-btn");
  element.classList.remove("dark-btn");
  // svg-btn;
  const element1 = document.getElementById("svg-btn");
  element1.classList.add("lightsvg-btn");
  element1.classList.remove("darksvg-btn");
  // flower-btn;
  const element2 = document.getElementById("flower");
  element2.classList.add("lightflower-btn");
  element2.classList.remove("darkflower-btn");
  // textcolor;
  const element3 = document.getElementById("textcolor");
  element3.classList.add("lighttextcolor-btn");
  element3.classList.remove("darktextcolor-btn");
  // text-col;
  const element4 = document.getElementById("textcol");
  element4.classList.add("lighttextcol-btn");
  element4.classList.remove("darktextcol-btn");
  // text-col1;
  const element5 = document.getElementById("textcol1");
  element5.classList.add("lighttextcol1-btn");
  element5.classList.remove("darktextcol1-btn");
  //boxshadow;
  const element6 = document.getElementById("boxshadow");
  element6.classList.add("lightboxshadow-btn");
  element6.classList.remove("darkboxshadow-btn");
  //textcol2;
  const element7 = document.getElementById("textcol2");
  element7.classList.add("lighttextcol2-btn");
  element7.classList.remove("darktextcol2-btn");
  //textcol3;
  const element8 = document.getElementById("textcol3");
  element8.classList.add("lighttextcol3-btn");
  element8.classList.remove("darktextcol3-btn");
  //textcol4;
  // const element9 = document.getElementById("textcol4");
  // element9.classList.add("lighttextcol4-btn");
  // element9.classList.remove("darktextcol4-btn");
  // svg1-btn;
  const element10 = document.getElementById("svg1btn");
  element10.classList.add("lightsvg1-btn");
  element10.classList.remove("darksvg1-btn");
  // svg2-btn;
  // const element11 = document.getElementById("svg2btn");
  // element11.classList.add("lightsvg2-btn");
  // element11.classList.remove("darksvg2-btn");
  // svg3-btn;
  const element12 = document.getElementById("svg3btn");
  element12.classList.add("lightsvg3-btn");
  element12.classList.remove("darksvg3-btn");
  // svg4-btn;
  const element13 = document.getElementById("svg4btn");
  element13.classList.add("lightsvg4-btn");
  element13.classList.remove("darksvg4-btn");
  // logo-btn;
  // const element14 = document.getElementById("logo");
  // element14.classList.add("lightlogo-btn");
  // element14.classList.remove("darklogo-btn");
  // console.log(element14);
  // logo2-btn;
  // const element16 = document.getElementById("logo2");
  // element16.classList.add("lightlogo2-btn");
  // element16.classList.remove("darklogo2-btn");
  // console.log(element14);
}
