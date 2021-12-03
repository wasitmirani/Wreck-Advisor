<template>
  <div>
       <div class="table-responsive">
                                            <table class="table align-middle table-nowrap table-check">
                                                <thead class="table-light">
                                                    <tr>
                                                        <th style="width: 20px;" class="align-middle">
                                                          <vs-checkbox v-model="checkAll">
                                                          </vs-checkbox>
                                                        </th>
                                                        <th class="align-middle">Service ID</th>
                                                        <th class="align-middle">Service Name</th>
                                                           <th class="align-middle">Parent Service</th>
                                                        <th class="align-middle">Date</th>
                                                        <th class="align-middle">Status</th>
                                                        <th class="align-middle">View Details</th>
                                                        <th class="align-middle">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>

                                                               <vs-checkbox v-model="checkAll">
                                                                </vs-checkbox>
                                                         
                                                        </td>
                                                        <td><a href="javascript: void(0);" class="text-body fw-bold">#SK2540</a> </td>
                                                        <td>Neal Matthews</td>
                                                        <td>Neal Matthews</td>
                                                        <td>
                                                            07 Oct, 2019
                                                        </td>

                                                        <td>
                                                            <span class="badge badge-pill badge-soft-success font-size-12">Active</span>
                                                        </td>

                                                        <td>
                                                            <!-- Button trigger modal -->
                                                            <button type="button" class="btn btn-primary btn-sm btn-rounded" data-bs-toggle="modal" data-bs-target=".orderdetailsModal">
                                                                View Details
                                                            </button>
                                                        </td>
                                                        <td>
                                                            <div class="d-flex gap-3">
                                                                <a href="javascript:void(0);" class="text-success"><i class="mdi mdi-pencil font-size-18"></i></a>
                                                                <a href="javascript:void(0);" class="text-danger"><i class="mdi mdi-delete font-size-18"></i></a>
                                                            </div>
                                                        </td>
                                                    </tr>



                                                </tbody>
                                            </table>
                                        </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            checkAll:[],
        }
    }
}
</script>

<style>

</style>
