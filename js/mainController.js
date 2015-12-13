var app = angular.module("app", ['ui.bootstrap']);

app.controller('mainController', ['$scope', function($scope){

    $scope.items = [
        {
            title: 'Day 1 - 12/20(日) 高雄 -> 台東',
            hotel: '加賀屋',
            url: 'http://jiahewu.hlbnb.tw/about.htm',
            address: '花蓮縣玉里鎮樂合里溫泉41-2號',
            phone: '0929282686',
            collapsed: false,
            scheduleList: [
                {
                    arrivalTime: '',
                    leaveTime: '6:00',
                    location: '高雄',
                    mapSearchText: '高雄',
                    distance: ''
                },{
                    arrivalTime: '10:00',
                    leaveTime: '10:15',
                    location: '多良車站',
                    mapSearchText: '多良車站',
                    distance: '132'
                },{
                    arrivalTime: '11:10',
                    leaveTime: '12:10',
                    location: '太麻里金針山',
                    mapSearchText: '台東市太麻里佳侖',
                    distance: '14'
                },{
                    arrivalTime: '13:00',
                    leaveTime: '13:30',
                    location: '米苔目',
                    mapSearchText: '台東市安慶街78號',
                    distance: '26'
                },{
                    arrivalTime: '14:00',
                    leaveTime: '14:15',
                    location: '鹿野高台',
                    mapSearchText: '鹿野高台',
                    distance: '27'
                },{
                    arrivalTime: '15:00',
                    leaveTime: '15:30',
                    location: '金城武樹',
                    mapSearchText: '金城武樹',
                    distance: '25'
                },{
                    arrivalTime: '16:00',
                    leaveTime: '16:30',
                    location: '大波池',
                    mapSearchText: '大波池',
                    distance: '6'
                },{
                    arrivalTime: '17:30',
                    leaveTime: '',
                    location: '加賀屋',
                    mapSearchText: '花蓮縣玉里鎮樂合里溫泉41-2號',
                    distance: '28'
                }
            ]
        },{
            title: 'Day 2 - 12/21(一) 台東 -> 花蓮',
            hotel: '花蓮瑪莉小屋',
            url: 'https://www.facebook.com/花蓮住宿瑪莉小屋MaryHouse-184689031663041/',
            address: '花蓮縣吉安鄉太昌路109巷4弄6號',
            phone: '0961327117',
            collapsed: false,
            scheduleList: [
                {
                    arrivalTime: '',
                    leaveTime: '8:00',
                    location: '加賀屋',
                    mapSearchText: '花蓮縣玉里鎮樂合里溫泉41-2號',
                    distance: ''
                },{
                    arrivalTime: '9:00',
                    leaveTime: '9:50',
                    location: '八仙洞',
                    mapSearchText: '八仙洞',
                    distance: '35'
                },{
                    arrivalTime: '10:15',
                    leaveTime: '10:30',
                    location: '北回歸線',
                    mapSearchText: '北回歸線',
                    distance: '10'
                },{
                    arrivalTime: '10:40',
                    leaveTime: '11:10',
                    location: '石梯坪遊憩區',
                    mapSearchText: '石梯坪遊憩區',
                    distance: '6'
                },{
                    arrivalTime: '12:00',
                    leaveTime: '12:30',
                    location: '牛山呼庭',
                    mapSearchText: '牛山呼庭',
                    distance: '38'
                },{
                    arrivalTime: '13:00',
                    leaveTime: '14:00',
                    location: '公正包子+炸彈蔥油餅',
                    mapSearchText: '公正包子',
                    distance: '28'
                },{
                    arrivalTime: '14:00',
                    leaveTime: '14:30',
                    location: '松園別館',
                    mapSearchText: '松園別館',
                    distance: '2'
                },{
                    arrivalTime: '15:00',
                    leaveTime: '15:30',
                    location: '花見幸福蘑菇屋',
                    mapSearchText: '花見幸福蘑菇屋',
                    distance: '7'
                },{
                    arrivalTime: '15:45',
                    leaveTime: '',
                    location: '花蓮瑪莉小屋',
                    mapSearchText: '花蓮縣吉安鄉太昌路109巷4弄6號',
                    distance: '3'
                },{
                    arrivalTime: '',
                    leaveTime: '',
                    location: '原野牧場',
                    mapSearchText: '原野牧場',
                    distance: ''
                },{
                    arrivalTime: '',
                    leaveTime: '',
                    location: '東大門夜市',
                    mapSearchText: '東大門夜市',
                    distance: ''
                }
            ]
        }
    ];


    $scope.collapsed = function(selectedItem){
        $scope.items.map(function(item){
            if (selectedItem != item){
                item.collapsed = false;
            }
        });

        selectedItem.collapsed = !selectedItem.collapsed;
    };
    
}])