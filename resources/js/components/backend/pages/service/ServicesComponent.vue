<template>
  <div>
    <!-- start page title -->
            <breadcrumb active_name="Services List"/>
     <!-- end page title -->

                        <div class="row">
                            <div class="col-12">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="row mb-2">
                                            <div class="col-sm-4">
                                                <searchInput :apiurl="'/service?page=' +this.page_num"
                                                    v-on:query="isQuery($event)"
                                                    v-on:loading="loadingStart($event)"
                                                    v-on:reload="getServices()"
                                                    v-on:filterList="filterData($event)"
                                                    label="Search Users"></searchInput>
                                            </div>
                                            <div class="col-sm-8">
                                                <div class="text-sm-end">
                                                    <button type="button" class="btn btn-success btn-rounded waves-effect waves-light mb-2 me-2"><i class="mdi mdi-plus me-1"></i> Add New Order</button>
                                                </div>
                                            </div><!-- end col-->
                                        </div>
                                        <!-- Vue Component -->
                                        <serviceTable :services="services"></serviceTable>

                                        <ul class="pagination pagination-rounded justify-content-end mb-2">
                                            <li class="page-item disabled">
                                                <a class="page-link" href="javascript: void(0);" aria-label="Previous">
                                                    <i class="mdi mdi-chevron-left"></i>
                                                </a>
                                            </li>
                                            <li class="page-item active"><a class="page-link" href="javascript: void(0);">1</a></li>
                                            <li class="page-item"><a class="page-link" href="javascript: void(0);">2</a></li>
                                            <li class="page-item"><a class="page-link" href="javascript: void(0);">3</a></li>
                                            <li class="page-item"><a class="page-link" href="javascript: void(0);">4</a></li>
                                            <li class="page-item"><a class="page-link" href="javascript: void(0);">5</a></li>
                                            <li class="page-item">
                                                <a class="page-link" href="javascript: void(0);" aria-label="Next">
                                                    <i class="mdi mdi-chevron-right"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>


  </div>
</template>

<script>
import breadcrumb from '../../components/breadcrumbComponent.vue';
import searchInput from "../../components/SearchInputComponent.vue";
import serviceTable from "./ServiceTable.vue";
export default {
components:{breadcrumb,searchInput,serviceTable},
data(){
    return {
        page_num:1,
        services:{},
        loading:false,
    };
},
methods:{
        async getServices(page=1){
            axios.get('/service').then((res)=>{
                this.services=res.data.services;
            });
        },
         isQuery(query) {
            return (this.query = query);
          },
          openModal(val){
            // this.resetForm();
        //    return this.active_modal=val;
          },
          filterData(data){
            this.services = data.services;
          },
           loadingStart(value) {
            this.loading = value;
          },
},
};
</script>

<style>
</style>
