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
                    <h1>Contact Us</h1>
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
    <section class="contact-form form-in">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-12 col-lg-12">
            <h2 class="sec-heading">SEND US MESSAGE</h2>
          </div>
          <div class="col-sm-12 col-md-10 col-lg-8 m-auto">

            @livewire('contact')
          </div>
        </div>
      </div>
    </section>
    <!-- Dealer Form -->
    <!-- Contact Details -->
    <section class="contact-details">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-4 col-lg-4">
            <div class="box">
              <div class="iconic"><i class="fas fa-map-marker-alt"></i></div>
              <p>There Are Many Variations Of Passages</p>
            </div>
          </div>
          <div class="col-sm-12 col-md-4 col-lg-4">
            <div class="box">
              <div class="iconic"><i class="fas fa-phone-alt"></i></div>
              <p>123-456-7890</p>
            </div>
          </div>
          <div class="col-sm-12 col-md-4 col-lg-4">
            <div class="box">
              <div class="iconic"><i class="fas fa-envelope"></i></div>
              <p>info@dummy.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Contact Details -->

@endsection
