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
                    <h1>About Us</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Banner -->
    <!-- Dealer Form -->
    <section class="aboutnew">
      <div class="container-fluid p-0">
        <div class="row">
          <div class="col-sm-12 col-md-6 col-lg-6">
            <div class="content">
              <h2 class="sec-heading">About Us</h2>
              <p class="sec-para">Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500S, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book.
                <ul class="list-unstyled">
                  <li>There Are Many Variations Of Passages.</li>
                  <li>There Are Many Variations Of Passages.</li>
                  <li>There Are Many Variations Of Passages.</li>
                </ul>

              </p>
            </div>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-6">
            <div class="img-box"><img src="{{asset('/frontend/assets/images/about-img.png')}}" class="img-fluid" alt=""></div>
          </div>
        </div>
      </div>
    </section>
    <!-- Dealer Form -->
@endsection
