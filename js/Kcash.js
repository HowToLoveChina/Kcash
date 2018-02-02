/**
 * Created by Qing on 2018/1/28.
 */
var app = angular.module('kcash',['ionic']);
 /**
  * ����״̬
  */
    app.config(function ($stateProvider,$urlRouterProvider,$ionicConfigProvider) {
        $ionicConfigProvider.tabs.position("bottom");
        $stateProvider
            .state('start',{
                url:'',
                templateUrl:'',
                controller:'startCtrl'
            })
            .state('signOut',{
                url:'',
                templateUrl:'',
                controller:'signOutCtrl'
            })
            .state('menu',{
                url:'',
                templateUrl:'',
                controller:'menuCtrl'
            })
            .state('login',{
                url:'',
                templateUrl:'',
                controller:'loginCtrl'
            });
        $urlRouterProvider.otherwise('start');
    })
/**
 * ����������
 */
app.controller('parentCtrl',
    ['$scope','$state','$ionicSideMenuDelegate','$ionicModal','$window','$rootScope','$http','$jsonOperate',
        function ($scope,$state,$ionicSideMenuDelegate,$ionicModal,$window,$rootScope,$http,$jsonOperate) {
        $scope.jump = function(state){
            $state.go(state);
        }
    }]
);

//��ʼҳ
app.controller('startCtrl',['$scope','$timeout','$interval','$state',
    function ($scope,$timeout,$interval,$state) {
        //��ʱ
        $scope.secondNumber = 10;
        $timeout(function () {
            $state.go('index');
        },10000);
        $interval(function () {
           if($scope.secondNumber>0)
           $scope.secondNumber--;
        },1000);
    }
])

