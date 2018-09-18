App({
    onLaunch: function() {
        wx.getStorageSync("openid");
        wx.login({
            success: function(n) {
                var o = n.code;
                wx.request({
                    url: "https://www.91cch.cn/userapi/uninoId.php",
                    method: "GET",
                    data: {
                        code: o
                    },
                    success: function(n) {
                        console.log("openid:" + n.data.openid), wx.setStorageSync("unionid", n.data.unionid), 
                        wx.setStorageSync("openid", n.data.openid);
                    }
                });
            }
        });
    },
    globalData: {
        zfengshu: null,
        guanzhu: null
    }
});