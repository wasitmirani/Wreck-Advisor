"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_backend_pages_dashboard_HomeComponent_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/components/charts/edoughnutChartComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/components/charts/edoughnutChartComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ["title", "datalabel", "data"],
  data: function data() {
    return {
      option: null
    };
  },
  methods: {
    doughnutChart: function doughnutChart() {
      var doughnutColors = getChartColorsArray("#doughnut-chart");
      dom = document.getElementById("doughnut-chart");
      myChart = echarts.init(dom);
      app = {};
      this.option = null, this.option = {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          x: "left",
          data: this.datalabel,
          textStyle: {
            color: "#858d98"
          }
        },
        color: doughnutColors,
        series: [{
          name: "Total sales",
          type: "pie",
          radius: ["50%", "70%"],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              position: "center"
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: "30",
                fontWeight: "bold"
              }
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: this.data
        }]
      }, this.option && "object" == (typeof this.option === "undefined" ? "undefined" : _typeof(this.option)) && myChart.setOption(this.option, true);
    }
  },
  mounted: function mounted() {
    this.doughnutChart();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/components/charts/epieChartComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/components/charts/epieChartComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ["title", "labels", "data", "label", "index"],
  data: function data() {
    return {
      option: null
    };
  },
  methods: {
    loadPieChart: function loadPieChart() {
      var pieColors = getChartColorsArray("#pie-chart" + this.index);
      dom = document.getElementById("pie-chart" + this.index);
      myChart = echarts.init(dom);
      app = {};
      this.option = null, this.option = {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: this.labels,
          textStyle: {
            color: "#858d98"
          }
        },
        color: pieColors,
        series: [{
          name: "Total " + this.label,
          type: "pie",
          radius: "55%",
          center: ["50%", "60%"],
          data: this.data,
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)"
            }
          }
        }]
      }, this.option && "object" == (typeof this.option === "undefined" ? "undefined" : _typeof(this.option)) && myChart.setOption(this.option, true);
    }
  },
  mounted: function mounted() {
    this.loadPieChart();
    console.log("Component mounted.Pie", this.index);
  } // mounted(){
  // this.loadPieChart();
  // }
  // [{data array sample
  //         value: 335,
  //         name: "Laptop"
  //     }, {
  //         value: 310,
  //         name: "Tablet"
  //     }, {
  //         value: 234,
  //         name: "Mobile"
  //     }, {
  //         value: 135,
  //         name: "Others"
  //     }, {
  //         value: 1548,
  //         name: "Desktop"
  //     }]

});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/components/miniChartComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/components/miniChartComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['title', 'index', 'label', 'series'],
  methods: {
    loadMiniChart: function loadMiniChart() {
      var barchartColors = getChartColorsArray("#mini-chart" + this.index);
      var options = {
        labels: [this.series[0].title, this.series[1].title],
        series: [this.series[0].value, this.series[1].value],
        chart: {
          type: "donut",
          height: 115
        },
        colors: barchartColors,
        legend: {
          show: false
        },
        dataLabels: {
          enabled: false
        }
      };
      var chart = new ApexCharts(document.querySelector("#mini-chart" + this.index), options);
      chart.render();
    }
  },
  mounted: function mounted() {
    this.loadMiniChart();
    console.log('Component mounted.');
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/pages/dashboard/HomeComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/pages/dashboard/HomeComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_miniChartComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/miniChartComponent */ "./resources/js/components/backend/components/miniChartComponent.vue");
/* harmony import */ var _components_charts_epieChartComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/charts/epieChartComponent */ "./resources/js/components/backend/components/charts/epieChartComponent.vue");
/* harmony import */ var _components_charts_edoughnutChartComponent_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/charts/edoughnutChartComponent.vue */ "./resources/js/components/backend/components/charts/edoughnutChartComponent.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    minichart: _components_miniChartComponent__WEBPACK_IMPORTED_MODULE_0__["default"],
    epieChart: _components_charts_epieChartComponent__WEBPACK_IMPORTED_MODULE_1__["default"],
    edoughtnutChart: _components_charts_edoughnutChartComponent_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      prevRoute: null,
      auth_user: {}
    };
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    next(function (vm) {
      console.log(from);
      console.log(vm.prevRoute);
      vm.prevRoute = from;
    });
  },
  mounted: function mounted() {
    this.auth_user = user;
    console.log('Component mounted.');
  }
});

/***/ }),

/***/ "./resources/js/components/backend/components/charts/edoughnutChartComponent.vue":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/backend/components/charts/edoughnutChartComponent.vue ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _edoughnutChartComponent_vue_vue_type_template_id_19445222_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edoughnutChartComponent.vue?vue&type=template&id=19445222&scoped=true& */ "./resources/js/components/backend/components/charts/edoughnutChartComponent.vue?vue&type=template&id=19445222&scoped=true&");
/* harmony import */ var _edoughnutChartComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edoughnutChartComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/backend/components/charts/edoughnutChartComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _edoughnutChartComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _edoughnutChartComponent_vue_vue_type_template_id_19445222_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _edoughnutChartComponent_vue_vue_type_template_id_19445222_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "19445222",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/backend/components/charts/edoughnutChartComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/backend/components/charts/epieChartComponent.vue":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/backend/components/charts/epieChartComponent.vue ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _epieChartComponent_vue_vue_type_template_id_15320d4d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./epieChartComponent.vue?vue&type=template&id=15320d4d& */ "./resources/js/components/backend/components/charts/epieChartComponent.vue?vue&type=template&id=15320d4d&");
/* harmony import */ var _epieChartComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./epieChartComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/backend/components/charts/epieChartComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _epieChartComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _epieChartComponent_vue_vue_type_template_id_15320d4d___WEBPACK_IMPORTED_MODULE_0__.render,
  _epieChartComponent_vue_vue_type_template_id_15320d4d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/backend/components/charts/epieChartComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/backend/components/miniChartComponent.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/components/backend/components/miniChartComponent.vue ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _miniChartComponent_vue_vue_type_template_id_08c74f19___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./miniChartComponent.vue?vue&type=template&id=08c74f19& */ "./resources/js/components/backend/components/miniChartComponent.vue?vue&type=template&id=08c74f19&");
/* harmony import */ var _miniChartComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./miniChartComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/backend/components/miniChartComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _miniChartComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _miniChartComponent_vue_vue_type_template_id_08c74f19___WEBPACK_IMPORTED_MODULE_0__.render,
  _miniChartComponent_vue_vue_type_template_id_08c74f19___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/backend/components/miniChartComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/backend/pages/dashboard/HomeComponent.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/components/backend/pages/dashboard/HomeComponent.vue ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _HomeComponent_vue_vue_type_template_id_1fd4e942___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HomeComponent.vue?vue&type=template&id=1fd4e942& */ "./resources/js/components/backend/pages/dashboard/HomeComponent.vue?vue&type=template&id=1fd4e942&");
/* harmony import */ var _HomeComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HomeComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/backend/pages/dashboard/HomeComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _HomeComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HomeComponent_vue_vue_type_template_id_1fd4e942___WEBPACK_IMPORTED_MODULE_0__.render,
  _HomeComponent_vue_vue_type_template_id_1fd4e942___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/backend/pages/dashboard/HomeComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/backend/components/charts/edoughnutChartComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/backend/components/charts/edoughnutChartComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edoughnutChartComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./edoughnutChartComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/components/charts/edoughnutChartComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edoughnutChartComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/backend/components/charts/epieChartComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/backend/components/charts/epieChartComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_epieChartComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./epieChartComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/components/charts/epieChartComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_epieChartComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/backend/components/miniChartComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/backend/components/miniChartComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_miniChartComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./miniChartComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/components/miniChartComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_miniChartComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/backend/pages/dashboard/HomeComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/backend/pages/dashboard/HomeComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HomeComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/pages/dashboard/HomeComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/backend/components/charts/edoughnutChartComponent.vue?vue&type=template&id=19445222&scoped=true&":
/*!**********************************************************************************************************************************!*\
  !*** ./resources/js/components/backend/components/charts/edoughnutChartComponent.vue?vue&type=template&id=19445222&scoped=true& ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edoughnutChartComponent_vue_vue_type_template_id_19445222_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edoughnutChartComponent_vue_vue_type_template_id_19445222_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edoughnutChartComponent_vue_vue_type_template_id_19445222_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./edoughnutChartComponent.vue?vue&type=template&id=19445222&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/components/charts/edoughnutChartComponent.vue?vue&type=template&id=19445222&scoped=true&");


/***/ }),

/***/ "./resources/js/components/backend/components/charts/epieChartComponent.vue?vue&type=template&id=15320d4d&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/backend/components/charts/epieChartComponent.vue?vue&type=template&id=15320d4d& ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_epieChartComponent_vue_vue_type_template_id_15320d4d___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_epieChartComponent_vue_vue_type_template_id_15320d4d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_epieChartComponent_vue_vue_type_template_id_15320d4d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./epieChartComponent.vue?vue&type=template&id=15320d4d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/components/charts/epieChartComponent.vue?vue&type=template&id=15320d4d&");


/***/ }),

/***/ "./resources/js/components/backend/components/miniChartComponent.vue?vue&type=template&id=08c74f19&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/backend/components/miniChartComponent.vue?vue&type=template&id=08c74f19& ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_miniChartComponent_vue_vue_type_template_id_08c74f19___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_miniChartComponent_vue_vue_type_template_id_08c74f19___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_miniChartComponent_vue_vue_type_template_id_08c74f19___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./miniChartComponent.vue?vue&type=template&id=08c74f19& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/components/miniChartComponent.vue?vue&type=template&id=08c74f19&");


/***/ }),

/***/ "./resources/js/components/backend/pages/dashboard/HomeComponent.vue?vue&type=template&id=1fd4e942&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/backend/pages/dashboard/HomeComponent.vue?vue&type=template&id=1fd4e942& ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeComponent_vue_vue_type_template_id_1fd4e942___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeComponent_vue_vue_type_template_id_1fd4e942___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeComponent_vue_vue_type_template_id_1fd4e942___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HomeComponent.vue?vue&type=template&id=1fd4e942& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/pages/dashboard/HomeComponent.vue?vue&type=template&id=1fd4e942&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/components/charts/edoughnutChartComponent.vue?vue&type=template&id=19445222&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/components/charts/edoughnutChartComponent.vue?vue&type=template&id=19445222&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "card" }, [
      _c("div", { staticClass: "card-header" }, [
        _c("h4", { staticClass: "card-title mb-0" }, [
          _vm._v(_vm._s(_vm.title) + " Chart")
        ])
      ]),
      _vm._v(" "),
      _vm._m(0)
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-body" }, [
      _c("div", {
        staticClass: "e-charts",
        attrs: {
          id: "doughnut-chart",
          "data-colors":
            '["#000421", "#ffcc5a", "#34c38f", "#16daf1", "#10dae6"]'
        }
      })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/components/charts/epieChartComponent.vue?vue&type=template&id=15320d4d&":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/components/charts/epieChartComponent.vue?vue&type=template&id=15320d4d& ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "card" }, [
      _c("div", { staticClass: "card-header" }, [
        _c("h4", { staticClass: "card-title mb-0" }, [
          _vm._v(_vm._s(_vm.title) + " Chart")
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card-body" }, [
        _c("div", {
          staticClass: "e-charts",
          attrs: {
            id: "pie-chart" + _vm.index,
            "data-colors":
              '["#34c38f", "#0a068c", "#16daf1", "#ffcc5a", "#000421"]'
          }
        })
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/components/miniChartComponent.vue?vue&type=template&id=08c74f19&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/components/miniChartComponent.vue?vue&type=template&id=08c74f19& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "card card-h-100" }, [
    _c("div", { staticClass: "card-body" }, [
      _c("div", { staticClass: "d-flex align-items-center" }, [
        _c("div", { staticClass: "flex-grow-1" }, [
          _c(
            "span",
            { staticClass: "text-muted mb-3 lh-1 d-block text-truncate" },
            [_vm._v("Total " + _vm._s(_vm.title))]
          ),
          _vm._v(" "),
          _c("h4", { staticClass: "mb-3" }, [
            _c(
              "span",
              {
                staticClass: "counter-value",
                attrs: { "data-target": this.series[0].value }
              },
              [_vm._v(_vm._s(this.series[0].value))]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "text-nowrap" }, [
            _c("span", { staticClass: "badge bg-soft-primary text-primary" }, [
              _vm._v(_vm._s(this.series[1].value))
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "ms-1 text-muted font-size-13" }, [
              _vm._v(_vm._s(_vm.label))
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "flex-shrink-0 text-end dash-widget" }, [
          _c("div", {
            staticClass: "apex-charts",
            attrs: {
              id: "mini-chart" + _vm.index,
              "data-colors": '["#33c38e ", "#1c84ee"]'
            }
          })
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/pages/dashboard/HomeComponent.vue?vue&type=template&id=1fd4e942&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/pages/dashboard/HomeComponent.vue?vue&type=template&id=1fd4e942& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-12" }, [
        _c(
          "div",
          {
            staticClass:
              "page-title-box d-sm-flex align-items-center justify-content-between"
          },
          [
            _c("h4", { staticClass: "mb-sm-0 font-size-18" }, [
              _vm._v("Hi, " + _vm._s(_vm.auth_user.name) + " ! ")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "page-title-right" }, [
              _c("ol", { staticClass: "breadcrumb m-0" }, [
                _vm._m(0),
                _vm._v(" "),
                _c("li", { staticClass: "breadcrumb-item active" }, [
                  _vm._v("Welcome, " + _vm._s(_vm.auth_user.name) + "!")
                ])
              ])
            ])
          ]
        )
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        { staticClass: "col-xl-3 col-md-6" },
        [
          _c("minichart", {
            attrs: {
              title: "Orders",
              index: 1,
              series: [
                { title: "All Orders", value: 100 },
                { title: "New Orders", value: 20 }
              ],
              label: "Since last week"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-xl-3 col-md-6" },
        [
          _c("minichart", {
            attrs: {
              title: "Members",
              index: 2,
              series: [
                { title: "All Members", value: 500 },
                { title: "New Members", value: 10 }
              ],
              label: "Since last month"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-xl-3 col-md-6" },
        [
          _c("minichart", {
            attrs: {
              title: "Customers",
              index: 3,
              series: [
                { title: "All Customers", value: 100 },
                { title: "New Members", value: 30 }
              ],
              label: "Since last week"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-xl-3 col-md-6" },
        [
          _c("minichart", {
            attrs: {
              title: "Customers",
              index: 4,
              series: [
                { title: "All Subscribers", value: 340 },
                { title: "New Members", value: 90 }
              ],
              label: "Since last week"
            }
          })
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        { staticClass: "col-md-6" },
        [
          _c("epieChart", {
            attrs: {
              title: "Orders",
              label: "Users",
              index: 1,
              data: [
                { value: 335, name: "Users" },
                { value: 200, name: "Members" },
                { value: 40, name: "Customers" },
                { value: 80, name: "Subscribers" },
                { value: 20, name: "Daily" }
              ]
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-md-6" },
        [
          _c("edoughtnutChart", {
            attrs: {
              index: "1",
              data: [
                { value: 335, name: "Users" },
                { value: 335, name: "New Users" }
              ]
            }
          })
        ],
        1
      )
    ]),
    _vm._v(" "),
    _vm._m(1)
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "breadcrumb-item" }, [
      _c("a", { attrs: { href: "javascript: void(0);" } }, [
        _vm._v("Dashboard")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-xl-3" }, [
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "card-header align-items-center d-flex" }, [
            _c("h4", { staticClass: "card-title mb-0 flex-grow-1" }, [
              _vm._v("Customer List")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "flex-shrink-0" }, [
              _c("div", { staticClass: "dropdown" }, [
                _c(
                  "a",
                  {
                    staticClass: " dropdown-toggle",
                    attrs: {
                      href: "#",
                      id: "dropdownMenuButton2",
                      "data-bs-toggle": "dropdown",
                      "aria-haspopup": "true",
                      "aria-expanded": "false"
                    }
                  },
                  [
                    _c("span", { staticClass: "text-muted" }, [
                      _vm._v("All Members"),
                      _c("i", { staticClass: "mdi mdi-chevron-down ms-1" })
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "dropdown-menu dropdown-menu-end",
                    attrs: { "aria-labelledby": "dropdownMenuButton2" }
                  },
                  [
                    _c(
                      "a",
                      { staticClass: "dropdown-item", attrs: { href: "#" } },
                      [_vm._v("Members")]
                    ),
                    _vm._v(" "),
                    _c(
                      "a",
                      { staticClass: "dropdown-item", attrs: { href: "#" } },
                      [_vm._v("New Members")]
                    ),
                    _vm._v(" "),
                    _c(
                      "a",
                      { staticClass: "dropdown-item", attrs: { href: "#" } },
                      [_vm._v("Old Members")]
                    )
                  ]
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card-body px-0" }, [
            _c(
              "div",
              {
                staticClass: "px-3",
                staticStyle: { "max-height": "386px" },
                attrs: { "data-simplebar": "" }
              },
              [
                _c("div", { staticClass: "d-flex align-items-center pb-4" }, [
                  _c("div", { staticClass: "avatar-md me-4" }, [
                    _c("img", {
                      staticClass: "img-fluid rounded-circle",
                      attrs: {
                        src: "assets/images/users/avatar-2.jpg",
                        alt: ""
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "flex-grow-1" }, [
                    _c("h5", { staticClass: "font-size-15 mb-1" }, [
                      _c(
                        "a",
                        { staticClass: "text-dark", attrs: { href: "" } },
                        [_vm._v("Randy Matthews")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("span", { staticClass: "text-muted" }, [
                      _vm._v("Randy@gmail.com")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "flex-shrink-0 text-end" }, [
                    _c("div", { staticClass: "dropdown align-self-start" }, [
                      _c(
                        "a",
                        {
                          staticClass: "dropdown-toggle",
                          attrs: {
                            href: "#",
                            role: "button",
                            "data-bs-toggle": "dropdown",
                            "aria-haspopup": "true",
                            "aria-expanded": "false"
                          }
                        },
                        [
                          _c("i", {
                            staticClass:
                              "bx bx-dots-vertical-rounded font-size-24 text-dark"
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "dropdown-menu" }, [
                        _c(
                          "a",
                          {
                            staticClass: "dropdown-item",
                            attrs: { href: "#" }
                          },
                          [_vm._v("Copy")]
                        ),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            staticClass: "dropdown-item",
                            attrs: { href: "#" }
                          },
                          [_vm._v("Save")]
                        ),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            staticClass: "dropdown-item",
                            attrs: { href: "#" }
                          },
                          [_vm._v("Forward")]
                        ),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            staticClass: "dropdown-item",
                            attrs: { href: "#" }
                          },
                          [_vm._v("Delete")]
                        )
                      ])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "d-flex align-items-center pb-4" }, [
                  _c("div", { staticClass: "avatar-md me-4" }, [
                    _c("img", {
                      staticClass: "img-fluid rounded-circle",
                      attrs: {
                        src: "assets/images/users/avatar-4.jpg",
                        alt: ""
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "flex-grow-1" }, [
                    _c("h5", { staticClass: "font-size-15 mb-1" }, [
                      _c(
                        "a",
                        { staticClass: "text-dark", attrs: { href: "" } },
                        [_vm._v("Vernon Wood")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("span", { staticClass: "text-muted" }, [
                      _vm._v("Vernon@gmail.com")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "flex-shrink-0 text-end" }, [
                    _c("div", { staticClass: "dropdown align-self-start" }, [
                      _c(
                        "a",
                        {
                          staticClass: "dropdown-toggle",
                          attrs: {
                            href: "#",
                            role: "button",
                            "data-bs-toggle": "dropdown",
                            "aria-haspopup": "true",
                            "aria-expanded": "false"
                          }
                        },
                        [
                          _c("i", {
                            staticClass:
                              "bx bx-dots-vertical-rounded font-size-24 text-dark"
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "dropdown-menu" }, [
                        _c(
                          "a",
                          {
                            staticClass: "dropdown-item",
                            attrs: { href: "#" }
                          },
                          [_vm._v("Copy")]
                        ),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            staticClass: "dropdown-item",
                            attrs: { href: "#" }
                          },
                          [_vm._v("Save")]
                        ),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            staticClass: "dropdown-item",
                            attrs: { href: "#" }
                          },
                          [_vm._v("Forward")]
                        ),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            staticClass: "dropdown-item",
                            attrs: { href: "#" }
                          },
                          [_vm._v("Delete")]
                        )
                      ])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "d-flex align-items-center pb-4" }, [
                  _c("div", { staticClass: "avatar-md me-4" }, [
                    _c("img", {
                      staticClass: "img-fluid rounded-circle",
                      attrs: {
                        src: "assets/images/users/avatar-5.jpg",
                        alt: ""
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "flex-grow-1" }, [
                    _c("h5", { staticClass: "font-size-15 mb-1" }, [
                      _c(
                        "a",
                        { staticClass: "text-dark", attrs: { href: "" } },
                        [_vm._v("Howard Rhoades")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("span", { staticClass: "text-muted" }, [
                      _vm._v("Howard@gmail.com")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "flex-shrink-0 text-end" }, [
                    _c("div", { staticClass: "dropdown align-self-start" }, [
                      _c(
                        "a",
                        {
                          staticClass: "dropdown-toggle",
                          attrs: {
                            href: "#",
                            role: "button",
                            "data-bs-toggle": "dropdown",
                            "aria-haspopup": "true",
                            "aria-expanded": "false"
                          }
                        },
                        [
                          _c("i", {
                            staticClass:
                              "bx bx-dots-vertical-rounded font-size-24 text-dark"
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "dropdown-menu" }, [
                        _c(
                          "a",
                          {
                            staticClass: "dropdown-item",
                            attrs: { href: "#" }
                          },
                          [_vm._v("Copy")]
                        ),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            staticClass: "dropdown-item",
                            attrs: { href: "#" }
                          },
                          [_vm._v("Save")]
                        ),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            staticClass: "dropdown-item",
                            attrs: { href: "#" }
                          },
                          [_vm._v("Forward")]
                        ),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            staticClass: "dropdown-item",
                            attrs: { href: "#" }
                          },
                          [_vm._v("Delete")]
                        )
                      ])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "d-flex align-items-center pb-4" }, [
                  _c("div", { staticClass: "avatar-md me-4" }, [
                    _c("img", {
                      staticClass: "img-fluid rounded-circle",
                      attrs: {
                        src: "assets/images/users/avatar-6.jpg",
                        alt: ""
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "flex-grow-1" }, [
                    _c("h5", { staticClass: "font-size-15 mb-1" }, [
                      _c(
                        "a",
                        { staticClass: "text-dark", attrs: { href: "" } },
                        [_vm._v("Arthur Zurcher")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("span", { staticClass: "text-muted" }, [
                      _vm._v("Arthur@gmail.com")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "flex-shrink-0 text-end" }, [
                    _c("div", { staticClass: "dropdown align-self-start" }, [
                      _c(
                        "a",
                        {
                          staticClass: "dropdown-toggle",
                          attrs: {
                            href: "#",
                            role: "button",
                            "data-bs-toggle": "dropdown",
                            "aria-haspopup": "true",
                            "aria-expanded": "false"
                          }
                        },
                        [
                          _c("i", {
                            staticClass:
                              "bx bx-dots-vertical-rounded font-size-24 text-dark"
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "dropdown-menu" }, [
                        _c(
                          "a",
                          {
                            staticClass: "dropdown-item",
                            attrs: { href: "#" }
                          },
                          [_vm._v("Copy")]
                        ),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            staticClass: "dropdown-item",
                            attrs: { href: "#" }
                          },
                          [_vm._v("Save")]
                        ),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            staticClass: "dropdown-item",
                            attrs: { href: "#" }
                          },
                          [_vm._v("Forward")]
                        ),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            staticClass: "dropdown-item",
                            attrs: { href: "#" }
                          },
                          [_vm._v("Delete")]
                        )
                      ])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "d-flex align-items-center pb-4" }, [
                  _c("div", { staticClass: "avatar-md me-4" }, [
                    _c("img", {
                      staticClass: "img-fluid rounded-circle",
                      attrs: {
                        src: "assets/images/users/avatar-8.jpg",
                        alt: ""
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "flex-grow-1" }, [
                    _c("h5", { staticClass: "font-size-15 mb-1" }, [
                      _c(
                        "a",
                        { staticClass: "text-dark", attrs: { href: "" } },
                        [_vm._v("Angela Palmer")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("span", { staticClass: "text-muted" }, [
                      _vm._v("Angela@gmail.com")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "flex-shrink-0 text-end" }, [
                    _c("div", { staticClass: "dropdown align-self-start" }, [
                      _c(
                        "a",
                        {
                          staticClass: "dropdown-toggle",
                          attrs: {
                            href: "#",
                            role: "button",
                            "data-bs-toggle": "dropdown",
                            "aria-haspopup": "true",
                            "aria-expanded": "false"
                          }
                        },
                        [
                          _c("i", {
                            staticClass:
                              "bx bx-dots-vertical-rounded font-size-24 text-dark"
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "dropdown-menu" }, [
                        _c(
                          "a",
                          {
                            staticClass: "dropdown-item",
                            attrs: { href: "#" }
                          },
                          [_vm._v("Copy")]
                        ),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            staticClass: "dropdown-item",
                            attrs: { href: "#" }
                          },
                          [_vm._v("Save")]
                        ),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            staticClass: "dropdown-item",
                            attrs: { href: "#" }
                          },
                          [_vm._v("Forward")]
                        ),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            staticClass: "dropdown-item",
                            attrs: { href: "#" }
                          },
                          [_vm._v("Delete")]
                        )
                      ])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "d-flex align-items-center pb-3" }, [
                  _c("div", { staticClass: "avatar-md me-4" }, [
                    _c("img", {
                      staticClass: "img-fluid rounded-circle",
                      attrs: {
                        src: "assets/images/users/avatar-9.jpg",
                        alt: ""
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "flex-grow-1" }, [
                    _c("h5", { staticClass: "font-size-15 mb-1" }, [
                      _c(
                        "a",
                        { staticClass: "text-dark", attrs: { href: "" } },
                        [_vm._v("Dorothy Wimson")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("span", { staticClass: "text-muted" }, [
                      _vm._v("Dorothy@gmail.com")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "flex-shrink-0 text-end" }, [
                    _c("div", { staticClass: "dropdown align-self-start" }, [
                      _c(
                        "a",
                        {
                          staticClass: "dropdown-toggle",
                          attrs: {
                            href: "#",
                            role: "button",
                            "data-bs-toggle": "dropdown",
                            "aria-haspopup": "true",
                            "aria-expanded": "false"
                          }
                        },
                        [
                          _c("i", {
                            staticClass:
                              "bx bx-dots-vertical-rounded font-size-24 text-dark"
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "dropdown-menu" }, [
                        _c(
                          "a",
                          {
                            staticClass: "dropdown-item",
                            attrs: { href: "#" }
                          },
                          [_vm._v("Copy")]
                        ),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            staticClass: "dropdown-item",
                            attrs: { href: "#" }
                          },
                          [_vm._v("Save")]
                        ),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            staticClass: "dropdown-item",
                            attrs: { href: "#" }
                          },
                          [_vm._v("Forward")]
                        ),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            staticClass: "dropdown-item",
                            attrs: { href: "#" }
                          },
                          [_vm._v("Delete")]
                        )
                      ])
                    ])
                  ])
                ])
              ]
            )
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ })

}]);