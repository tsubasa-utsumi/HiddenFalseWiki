var blackList = [
  'kamigame.jp',
  'appmedia.jp',
  'gamewith.jp',
  'altema.jp',
  'gamy.jp',
  'gamerch.com',
  'game8.jp'
];

$('.srg .g').each(function(i, parts){
  var site = $('.r a', this).attr('href')
  blackList.forEach(function(reg){
    if (site.match(reg)) {
      $(parts).hide();
    }
  });
});
