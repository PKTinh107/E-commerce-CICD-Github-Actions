export function simpleValidationCheck(inputs) {
  let isFormValid = false;

  inputs.forEach((input) => {
    let addOrRemoveClass;

    if (input.name === "username") {
      const isUserNameContainsTwoWords = input.value.split(" ").length === 2;
      addOrRemoveClass = !isUserNameContainsTwoWords ? "add" : "remove";
    } else {
      addOrRemoveClass = input.value === "" ? "add" : "remove";
    }

    input.classList[addOrRemoveClass]("invalid");
    isFormValid = true;
  });

  for (let i = 0; i < inputs.length; i++) {
    const isInputContainsInvalidClass = inputs[i].classList.contains("invalid");
    if (isInputContainsInvalidClass) isFormValid = false;
  }

  return isFormValid;
}

export function repoStarsForksToolTipLeftPos(lang) {
  switch (lang) {
    case "ar":
      return "55px";
    case "ja":
      return "92px";
  }
  return "77px";
}

export function scrollToTopToolTipLeftPos(lang) {
  switch (lang) {
    case "ar":
      return "-55px";
    case "ja":
      return "-86px";
    case "ru":
      return "-84px";
    case "fr":
      return "-80px";
    case "hu":
      return "-104px";
    case "hi":
      return "-73px";
  }
  return "-60px";
}

export function favIconToolTipLeftPos(lang) {
  switch (lang) {
    case "ar":
      return "-40px";
    case "ja":
      return "-51px";
    case "ru":
      return "-52px";
    case "fr":
      return "-35px";
    case "hu":
      return "-43px";
    case "hi":
      return "-37px";
  }
  return "-41px";
}

export function detailsIconToolTipLeftPos(lang) {
  switch (lang) {
    case "ar":
      return "-37px";
    case "ja":
      return "-29px";
    case "ru":
      return "-47px";
    case "fr":
      return "-39px";
    case "hu":
      return "-47px";
    case "hi":
      return "-36px";
  }
  return "-39px";
}

export function trashcanIconToolTipLeftPos(lang) {
  switch (lang) {
    case "ar":
      return "-26px";
    case "ja":
      return "-29px";
    case "ru":
      return "-42px";
    case "fr":
      return "-36px";
    case "hu":
      return "-48px";
    case "hi":
      return "-29px";
  }
  return "-41px";
}

export function wishlistIconToolTipLeftPos(lang) {
  switch (lang) {
    case "ar":
      return "-54px";
    case "ja":
      return "-72px";
    case "ru":
      return "-51px";
    case "fr":
      return "-69px";
    case "hu":
      return "-57px";
    case "hi":
      return "-43px";
  }
  return "-39px";
}

export function sendToolTipLeftPos(lang) {
  switch (lang) {
    case "ar":
      return "-29px";
    case "ja":
      return "66px";
    case "ru":
      return "85px";
    case "fr":
      return "80px";
    case "hu":
      return "76px";
    case "hi":
      return "63px";
  }
  return "70px";
}

export function sendingToolTipLeftPos(lang) {
  switch (lang) {
    case "ar":
      return "-44px";
    case "ja":
      return "73px";
    case "ru":
      return "74px";
    case "fr":
      return "70px";
    case "hu":
      return "74px";
    case "hi":
      return "69px";
  }
  return "78px";
}

export function removeCartProductToolTipLeftPos(lang) {
  switch (lang) {
    case "ar":
      return "56px";
    case "ja":
      return "-37px";
    case "fr":
      return "-55px";
    case "hu":
      return "-55px";
    case "hi":
      return "-37px";
  }
  return "-50px";
}

export function getElementWidth(element) {
  return element?.getBoundingClientRect()?.width;
}

export function getScrollSliderValue(sliderEle) {
  const sliderItemEle = sliderEle.children[0];
  const computersWidth = 1500;
  const laptopsWidth = 1300;
  const macBooksWidth = 992;
  const GAP = 30;
  const sliderItemEleWidth = getElementWidth(sliderItemEle) + GAP;

  if (window.innerWidth >= computersWidth) {
    return sliderItemEleWidth * 4;
  }

  if (window.innerWidth >= laptopsWidth) {
    return sliderItemEleWidth * 3;
  }

  if (window.innerWidth >= macBooksWidth) {
    return sliderItemEleWidth * 2;
  }

  return sliderItemEleWidth;
}
