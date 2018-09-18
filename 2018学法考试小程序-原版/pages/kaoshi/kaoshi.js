var a, t, e, o, n, s, c, i, d, u = getApp(), l = 0;

Page({
    data: {
        fengshu: "",
        biaoti: "",
        shijian: "",
        kefu: null,
        kaitong: "开通",
        shuoming: "",
        kt: "",
        zanzhu2: 0
    },
    onLoad: function(u) {
        var r = this;
        l = 0;
        wx.getStorageSync("userkey");
        c = wx.getStorageSync("diqu"), console.log("地区 :" + c), "新疆" == c && (c = 65), "贵州" == c && (c = 52), 
        "云南" == c && (c = 53), "青海" == c && (c = 63), "内蒙" == c && (c = 15), "山西" == c && (c = 14), 
        d = wx.getStorageSync("data"), console.log("地区" + c), e = wx.getStorageSync("xie");
        var g = wx.getStorageSync("kaitong" + e);
        console.log("开通 :" + g), "xk" == g && (r.setData({
            kt: "已开通考试"
        }), l = 1), o = wx.getStorageSync("id" + e), 1 == u.id && (console.log("获取考试分数" + o), 
        wx.request({
            url: "https://www.91cch.cn/userapi/user_api1.php?act=list&tablename=user_" + d,
            data: {
                id: o
            },
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(a) {
                console.log(a), a.data.data.defen <= 3 || r.setData({
                    fengshu: a.data.data.defen
                });
            }
        })), wx.showLoading({
            title: "正在加载.."
        }), console.log("biaoti" + a), void 0 == a ? wx.request({
            url: "https://www.91cch.cn/userapi/user_api1.php?act=list&tablename=user_26",
            data: {
                user: c
            },
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(e) {
                console.log(e.data.data.pd), a = e.data.data.bt, t = e.data.data.sj, r.setData({
                    biaoti: a
                }), r.setData({
                    shijian: t
                }), n = e.data.data.yq;
                var o = e.data.data.sm;
                r.setData({
                    shuoming: o
                }), i = e.data.data.tongzhi, s = e.data.data.kk;
            }
        }) : (r.setData({
            biaoti: a
        }), r.setData({
            shijian: t
        })), setTimeout(function() {
            wx.hideLoading();
        }, 3e3);
    },
    kaoshi: function(a) {
        var t = this;
        if (console.log(a.currentTarget.id), console.log(u.globalData.zfengshu + ":" + n), 
        "s" == a.currentTarget.id) wx.navigateTo({
            url: "../kaoshi1/kaoshi1?id=1"
        }); else {
            wx.showLoading({
                title: "正在加载.."
            });
            wx.getStorageSync("userkey"), wx.getStorageSync("userpwd");
            wx.request({
                url: "https://www.91cch.cn/userapi/user_api1.php?act=list&tablename=user_" + d,
                data: {
                    id: o
                },
                method: "POST",
                header: {
                    "content-type": "application/x-www-form-urlencoded"
                },
                success: function(a) {
                    if (console.log(a.data.data.defen), console.log("要求分数" + n), console.log("考试时间" + s), 
                    a.data.data.defen > 5 && console.log("新疆免费"), 1 == s) if (1 == l) u.globalData.zfengshu < n ? wx.showModal({
                        title: "提示",
                        content: "你考试学分不够，请学满考试！",
                        success: function(a) {
                            a.confirm || a.cancel;
                        }
                    }) : wx.request({
                        url: "https://www.91cch.cn/userapi/user_api1.php?act=updates&tablename=user_" + d,
                        data: {
                            id: o,
                            kaoshi_id: "1"
                        },
                        header: {
                            "content-type": "application/x-www-form-urlencoded"
                        },
                        method: "POST",
                        success: function(a) {
                            console.log(a.data), console.log(a.data.msg), "更新成功" == a.data.msg && wx.navigateTo({
                                url: "../kaoshi1/kaoshi1?id=2"
                            });
                        }
                    }); else {
                        var e = "您未开通考试功能!";
                        console.log("不可考");
                        var c = a.data.data.defen;
                        c > 5 && (e = "你已经考试过了,得分:" + c, console.log("考试过")), wx.showModal({
                            title: "提示",
                            content: e,
                            success: function(a) {
                                c > 5 || t.setData({
                                    kefu: 1
                                });
                            }
                        });
                    } else wx.showModal({
                        title: "提示",
                        content: i,
                        success: function(a) {
                            a.confirm || a.cancel;
                        }
                    });
                    setTimeout(function() {
                        wx.hideLoading();
                    }, 3e3);
                }
            });
        }
    },
    zanzhu2: function() {
        var a = this;
        console.log("zanzu");
        var t = wx.getStorageSync("diqu");
        "贵州" == t && a.setData({
            zanzhu2: "1"
        }), "云南" == t && a.setData({
            zanzhu2: "2"
        }), "新疆" == t && a.setData({
            zanzhu2: "3"
        }), "山西" == t && a.setData({
            zanzhu2: "4"
        }), "青海" == t && a.setData({
            zanzhu2: "4"
        }), "" == t && a.setData({
            zanzhu2: "4"
        });
    },
    zanzhu: function() {
        var a, t, n, s, c, i, u = this, l = wx.getStorageSync("openid");
        e = wx.getStorageSync("xie"), this.setData({
            zanzhu2: "0"
        });
        wx.showActionSheet({
            itemList: [ "单开通考试=15", "赞助开通学习+考试=12.9" ],
            success: function(r) {
                var g = r.tapIndex + 1;
                1 == g && (i = 15), 2 == g && (i = 12.9), void 0 == i && (i = ""), "" == i && (i = 12.9), 
                wx.request({
                    url: "https://www.91cch.cn/xcxpay/index.php?id=" + l + "&fee=" + i,
                    data: {},
                    header: {
                        "content-type": "application/json"
                    },
                    success: function(i) {
                        console.log(i.data), a = i.data.timeStamp, t = i.data.nonceStr, n = i.data.package, 
                        s = i.data.signType, c = i.data.paySign, wx.requestPayment({
                            timeStamp: a,
                            nonceStr: t,
                            package: n,
                            signType: s,
                            paySign: c,
                            success: function(a) {
                                console.log("成功:" + a), wx.setStorageSync("kaitong" + e, "xk"), u.setData({
                                    kefu: 2
                                });
                                wx.request({
                                    url: "https://www.91cch.cn/userapi/user_api1.php?act=updates&tablename=user_" + d,
                                    data: {
                                        id: o,
                                        long_time: "1",
                                        kaitong: "xk"
                                    },
                                    header: {
                                        "content-type": "application/x-www-form-urlencoded"
                                    },
                                    method: "POST",
                                    success: function(a) {
                                        console.log(a.data);
                                    }
                                });
                            },
                            fail: function(a) {
                                console.log("失败:" + a);
                            }
                        });
                    }
                });
            },
            fail: function(a) {
                console.log(a.errMsg);
            }
        });
    },
    onShareAppMessage: function() {}
});