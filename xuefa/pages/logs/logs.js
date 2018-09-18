var e, o, n, l, t, s = getApp(), c = require("../../utils/util.js");

Page({
    data: {
        userkey2: null,
        userkey3: null,
        userkey1: null,
        kaishifou: null,
        logs: [],
        usermsg: null,
        guanzhu: null
    },
    onLoad: function(l) {
        this.setData({
            logs: (wx.getStorageSync("logs") || []).map(function(e) {
                return c.formatTime(new Date(e));
            })
        });
        var t = this;
        console.log(s.globalData.guanzhu);
        var a = s.globalData.guanzhu;
        if (t.setData({
            guanzhu: a
        }), e = wx.getStorageSync("userkey1"), console.log("账号1" + e), "" == e) {
            wx.showModal({
                title: "使用说明",
                content: "登陆签到五分钟即可更新积分,退出小程序也不会影响计时!注意核对账号!",
                success: function(e) {
                    e.confirm ? console.log("用户点击确定") : e.cancel && console.log("用户点击取消");
                }
            });
            var i = wx.getStorageSync("jici1");
            console.log("计次" + i);
            var g = wx.getStorageSync("data");
            if (console.log("数据库" + g), void 0 == i && (i = ""), void 0 == g && (g = ""), "" == g) {
                var r = [ 5, 6, 7, 8, 9 ], u = r.splice(parseInt(Math.random() * r.length), 1)[0];
                console.log("数据库随机" + u), wx.setStorageSync("data", u);
            }
        }
        o = wx.getStorageSync("userkey2"), console.log("账号2" + o), n = wx.getStorageSync("userkey3"), 
        console.log("账号3" + n);
    },
    usernameinput: function(e) {
        l = e.detail.value;
    },
    passwordinput: function(e) {
        t = e.detail.value;
    },
    binclick: function() {
        console.log(l), console.log(t), void 0 == t && (t = "0"), "" == t && (t = "0"), 
        escape(t).indexOf("%u") < 0 ? console.log("无中文") : (t = "0", console.log("有中文"));
        var s = t, c = s.indexOf("#"), a = s.indexOf("|");
        console.log(a);
        var i = s.indexOf("@");
        if (console.log(i), i >= 0 && (c = 1), a >= 0 && (c = 1), c >= 0) console.log("特殊符号" + c), 
        wx.showModal({
            title: "提示",
            content: "不支持包含 #,|,@ 特殊符号的密码,请修改后在登录!",
            success: function(e) {
                if (e.confirm) {
                    console.log("用户点击确定");
                    wx.hideLoading();
                } else e.cancel && (console.log("用户点击取消"), wx.hideLoading());
            }
        }); else {
            var g, r = "请检查账号!";
            if (l.indexOf(" ") >= 0 && (r = "账号输入有空格!", g = ""), escape(l).indexOf("%u") < 0 ? console.log("无中文") : (g = "", 
            console.log("有中文")), "" == l && (g = ""), void 0 == l && (g = ""), "" == g) wx.showToast({
                title: r,
                icon: "success",
                duration: 2e3
            }); else {
                var u = "请检查密码!";
                if (t.indexOf(" ") >= 0 && (u = "密码输入有空格!", t = 0), 0 == t) wx.showToast({
                    title: u,
                    icon: "success",
                    duration: 3e3
                }); else {
                    var x = null;
                    if ("" == e ? (x = 1, 1) : e == l ? (1, x = 1, console.log("匹配上通过")) : "" == o ? x = 2 : o == l ? (x = 2, 
                    console.log("匹配上通过2")) : "" == n ? x = 3 : n == l ? (x = 3, console.log("匹配上通过3")) : (console.log("第四个账户"), 
                    wx.showModal({
                        title: "提示",
                        content: "一个微信能使用三个学法账号,可以转发好友使用!账号一:" + e + ",账号二:" + o + ",账号三:" + n,
                        success: function(e) {
                            if (e.confirm) {
                                console.log("用户点击确定");
                                wx.hideLoading();
                            } else e.cancel && (console.log("用户点击取消"), wx.hideLoading());
                        }
                    }), x = null), null != x) {
                        new Date();
                        console.log(x), wx.setStorageSync("xie", x), wx.setStorageSync("userkey", l), wx.setStorageSync("userpwd", t), 
                        wx.reLaunch({
                            url: "../index/index"
                        }), l = "", t = "";
                    }
                }
            }
        }
    },
    onShareAppMessage: function(e) {
        return "button" === e.from && (console.log("转发"), console.log(e.target)), {
            title: "学法小程序",
            path: "/pages/logs/logs",
            success: function(e) {},
            fail: function(e) {}
        };
    },
    userInfoHandler: function() {},
    qiehuan: function(e) {
        var o = wx.getStorageSync("xinming1"), n = wx.getStorageSync("xinming2"), l = wx.getStorageSync("xinming3");
        wx.showActionSheet({
            itemList: [ o, n, l ],
            success: function(e) {
                var o = e.tapIndex + 1;
                console.log("切换" + o), wx.removeStorageSync("time"), wx.removeStorageSync("timeyueru");
                var n = wx.getStorageSync("userkey" + o), l = wx.getStorageSync("userpwd" + o);
                wx.setStorageSync("xie", o), wx.setStorageSync("userkey", n), wx.setStorageSync("userpwd", l), 
                wx.reLaunch({
                    url: "../index/index"
                });
            },
            fail: function(e) {
                console.log(e.errMsg);
            }
        });
    }
});