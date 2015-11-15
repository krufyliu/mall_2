(function($, T) {
  T.couponTemplate = function(coupon, id) {
    if(id == null || id == undefined) {
      id = coupon.id;
    }
    var statusText, couponText ;
    var arcticleClass = "danger";
    if(coupon.left_count <= 0) {
      arcticleClass = "";
      statusText = '完';
    } else if (coupon.seconds_until_grab > 0) {
      arcticleClass = "warning";
      statusText = '未';
    } else {
      statusText = '抢';
    }
    if(coupon.coupon_class_code == 'dash') {
      couponText = '<span class="h4">￥</span>'+ coupon.free
    } else {
      couponText =  coupon.discount + '<span class="h4">折</span>'
    }
    
    return (
      '<article class="post tag-ad collect ' + arcticleClass + '">' + 
        '<div class="post-featured-image"></div>' + 
        '<span class="type" id="1">' + statusText + '</span>' +
        '<span class="name" id="merchant.html?shop=3" onclick="clicked(this.id);">'+ coupon.title +'</span>' +
        '<span class="time">&nbsp;09-09&nbsp;10:10</span>' + 
        '<span class="count">剩<span class="badge">' + coupon.left_count + '</span>张</span>' +
        '<span class="price">' + couponText + '</span>' + 
        '<span class="description">满' + coupon.min_consumption + '使用</span>' + 
        '<span class="dash"></span>' + 
        '<span class="stop top"></span>' + 
        '<span class="stop bottom"></span>' + 
      '</article>'
    );
  },
  T.userCouponTemplate = function(userCoupon, id) {
    var coupon = userCoupon.coupon;
    var statusText, couponText ;
    var articleClass = "";
    if(coupon.expired) {
      statusText = '过期';
    } else if (userCoupon.has_used > 0) {
      statusText = '已用';
    } else {
      articleClass = "danger";
      statusText = '使用';
    }
    if(coupon.coupon_class_code == 'dash') {
      couponText = '<span class="h4">￥</span>'+ coupon.free
    } else {
      couponText =  coupon.discount + '<span class="h4">折</span>'
    }
    
    return (
      '<article class="post tag-ad collect "'+ articleClass +'">' + 
        '<div class="post-featured-image"></div>' + 
        '<span class="type" id="userCoupon:1">' + statusText + '</span>' +
        '<span class="name">'+ coupon.title +'</span>' +
        '<span class="time">'+ coupon.end_date +'</span>' + 
        '<span class="price">' + couponText + '</span>' + 
        '<span class="description">满' + coupon.min_consumption + '使用</span>' + 
        '<span class="dash"></span>' + 
        '<span class="stop top"></span>' + 
        '<span class="stop bottom"></span>' + 
      '</article>'
    );
  }
})(mui, window.app.Template);