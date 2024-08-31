<template>
  <div class=" d-flex flex-row text-capitalize fixed top">
    <div class="d-flex flex-column flex-shrink-0 Nav-color position-fixed start-0 top-0 vh-100 ">

      <ul class="nav nav-pills nav-flush flex-column nav-margin text-center">
        <li class="text-center">
          <a href="#" class="nav-link  nav-box-margin nav-box" title="" data-bs-toggle="tooltip"
            data-bs-placement="right" data-bs-original-title="Dashboard">
            <img class="nav-img" src="@/assets/video-dashboard.svg">
            <p class="text-light"> video dashboard </p>
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link  py-3  nav-box nav-box-margin text-light" title="" data-bs-toggle="tooltip"
            data-bs-placement="right">
            <img class="nav-image nav-img-margin" src="@/assets/dashboard.svg">
            Dashboard
          </a>
        </li>

        <li>
          <a href="#" class="nav-link py-3  nav-box nav-box-margin text-light" title="" data-bs-toggle="tooltip"
            data-bs-placement="right" data-bs-original-title="Orders">
            <img class="nav-image  nav-image-margin" src="@/assets/video-library.svg">
            Tracked <br>channel
          </a>
        </li>
        <li>
          <a href="#" class="nav-link py-3  nav-box nav-box-margin text-light" title="" data-bs-toggle="tooltip"
            data-bs-placement="right" data-bs-original-title="Products">
            <img class="nav-image  nav-image-margin" src="@/assets/curation.svg">
            Tracked <br>channel
          </a>
        </li>
        <li>
          <a href="#" class="nav-link py-3  nav-box nav-box-margin text-light" title="" data-bs-toggle="tooltip"
            data-bs-placement="right" data-bs-original-title="Customers">
            <img class="nav-image  nav-image-margin" src="@/assets/git-compare.svg">
            Thumbnail <br>comparison
          </a>
        </li>
        <li>
          <a href="#" class="nav-link py-3  nav-box nav-box-margin text-light" title="" data-bs-toggle="tooltip"
            data-bs-placement="right" data-bs-original-title="Customers">
            <img class="nav-image  nav-image-margin" src="@/assets/comment-analyzer.png">
            Comment <br>analyzer
          </a>
        </li>
        <li>
          <a href="#" class="nav-link py-3 nav-box nav-box-margin text-light" title="" data-bs-toggle="tooltip"
            data-bs-placement="right" data-bs-original-title="Customers">
            <img class="nav-image  nav-image-margin" src="@/assets/query-video.svg">
            query <br>video
          </a>
        </li>
        <li>
          <a href="#" class="nav-link py-3  nav-box nav-box-margin text-light" title="" data-bs-toggle="tooltip"
            data-bs-placement="right" data-bs-original-title="Customers">
            <img class="nav-image  nav-image-margin" src="@/assets/Tutorials.svg">
            Tutorials
          </a>
        </li>
        <li>
        <a href="#" class="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none  "
          id="dropdownUser3" data-bs-toggle="dropdown" aria-expanded="false">
          <img src="@/assets/circle.svg" alt="mdo" width="35" height="35" class="rounded-circle">
        </a>
        <ul class="dropdown-menu text-small shadow" aria-labelledby="dropdownUser3">
          <li><a class="dropdown-item" href="#">New project...</a></li>
          <li><a class="dropdown-item" href="#">Settings</a></li>
          <li><a class="dropdown-item" href="#">Profile</a></li>
          <li>
            <hr class="dropdown-divider">
          </li>
          <li><a class="dropdown-item" href="#">Sign out</a></li>
        </ul>
      </li>
      </ul>
   
    </div>
    <div class="video-side ps-3 text-capitalize">
     <div class="another sticky-top"> <div class="video-side-nav ">
        <div class="search-box-container ">
          <div class="search-box  w-100 d-flex justify-content-center align-item-center align-self-start position-relative  ">
            <input type="search" class="search-box  text-white search-box-color rounded mt-3 border-light  ps-5"
              placeholder="search for a video">
            <img src="@/assets/search.svg" class="search-icon">

          </div>

        </div>
        <div class="chrome">
          <button type="button"
            class="btn  text-white border rounded   text-capitalize Chrome-extension-btn mt-3 d-none d-lg-block" Chrome
            extension> install chrome extension</button>
        </div>

      </div>
      <div class="second-nav d-flex flex-row justify-content-between ">
        <div class=" category-buttons nav ms-3">
          <button type="button" class="category-btn text-white border rounded Nav-color mt-5 me-2 btn-lg btn-md btn-sm">cooking</button>
          <button type="button" class="category-btn text-white border rounded Nav-color mt-5 me-2">gaming</button>
          <button type="button" class="category-btn text-white border rounded Nav-color mt-5 me-2">finance</button>
          <button type="button" class="category-btn text-white border rounded Nav-color mt-5 me-2">Diy</button>
          <button type="button" class="category-btn text-white border rounded Nav-color mt-5 me-2">Art</button>
          <button type="button" class="category-btn text-white border rounded Nav-color mt-5 me-2">+18 other
            defaults</button>
        </div>
        <div class="radio-container  me-5  d-flex flex-wrap mt-5">
          <div class="first-radio d-flex flex-row nav-color border rounded me-2">
            <input type="radio" class="btn-check border-0" name="options-outlined" id="first-one-outlined"
              autocomplete="off" checked>
            <label class="btn btn-outline-light border-0" for="first-one-outlined"><img
                src="@/assets/radio1-1.svg"></label>

            <input type="radio" class="btn-check border-0" name="options-outlined" id="second-one-outlined"
              autocomplete="off">
            <label class="btn btn-outline-dark border-0" for="second-one-outlined"><img
                src="@/assets/radio1-2.svg"></label>
          </div>
          <div class="second-radio d-flex flex-row nav-color border rounded me-2">
            <input type="radio" class="btn-check border-0" name="option-outlined" id="third-one-outlined" checked
              autocomplete="off">
            <label class="btn btn-outline-light border-0" for="third-one-outlined"><img
                src="@/assets/radio-2-1.svg"></label>

            <input type="radio" class="btn-check border-0" name="option-outlined" id="forth-one-outlined"
              autocomplete="off">
            <label class="btn btn-outline-dark border-0" for="forth-one-outlined"><img
                src="@/assets/radio-2-2.svg"></label>
          </div>
          <div class="defaultradio   nav border border-light rounded me-2 ">
            <input type="checkbox" class="btn-check  " id="btn-check-outlined" checked autocomplete="off">
            <label class="btn btn-outline-light border-0 p-0" for="btn-check-outlined"><img src="@/assets/default-icon.svg">
              Default</label>
          </div>
          <div class="filter-radio me-0 border border-light rounded">
            <input type="checkbox" class="btn-check" id="btn-check-2-outlined" checked autocomplete="off">
            <label class="btn btn-outline-light p-0" for="btn-check-2-outlined"><img
                src="@/assets/filter-icon.svg">filter</label>

          </div>
        </div>
      </div>
    </div>
      <div class="container-fluid video-section mt-5 ms-3 d-flex flex-wrap align-content-start text-capitalize">
        <div class="card image-card Nav-color text-light fst-normal border rounded border-grey text-lowercase me-3 mb-3 ">
          <img src="@/assets/dummy-image1.png" class="card-img-top" alt="thumbnail error">
          <div class="card-body">
            <p class="card-text">How will trump's conviction impact
              the 2024 presidential race</p>
            <div class="more-info d-flex flex-row font-of-moreifo justify-content-between">
              <p class="subs">@fox5dc . 368k subs</p>
              <p class="views ms-0">390K views vs 86 avg</p>
            </div>
            <div class="under-card  d-flex flex-row font-of-moreifo  justify-content-between">
              <img src="@/assets/under-card.svg">
              <p class="mb-0">9 days ago</p>
            </div>
          </div>
        </div>
        <div class="card image-card Nav-color text-light fst-normal border rounded border-grey text-lowercase me-3 mb-3">
          <img src="@/assets/dummy-image1.png" class="card-img-top" alt="thumbnail error">
          <div class="card-body">
            <p class="card-text">How will trump's conviction impact
              the 2024 presidential race</p>
              <div class="more-info d-flex flex-row font-of-moreifo justify-content-between">
              <p class="subs">@fox5dc . 368k subs</p>
              <p class="views ms-0">390K views vs 86 avg</p>
            </div>
            <div class="under-card  d-flex flex-row font-of-moreifo  justify-content-between">
              <img src="@/assets/under-card.svg">
              <p class="mb-0">9 days ago</p>
            </div>
          </div>
        </div>
        <div class="card image-card Nav-color text-light fst-normal border rounded border-grey text-lowercase me-3 mb-3">
          <img src="@/assets/dummy-image1.png" class="card-img-top" alt="thumbnail error">
          <div class="card-body">
            <p class="card-text">How will trump's conviction impact
              the 2024 presidential race</p>
              <div class="more-info d-flex flex-row font-of-moreifo justify-content-between">
              <p class="subs">@fox5dc . 368k subs</p>
              <p class="views ms-0">390K views vs 86 avg</p>
            </div>
            <div class="under-card  d-flex flex-row font-of-moreifo  justify-content-between">
              <img src="@/assets/under-card.svg">
              <p class="mb-0">9 days ago</p>
            </div>
          </div>
        </div>
        <div class="card image-card Nav-color text-light fst-normal border rounded border-grey text-lowercase me-3 mb-3">
          <img src="@/assets/dummy-image1.png" class="card-img-top" alt="thumbnail error">
          <div class="card-body">
            <p class="card-text">How will trump's conviction impact
              the 2024 presidential race</p>
              <div class="more-info d-flex flex-row font-of-moreifo justify-content-between">
              <p class="subs">@fox5dc . 368k subs</p>
              <p class="views ms-0">390K views vs 86 avg</p>
            </div>
            <div class="under-card  d-flex flex-row font-of-moreifo  justify-content-between">
              <img src="@/assets/under-card.svg">
              <p class="mb-0">9 days ago</p>
            </div>
          </div>
        </div>
        <div class="card image-card Nav-color text-light fst-normal border rounded border-grey text-lowercase me-3 mb-3">
          <img src="@/assets/dummy-image1.png" class="card-img-top" alt="thumbnail error">
          <div class="card-body">
            <p class="card-text">How will trump's conviction impact
              the 2024 presidential race</p>
              <div class="more-info d-flex flex-row font-of-moreifo justify-content-between">
              <p class="subs">@fox5dc . 368k subs</p>
              <p class="views ms-0">390K views vs 86 avg</p>
            </div>
            <div class="under-card  d-flex flex-row font-of-moreifo  justify-content-between">
              <img src="@/assets/under-card.svg">
              <p class="mb-0">9 days ago</p>
            </div>
          </div>
        </div>
        <div class="card image-card Nav-color text-light fst-normal border rounded border-grey text-lowercase me-3 mb-3">
          <img src="@/assets/dummy-image1.png" class="card-img-top" alt="thumbnail error">
          <div class="card-body">
            <p class="card-text">How will trump's conviction impact
              the 2024 presidential race</p>
              <div class="more-info d-flex flex-row font-of-moreifo justify-content-between">
              <p class="subs ">@fox5dc . 368k subs</p>
              <p class="views ms-0">390K views vs 86 avg</p>
            </div>
            <div class="under-card  d-flex flex-row font-of-moreifo  justify-content-between">
              <img src="@/assets/under-card.svg">
              <p class="mb-0">9 days ago</p>
            </div>
          </div>
        </div>
        <div class="card image-card Nav-color text-light fst-normal border rounded border-grey text-lowercase me-3 mb-3">
          <img src="@/assets/dummy-image1.png" class="card-img-top" alt="thumbnail error">
          <div class="card-body">
            <p class="card-text">How will trump's conviction impact
              the 2024 presidential race</p>
            <div class="more-info d-flex flex-row font-of-moreifo justify-content-between">
              <p class="subs">@fox5dc . 368k subs</p>
              <p class="views ms-0">390K views vs 86 avg</p>
            </div>
            <div class="under-card  d-flex flex-row font-of-moreifo  justify-content-between">
              <img src="@/assets/under-card.svg">
              <p class="mb-0">9 days ago</p>
            </div>
          </div>
        </div>
        <div class="card image-card Nav-color text-light fst-normal border rounded border-grey text-lowercase me-3 mb-3">
          <img src="@/assets/dummy-image1.png" class="card-img-top " alt="thumbnail error">
          <div class="card-body px-0 py-0">
            <p class="card-text">How will trump's conviction impact
              the 2024 presidential race</p>
              <div class="more-info d-flex flex-row font-of-moreifo justify-content-between">
              <p class="subs ">@fox5dc . 368k subs</p>
              <p class="views ms-0">390K views vs 86 avg</p>
            </div>
            <div class="under-card  d-flex flex-row font-of-moreifo  justify-content-between">
              <img src="@/assets/under-card.svg">
              <p class="mb-0">9 days ago</p>
            </div>
          </div>
        </div>
 
      </div>
    </div>

  </div>
</template>







<style>
.another{
  background-color: #282F40;
}
.video-side {
  margin-left: 100px; /* This should match the width of your navbar */
  padding: 20px; }

.card-body{
  padding-top: 8px;
  padding-bottom: 2px;
  padding-left: 2px;
  padding-right: 2px;
  font-size: 14px;

}
.under-card{
  padding:5px;
}
.views{
  font-size: 13px;

  margin-bottom: 5px;
}
.subs{
  font-size: 13px;
  margin-bottom: 8px;
}
.card-text{
  margin-bottom: 8px;
}
.radio-container{
  width: 100%;
  max-width: 399px;
}
.font-of-moreifo {
  font-size: small;
}


.card{
  width: 100%;
  max-width: 282.86px;
  height: 100%;
  max-height: 273.6px;
}

.first-radio {
  width: 100%;
  max-width: 88px;
  height: 36px;

}
.second-radio {
  width: 100%;
  max-width: 88px;
  height: 36px;

}.defaultradio {
  width: 100%;
  max-width: 88px;
  height: 36px;

}
.filter-radio {
  width: 100%;
  max-width: 88px;
  height: 36px;

}

.video-side-nav {
  position: relative;
}

.category-button {
  width: 100%;
  max-width: 64px;
  height: 32px;
}

.position-relative {
  position: relative;
}

.search-box-container {
  position: relative;
  width: 100%;
  max-width: 327px;
  /* Adjust based on your design */
  margin: auto;
  /* Center the container */
}

.search-box {
  width: 100%;
  height: 45px;
  padding-left: 40px;
  /* Space for the icon */
  color: white;
  border-radius: 5px;
}

.search-icon {
  width: 15px;
  height: 15px;
  position: absolute;
  left: 55px;
  /* Adjust this to position the icon inside the input */
  top: 94%;
  transform: translateY(-50%);
  pointer-events: none;
  /* Make sure clicks on the icon are passed to the input */
}



.Chrome-extension-btn {
  position: absolute;

  top: 20px;
  right: 30px;
  width: 100%;
  transform: translateY(-50%);
  max-width: 174px;
  font-size: 12px;
}

.nav-img-margin {
  margin-bottom: 10px;
}

.nav-box-margin {
  margin-bottom: 34px;
}

.nav-margin {
  margin: 30px 9px 10px 9px;
}

.search-box-color {
  background-color: #3D4353
}

.search-box::placeholder {
  color: azure
}

.Nav-color {
  background-color: #3D4353
}

.nav-box {
  height: 64px;
  width: 92px;
  font-size: 12.73px;
}

.nav-img {
  width: 30px;
  height: 30px;
}
</style>