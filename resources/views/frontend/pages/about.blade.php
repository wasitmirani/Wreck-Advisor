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
              <p class="sec-para">
                  Wreck Advisors is an automobile solution provider owned by Scott Brown, who has approximately 40 years of experience in the automotive industry.
Wreck Advisors' vision and objective are to mainly help those who have a wrecked or accidental car. Our vision and experience are vivid; all we needed was to put our connections and sources together. This is precisely why Wreck Advisors is established as a platform to connect our customers with our dealership connections (car repair and trade services).
So that from the point of association, we can provide you with the most appropriate solutions; not only will our solutions assist you, but they will also save you a plethora of Money, Time, and Stress.
Since many believe that it is a good idea to sell or trade a car, especially if it has been in an accident. That's when we at Wreck Advisors come in best light as we offer our customers an option to either get their accidental car fixed or traded in for a different car.

Few are unaware that an accidental car can be well functional even after repair, especially if experienced and competent professionals such as our staff/ connection work on your wrecked car.

Wreck Advisors is associated with some of the most reputable auto repair businesses in Virginia, North Carolina, South Carolina, and West Virginia.

                <ul class="list-unstyled">
                  <li>Guaranteed Satisfaction.</li>
                  <li>Countless Options .</li>
                  <li>100% Transparency.</li>
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
