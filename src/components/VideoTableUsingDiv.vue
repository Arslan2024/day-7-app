<template>

  <div class=" d-flex flex-row text-capitalize fixed top overflow-hidden">
    <div class="d-flex flex-column flex-shrink-0 Nav-color position-fixed start-0 top-0 vh-100  ">

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
          <a href="#" class="nav-link py-3  nav-box  text-light" title="" data-bs-toggle="tooltip"
            data-bs-placement="right" data-bs-original-title="Customers">
            <img class="nav-image  nav-image-margin" src="@/assets/Tutorials.svg">
            Tutorials
          </a>
        </li>
        <li>
          <a href="#" class="d-flex align-items-center justify-content-center p-3    "
            id="dropdownUser3" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="@/assets/circle.svg" alt="mdo" width="35" height="35" class="rounded-circle">
          </a>
          <ul class="dropdown-menu  shadow  bg-dark" aria-labelledby="dropdownUser3">
            <li><a class="dropdown-item text-white " href="#">Billing</a></li>
            <li><a class="dropdown-item text-white" href="#">Affiliate</a></li>
            <li><a class="dropdown-item text-white" href="#">support</a></li>
            <li><a class="dropdown-item text-white" href="#">Feedback</a></li>
            <li><a class="dropdown-item text-white" href="#">Resport issues</a></li>
            <li><a class="dropdown-item fw-bolder text-white" href="#">Logout</a></li>
          </ul>
        </li>
      </ul>

    </div>
    <div class="video-side ps-3 text-capitalize w-100">
      <div class="another ">
        <div class="video-side-nav ">
          <div class="search-box-container ">
            <div
              class="search-box  w-100 d-flex justify-content-center align-item-center align-self-start position-relative  ">
              <input type="search" class="search-box  text-white search-box-color rounded mt-3 border-light  ps-5"
                placeholder="search for a video">
              <img src="@/assets/search.svg" class="search-icon">

            </div>

          </div>
          <div class="chrome">
            <button type="button"
              class="btn btn-outline-primary  text-white border rounded   text-capitalize Chrome-extension-btn mt-3 d-none d-lg-block"
              Chrome extension> install chrome extension</button>
          </div>

        </div>
        <div class="second-nav d-flex flex-row flex-wrap justify-content-between ">
          <div class=" category-buttons nav ms-3">
            <button type="button"
              class="category-btn text-white border rounded Nav-color mt-5 me-2 btn-lg btn-md btn-sm">cooking</button>
            <button type="button" class="category-btn text-white border rounded Nav-color mt-5 me-2">gaming</button>
            <button type="button" class="category-btn text-white border rounded Nav-color mt-5 me-2">finance</button>
            <button type="button" class="category-btn text-white border rounded Nav-color mt-5 me-2">Diy</button>
            <button type="button" class="category-btn text-white border rounded Nav-color mt-5 me-2">Art</button>
            <button type="button" class="category-btn text-white border rounded Nav-color mt-5 me-2">+18 other
              defaults</button>
          </div>
          <div class="radio-container    d-flex flex-wrap mt-5 ">
            <div class="first-radio d-flex flex-row nav-color border rounded me-2 mb-1 p-1">
              <input type="radio" class="btn-check border-0" name="options-outlined" id="first-one-outlined"
                autocomplete="off" checked>
              <label class="btn btn-outline-light border-0 w-100 p-0 " for="first-one-outlined"><img
                  src="@/assets/radio1-1.svg"></label>

              <input type="radio" class="btn-check border-0" name="options-outlined" id="second-one-outlined"
                autocomplete="off">
              <label class="btn btn-outline-dark border-0 w-100 p-0" for="second-one-outlined"><img
                  src="@/assets/radio1-2.svg"></label>
            </div>

            <div class="defaultradio   nav border border-light rounded me-2 mb-1 ">
              <input type="checkbox" class="btn-check  " id="btn-check-outlined" checked autocomplete="off">
              <label class="btn btn-outline-light border-0 p-1 w-100" for="btn-check-outlined"><img
                  src="@/assets/default-icon.svg">
                Default</label>
            </div>
            <div class="filter-radio me-0 border border-light rounded mb-1 ">
              <input type="checkbox" class="btn-check" id="btn-check-2-outlined" checked autocomplete="off">
              <label class="btn btn-outline-light p-1 w-100 " for="btn-check-2-outlined"><img
                  src="@/assets/filter-icon.svg">filter</label>

            </div>
          </div>
        </div>
      </div>
      <div class="video-table min-vh-100 text-light ">
        <div
          class="table-header d-flex flex-row text-center mt-5 me-5 ms-3 align-items-center justify-content-between table-head-fs">
          <div class="table-cell col-1 text-start ps-2">Rank</div>

          <div class="table-cell col-5 pe-2">Video</div>
          <div class="table-cell col-1 pe-2">Outlier <br>Score</div>
          <div class="table-cell col-1 pe-2">Views</div>
          <div class="table-cell col-1 pe-2">Average <br> Views</div>
          <div class="table-cell col-1 pe-2">Subscriber</div>
          <div class="table-cell col-1 pe-2">Uploaded</div>
          <div class="table-cell col-1 pe-2">Channel</div>
          <div class="table-cell col-1 pe-2"></div>
        </div>

        <!-- Table Row -->
        <div
          class="table-row  d-flex flex-row mt-3 ms-3 py-2 px-3 align-items-center  table-row-color border border-grey justify-content-between rounded me-3">
          <div class="table-cell col-1 ps-3 pe-0 text-start">1</div>
          <div class="table-cell col-5 d-flex flex-row align-content-center">
            <img src="@/assets/table-video.svg" alt="Video">
            <span class="p-2 d-inline-block text-truncate align-content-center" style="max-width: 100%;">How will
              trump’s conviction impact the 2024....
            </span>
          </div>
          <div class="table-cell col-1 text-center"><img src="@/assets/under-card.svg" alt="Score"></div>
          <div class="table-cell col-1 text-center">1.7M</div>
          <div class="table-cell col-1 text-center">345k</div>
          <div class="table-cell col-1 text-center">345k</div>
          <div class="table-cell col-1 text-center">3 months ago</div>
          <div class="table-cell col-1 text-center ps-4 d-flex flex-row justify-content-center">
            <img src="@/assets/channel-small-logo.svg" alt="Channel" class="">
            <div class="dropdown  mt-2 ms-2 text-light  col-1">
              <i class="bi-three-dots-vertical " data-bs-toggle="dropdown" aria-expanded="false"></i>
              <ul class="dropdown-menu">
                <li>
                  <span class="dropdown-item">
                    <i class="fas fa-pen mx-2"></i> Update
                  </span>
                </li>
                <li>
                  <span class="dropdown-item">
                    <i class="fas fa-trash mx-2"></i> Delete
                  </span>
                </li>
              </ul>
            </div>
          </div>

        </div>

      </div>
    </div>
  </div>
</template>
<style>
.dropdown-item:hover, .dropdown-item:focus {
    background-color: transparent; /* Removes the background color on hover */
    text-decoration: underline;
    text-decoration-color: rgb(53, 172, 252);

  }

.table-head-fs {
  font-size: 15px;
}

.radio-container {

  justify-content: end;

}

.table-row-color {
  background-color: #3D4353;
  border-color: gray
}

.table-row {
  font-size: 14.5px;
}

.row-width {
  width: 100%;
  max-width: 1173px;
}
</style>