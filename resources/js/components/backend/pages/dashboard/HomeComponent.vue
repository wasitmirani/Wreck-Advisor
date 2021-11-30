<template>
<div>
     <!-- start page title -->
    <div class="row">
        <div class="col-12">
            <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                <h4 class="mb-sm-0 font-size-18">Hi, {{auth_user.name}} ! </h4>

                <div class="page-title-right">
                    <ol class="breadcrumb m-0">
                        <li class="breadcrumb-item"><a href="javascript: void(0);">Dashboard</a></li>
                        <li class="breadcrumb-item active">Welcome, {{auth_user.name}}!</li>
                    </ol>
                </div>

            </div>
        </div>
    </div>
    <!-- end page title -->

    <div class="row">
       <div class="col-xl-3 col-md-6">
        <minichart title="Orders" :index="1" :series="[{title:'All Orders',value:100},{title:'New Orders',value:20}]"  label="Since last week"></minichart>
        </div>
        <div class="col-xl-3 col-md-6">
        <minichart title="Members" :index="2" :series="[{title:'All Members',value:500},{title:'New Members',value:10}]" label="Since last month"></minichart>
        </div>
        <div class="col-xl-3 col-md-6">
        <minichart title="Customers" :index="3" :series="[{title:'All Customers',value:100},{title:'New Members',value:30}]" label="Since last week"></minichart>
        </div>
        <div class="col-xl-3 col-md-6">
          <minichart title="Customers" :index="4" :series="[{title:'All Subscribers',value:340},{title:'New Members',value:90}]" label="Since last week"></minichart>
        </div>
    </div><!-- end row-->
     <div class="row">
        <div class="col-md-6">
           <epieChart title="Orders" label="Users" :index="1" :data="[{value: 335,name:'Users'},{value: 200,name:'Members'},{value: 40,name:'Customers'},{value: 80,name:'Subscribers'},{value: 20,name:'Daily'}]" ></epieChart>
        </div>
         <div class="col-md-6">
             <edoughtnutChart index="1" :data="[{value: 335,name:'Users'},{value: 335,name:'New Users'}]"></edoughtnutChart>
         </div>
     </div>
    <div class="row">
        <div class="col-xl-8">
            <!-- card -->
            <div class="card">
                <!-- card body -->
                <div class="card-body">
                    <div class="d-flex flex-wrap align-items-center mb-4">
                        <h5 class="card-title me-2">Market Overview</h5>
                        <div class="ms-auto">
                            <div>
                                <button type="button" class="btn btn-soft-primary btn-sm">
                                    ALL
                                </button>
                                <button type="button" class="btn btn-soft-secondary btn-sm">
                                    1M
                                </button>
                                <button type="button" class="btn btn-soft-secondary btn-sm">
                                    6M
                                </button>
                                <button type="button" class="btn btn-soft-secondary btn-sm active">
                                    1Y
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="row align-items-center">
                        <div class="col-xl-8">
                            <div>
                                <div id="market-overview" data-colors='["#33c38e ", "#1c84ee"]' class="apex-charts"></div>
                            </div>
                        </div>
                        <div class="col-xl-4">
                            <div class="p-4">
                                <div class="mt-0">
                                    <div class="d-flex align-items-center">
                                        <div class="avatar-sm m-auto">
                                            <span class="avatar-title rounded-circle bg-light text-dark font-size-13">
                                                1
                                            </span>
                                        </div>
                                        <div class="flex-grow-1 ms-3">
                                            <span class="font-size-14">Mobile Phones</span>
                                        </div>

                                        <div class="flex-shrink-0">
                                            <span class="badge rounded-pill badge-soft-warning font-size-12 fw-medium">+5.4%</span>
                                        </div>
                                    </div>
                                </div>

                                <div class="mt-3">
                                    <div class="d-flex align-items-center">
                                        <div class="avatar-sm m-auto">
                                            <span class="avatar-title rounded-circle bg-light text-dark font-size-13">
                                                2
                                            </span>
                                        </div>
                                        <div class="flex-grow-1 ms-3">
                                            <span class="font-size-14">Smart Watch</span>
                                        </div>

                                        <div class="flex-shrink-0">
                                            <span class="badge rounded-pill badge-soft-warning font-size-12 fw-medium">+6.8%</span>
                                        </div>
                                    </div>
                                </div>

                                <div class="mt-3">
                                    <div class="d-flex align-items-center">
                                        <div class="avatar-sm m-auto">
                                            <span class="avatar-title rounded-circle bg-light text-dark font-size-13">
                                                3
                                            </span>
                                        </div>
                                        <div class="flex-grow-1 ms-3">
                                            <span class="font-size-14">Protable Acoustics</span>
                                        </div>

                                        <div class="flex-shrink-0">
                                            <span class="badge rounded-pill badge-soft-danger font-size-12 fw-medium">-4.9%</span>
                                        </div>
                                    </div>
                                </div>

                                <div class="mt-3">
                                    <div class="d-flex align-items-center">
                                        <div class="avatar-sm m-auto">
                                            <span class="avatar-title rounded-circle bg-light text-dark font-size-13">
                                                4
                                            </span>
                                        </div>
                                        <div class="flex-grow-1 ms-3">
                                            <span class="font-size-14">Smart Speakers</span>
                                        </div>

                                        <div class="flex-shrink-0">
                                            <span class="badge rounded-pill badge-soft-warning font-size-12 fw-medium">+3.5%</span>
                                        </div>
                                    </div>
                                </div>

                                <div class="mt-3">
                                    <div class="d-flex align-items-center">
                                        <div class="avatar-sm m-auto">
                                            <span class="avatar-title rounded-circle bg-light text-dark font-size-13">
                                                5
                                            </span>
                                        </div>
                                        <div class="flex-grow-1 ms-3">
                                            <span class="font-size-14">Camcorders</span>
                                        </div>

                                        <div class="flex-shrink-0">
                                            <span class="badge rounded-pill badge-soft-danger font-size-12 fw-medium">-0.3%</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="mt-4 pt-2">
                                    <a href="" class="btn btn-primary w-100">See All Balances <i class="mdi mdi-arrow-right ms-1"></i></a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <!-- end card -->
            </div>
            <!-- end col -->
        </div>
        <!-- end row-->

        <div class="col-xl-4">
            <!-- card -->
            <div class="card">
                <!-- card body -->
                <div class="card-body">
                    <div class="d-flex flex-wrap align-items-center mb-4">
                        <h5 class="card-title me-2">Sales by Locations</h5>
                        <div class="ms-auto">
                            <div class="dropdown">
                                <a class="dropdown-toggle text-reset" href="#" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span class="text-muted font-size-12">Sort By:</span> <span class="fw-medium">World<i class="mdi mdi-chevron-down ms-1"></i></span>
                                </a>

                                <div class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton1">
                                    <a class="dropdown-item" href="#">USA</a>
                                    <a class="dropdown-item" href="#">Russia</a>
                                    <a class="dropdown-item" href="#">Australia</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="sales-by-locations" data-colors='["#10dae6"]' style="height: 253px"></div>

                    <div class="px-2 py-2">
                        <p class="mb-1">USA <span class="float-end">75%</span></p>
                        <div class="progress mt-2" style="height: 6px;">
                            <div class="progress-bar progress-bar-striped bg-primary" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="75">
                            </div>
                        </div>

                        <p class="mt-3 mb-1">Russia <span class="float-end">55%</span></p>
                        <div class="progress mt-2" style="height: 6px;">
                            <div class="progress-bar progress-bar-striped bg-primary" role="progressbar" style="width: 55%" aria-valuenow="55" aria-valuemin="0" aria-valuemax="55">
                            </div>
                        </div>

                        <p class="mt-3 mb-1">Australia <span class="float-end">85%</span></p>
                        <div class="progress mt-2" style="height: 6px;">
                            <div class="progress-bar progress-bar-striped bg-primary" role="progressbar" style="width: 85%" aria-valuenow="85" aria-valuemin="0" aria-valuemax="85">
                            </div>
                        </div>
                    </div>
                </div>
                <!-- end card body -->
            </div>
            <!-- end card -->
        </div>
        <!-- end col -->
    </div>
    <!-- end row-->

    <div class="row">
        <div class="col-xl-3">
            <div class="card">
                <div class="card-header align-items-center d-flex">
                    <h4 class="card-title mb-0 flex-grow-1">Customer List</h4>
                    <div class="flex-shrink-0">
                        <div class="dropdown">
                            <a class=" dropdown-toggle" href="#" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span class="text-muted">All Members<i class="mdi mdi-chevron-down ms-1"></i></span>
                            </a>

                            <div class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton2">
                                <a class="dropdown-item" href="#">Members</a>
                                <a class="dropdown-item" href="#">New Members</a>
                                <a class="dropdown-item" href="#">Old Members</a>
                            </div>
                        </div>
                    </div>
                </div><!-- end card header -->

                <div class="card-body px-0">
                    <div class="px-3" data-simplebar="" style="max-height: 386px;">
                        <div class="d-flex align-items-center pb-4">
                            <div class="avatar-md me-4">
                                <img src="assets/images/users/avatar-2.jpg" class="img-fluid rounded-circle" alt="">
                            </div>
                            <div class="flex-grow-1">
                                <h5 class="font-size-15 mb-1"><a href="" class="text-dark">Randy Matthews</a></h5>
                                <span class="text-muted">Randy@gmail.com</span>
                            </div>
                            <div class="flex-shrink-0 text-end">
                                <div class="dropdown align-self-start">
                                    <a class="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i class="bx bx-dots-vertical-rounded font-size-24 text-dark"></i>
                                    </a>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href="#">Copy</a>
                                        <a class="dropdown-item" href="#">Save</a>
                                        <a class="dropdown-item" href="#">Forward</a>
                                        <a class="dropdown-item" href="#">Delete</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="d-flex align-items-center pb-4">
                            <div class="avatar-md me-4">
                                <img src="assets/images/users/avatar-4.jpg" class="img-fluid rounded-circle" alt="">
                            </div>
                            <div class="flex-grow-1">
                                <h5 class="font-size-15 mb-1"><a href="" class="text-dark">Vernon Wood</a></h5>
                                <span class="text-muted">Vernon@gmail.com</span>
                            </div>
                            <div class="flex-shrink-0 text-end">
                                <div class="dropdown align-self-start">
                                    <a class="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i class="bx bx-dots-vertical-rounded font-size-24 text-dark"></i>
                                    </a>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href="#">Copy</a>
                                        <a class="dropdown-item" href="#">Save</a>
                                        <a class="dropdown-item" href="#">Forward</a>
                                        <a class="dropdown-item" href="#">Delete</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="d-flex align-items-center pb-4">
                            <div class="avatar-md me-4">
                                <img src="assets/images/users/avatar-5.jpg" class="img-fluid rounded-circle" alt="">
                            </div>
                            <div class="flex-grow-1">
                                <h5 class="font-size-15 mb-1"><a href="" class="text-dark">Howard Rhoades</a></h5>
                                <span class="text-muted">Howard@gmail.com</span>
                            </div>
                            <div class="flex-shrink-0 text-end">
                                <div class="dropdown align-self-start">
                                    <a class="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i class="bx bx-dots-vertical-rounded font-size-24 text-dark"></i>
                                    </a>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href="#">Copy</a>
                                        <a class="dropdown-item" href="#">Save</a>
                                        <a class="dropdown-item" href="#">Forward</a>
                                        <a class="dropdown-item" href="#">Delete</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="d-flex align-items-center pb-4">
                            <div class="avatar-md me-4">
                                <img src="assets/images/users/avatar-6.jpg" class="img-fluid rounded-circle" alt="">
                            </div>
                            <div class="flex-grow-1">
                                <h5 class="font-size-15 mb-1"><a href="" class="text-dark">Arthur Zurcher</a></h5>
                                <span class="text-muted">Arthur@gmail.com</span>
                            </div>
                            <div class="flex-shrink-0 text-end">
                                <div class="dropdown align-self-start">
                                    <a class="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i class="bx bx-dots-vertical-rounded font-size-24 text-dark"></i>
                                    </a>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href="#">Copy</a>
                                        <a class="dropdown-item" href="#">Save</a>
                                        <a class="dropdown-item" href="#">Forward</a>
                                        <a class="dropdown-item" href="#">Delete</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="d-flex align-items-center pb-4">
                            <div class="avatar-md me-4">
                                <img src="assets/images/users/avatar-8.jpg" class="img-fluid rounded-circle" alt="">
                            </div>
                            <div class="flex-grow-1">
                                <h5 class="font-size-15 mb-1"><a href="" class="text-dark">Angela Palmer</a></h5>
                                <span class="text-muted">Angela@gmail.com</span>
                            </div>
                            <div class="flex-shrink-0 text-end">
                                <div class="dropdown align-self-start">
                                    <a class="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i class="bx bx-dots-vertical-rounded font-size-24 text-dark"></i>
                                    </a>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href="#">Copy</a>
                                        <a class="dropdown-item" href="#">Save</a>
                                        <a class="dropdown-item" href="#">Forward</a>
                                        <a class="dropdown-item" href="#">Delete</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="d-flex align-items-center pb-3">
                            <div class="avatar-md me-4">
                                <img src="assets/images/users/avatar-9.jpg" class="img-fluid rounded-circle" alt="">
                            </div>
                            <div class="flex-grow-1">
                                <h5 class="font-size-15 mb-1"><a href="" class="text-dark">Dorothy Wimson</a></h5>
                                <span class="text-muted">Dorothy@gmail.com</span>
                            </div>
                            <div class="flex-shrink-0 text-end">
                                <div class="dropdown align-self-start">
                                    <a class="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i class="bx bx-dots-vertical-rounded font-size-24 text-dark"></i>
                                    </a>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href="#">Copy</a>
                                        <a class="dropdown-item" href="#">Save</a>
                                        <a class="dropdown-item" href="#">Forward</a>
                                        <a class="dropdown-item" href="#">Delete</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- end card body -->
            </div>
            <!-- end card -->
        </div>
        <!-- end col -->


        <!-- end col -->

   
        <!-- end col -->
    </div><!-- end row -->
</div>

</template>

<script>
import minichart from "../../components/miniChartComponent"
import epieChart from "../../components/charts/epieChartComponent";
import edoughtnutChart from "../../components/charts/edoughnutChartComponent.vue";
    export default {
        components: {minichart,epieChart,edoughtnutChart},
        data() {
            return {
            prevRoute: null,
            auth_user:{},
            };
        },
        beforeRouteEnter(to, from, next) {
        next(vm => {
            console.log(from);
            console.log(vm.prevRoute );
            vm.prevRoute = from
        })
        },
        mounted() {
            this.auth_user=user;

            console.log('Component mounted.')
        }
    }
</script>
