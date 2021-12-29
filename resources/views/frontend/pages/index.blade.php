@extends('layouts.frontend.master')


@section('content')

 <!-- Banner -->
    <div class="slider" >
      <div id="slider-id">
        <div class="item" >
          <div class="banner" style="background:url('frontend/assets/images/banner.png')">
            <div class="container">
              <div class="row">
                <div class="col-lg-12">
                  <div class="slider-content">
                    <h1>EXCLUSIVE SOLUTIONS FOR YOU</h1>
                    <p>Accidents cause consequences; Wreck Advisors is here to ensure that you don’t face any consequences and make the right choice.</p>
                        {{-- Livewire  Component--}}
                           {{--  <livewire:inquiry-form/> --}}
                            @livewire('inquiry-form')
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="item" >
          <div class="banner" style="background:url('frontend/assets/images/banner.png')">
            <div class="container">
              <div class="row">
                <div class="col-lg-12">
                  <div class="slider-content">
                  <h1>EXCLUSIVE SOLUTIONS FOR YOU</h1>
                    <p>Accidents cause consequences; Wreck Advisors is here to ensure that you don’t face any consequences and make the right choice.</p>
                            {{-- Livewire  Component--}}
                            {{-- <livewire:inquiry-form/> --}}
                              @livewire('inquiry-form')
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Banner -->
    <!-- About Us -->
    <section class="about">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-12 col-lg-12">
            <h2 class="sec-heading">Our Exclusive Services</h2>
            <p class="sec-para">At Wreck Advisors, we offer you the alternative to trade in your accidental car along with other options such as repairs. We provide these opportunities all under one roof to save your Time, Money, and Energy.</p>
          </div>
        </div>
      </div>
      <div class="container-fluid p-0">
        <div class="row">
          <div class="col-sm-12 col-md-6 col-lg-6 dis-flex-start">
            <div class="content">
              <ul>
                <li>Hassle-Free Solutions </li>
                <li>Effective Solutions </li>
                <li>Market Competency</li>
              </ul>
              <a href="#" class="btn btn-business mt-4">Learn More</a>
            </div>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-6">
            <div class="img-box"><img src="frontend/assets/images/about-img.png" class="img-fluid" alt=""></div>
          </div>
        </div>
      </div>
    </section>
    <!-- About Us -->
    <!-- Services -->
    <section class="service">
      <div class="container-fluid p-0">
        <div class="row">
          <div class="col-sm-12 col-md-6 col-lg-4">
            <div class="box-overlay colorlay light-green">
              <div class="img-box"><img src="frontend/assets/images/1.png" class="img-fluid" alt=""></div>
              <div class="overlay">
                <h3 class="hd">Used Cars</h3>
                <p>At Wreck Advisors, you can trade your wrecked car in for a used car of your choice! We are associated with various car dealerships across America.</p>
                <a href="#" class="btn">View More</a>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-4">
            <div class="box-overlay colorlay brown">
              <div class="img-box"><img src="frontend/assets/images/2.png" class="img-fluid" alt=""></div>
              <div class="overlay">
                <h3 class="hd">Damage Cars</h3>
                <p>We help people sell their damaged cars or have their cars fixed in the most cost-effective manner, and that also under reliable dealerships.</p>
                <a href="#" class="btn">View More</a>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-4">
            <div class="box-overlay colorlay ">
              <div class="img-box"><img src="frontend/assets/images/3.png" class="img-fluid" alt=""></div>
              <div class="overlay">
                <h3 class="hd">Flood Damaged Cars</h3>
                <p>Regardless of how damaged or wrecked your car may seem due to flooding that destroyed your car entirely, our professionals will cater to you to get the best car deal or repairs for your misfortune.</p>
                <a href="#" class="btn">View More</a>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-6">
            <div class="box-overlay colorlay light-brown height-400 ">
              <div class="img-box "><img src="frontend/assets/images/4.png" class="img-fluid" alt=""></div>
              <div class="overlay">
                <h3 class="hd">Towing Cars</h3>
                <p>Wreck Advisors will help you get your car towed to your desired location or dealership. Simply give us a call and leave the rest of the hassle to us!</p>
                <a href="#" class="btn">View More</a>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-6">
            <div class="box-overlay colorlay green height-400 ">
              <div class="img-box "><img src="frontend/assets/images/5.png" class="img-fluid" alt=""></div>
              <div class="overlay">
                <h3 class="hd">Accidental Cars</h3>
                <p>We connect clients with accidental cars to reliable and cost-friendly service stations and dealerships to either get their cars fixed or traded in for a new vehicle.</p>
                <a href="#" class="btn">View More</a>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12 col-md-8 col-sm-8">
              <div class="row">
                <div class="col-sm-12 col-md-12 col-lg-12">
                  <div class="box-overlay colorlay brown height-400 ">
                    <div class="img-box "><img src="frontend/assets/images/6.png" class="img-fluid" alt=""></div>
                    <div class="overlay">
                      <h3 class="hd">Junk & Salvage Cars</h3>
                      <p>Whether you are an individual or a dealership, Wreck Advisors is your go-to option to sell your salvage car. Connect with our professionals to unveil options that you were unaware of, and that will sufficiently suit you!</p>
                      <a href="#" class="btn">View More</a>
                    </div>
                  </div>
                </div>
                <div class="col-sm-12 col-md-6 col-lg-6">
                  <div class="box-overlay colorlay green height-400 ">
                    <div class="img-box "><img src="frontend/assets/images/7.png" class="img-fluid" alt=""></div>
                    <div class="overlay">
                      <h3 class="hd">Part-Exchange Cars</h3>
                      <p>May it be for a repair or modification, to get new parts for your vehicle; view our options on parts exchange now; we have it all for you and for the best price.</p>
                      <a href="#" class="btn">View More</a>
                    </div>
                  </div>
                </div>
                <div class="col-sm-12 col-md-6 col-lg-6">
                  <div class="box-overlay colorlay  height-400 ">
                    <div class="img-box "><img src="frontend/assets/images/8.png" class="img-fluid" alt=""></div>
                    <div class="overlay">
                      <h3 class="hd">Scrap Cars</h3>
                      <p>Whether you're an individual or a dealership who wants to sell or buy scrap cars, Wreck Advisors is your go-to option. We will connect you with our links in the automobile industry, who will ideally assist you in getting the best offers!</p>
                      <a href="#" class="btn">View More</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-12 col-md-4 col-sm-4">
              <div class="box-overlay colorlay  height-800 ">
                <div class="img-box "><img src="frontend/assets/images/9.png" class="img-fluid" alt=""></div>
                <div class="overlay">
                  <h3 class="hd">Where can I get some?</h3>
                  <p>There Are Many Variations Of Passages Of Lorem Ipsum Available</p>
                  <a href="#" class="btn">View More</a>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12 col-md-5 col-sm-5">
              <div class="box-overlay colorlay purple  height-800 ">
                <div class="img-box "><img src="frontend/assets/images/10.png" class="img-fluid" alt=""></div>
                <div class="overlay">
                  <h3 class="hd">Part-Exchange Cars</h3>
                  <p>May it be for a repair or modification, to get new parts for your vehicle; view our options on parts exchange now; we have it all for you and for the best price.</p>
                  <a href="#" class="btn">View More</a>
                </div>
              </div>
            </div>
            <div class="col-sm-12 col-md-7 col-sm-7">
              <div class="row">
                <div class="col-sm-12 col-md-12 col-lg-12">
                  <div class="box-overlay colorlay sky height-400 ">
                    <div class="img-box "><img src="frontend/assets/images/10.png" class="img-fluid" alt=""></div>
                    <div class="overlay">
                      <h4 class="text-dark">Latest Testimonial</h4>
                      <h3 class="hd">What They Say About Us.</h3>
                      <p>1.	I’m grateful to Wreck Advisors for helping me after I had completely crushed my car into a pole. I was thinking to sell my car and lease a new vehicle but Wreck Advisors managed to connect me with a dealership that revamped my wrecked car completely into a new vehicle. This approach was not only smart but also saved me from spending thousands of dollars.</p>
                      <div class="star">Mark Joseph</div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-12 col-md-12 col-lg-12">
                  <div class="box-overlay colorlay blue height-400 ">
                    <div class="img-box "><img src="frontend/assets/images/6.png" class="img-fluid" alt=""></div>
                    <div class="overlay">
                      <h3 class="hd">Contact Us</h3>
                      <p>Get in Touch with Wreck Advisors to Explore the Countless Options That You Were Yet Unaware of. We Offer You the Best Deals, Services, and Prices All Under One Roof!</p>
                      <a href="{{route('contact')}}" class="btn">View More</a>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Services -->

@endsection
