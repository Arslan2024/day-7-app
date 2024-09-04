<template>

    <div class=" d-flex flex-row text-capitalize fixed top  body">
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
                    <a href="#" class="nav-link  py-3  nav-box nav-box-margin text-light" title=""
                        data-bs-toggle="tooltip" data-bs-placement="right">
                        <img class="nav-image nav-img-margin" src="@/assets/dashboard.svg">
                        Dashboard
                    </a>
                </li>

                <li>
                    <a href="#" class="nav-link py-3  nav-box nav-box-margin text-light" title=""
                        data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Orders">
                        <img class="nav-image  nav-image-margin" src="@/assets/video-library.svg">
                        Tracked <br>channel
                    </a>
                </li>
                <li>
                    <a href="#" class="nav-link py-3  nav-box nav-box-margin text-light" title=""
                        data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Products">
                        <img class="nav-image  nav-image-margin" src="@/assets/curation.svg">
                        Tracked <br>channel
                    </a>
                </li>
                <li>
                    <a href="#" class="nav-link py-3  nav-box nav-box-margin text-light" title=""
                        data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Customers">
                        <img class="nav-image  nav-image-margin" src="@/assets/git-compare.svg">
                        Thumbnail <br>comparison
                    </a>
                </li>
                <li>
                    <a href="#" class="nav-link py-3  nav-box nav-box-margin text-light" title=""
                        data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Customers">
                        <img class="nav-image  nav-image-margin" src="@/assets/comment-analyzer.png">
                        Comment <br>analyzer
                    </a>
                </li>
                <li>
                    <a href="#" class="nav-link py-3 nav-box nav-box-margin text-light" title=""
                        data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Customers">
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
                    <a href="#"
                        class="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none  "
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
        <div class="video-side ps-3 text-capitalize w-100 min-vh-100">
            <div class="  another sticky-top ">
                <div class="video-side-nav ">
                    <div class="search-box-container ">
                        <div
                            class="search-box  w-100 d-flex justify-content-center align-item-center align-self-start position-relative  ">
                            <input type="search"
                                class="search-box  text-white search-box-color rounded mt-3 border-light  ps-5"
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
                        <button type="button"
                            class="category-btn text-white border rounded Nav-color mt-5 me-2">gaming</button>
                        <button type="button"
                            class="category-btn text-white border rounded Nav-color mt-5 me-2">finance</button>
                        <button type="button"
                            class="category-btn text-white border rounded Nav-color mt-5 me-2">Diy</button>
                        <button type="button"
                            class="category-btn text-white border rounded Nav-color mt-5 me-2">Art</button>
                        <button type="button" class="category-btn text-white border rounded Nav-color mt-5 me-2">+18
                            other
                            defaults</button>
                    </div>
                    <div class="radio-container    d-flex flex-wrap mt-5 ">
                        <div class="first-radio d-flex flex-row nav-color border rounded me-2 mb-1 p-1">
                            <input type="radio" class="btn-check border-0" name="options-outlined"
                                id="first-one-outlined" autocomplete="off" checked>
                            <label class="btn btn-outline-light border-0 w-100 p-0 " for="first-one-outlined"><img
                                    src="@/assets/radio1-1.svg"></label>

                            <input type="radio" class="btn-check border-0" name="options-outlined"
                                id="second-one-outlined" autocomplete="off">
                            <label class="btn btn-outline-dark border-0 w-100 p-0" for="second-one-outlined"><img
                                    src="@/assets/radio1-2.svg"></label>
                        </div>
                        <div class="second-radio d-flex flex-row nav-color border rounded  p-1 mb-1 ">
                            <input type="radio" class="btn-check border-0" name="option-outlined"
                                id="third-one-outlined" checked autocomplete="off">
                            <label class="btn btn-outline-light border-0 w-100 p-0" for="third-one-outlined"><img
                                    src="@/assets/radio-2-1.svg"></label>

                            <input type="radio" class="btn-check border-0" name="option-outlined"
                                id="forth-one-outlined" autocomplete="off">
                            <label class="btn btn-outline-dark border-0 w-100 p-0" for="forth-one-outlined"><img
                                    src="@/assets/radio-2-2.svg"></label>
                        </div>
                        <div class="defaultradio   nav border border-light rounded me-2 mb-1 ">
                            <input type="checkbox" class="btn-check  " id="btn-check-outlined" checked
                                autocomplete="off">
                            <label class="btn btn-outline-light border-0 p-1 w-100" for="btn-check-outlined"><img
                                    src="@/assets/default-icon.svg">
                                Default</label>
                        </div>
                        <div class="filter-radio me-0 border border-light rounded mb-1 ">
                            <input type="checkbox" class="btn-check" id="btn-check-2-outlined" checked
                                autocomplete="off">
                            <label class="btn btn-outline-light p-1 w-100 " for="btn-check-2-outlined"><img
                                    src="@/assets/filter-icon.svg">filter</label>

                        </div>
                    </div>
                </div>
            </div>
            <div class="container-fluid channel-section mt-3 ms-1 d-flex flex-wrap  text-capitalize another  ">

                <div class="height  col-12 col-sm-6 col-md-6 col-lg-4 col-xxl-3 col-xl-3 p-2 mb-2">
                    <div class="custom-card border border-color rounded card-bg text-white ">
                        <div class="card-top ">
                            <div class="top-section d-flex flex-row p-2">
                                <img src="@/assets/channel-search-icon.svg ">
                                <div class="align-content-center">
                                    <span class="channel-name-styling">CluelessMilleniel</span><br>
                                    <span class="other-card-fs">Entertainment
                                    </span>
                                </div>
                            </div>
                            <div class="custom-card-body  ">

                                <div class="info d-flex flex-row ps-2">
                                    <div class="leftside d-flex flex-column">

                                        <span class="other-card-fs ">subscribers</span>
                                        <span class="other-card-fs">videos</span>
                                        <span class="other-card-fs">total Views</span>
                                    </div>

                                    <div class="right-side d-flex flex-column justify-content-center">
                                        <span
                                            class="other-card-fs another border-grey rounded mb-1 d-flex justify-content-center ">300k</span>
                                        <span
                                            class="other-card-fs another border-grey rounded mb-1 d-flex justify-content-center">8.7k</span>
                                        <span
                                            class="other-card-fs another border-grey rounded mb-1 d-flex justify-content-center">7</span>

                                    </div>
                                </div>

                            </div>
                            <span class="divider m-0 p-0">
                                <hr class="m-0 p-0 ">
                            </span>
                            <div class="go-to-buttons d-flex flex-wrap gap-2 text-light ms-4 flex-nowrap">
                                <button type="button" class="btn other-card-fs d-flex align-items-center flex-nowrap">
                                    Track Channel
                                    <img src="@/assets/go-there.svg" alt="Go There Icon" class="ms-2"
                                        style="width: 16px; height: 16px;">
                                </button>
                                <button type="button" class="btn other-card-fs d-flex align-items-center flex-nowrap">
                                    View Outliers
                                    <img src="@/assets/go-there.svg" alt="Go There Icon" class="ms-2"
                                        style="width: 16px; height: 16px;">
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="height col-12 col-sm-6 col-md-6 col-lg-4 col-xxl-3 col-xl-3 p-2 mb-2">
                    <div class="custom-card border border-color rounded card-bg text-white ">
                        <div class="card-top ">
                            <div class="top-section d-flex flex-row p-2">
                                <img src="@/assets/channel-search-icon.svg ">
                                <div class="align-content-center">
                                    <span class="channel-name-styling">CluelessMilleniel</span><br>
                                    <span class="other-card-fs">Channel category
                                    </span>
                                </div>
                            </div>
                            <div class="custom-card-body  ">

                                <div class="info d-flex flex-row ps-2">
                                    <div class="leftside d-flex flex-column">

                                        <span class="other-card-fs ">subscribers</span>
                                        <span class="other-card-fs">videos</span>
                                        <span class="other-card-fs">total Views</span>
                                    </div>

                                    <div class="right-side d-flex flex-column justify-content-center">
                                        <span
                                            class="other-card-fs another border-grey rounded mb-1 d-flex justify-content-center ">300k</span>
                                        <span
                                            class="other-card-fs another border-grey rounded mb-1 d-flex justify-content-center">8.7k</span>
                                        <span
                                            class="other-card-fs another border-grey rounded mb-1 d-flex justify-content-center">7</span>

                                    </div>
                                </div>

                            </div>
                            <span class="divider m-0 p-0">
                                <hr class="m-0 p-0 ">
                            </span>
                            <div class="go-to-buttons d-flex flex-wrap gap-2 text-light ms-4 flex-nowrap">
                                <button type="button" class="btn other-card-fs d-flex align-items-center flex-nowrap">
                                    Track Channel
                                    <img src="@/assets/go-there.svg" alt="Go There Icon" class="ms-2"
                                        style="width: 16px; height: 16px;">
                                </button>
                                <button type="button" class="btn other-card-fs d-flex align-items-center flex-nowrap">
                                    View Outliers
                                    <img src="@/assets/go-there.svg" alt="Go There Icon" class="ms-2"
                                        style="width: 16px; height: 16px;">
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class=" height col-12 col-sm-6 col-md-6 col-lg-4 col-xxl-3 col-xl-3 p-2 mb-2">
                    <div class="custom-card border border-color rounded card-bg text-white ">
                        <div class="card-top ">
                            <div class="top-section d-flex flex-row p-2">
                                <img src="@/assets/channel-search-icon.svg ">
                                <div class="align-content-center">
                                    <span class="channel-name-styling">CluelessMilleniel</span><br>
                                    <span class="other-card-fs">Channel category
                                    </span>
                                </div>
                            </div>
                            <div class="custom-card-body  ">

                                <div class="info d-flex flex-row ps-2">
                                    <div class="leftside d-flex flex-column">

                                        <span class="other-card-fs ">subscribers</span>
                                        <span class="other-card-fs">videos</span>
                                        <span class="other-card-fs">total Views</span>
                                    </div>

                                    <div class="right-side d-flex flex-column justify-content-center">
                                        <span
                                            class="other-card-fs another border-grey rounded mb-1 d-flex justify-content-center ">300k</span>
                                        <span
                                            class="other-card-fs another border-grey rounded mb-1 d-flex justify-content-center">8.7k</span>
                                        <span
                                            class="other-card-fs another border-grey rounded mb-1 d-flex justify-content-center">7</span>

                                    </div>
                                </div>

                            </div>
                            <span class="divider m-0 p-0">
                                <hr class="m-0 p-0 ">
                            </span>
                            <div class="go-to-buttons d-flex flex-wrap gap-2 text-light ms-4 flex-nowrap">
                                <button type="button" class="btn other-card-fs d-flex align-items-center flex-nowrap">
                                    Track Channel
                                    <img src="@/assets/go-there.svg" alt="Go There Icon" class="ms-2"
                                        style="width: 16px; height: 16px;">
                                </button>
                                <button type="button" class="btn other-card-fs d-flex align-items-center flex-nowrap">
                                    View Outliers
                                    <img src="@/assets/go-there.svg" alt="Go There Icon" class="ms-2"
                                        style="width: 16px; height: 16px;">
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="height  col-12 col-sm-6 col-md-6 col-lg-4 col-xxl-3 col-xl-3 p-2 mb-2">
                    <div class="custom-card border border-color rounded card-bg text-white ">
                        <div class="card-top ">
                            <div class="top-section d-flex flex-row p-2">
                                <img src="@/assets/channel-search-icon.svg ">
                                <div class="align-content-center">
                                    <span class="channel-name-styling">CluelessMilleniel</span><br>
                                    <span class="other-card-fs">Channel category
                                    </span>
                                </div>
                            </div>
                            <div class="custom-card-body  ">

                                <div class="info d-flex flex-row ps-2">
                                    <div class="leftside d-flex flex-column">

                                        <span class="other-card-fs ">subscribers</span>
                                        <span class="other-card-fs">videos</span>
                                        <span class="other-card-fs">total Views</span>
                                    </div>

                                    <div class="right-side d-flex flex-column justify-content-center">
                                        <span
                                            class="other-card-fs another border-grey rounded mb-1 d-flex justify-content-center ">300k</span>
                                        <span
                                            class="other-card-fs another border-grey rounded mb-1 d-flex justify-content-center">8.7k</span>
                                        <span
                                            class="other-card-fs another border-grey rounded mb-1 d-flex justify-content-center">7</span>

                                    </div>
                                </div>

                            </div>
                            <span class="divider m-0 p-0">
                                <hr class="m-0 p-0 ">
                            </span>
                            <div class="go-to-buttons d-flex flex-wrap gap-2 text-light ms-4 flex-nowrap">
                                <button type="button" class="btn other-card-fs d-flex align-items-center flex-nowrap">
                                    Track Channel
                                    <img src="@/assets/go-there.svg" alt="Go There Icon" class="ms-2"
                                        style="width: 16px; height: 16px;">
                                </button>
                                <button type="button" class="btn other-card-fs d-flex align-items-center flex-nowrap">
                                    View Outliers
                                    <img src="@/assets/go-there.svg" alt="Go There Icon" class="ms-2"
                                        style="width: 16px; height: 16px;">
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class=" height col-12 col-sm-6 col-md-6 col-lg-4 col-xxl-3 col-xl-3 p-2 mb-2">
                    <div class="custom-card border border-color rounded card-bg text-white ">
                        <div class="card-top ">
                            <div class="top-section d-flex flex-row p-2">
                                <img src="@/assets/channel-search-icon.svg ">
                                <div class="align-content-center">
                                    <span class="channel-name-styling">CluelessMilleniel</span><br>
                                    <span class="other-card-fs">Channel category
                                    </span>
                                </div>
                            </div>
                            <div class="custom-card-body  ">

                                <div class="info d-flex flex-row ps-2">
                                    <div class="leftside d-flex flex-column">

                                        <span class="other-card-fs ">subscribers</span>
                                        <span class="other-card-fs">videos</span>
                                        <span class="other-card-fs">total Views</span>
                                    </div>

                                    <div class="right-side d-flex flex-column justify-content-center">
                                        <span
                                            class="other-card-fs another border-grey rounded mb-1 d-flex justify-content-center ">300k</span>
                                        <span
                                            class="other-card-fs another border-grey rounded mb-1 d-flex justify-content-center">8.7k</span>
                                        <span
                                            class="other-card-fs another border-grey rounded mb-1 d-flex justify-content-center">7</span>

                                    </div>
                                </div>

                            </div>
                            <span class="divider m-0 p-0">
                                <hr class="m-0 p-0 ">
                            </span>
                            <div class="go-to-buttons d-flex flex-wrap gap-2 text-light ms-4 flex-nowrap">
                                <button type="button" class="btn other-card-fs d-flex align-items-center flex-nowrap">
                                    Track Channel
                                    <img src="@/assets/go-there.svg" alt="Go There Icon" class="ms-2"
                                        style="width: 16px; height: 16px;">
                                </button>
                                <button type="button" class="btn other-card-fs d-flex align-items-center flex-nowrap">
                                    View Outliers
                                    <img src="@/assets/go-there.svg" alt="Go There Icon" class="ms-2"
                                        style="width: 16px; height: 16px;">
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class=" height col-12 col-sm-6 col-md-6 col-lg-4 col-xxl-3 col-xl-3 p-2 mb-2">
                    <div class="custom-card border border-color rounded card-bg text-white ">
                        <div class="card-top ">
                            <div class="top-section d-flex flex-row p-2">
                                <img src="@/assets/channel-search-icon.svg ">
                                <div class="align-content-center">
                                    <span class="channel-name-styling">CluelessMilleniel</span><br>
                                    <span class="other-card-fs">Channel category
                                    </span>
                                </div>
                            </div>
                            <div class="custom-card-body  ">

                                <div class="info d-flex flex-row ps-2">
                                    <div class="leftside d-flex flex-column">

                                        <span class="other-card-fs ">subscribers</span>
                                        <span class="other-card-fs">videos</span>
                                        <span class="other-card-fs">total Views</span>
                                    </div>

                                    <div class="right-side d-flex flex-column justify-content-center">
                                        <span
                                            class="other-card-fs another border-grey rounded mb-1 d-flex justify-content-center ">300k</span>
                                        <span
                                            class="other-card-fs another border-grey rounded mb-1 d-flex justify-content-center">8.7k</span>
                                        <span
                                            class="other-card-fs another border-grey rounded mb-1 d-flex justify-content-center">7</span>

                                    </div>
                                </div>

                            </div>
                            <span class="divider m-0 p-0">
                                <hr class="m-0 p-0 ">
                            </span>
                            <div class="go-to-buttons d-flex flex-wrap gap-2 text-light ms-4 flex-nowrap">
                                <button type="button" class="btn other-card-fs d-flex align-items-center flex-nowrap">
                                    Track Channel
                                    <img src="@/assets/go-there.svg" alt="Go There Icon" class="ms-2"
                                        style="width: 16px; height: 16px;">
                                </button>
                                <button type="button" class="btn other-card-fs d-flex align-items-center flex-nowrap">
                                    View Outliers
                                    <img src="@/assets/go-there.svg" alt="Go There Icon" class="ms-2"
                                        style="width: 16px; height: 16px;">
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class=" height col-12 col-sm-6 col-md-6 col-lg-4 col-xxl-3 col-xl-3 p-2 mb-2">
                    <div class="custom-card border border-color rounded card-bg text-white ">
                        <div class="card-top ">
                            <div class="top-section d-flex flex-row p-2">
                                <img src="@/assets/channel-search-icon.svg ">
                                <div class="align-content-center">
                                    <span class="channel-name-styling">CluelessMilleniel</span><br>
                                    <span class="other-card-fs">Channel category
                                    </span>
                                </div>
                            </div>
                            <div class="custom-card-body  ">

                                <div class="info d-flex flex-row ps-2">
                                    <div class="leftside d-flex flex-column">

                                        <span class="other-card-fs ">subscribers</span>
                                        <span class="other-card-fs">videos</span>
                                        <span class="other-card-fs">total Views</span>
                                    </div>

                                    <div class="right-side d-flex flex-column justify-content-center">
                                        <span
                                            class="other-card-fs another border-grey rounded mb-1 d-flex justify-content-center ">300k</span>
                                        <span
                                            class="other-card-fs another border-grey rounded mb-1 d-flex justify-content-center">8.7k</span>
                                        <span
                                            class="other-card-fs another border-grey rounded mb-1 d-flex justify-content-center">7</span>

                                    </div>
                                </div>

                            </div>
                            <span class="divider m-0 p-0">
                                <hr class="m-0 p-0 ">
                            </span>
                            <div class="go-to-buttons d-flex flex-wrap gap-2 text-light ms-4 flex-nowrap">
                                <button type="button" class="btn other-card-fs d-flex align-items-center flex-nowrap">
                                    Track Channel
                                    <img src="@/assets/go-there.svg" alt="Go There Icon" class="ms-2"
                                        style="width: 16px; height: 16px;">
                                </button>
                                <button type="button" class="btn other-card-fs d-flex align-items-center flex-nowrap">
                                    View Outliers
                                    <img src="@/assets/go-there.svg" alt="Go There Icon" class="ms-2"
                                        style="width: 16px; height: 16px;">
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class=" height col-12 col-sm-6 col-md-6 col-lg-4 col-xxl-3 col-xl-3 p-2 mb-2">
                    <div class="custom-card border border-color rounded card-bg text-white ">
                        <div class="card-top ">
                            <div class="top-section d-flex flex-row p-2">
                                <img src="@/assets/channel-search-icon.svg ">
                                <div class="align-content-center">
                                    <span class="channel-name-styling">CluelessMilleniel</span><br>
                                    <span class="other-card-fs">Channel category
                                    </span>
                                </div>
                            </div>
                            <div class="custom-card-body  ">

                                <div class="info d-flex flex-row ps-2">
                                    <div class="leftside d-flex flex-column">

                                        <span class="other-card-fs ">subscribers</span>
                                        <span class="other-card-fs">videos</span>
                                        <span class="other-card-fs">total Views</span>
                                    </div>

                                    <div class="right-side d-flex flex-column justify-content-center">
                                        <span
                                            class="other-card-fs another border-grey rounded mb-1 d-flex justify-content-center ">300k</span>
                                        <span
                                            class="other-card-fs another border-grey rounded mb-1 d-flex justify-content-center">8.7k</span>
                                        <span
                                            class="other-card-fs another border-grey rounded mb-1 d-flex justify-content-center">7</span>

                                    </div>
                                </div>

                            </div>
                            <span class="divider m-0 p-0">
                                <hr class="m-0 p-0 ">
                            </span>
                            <div class="go-to-buttons d-flex flex-wrap gap-2 text-light ms-4 flex-nowrap">
                                <button type="button" class="btn other-card-fs d-flex align-items-center flex-nowrap">
                                    Track Channel
                                    <img src="@/assets/go-there.svg" alt="Go There Icon" class="ms-2"
                                        style="width: 16px; height: 16px;">
                                </button>
                                <button type="button" class="btn other-card-fs d-flex align-items-center flex-nowrap">
                                    View Outliers
                                    <img src="@/assets/go-there.svg" alt="Go There Icon" class="ms-2"
                                        style="width: 16px; height: 16px;">
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class=" height col-12 col-sm-6 col-md-6 col-lg-4 col-xxl-3  col-xl-3 p-2  mb-2">
                    <div class="custom-card border border-color rounded card-bg text-white ">
                        <div class="card-top ">
                            <div class="top-section d-flex flex-row p-2">
                                <img src="@/assets/channel-search-icon.svg ">
                                <div class="align-content-center">
                                    <span class="channel-name-styling">CluelessMilleniel</span><br>
                                    <span class="other-card-fs">Channel category
                                    </span>
                                </div>
                            </div>
                            <div class="custom-card-body  ">

                                <div class="info d-flex flex-row ps-2">
                                    <div class="leftside d-flex flex-column">

                                        <span class="other-card-fs ">subscribers</span>
                                        <span class="other-card-fs">videos</span>
                                        <span class="other-card-fs">total Views</span>
                                    </div>

                                    <div class="right-side d-flex flex-column justify-content-center">
                                        <span
                                            class="other-card-fs another border-grey rounded mb-1 d-flex justify-content-center ">300k</span>
                                        <span
                                            class="other-card-fs another border-grey rounded mb-1 d-flex justify-content-center">8.7k</span>
                                        <span
                                            class="other-card-fs another border-grey rounded mb-1 d-flex justify-content-center">7</span>

                                    </div>
                                </div>

                            </div>
                            <span class="divider m-0 p-0">
                                <hr class="m-0 p-0 ">
                            </span>
                            <div class="go-to-buttons d-flex flex-wrap gap-2 text-light ms-4 flex-nowrap">
                                <button type="button" class="btn other-card-fs d-flex align-items-center flex-nowrap">
                                    Track Channel
                                    <img src="@/assets/go-there.svg" alt="Go There Icon" class="ms-2"
                                        style="width: 16px; height: 16px;">
                                </button>
                                <button type="button" class="btn other-card-fs d-flex align-items-center flex-nowrap">
                                    View Outliers
                                    <img src="@/assets/go-there.svg" alt="Go There Icon" class="ms-2"
                                        style="width: 16px; height: 16px;">
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class=" height col-12 col-sm-6 col-md-6 col-lg-4 col-xxl-3 col-xl-3 p-2 mb-2">
                    <div class="custom-card border border-color rounded card-bg text-white ">
                        <div class="card-top ">
                            <div class="top-section d-flex flex-row p-2">
                                <img src="@/assets/channel-search-icon.svg ">
                                <div class="align-content-center">
                                    <span class="channel-name-styling">CluelessMilleniel</span><br>
                                    <span class="other-card-fs">Channel category
                                    </span>
                                </div>
                            </div>
                            <div class="custom-card-body  ">

                                <div class="info d-flex flex-row ps-2">
                                    <div class="leftside d-flex flex-column">

                                        <span class="other-card-fs ">subscribers</span>
                                        <span class="other-card-fs">videos</span>
                                        <span class="other-card-fs">total Views</span>
                                    </div>

                                    <div class="right-side d-flex flex-column justify-content-center">
                                        <span
                                            class="other-card-fs another border-grey rounded mb-1 d-flex justify-content-center ">300k</span>
                                        <span
                                            class="other-card-fs another border-grey rounded mb-1 d-flex justify-content-center">8.7k</span>
                                        <span
                                            class="other-card-fs another border-grey rounded mb-1 d-flex justify-content-center">7</span>

                                    </div>
                                </div>

                            </div>
                            <span class="divider m-0 p-0">
                                <hr class="m-0 p-0 ">
                            </span>
                            <div class="go-to-buttons d-flex flex-wrap gap-2 text-light ms-4 flex-nowrap">
                                <button type="button" class="btn other-card-fs d-flex align-items-center flex-nowrap">
                                    Track Channel
                                    <img src="@/assets/go-there.svg" alt="Go There Icon" class="ms-2"
                                        style="width: 16px; height: 16px;">
                                </button>
                                <button type="button" class="btn other-card-fs d-flex align-items-center flex-nowrap">
                                    View Outliers
                                    <img src="@/assets/go-there.svg" alt="Go There Icon" class="ms-2"
                                        style="width: 16px; height: 16px;">
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class=" height col-12 col-sm-6 col-md-6 col-lg-4 col-xxl-3 col-xl-3 p-2 mb-2">
                    <div class="custom-card border border-color rounded card-bg text-white ">
                        <div class="card-top ">
                            <div class="top-section d-flex flex-row p-2">
                                <img src="@/assets/channel-search-icon.svg ">
                                <div class="align-content-center">
                                    <span class="channel-name-styling">CluelessMilleniel</span><br>
                                    <span class="other-card-fs">Channel category
                                    </span>
                                </div>
                            </div>
                            <div class="custom-card-body  ">

                                <div class="info d-flex flex-row ps-2">
                                    <div class="leftside d-flex flex-column">

                                        <span class="other-card-fs ">subscribers</span>
                                        <span class="other-card-fs">videos</span>
                                        <span class="other-card-fs">total Views</span>
                                    </div>

                                    <div class="right-side d-flex flex-column justify-content-center">
                                        <span
                                            class="other-card-fs another border-grey rounded mb-1 d-flex justify-content-center ">300k</span>
                                        <span
                                            class="other-card-fs another border-grey rounded mb-1 d-flex justify-content-center">8.7k</span>
                                        <span
                                            class="other-card-fs another border-grey rounded mb-1 d-flex justify-content-center">7</span>

                                    </div>
                                </div>

                            </div>
                            <span class="divider m-0 p-0">
                                <hr class="m-0 p-0 ">
                            </span>
                            <div class="go-to-buttons d-flex flex-wrap gap-2 text-light ms-4 flex-nowrap">
                                <button type="button" class="btn other-card-fs d-flex align-items-center flex-nowrap">
                                    Track Channel
                                    <img src="@/assets/go-there.svg" alt="Go There Icon" class="ms-2"
                                        style="width: 16px; height: 16px;">
                                </button>
                                <button type="button" class="btn other-card-fs d-flex align-items-center flex-nowrap">
                                    View Outliers
                                    <img src="@/assets/go-there.svg" alt="Go There Icon" class="ms-2"
                                        style="width: 16px; height: 16px;">
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class=" height col-12 col-sm-6 col-md-6 col-lg-4 col-xxl-3 col-xl-3 p-2 mb-2">
                    <div class="custom-card border border-color rounded card-bg text-white ">
                        <div class="card-top ">
                            <div class="top-section d-flex flex-row p-2">
                                <img src="@/assets/channel-search-icon.svg ">
                                <div class="align-content-center">
                                    <span class="channel-name-styling">CluelessMilleniel</span><br>
                                    <span class="other-card-fs">Channel category
                                    </span>
                                </div>
                            </div>
                            <div class="custom-card-body  ">

                                <div class="info d-flex flex-row ps-2">
                                    <div class="leftside d-flex flex-column">

                                        <span class="other-card-fs ">subscribers</span>
                                        <span class="other-card-fs">videos</span>
                                        <span class="other-card-fs">total Views</span>
                                    </div>

                                    <div class="right-side d-flex flex-column justify-content-center">
                                        <span
                                            class="other-card-fs another border-grey rounded mb-1 d-flex justify-content-center ">300k</span>
                                        <span
                                            class="other-card-fs another border-grey rounded mb-1 d-flex justify-content-center">8.7k</span>
                                        <span
                                            class="other-card-fs another border-grey rounded mb-1 d-flex justify-content-center">7</span>

                                    </div>
                                </div>

                            </div>
                            <span class="divider m-0 p-0">
                                <hr class="m-0 p-0 ">
                            </span>
                            <div class="go-to-buttons d-flex flex-wrap gap-2 text-light ms-4 flex-nowrap">
                                <button type="button" class="btn other-card-fs d-flex align-items-center flex-nowrap">
                                    Track Channel
                                    <img src="@/assets/go-there.svg" alt="Go There Icon" class="ms-2"
                                        style="width: 16px; height: 16px;">
                                </button>
                                <button type="button" class="btn other-card-fs d-flex align-items-center flex-nowrap">
                                    View Outliers
                                    <img src="@/assets/go-there.svg" alt="Go There Icon" class="ms-2"
                                        style="width: 16px; height: 16px;">
                                </button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </div>

</template>







<style>
.border-color {
    border-color: solid #7F838E;
}

.right-side {
    margin-left: 38px;
}

.btn {
    color: aliceblue;
}

.btn-fs {
    font-size: 14px;
    height: 10px;

}

.other-card-fs {

    font-size: 12px;
    padding: 5px;
}

.channel-name-styling {
    font-size: 18px;
}

.body {
    background-color: #282F40;
}

.another {
    background-color: #282F40;
}

.video-side {
    margin-left: 100px;
    /* This should match the width of your navbar */
    padding: 20px;
}



.radio-container {
    width: 100%;
    max-width: 399px;
    justify-content: space-between;
    margin-right: 30px;
}

.font-of-moreifo {
    font-size: small;
}


.custom-card {
    width: 100%;
    max-width: 283px;
    height: 100%;
    max-height: 234px;
}

.height {
    height: 100%;
    max-height: 234px;
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

}

.defaultradio {
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

.card-bg {
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