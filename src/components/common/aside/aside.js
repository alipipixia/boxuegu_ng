/**
 * Created by liurui on 17/8/31.
 */
angular.module('aside',[])
    .directive('nglAside',[function(){

        return {
            scope:{},
            restrict:'E',
            templateUrl:'/src/components/common/aside/aside.html',
            replace:true,
            controller:['$scope',function($scope){
                console.log('侧边栏');
            }]
        }
    }])