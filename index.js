// get all DOM inputs
const inputs = document.querySelectorAll(".controllers input");

// msg to be shown when opacity is 0 
const p = document.createElement('p');
p.innerHTML = 'Upsss. It gets dark!!!'
p.classList.add('hide');
document.body.appendChild(p);

// change handler
const handleChange = (e) => {
  // suffix contains 'px' or nothing
  const suffix = e.target.dataset.sizing || "";
  
  document.documentElement.style.setProperty(
    `--${e.target.name}`,
    e.target.value + suffix
    );
    if (e.target.name === 'img-opacity' && e.target.value == '0' ) {
      p.classList.remove('hide')
    } else {
      p.classList.add('hide')
    }

};

// addinf events listeners
inputs.forEach((input) => input.addEventListener("change", handleChange));
inputs.forEach((input) => input.addEventListener("mousemove", handleChange));
