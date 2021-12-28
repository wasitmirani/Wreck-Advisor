@extends('layouts.frontend.master')

@section('content')

<div class="slider inner-page" >
      <div id="slider-id">
        <div class="item" >
          <div class="banner" style="background:url('/frontend/assets/images/dealer-banner.png')">
            <div class="container">
              <div class="row">
                <div class="col-lg-12">
                  <div class="slider-content">
                    <h1>Blog</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Banner -->
    <!-- Work Sec -->
    <section class="blogs">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <ul class="list-unstyled">
              <li>
                <div class="box">
                  <div class="img-box"><img src="{{asset('/frontend/assets/images/blog1.png')}}" class="img-fluid" alt=""></div>
                  <div class="overlay">
                    <span>May 28, 2021</span>
                    <h3>Flood Damaged Cars</h3>
                    <p class="sec-para">Whether you’re searching for a temporary place to stay or are looking for your forever home</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="box">
                  <div class="img-box"><img src="{{asset('/frontend/assets/images/blog2.png')}}" class="img-fluid" alt=""></div>
                  <div class="overlay">
                    <span>May 28, 2021</span>
                    <h3>Flood Damaged Cars</h3>
                    <p class="sec-para">Whether you’re searching for a temporary place to stay or are looking for your forever home</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="box">
                  <div class="img-box"><img src="{{asset('/frontend/assets/images/blog3.png')}}" class="img-fluid" alt=""></div>
                  <div class="overlay">
                    <span>May 28, 2021</span>
                    <h3>Flood Damaged Cars</h3>
                    <p class="sec-para">Whether you’re searching for a temporary place to stay or are looking for your forever home</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="box">
                  <div class="img-box"><img src="{{asset('/frontend/assets/images/blog4.png')}}" class="img-fluid" alt=""></div>
                  <div class="overlay">
                    <span>May 28, 2021</span>
                    <h3>Flood Damaged Cars</h3>
                    <p class="sec-para">Whether you’re searching for a temporary place to stay or are looking for your forever home</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="box">
                  <div class="img-box"><img src="{{asset('/frontend/assets/images/blog5.png')}}" class="img-fluid" alt=""></div>
                  <div class="overlay">
                    <span>May 28, 2021</span>
                    <h3>Flood Damaged Cars</h3>
                    <p class="sec-para">Whether you’re searching for a temporary place to stay or are looking for your forever home</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <!-- Work Sec -->
@endsection
