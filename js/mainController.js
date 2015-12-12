var app = angular.module("app", ['ui.bootstrap']);

app.controller('mainController', ['$scope', function($scope){
    
    $scope.items = [
        {
            title: 'Day 1 - 12/20(日) 高雄 -> 台東',
            hotel: '加賀屋',
            url: 'http://jiahewu.hlbnb.tw/about.htm',
            address: '花蓮縣玉里鎮樂合里溫泉41-2號',
            phone: '0929282686',
            scheduleList: [
                {
                    arrivalTime: '',
                    leaveTime: '6:00',
                    location: '高雄',
                    from: '高雄',
                    to: '多良車站',
                    distance: ''
                },{
                    arrivalTime: '10:00',
                    leaveTime: '10:15',
                    location: '多良車站',
                    from: '多良車站',
                    to: '台東市太麻里佳侖',
                    distance: '132'
                },{
                    arrivalTime: '11:10',
                    leaveTime: '12:10',
                    location: '太麻里金針山',
                    from: '台東市太麻里佳侖',
                    to: '台東市安慶街78號',
                    distance: '14'
                },{
                    arrivalTime: '13:00',
                    leaveTime: '13:30',
                    location: '米苔目',
                    from: '台東市安慶街78號',
                    to: '鹿野高台',
                    distance: '26'
                },{
                    arrivalTime: '14:00',
                    leaveTime: '14:15',
                    location: '鹿野高台',
                    from: '鹿野高台',
                    to: '金城武樹',
                    distance: '27'
                },{
                    arrivalTime: '15:00',
                    leaveTime: '15:30',
                    location: '金城武樹',
                    from: '金城武樹',
                    to: '大波池',
                    distance: '25'
                },{
                    arrivalTime: '16:00',
                    leaveTime: '16:30',
                    location: '大波池',
                    from: '大波池',
                    to: '花蓮縣玉里鎮樂合里溫泉41-2號',
                    distance: '6'
                },{
                    arrivalTime: '17:30',
                    leaveTime: '',
                    location: '加賀屋',
                    from: '花蓮縣玉里鎮樂合里溫泉41-2號',
                    to: '',
                    distance: '28'
                }
            ]
        }
    ]
    
}])