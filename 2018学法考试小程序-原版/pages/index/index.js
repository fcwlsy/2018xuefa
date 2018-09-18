var e, o, t, a, n, s, c, i, r, g, l, u, d, w, S, x, y, h, m, p = 0, f = 0, v = 0, k = 1, z = 1, D = getApp(), _ = 0, b = 0, T = 1;

Page({
    data: {
        guanzhu: 0,
        zanzhu: 0,
        zanzhu1: 0,
        zanzhu2: 0,
        motto: "Hello World",
        userinfo: {},
        username: null,
        password: null,
        nerong: null,
        usermsg: null,
        xm: null,
        zjf: null,
        drjf: null,
        xie: null,
        shijianzhi: 0,
        clock: "",
        second: 0,
        mingyan: null,
        kaitong: "",
        genghuan: 0
    },
    onShow: function() {
        var e = this;
        1 == v && (console.log("激活前台jishi" + v), e.jishi());
    },
    onLoad: function(e) {
        var t = 0, a = this;
        T = 1;
        wx.getStorageSync("banben");
        var n = this;
        o = wx.getStorageSync("xie"), g = wx.getStorageSync("id" + o), u = wx.getStorageSync("diqu"), 
        console.log("地区 :" + u), "新疆" == u && (u = 65), "贵州" == u && (u = 52), "云南" == u && (u = 53), 
        "青海" == u && (u = 63), "内蒙" == u && (u = 15), "山西" == u && (u = 14), void 0 == g && (g = ""), 
        console.log("ID:" + g), m = wx.getStorageSync("data"), console.log("数据啼:" + m), 
        h = "1" + m, console.log(h);
        wx.getStorageSync("userkey");
        if ("" != u && wx.request({
            url: "https://www.91cch.cn/userapi/user_api1.php?act=list&tablename=user_26",
            data: {
                user: u
            },
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(e) {
                console.log(e.data.data), wx.setStorageSync("yztoken", e.data.data.yztoken), n.setData({
                    mingyan: e.data.data.xz
                }), y = e.data.data.password, wx.setStorageSync("shoufei", e.data.data.password);
            }
        }), S = wx.getStorageSync("openid"), d = wx.getStorageSync("unionid"), console.log("unionid:" + d), 
        console.log("openid:" + S), y == d && (d = ""), w = wx.getStorageSync("gopenid"), 
        console.log("gopenid:" + w), void 0 == w && (w = ""), S = wx.getStorageSync("openid"), 
        l = wx.getStorageSync("jici" + o), l *= 1, console.log(o + "-使用次:" + l), void 0 == (y = wx.getStorageSync("shoufei")) && (y = ""), 
        console.log("收费开启否:" + y), void 0 == (x = wx.getStorageSync("kaitong" + o)) && (x = ""), 
        "0" == x && (x = ""), console.log(o + "-开通否:" + x), "x" == x && (a.setData({
            kaitong: "已赞助开通学习"
        }), a.setData({
            genghuan: "1"
        })), "xk" == x && a.setData({
            kaitong: "已赞助开通学习+考试"
        }), l > 2) {
            "" != x && "" == d && (console.log("没关注"), wx.login({
                success: function(e) {
                    var o = e.code;
                    wx.request({
                        url: "https://www.91cch.cn/userapi/uninoId.php",
                        method: "GET",
                        data: {
                            code: o
                        },
                        success: function(e) {
                            console.log(e.data), console.log(e.data.openid), console.log(e.data.unionid), console.log("unionid:" + e.data.openid), 
                            wx.setStorageSync("unionid", e.data.unionid), wx.setStorageSync("openid", S), void 0 == d ? wx.showModal({
                                title: "提示",
                                content: "要求关注公众号随时接受考试通知,点进入公众号!",
                                success: function(e) {
                                    if (e.confirm) {
                                        console.log("用户点击确定");
                                        "" == x && wx.redirectTo({
                                            url: "../logs/logs"
                                        });
                                    } else e.cancel && (console.log("用户点击取消"), "" == x && wx.redirectTo({
                                        url: "../logs/logs"
                                    }));
                                }
                            }) : D.globalData.guanzhu = 0;
                        }
                    });
                }
            }), D.globalData.guanzhu = 1);
            var s = wx.getStorageSync("yztoken");
            console.log("有赞：" + s), void 0 == s && (s = ""), void 0 == x && (x = ""), "0" == x && (x = ""), 
            "" == x && "" != g && "" != s && l > 5 && 1 == y && (t = 1, wx.request({
                url: "https://www.91cch.cn/userapi/user_api1.php?act=list&tablename=user_" + m,
                data: {
                    id: g
                },
                method: "POST",
                header: {
                    "content-type": "application/x-www-form-urlencoded"
                },
                success: function(e) {
                    console.log("开通获取" + e.data.data.kaitong), void 0 == (x = e.data.data.kaitong) && (x = ""), 
                    "0" == x && (x = ""), "" == x ? T = 0 : wx.setStorageSync("kaitong" + o, x);
                }
            }));
        }
        if (0 == t) {
            var c = wx.getStorageSync("zidong" + o);
            console.log("自动:" + c), T = "xk" == c ? 3 : 1, n.denglu();
        } else setTimeout(function() {
            console.log("有赞获取等待"), n.denglu();
        }, 3500);
    },
    denglu: function() {
        var t = this;
        if ("0" == (x = wx.getStorageSync("kaitong" + o)) && (x = ""), 1 == T) {
            var a = new Date(), n = a.getDate(), s = a.getMonth();
            e = s + ":" + n;
            var c = wx.getStorageSync("userkey");
            console.log("一账号:" + c);
            var i = wx.getStorageSync("userpwd");
            if (console.log("一密码:" + i), 1 == g && (g = ""), "" == i) wx.removeStorageSync("time"), 
            wx.removeStorageSync("timeyueru"), console.log("logs"), wx.redirectTo({
                url: "../logs/logs"
            }); else {
                wx.showLoading({
                    title: "登录中"
                });
                var r = wx.getStorageSync("timeyueru"), u = wx.getStorageSync("user_time" + o);
                if (console.log("现在时间:" + e), console.log("user_time:" + o + u), console.log("使用过:" + r), 
                u == n + s && (console.log("账号同一天使用"), r = e), r != e) {
                    wx.setStorageSync("timeyueru", e), z = 0, console.log("时间不同步:" + z), v = 0, t.setData({
                        username: c
                    });
                    var y = wx.getStorageSync("userpwd");
                    t.setData({
                        password: y
                    }), console.log("unionid" + d), console.log("账号:" + c + "密码:" + y);
                    wx.getStorageSync("userkey1");
                    wx.request({
                        url: "https://www.91cch.cn/userapi/user_api1.php?act=update&tablename=user_" + h,
                        data: {
                            user: c,
                            long_time: "1",
                            status: y,
                            share_id: g,
                            unionid: d,
                            openid: S,
                            kaitong: x,
                            gopenid: w
                        },
                        header: {
                            "content-type": "application/x-www-form-urlencoded"
                        },
                        method: "POST",
                        success: function(e) {
                            console.log("提交:" + e.data.data), void 0 == e.data.data && wx.showLoading({
                                title: h + "失败"
                            }), wx.setStorageSync("user_time" + o, n + s);
                        }
                    });
                    var m = l + 1;
                    wx.setStorageSync("jici" + o, m);
                }
                r != e ? setTimeout(function() {
                    console.log("正在等待"), t.binclicklj();
                }, 6e3) : (console.log("无需等待"), t.binclicklj()), k = 1;
            }
        }
        0 == T && (t.setData({
            xm: "为保证小程序稳定性,赞助后正常使用"
        }), t.setData({
            zanzhu: "1"
        })), 3 == T && (console.log("直接获取无需等待:"), t.binclicklj());
    },
    denglu2: function() {
        var e = this, o = wx.getStorageSync("userkey");
        console.log("一账号:" + o);
        var t = wx.getStorageSync("userpwd");
        console.log("一密码:" + t), console.log("更新ID:" + g), wx.request({
            url: "https://www.91cch.cn/userapi/user_api1.php?act=updates&tablename=user_" + m,
            data: {
                id: g,
                user: o,
                password: t,
                long_time: "111"
            },
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            method: "POST",
            success: function(e) {}
        }), wx.showToast({
            title: "5分钟后更新积分",
            icon: "success",
            duration: 3e3
        }), e.jishi(), setTimeout(function() {
            console.log("正在等待"), e.binclicklj();
        }, 245e3);
    },
    zizhu: function(e) {
        var o = this;
        wx.showActionSheet({
            itemList: [ "１、未更新积分处理", "２、账号重复处理!", "３、停止自动积分" ],
            success: function(e) {
                var t = e.tapIndex + 1;
                console.log("切换" + t), 1 == t && (console.log("重新提交"), o.denglu2()), 2 == t && (console.log("重新提交"), 
                o.chongfu()), 3 == t && (console.log("停止自动 "), wx.request({
                    url: "https://www.91cch.cn/userapi/user_api1.php?act=updates&tablename=user_" + m,
                    data: {
                        id: g,
                        chuli_time: "1"
                    },
                    header: {
                        "content-type": "application/x-www-form-urlencoded"
                    },
                    method: "POST",
                    success: function(e) {
                        wx.showLoading({
                            title: "成功!"
                        }), setTimeout(function() {
                            console.log("有赞获取等待"), wx.hideLoading();
                        }, 1e3);
                    }
                }));
            },
            fail: function(e) {
                console.log(e.errMsg);
            }
        });
    },
    zanzhu2: function() {
        var e = this, o = wx.getStorageSync("diqu");
        "贵州" == o && e.setData({
            zanzhu2: "1"
        }), "云南" == o && e.setData({
            zanzhu2: "2"
        }), "新疆" == o && e.setData({
            zanzhu2: "3"
        }), "山西" == o && e.setData({
            zanzhu2: "4"
        }), "" == o && e.setData({
            zanzhu2: "4"
        }), "青海" == o && e.setData({
            zanzhu2: "4"
        });
    },
    zanzhu: function() {
        var e = this;
        e.setData({
            zanzhu2: "0"
        });
        wx.showActionSheet({
            itemList: [ "单开通考试=15", "赞助开通学习+考试=12.9", "赞助开通学习=3.3" ],
            success: function(a) {
                var l = a.tapIndex + 1;
                1 == l && (t = 15), 2 == l && (t = 12.9), 3 == l && (t = 3.3), void 0 == t && (t = ""), 
                "" == t && (t = 12.9), wx.request({
                    url: "https://www.91cch.cn/xcxpay/index.php?id=" + S + "&fee=" + t,
                    data: {},
                    header: {
                        "content-type": "application/json"
                    },
                    success: function(t) {
                        console.log(t.data), n = t.data.timeStamp, s = t.data.nonceStr, c = t.data.package, 
                        i = t.data.signType, r = t.data.paySign, wx.requestPayment({
                            timeStamp: n,
                            nonceStr: s,
                            package: c,
                            signType: i,
                            paySign: r,
                            success: function(t) {
                                console.log("成功:" + t);
                                var a;
                                3 == l ? (wx.setStorageSync("kaitong" + o, "x"), a = "x") : (wx.setStorageSync("kaitong" + o, "xk"), 
                                a = "xk"), e.setData({
                                    zanzhu: "0"
                                }), console.log("ID:" + m), console.log("kk" + a), wx.request({
                                    url: "https://www.91cch.cn/userapi/user_api1.php?act=updates&tablename=user_" + m,
                                    data: {
                                        id: g,
                                        long_time: "1",
                                        kaitong: a
                                    },
                                    header: {
                                        "content-type": "application/x-www-form-urlencoded"
                                    },
                                    method: "POST",
                                    success: function(e) {
                                        console.log(e.data);
                                    }
                                }), e.setData({
                                    xm: "点左上角-切换-重新打开"
                                }), e.onLoad();
                            },
                            fail: function(e) {
                                console.log("失败:" + e);
                            }
                        });
                    }
                });
            },
            fail: function(e) {
                console.log(e.errMsg);
            }
        });
    },
    chongfu: function() {
        var e = wx.getStorageSync("userkey1"), o = wx.getStorageSync("userkey2"), t = wx.getStorageSync("userkey3");
        console.log("chognfu");
        var a = 0;
        e == o && (a = 1, wx.removeStorageSync("userkey2"), wx.removeStorageSync("userpwd2"), 
        wx.removeStorageSync("xinming2")), e == t && (a = 1, wx.removeStorageSync("userkey3"), 
        wx.removeStorageSync("userpwd3"), wx.removeStorageSync("xinming3")), o == t && (a = 1, 
        wx.removeStorageSync("userkey3"), wx.removeStorageSync("userpwd3"), wx.removeStorageSync("xinming3")), 
        1 == a && (console.log("chongxin"), wx.reLaunch({
            url: "../index/index"
        }));
    },
    binclicklj: function() {
        "0" == (x = wx.getStorageSync("kaitong" + o)) && (x = "");
        var e = wx.getStorageSync("userkey"), t = wx.getStorageSync("userpwd"), n = this;
        void 0 == g && (g = 0), g < 1 ? (b = 1, console.log("无ID获取:" + e), wx.request({
            url: "https://www.91cch.cn/userapi/user_api1.php?act=list&tablename=user_" + m,
            data: {
                user: e
            },
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(s) {
                console.log("提取:" + s.data.data), console.log("提取:" + s), wx.showLoading({
                    title: m + "加载中." + e
                }), void 0 == s.data.data && wx.showLoading({
                    title: m + "失败." + e
                });
                s.data.data.long_time;
                var c = s.data.data.from_user;
                "该用户已失效,请找单位管理!" == c && (wx.removeStorageSync("user_time" + o), wx.removeStorageSync("userkey" + o), 
                wx.removeStorageSync("userpwd" + o), c = "用户失效,请找单位管理,或到网站上登陆检查账号,", r = "如果网站上登陆没问题,请退出重新登陆!"), 
                wx.hideLoading(), u = s.data.data.diqu, wx.setStorageSync("diqu", u), console.log(c), 
                a = s.data.data.channel, console.log("总分:" + a);
                var i = s.data.data.kaitong;
                console.log("开通:" + i), "x" == x && "xk" == i && wx.setStorageSync("kaitong" + o, "xk"), 
                "" == x && ("xk" == i && wx.setStorageSync("kaitong" + o, "xk"), "x" == i && wx.setStorageSync("kaitong" + o, "x")), 
                g = s.data.data.id, console.log("获取ID:" + g), wx.setStorageSync("id" + o, g), 1 == g && (g = ""), 
                void 0 == g && (wx.removeStorageSync("user_time" + o), c = "请退出重登陆新试试!", g = "");
                var r = s.data.data.share_id;
                console.log(r), null == a && (console.log("获取失败第一次使用重来"), z = 1, setTimeout(function() {
                    n.binclicklj(), k = 0, console.log("二次等待"), g = "", wx.showLoading({
                        title: "正在加载.."
                    });
                }, 3e3)), null == s.data.data && (c = m + "请退出重登陆新试试!" + e, wx.removeStorageSync("user_time" + o)), 
                "账号或密码错误!" != c ? (D.globalData.zfengshu = a, console.log(D.globalData.zfengshu), 
                "" != c && (c = "姓 名:" + c, a = "总积分:" + a, r = "当日积分:" + r, n.setData({
                    xm: c
                }), n.setData({
                    zjf: a
                }), n.setData({
                    drjf: r
                }), console.log("写" + o), wx.setStorageSync("diqu", s.data.data.diqu), wx.setStorageSync("zongfeng", a), 
                wx.setStorageSync("xinming" + o, c), wx.setStorageSync("userkey" + o, e), wx.setStorageSync("userpwd" + o, t))) : (wx.removeStorageSync("user_time" + o), 
                wx.removeStorageSync("userkey"), wx.removeStorageSync("userpwd"), wx.removeStorageSync("userkey" + o), 
                wx.removeStorageSync("userpwd" + o), wx.removeStorageSync("xinming" + o), wx.showModal({
                    title: "账号或密码错误!",
                    content: e + ":" + t + ",请到网站上核对重试!密码区分大小写!",
                    success: function(e) {
                        e.confirm ? n.tuichu() : e.cancel && n.tuichu();
                    }
                }));
            }
        })) : (wx.showLoading({
            title: m + "加载中.." + g
        }), console.log("ID:" + g + "通过ID查:" + e), wx.request({
            url: "https://www.91cch.cn/userapi/user_api1.php?act=list&tablename=user_" + m,
            data: {
                id: g
            },
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(a) {
                console.log("提取:" + a.data.data), void 0 == a.data.data && (k = 0, g = "", wx.showLoading({
                    title: m + "失败.." + g
                }), n.binclicklj());
                a.data.data.long_time;
                var s = a.data.data.from_user;
                console.log(s);
                var c = a.data.data.channel;
                console.log("总分:" + c);
                var i = a.data.data.kaitong;
                console.log("开通:" + i), "xk" == x && "xk" != i && wx.request({
                    url: "https://www.91cch.cn/userapi/user_api1.php?act=updates&tablename=user_" + m,
                    data: {
                        id: g,
                        long_time: "1",
                        kaitong: "xk"
                    },
                    header: {
                        "content-type": "application/x-www-form-urlencoded"
                    },
                    method: "POST",
                    success: function(e) {
                        console.log(e.data);
                    }
                }), wx.setStorageSync("zidong" + o, i), void 0 == u && (u = ""), "" == u && (u = a.data.data.diqu, 
                wx.setStorageSync("diqu", u)), "x" == x && "xk" == i && wx.setStorageSync("kaitong" + o, "xk"), 
                "" == x && ("xk" == i && wx.setStorageSync("kaitong" + o, "xk"), "x" == i && wx.setStorageSync("kaitong" + o, "x"));
                var r = a.data.data.share_id;
                console.log("今天:" + r), void 0 == c && (c = ""), 1 == k && "" == c && (console.log("获取失败第一次使用重来"), 
                z = 1, setTimeout(function() {
                    n.binclicklj(), k = 0, console.log("二次等待"), wx.showLoading({
                        title: "正在加载.."
                    });
                }, 3e3)), void 0 == s && (wx.removeStorageSync("user_time" + o), s = m + "退出重新试试!" + g), 
                "该用户已失效,请找单位管理!" == s && (wx.removeStorageSync("user_time" + o), wx.removeStorageSync("userkey" + o), 
                wx.removeStorageSync("userpwd" + o), s = "用户失效,请找单位管理,或到网站上登陆检查账号,", r = "如果网站上登陆没问题,请退出重新登陆!"), 
                null == a.data.data && (s = m + "请退出重登陆新试试!" + g, wx.removeStorageSync("user_time" + o)), 
                wx.hideLoading(), "账号或密码错误!" != s ? (D.globalData.zfengshu = c, console.log(D.globalData.zfengshu), 
                "" != s && (s = "姓 名:" + s, c = "总积分:" + c, r = "当日积分:" + r, n.setData({
                    xm: s
                }), n.setData({
                    zjf: c
                }), n.setData({
                    drjf: r
                }), wx.setStorageSync("zongfeng", c), console.log("写" + o), wx.setStorageSync("diqu", a.data.data.diqu), 
                wx.setStorageSync("xinming" + o, s), wx.setStorageSync("userkey" + o, e), wx.setStorageSync("userpwd" + o, t))) : (wx.removeStorageSync("user_time" + o), 
                wx.removeStorageSync("userkey"), wx.removeStorageSync("userpwd"), wx.removeStorageSync("userkey" + o), 
                wx.removeStorageSync("userpwd" + o), wx.removeStorageSync("xinming" + o), wx.removeStorageSync("zidong" + o), 
                wx.showModal({
                    title: "账号或密码错误!",
                    content: e + ":" + t + ",请检查重试!密码区分大小写!",
                    success: function(e) {
                        e.confirm ? n.tuichu() : e.cancel && n.tuichu();
                    }
                }));
            }
        }));
    },
    genxin: function() {
        var e = this;
        wx.showLoading({
            title: "更新中..."
        });
        var o = wx.getStorageSync("userkey");
        wx.getStorageSync("userpwd");
        console.log("ID:" + g + "账户:" + o), wx.request({
            url: "https://www.91cch.cn/userapi/user_api1.php?act=list&tablename=user_" + m,
            data: {
                id: g
            },
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(o) {
                console.log(o.data);
                o.data.data.long_time;
                var t = o.data.data.from_user;
                console.log(t);
                var a = o.data.data.channel;
                console.log(a);
                var n = o.data.data.share_id;
                console.log(n), "" != t && (t = "姓 名:" + t, a = "总积分:" + a, n = "当日积分:" + n, e.setData({
                    xm: t
                }), e.setData({
                    zjf: a
                }), e.setData({
                    drjf: n
                }), console.log("更新积分" + n)), wx.hideLoading();
            }
        });
    },
    jishi: function() {
        v = 1, _ = 0;
        var e = new Date(), o = 0, t = e.getMinutes(), a = e.getHours(), n = e.getDate();
        console.log(t), console.log(0), console.log(a), console.log(n);
        var s = 0, c = this, s = 0, i = new Array(2);
        i[0] = a, i[1] = t, i[2] = n;
        var r = wx.getStorageSync("time");
        if (console.log("记录时间:" + r[1]), console.log("记录时间:" + r[0]), console.log("记录时间:" + r[2]), 
        n > r[2]) r[0] = 0, wx.setStorageSync("time", i), console.log("隔天重新算"), s = 0, r = wx.getStorageSync("time"); else if (a > r[0]) {
            var g = 60 - r[1];
            o = g + t, c.setData({
                shijianzhi: o
            }), console.log("超一小时"), o >= 5 && 0 == f && (c.genxin(), f = 1), o >= 30 && (s = 1);
        }
        if (void 0 == r[0] && (console.log("重新开始"), wx.setStorageSync("time", i), r = wx.getStorageSync("time")), 
        a == r[0] && (console.log("1小时内"), o = t - r[1], console.log("学习时间" + o), c.setData({
            shijianzhi: o
        }), o >= 5 && 0 == f && (c.genxin(), f = 1)), 0 == s) {
            !function e(t) {
                var a = t.data.second;
                setTimeout(function() {
                    if (t.setData({
                        second: a + 1
                    }), 1 != _) {
                        if (60 == a) {
                            if (t.setData({
                                second: 0
                            }), o++, console.log(o), c.setData({
                                shijianzhi: o
                            }), 60 == o) return;
                            o >= 5 && 0 == f && (c.genxin(), f = 1);
                        }
                        e(t);
                    }
                }, 1e3);
            }(this);
        }
    },
    tuichu: function() {
        f = 0, v = 0, console.log("退出"), "" == a && wx.removeStorageSync("user_time" + o), 
        void 0 == a && wx.removeStorageSync("user_time" + o), wx.removeStorageSync("time"), 
        wx.removeStorageSync("timeyueru"), wx.removeStorageSync("zidong" + o), _ = 1, wx.reLaunch({
            url: "../logs/logs"
        });
    },
    switch1Change: function(e) {
        console.log("switch1 发生 change 事件，携带值为", e.detail.value), 0 == e.detail.value ? wx.showToast({
            title: "后台不费流量",
            icon: "success",
            duration: 3e3
        }) : wx.showToast({
            title: "后台不费流量",
            icon: "success",
            duration: 1e3
        });
    },
    binclickxx: function() {
        var e = this;
        0 == p && wx.request({
            url: "https://www.91cch.cn/userapi/user_api1.php?act=list&tablename=user_26",
            data: {
                id: "82"
            },
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(o) {
                e.setData({
                    mingyan: o.data.data.xz
                });
            }
        }), p = 1, e.jishi(), wx.showToast({
            title: "5分钟更新积分",
            icon: "success",
            duration: 3e3
        });
    },
    onShareAppMessage: function(e) {
        return console.log(e.from), "button" === e.from && console.log(e.target), {
            title: "学法小程序",
            path: "/pages/logs/logs",
            success: function(e) {},
            fail: function(e) {}
        };
    },
    qiehuan: function(e) {
        var o = wx.getStorageSync("id1"), t = wx.getStorageSync("id2"), a = wx.getStorageSync("id3"), n = m + wx.getStorageSync("xinming1") + "-" + o, s = wx.getStorageSync("xinming2") + "-" + t, c = wx.getStorageSync("xinming3") + "-" + a;
        wx.showActionSheet({
            itemList: [ n, s, c ],
            success: function(e) {
                f = 0, v = 0;
                var o = e.tapIndex + 1;
                console.log("切换" + o), wx.removeStorageSync("time"), wx.removeStorageSync("timeyueru");
                var t = wx.getStorageSync("userkey" + o), a = wx.getStorageSync("userpwd" + o);
                wx.setStorageSync("xie", o), wx.setStorageSync("userkey", t), wx.setStorageSync("userpwd", a), 
                wx.reLaunch({
                    url: "../index/index"
                });
            },
            fail: function(e) {
                console.log(e.errMsg);
            }
        });
    },
    xtgengxin: function(e) {
        console.log("版本更新"), wx.clearStorage(), wx.showToast({
            title: "版本更新中...",
            icon: "success",
            duration: 5e3
        }), setTimeout(function() {
            wx.redirectTo({
                url: "../logs/logs"
            }), wx.setStorageSync("banben", "2.3");
        }, 4e3);
    }
});