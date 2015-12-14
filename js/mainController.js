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
        },{
            title: 'Day 3 - 12/22 花蓮 -> 宜蘭',
            hotel: '白雲閣',
            url: 'http://baiyunge.okgo.tw/',
            address: '宜蘭縣礁溪鄉白雲六路58號',
            phone: '0910063157',
            collapsed: false,
            scheduleList: [
                {
                    arrivalTime: '',
                    leaveTime: '7:30',
                    location: '花蓮瑪莉小屋',
                    mapSearchText: '花蓮縣吉安鄉太昌路109巷4弄6號',
                    distance: ''
                },{
                    arrivalTime: '8:00',
                    leaveTime: '8:40',
                    location: '七星潭',
                    mapSearchText: '七星潭',
                    distance: '10'
                },{
                    arrivalTime: '9:20',
                    leaveTime: '9:30',
                    location: '太魯閣',
                    mapSearchText: '太魯閣',
                    distance: '19'
                },{
                    arrivalTime: '10:00',
                    leaveTime: '10:10',
                    location: '清水斷崖',
                    mapSearchText: '清水斷崖',
                    distance: '14'
                },{
                    arrivalTime: '10:50',
                    leaveTime: '11:00',
                    location: '谷風地塹',
                    mapSearchText: '谷風地塹',
                    distance: '24'
                },{
                    arrivalTime: '12:30',
                    leaveTime: '13:00',
                    location: '冬山河親水公園',
                    mapSearchText: '冬山河親水公園',
                    distance: '53'
                },{
                    arrivalTime: '13:40',
                    leaveTime: '14:10',
                    location: '員山魚丸米粉',
                    mapSearchText: '員山魚丸米粉',
                    distance: '23'
                },{
                    arrivalTime: '14:50',
                    leaveTime: '15:20',
                    location: '員山普照寺',
                    mapSearchText: '員山普照寺',
                    distance: '18'
                },{
                    arrivalTime: '15:30',
                    leaveTime: '15:45',
                    location: '員山公園鯉魚池',
                    mapSearchText: '員山公園鯉魚池',
                    distance: '6'
                },{
                    arrivalTime: '16:00',
                    leaveTime: '16:30',
                    location: '林陳菊阿桑',
                    mapSearchText: '宜蘭市中山路三段183號',
                    distance: '4'
                },{
                    arrivalTime: '17:00',
                    leaveTime: '18:30',
                    location: '羅東夜市',
                    mapSearchText: '羅東夜市',
                    distance: '10'
                },{
                    arrivalTime: '19:20',
                    leaveTime: '',
                    location: '白雲閣',
                    mapSearchText: '宜蘭縣礁溪鄉白雲六路58號',
                    distance: '26'
                },{
                    arrivalTime: '',
                    leaveTime: '',
                    location: '龍潭湖',
                    mapSearchText: '龍潭湖',
                    distance: ''
                }
            ]
        },{
            title: 'Day 4 - 12/23 宜蘭 -> 台北',
            hotel: '薇米峇里商旅',
            url: 'http://www.bali-hotel.com.tw/sanchong/',
            address: '新北市三重區重新路二段78號16樓',
            phone: '0229746636',
            collapsed: false,
            scheduleList: [
                {
                    arrivalTime: '',
                    leaveTime: '8:00',
                    location: '白雲閣',
                    mapSearchText: '宜蘭縣礁溪鄉白雲六路58號',
                    distance: ''
                },{
                    arrivalTime: '8:30',
                    leaveTime: '8:45',
                    location: '金車伯朗咖啡館',
                    mapSearchText: '金車伯朗咖啡館',
                    distance: '10'
                },{
                    arrivalTime: '9:50',
                    leaveTime: '10:20',
                    location: '三貂角',
                    mapSearchText: '三貂角',
                    distance: '27'
                },{
                    arrivalTime: '10:30',
                    leaveTime: '11:00',
                    location: '貢寮福隆海水浴場',
                    mapSearchText: '貢寮福隆海水浴場',
                    distance: '10'
                },{
                    arrivalTime: '11:30',
                    leaveTime: '12:00',
                    location: '鼻頭角',
                    mapSearchText: '鼻頭角',
                    distance: '17'
                },{
                    arrivalTime: '12:15',
                    leaveTime: '12:30',
                    location: '陰陽海',
                    mapSearchText: '陰陽海',
                    distance: '8'
                },{
                    arrivalTime: '13:00',
                    leaveTime: '13:10',
                    location: '八斗子漁港',
                    mapSearchText: '八斗子漁港',
                    distance: '11'
                },{
                    arrivalTime: '13:30',
                    leaveTime: '14:30',
                    location: '基隆廟口',
                    mapSearchText: '基隆廟口',
                    distance: '7'
                },{
                    arrivalTime: '15:00',
                    leaveTime: '15:20',
                    location: '翡翠灣',
                    mapSearchText: '翡翠灣',
                    distance: '14'
                },{
                    arrivalTime: '15:30',
                    leaveTime: '16:10',
                    location: '野柳',
                    mapSearchText: '野柳',
                    distance: '4'
                },{
                    arrivalTime: '17:00',
                    leaveTime: '17:30',
                    location: '富貴角',
                    mapSearchText: '富貴角',
                    distance: '25'
                },{
                    arrivalTime: '18:30',
                    leaveTime: '19:00',
                    location: '淡水紅毛城',
                    mapSearchText: '淡水紅毛城',
                    distance: '21'
                },{
                    arrivalTime: '19:10',
                    leaveTime: '20:40',
                    location: '淡水老街',
                    mapSearchText: '淡水老街',
                    distance: '2'
                },{
                    arrivalTime: '21:30',
                    leaveTime: '',
                    location: '薇米峇里商旅',
                    mapSearchText: '新北市三重區重新路二段78號16樓',
                    distance: '20'
                },{
                    arrivalTime: '',
                    leaveTime: '',
                    location: '新北耶誕城',
                    mapSearchText: '新北耶誕城',
                    distance: ''
                }
            ]
        },{
            title: 'Day 5 - 12/24 台北 -> 桃園 -> 新竹',
            hotel: '豪美商旅',
            url: 'http://www.hmhotel.com.tw',
            address: '新竹市北區中正路107號11樓',
            phone: '035213333',
            collapsed: false,
            scheduleList: [
                {
                    arrivalTime: '',
                    leaveTime: '8:00',
                    location: '薇米峇里商旅',
                    mapSearchText: '新北市三重區重新路二段78號16樓',
                    distance: ''
                },{
                    arrivalTime: '9:00',
                    leaveTime: '10:30',
                    location: '桃園大溪老街',
                    mapSearchText: '桃園大溪老街',
                    distance: '36'
                },{
                    arrivalTime: '10:50',
                    leaveTime: '11:50',
                    location: '慈湖',
                    mapSearchText: '慈湖',
                    distance: '7'
                },{
                    arrivalTime: '12:30',
                    leaveTime: '13:30',
                    location: '小烏來風景區',
                    mapSearchText: '小烏來風景區',
                    distance: '17'
                },{
                    arrivalTime: '15:00',
                    leaveTime: '16:30',
                    location: '新竹世博館',
                    mapSearchText: '新竹世博館',
                    distance: '62'
                },{
                    arrivalTime: '16:50',
                    leaveTime: '18:20',
                    location: '城隍廟+柿餅',
                    mapSearchText: '新竹城隍廟',
                    distance: '4'
                },{
                    arrivalTime: '18:30',
                    leaveTime: '',
                    location: '豪美商旅',
                    mapSearchText: '新竹市北區中正路107號11樓',
                    distance: ''
                }
            ]
        },{
            title: 'Day 6 - 12/25 新竹 -> 苗栗 -> 台中 -> 彰化 ',
            hotel: '',
            url: '',
            address: '',
            phone: '',
            collapsed: false,
            scheduleList: [
                {
                    arrivalTime: '',
                    leaveTime: '8:00',
                    location: '豪美商旅',
                    mapSearchText: '新竹市北區中正路107號11樓',
                    distance: ''
                },{
                    arrivalTime: '10:00',
                    leaveTime: '11:30',
                    location: '大湖草莓(煉乳加糖)',
                    mapSearchText: '大湖草莓觀光休閒農場',
                    distance: '78'
                },{
                    arrivalTime: '',
                    leaveTime: '',
                    location: '豐原廟東小吃',
                    mapSearchText: '豐原廟東夜市',
                    distance: '49'
                },{
                    arrivalTime: '',
                    leaveTime: '',
                    location: '東海教堂',
                    mapSearchText: '東海大學 407台中市西屯區台灣大道四段1727號',
                    distance: '17'
                },{
                    arrivalTime: '',
                    leaveTime: '',
                    location: '一中街',
                    mapSearchText: '台中一中街夜市',
                    distance: '11'
                },{
                    arrivalTime: '',
                    leaveTime: '',
                    location: '大里老街',
                    mapSearchText: '大里老街',
                    distance: '7'
                },{
                    arrivalTime: '',
                    leaveTime: '',
                    location: '蔡素賓阿桑',
                    mapSearchText: '台中市霧峰區新生路107號',
                    distance: '7'
                },{
                    arrivalTime: '',
                    leaveTime: '',
                    location: '八卦山',
                    mapSearchText: '八卦山',
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