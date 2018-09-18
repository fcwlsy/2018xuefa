getApp();

var a = new Array(), t = new Array(), e = new Array(), o = new Array(), s = new Array(), n = new Array(), i = new Array(), l = new Array(), c = new Array(), r = 0, u = 0;

Page({
    data: {
        A: "A ",
        B: "B ",
        C: "C ",
        D: "D ",
        YES: "正确",
        NO: "错误",
        items: [ {
            value: "其计算结果是一个字符串，类型后代表真值。"
        }, {
            value: "美国"
        }, {
            value: "美国"
        }, {
            value: "美国"
        } ],
        tixing: "单选题",
        timu: "",
        cankao: 2,
        daan: "",
        xzt: "",
        tishu: 0,
        item: "",
        kaitong: "点击开通"
    },
    radioChange: function(a) {
        console.log("radio发生change事件，携带value值为：", a.detail.value);
    },
    onLoad: function(c) {
        var g, d = this;
        2 == c.id && (r = 0, u = 1), wx.showLoading({
            title: "正在加载.."
        }), g = parseInt(10 * Math.random()), console.log("suji" + g), 0 == g && (g = 1), 
        wx.request({
            url: "https://www.91cch.cn/userapi/user_api1.php?act=list&tablename=user_26",
            data: {
                user: g
            },
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(c) {
                if (console.log(c), t = c.data.data.xz.split("|"), n = c.data.data.dx.split("|"), 
                o = c.data.data.pd.split("|"), console.log(t[0] + o), 0 == t[0]) wx.navigateTo({
                    url: "../kaoshi1/kaoshi1?id=1"
                }); else {
                    for (r = 0; r < 20; r++) console.log(r), e[r] = t[r].split("@"), console.log(e[r][0]);
                    d.setData({
                        timu: e[0]
                    });
                    for (r = 0; r < 20; r++) l[r] = e[r][1].split(";"), console.log(l[r]);
                    d.setData({
                        daan: l[0]
                    });
                    for (r = 0; r < 20; r++) i[r] = n[r].split("@"), console.log(i[r][0]), console.log(i[r][1]), 
                    console.log(i[r][2]);
                    for (r = 0; r < 20; r++) a[r] = i[r][1].split(";"), console.log(a[r]);
                    for (var r = 0; r < 10; r++) s[r] = o[r].split("@"), console.log(s[r]), console.log(s[r][0]), 
                    console.log(s[r][1]), console.log(s[r][2]);
                    d.setData({
                        kaitong: ""
                    });
                }
            }
        }), setTimeout(function() {
            wx.hideLoading();
        }, 3e3);
    },
    xiayiti: function(t) {
        var o = this;
        "x" == t.currentTarget.id ? r < 49 && r++ : (r = 0, wx.showModal({
            title: "交卷!",
            content: "提交交卷!",
            success: function(a) {
                a.confirm ? (console.log("交卷成功"), wx.showLoading({
                    title: "交卷成功"
                }), setTimeout(function() {
                    wx.hideLoading(), wx.reLaunch({
                        url: "../kaoshi/kaoshi?id=1"
                    });
                }, 5e3)) : a.cancel && console.log("用户点击取消");
            }
        })), o.setData({
            tishu: r
        }), 0 == u && r >= 4 && wx.showModal({
            title: "提示",
            content: "此为模拟试用,既做效果演示!",
            success: function(a) {
                a.confirm ? console.log("用户点击确定") : a.cancel && console.log("用户点击取消");
            }
        }), r <= 20 && (o.setData({
            tixing: "单选题"
        }), o.setData({
            timu: e[r]
        }), o.setData({
            daan: l[r]
        }), o.setData({
            A: "A"
        }), o.setData({
            B: "B"
        }), o.setData({
            C: "C"
        }), o.setData({
            D: "D"
        }), o.setData({
            cankao: 2
        })), r >= 40 && (o.setData({
            tixing: "判断题"
        }), o.setData({
            timu: s[r - 40]
        }), c[0] = "正确", c[1] = "错误", o.setData({
            daan: c
        }), o.setData({
            A: ""
        }), o.setData({
            B: ""
        }), o.setData({
            C: ""
        }), o.setData({
            D: ""
        })), r >= 20 && (o.setData({
            tixing: "多选题"
        }), o.setData({
            timu: i[r - 20]
        }), o.setData({
            daan: a[r - 20]
        }), o.setData({
            A: "A"
        }), o.setData({
            B: "B"
        }), o.setData({
            C: "C"
        }), o.setData({
            D: "D"
        }));
    },
    checkboxChange: function(a) {
        console.log("checkbox发生change事件，携带value值为：", a.detail.value);
    }
});