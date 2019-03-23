//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    input_data: [{ score: '', credit: ''}],
    gpa_sum: '',
    credit_sum: '',
    gpa_ave: ''
  },
  //添加课程
  addClass: function (e) {
    var cb=this.data.input_data;
    console.log(cb);
    cb.push(this.data.input_data.length);
    this.setData({
      input_data:cb
    });
  },
  //删除课程
  deleteClass:function(e){
    var cb = this.data.input_data;
    console.log(cb);
    cb.pop(this.data.input_data.length);
    this.setData({
      input_data: cb
    });
  },
  //表单提交和重置
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value);
    const length=this.data.input_data.length;
    console.log(length);
    var obj=e.detail.value;
    var sum1=0;
    var sum2=0;
    if(obj.score1!=null&&obj.credit1!=null){
      if(obj.score1<60) sum1+=0;
      else sum1 += (4 - Math.pow(100 - obj.score1, 2) * 3 / 1600) * obj.credit1;
      sum2 += obj.credit1*1;
    }
    if (obj.score2!= null && obj.credit2 != null){
      if (obj.score2 < 60) sum1 += 0;
      else sum1 += (4 - Math.pow(100 - obj.score2, 2) * 3 / 1600) * obj.credit2;
      sum2 += obj.credit2*1;
    }
    if (obj.score3 != null && obj.credit3 != null) {
      if (obj.score3 < 60) sum1 += 0;
      else sum1 += (4 - Math.pow(100 - obj.score3, 2) * 3 / 1600) * obj.credit3;
      sum2 += obj.credit3 * 1;
    }
    if (obj.score4 != null && obj.credit4 != null) {
      if (obj.score4 < 60) sum1 += 0;
      else sum1 += (4 - Math.pow(100 - obj.score4, 2) * 3 / 1600) * obj.credit4;
      sum2 += obj.credit4 * 1;
    }
    if (obj.score5 != null && obj.credit5 != null) {
      if (obj.score5 < 60) sum1 += 0;
      else sum1 += (4 - Math.pow(100 - obj.score5, 2) * 3 / 1600) * obj.credit5;
      sum2 += obj.credit5 * 1;
    }
    if (obj.score6 != null && obj.credit6 != null) {
      if (obj.score6 < 60) sum1 += 0;
      else sum1 += (4 - Math.pow(100 - obj.score6, 2) * 3 / 1600) * obj.credit6;
      sum2 += obj.credit6 * 1;
    }
    if (obj.score7 != null && obj.credit7 != null) {
      if (obj.score7 < 60) sum1 += 0;
      else sum1 += (4 - Math.pow(100 - obj.score7, 2) * 3 / 1600) * obj.credit7;
      sum2 += obj.credit7 * 1;
    }
    if (obj.score8 != null && obj.credit8 != null) {
      if (obj.score8 < 60) sum1 += 0;
      else sum1 += (4 - Math.pow(100 - obj.score8, 2) * 3 / 1600) * obj.credit8;
      sum2 += obj.credit8 * 1;
    }
    if (obj.score9 != null && obj.credit9 != null) {
      if (obj.score9 < 60) sum1 += 0;
      else sum1 += (4 - Math.pow(100 - obj.score9, 2) * 3 / 1600) * obj.credit9;
      sum2 += obj.credit9* 1;
    }
    if (obj.score10!= null && obj.credit10 != null){
      if (obj.score10 < 60) sum1 += 0;
      else sum1 += (4 - Math.pow(100 - obj.score10, 2) * 3 / 1600) * obj.credit10;
      sum2 += obj.credit10*1;
    }
    if (obj.score11 != null && obj.credit11 != null) {
      if (obj.score11 < 60) sum1 += 0;
      else sum1 += (4 - Math.pow(100 - obj.score11, 2) * 3 / 1600) * obj.credit11;
      sum2 += obj.credit11 * 1;
    }
    if (obj.score12 != null && obj.credit12 != null) {
      if (obj.score12 < 60) sum1 += 0;
      else sum1 += (4 - Math.pow(100 - obj.score12, 2) * 3 / 1600) * obj.credit12;
      sum2 += obj.credit12 * 1;
    }
    if (obj.score13 != null && obj.credit13 != null) {
      if (obj.score13 < 60) sum1 += 0;
      else sum1 += (4 - Math.pow(100 - obj.score13, 2) * 3 / 1600) * obj.credit13;
      sum2 += obj.credit13 * 1;
    }
    if (obj.score14 != null && obj.credit14 != null) {
      if (obj.score14 < 60) sum1 += 0;
      else sum1 += (4 - Math.pow(100 - obj.score14, 2) * 3 / 1600) * obj.credit14;
      sum2 += obj.credit14 * 1;
    }
    if (obj.score15 != null && obj.credit15 != null) {
      if (obj.score15 < 60) sum1 += 0;
      else sum1 += (4 - Math.pow(100 - obj.score15, 2) * 3 / 1600) * obj.credit15;
      sum2 += obj.credit15 * 1;
    }
    if (obj.score16 != null && obj.credit16 != null) {
      if (obj.score16 < 60) sum1 += 0;
      else sum1 += (4 - Math.pow(100 - obj.score16, 2) * 3 / 1600) * obj.credit16;
      sum2 += obj.credit16 * 1;
    }
    if (obj.score17 != null && obj.credit17 != null) {
      if (obj.score17 < 60) sum1 += 0;
      else sum1 += (4 - Math.pow(100 - obj.score17, 2) * 3 / 1600) * obj.credit17;
      sum2 += obj.credit17 * 1;
    }
    if (obj.score18 != null && obj.credit18 != null) {
      if (obj.score18 < 60) sum1 += 0;
      else sum1 += (4 - Math.pow(100 - obj.score18, 2) * 3 / 1600) * obj.credit18;
      sum2 += obj.credit18 * 1;
    }
    if (obj.score19 != null && obj.credit19 != null) {
      if (obj.score19 < 60) sum1 += 0;
      else sum1 += (4 - Math.pow(100 - obj.score19, 2) * 3 / 1600) * obj.credit19;
      sum2 += obj.credit19* 1;
    }
    if (obj.score20 != null && obj.credit20 != null) {
      if (obj.score20 < 60) sum1 += 0;
      else sum1 += (4 - Math.pow(100 - obj.score20, 2) * 3 / 1600) * obj.credit20;
      sum2 += obj.credit20 * 1;
    }
    if (obj.score21 != null && obj.credit21 != null) {
      if (obj.score21 < 60) sum1 += 0;
      else sum1 += (4 - Math.pow(100 - obj.score21, 2) * 3 / 1600) * obj.credit21;
      sum2 += obj.credit21 * 1;
    }
    if (obj.score22 != null && obj.credit22 != null) {
      if (obj.score22 < 60) sum1 += 0;
      else sum1 += (4 - Math.pow(100 - obj.score22, 2) * 3 / 1600) * obj.credit22;
      sum2 += obj.credit22 * 1;
    }
    if (obj.score23 != null && obj.credit23 != null) {
      if (obj.score23 < 60) sum1 += 0;
      else sum1 += (4 - Math.pow(100 - obj.score23, 2) * 3 / 1600) * obj.credit23;
      sum2 += obj.credit23 * 1;
    }
    if (obj.score24 != null && obj.credit24 != null) {
      if (obj.score24 < 60) sum1 += 0;
      else sum1 += (4 - Math.pow(100 - obj.score24, 2) * 3 / 1600) * obj.credit24;
      sum2 += obj.credit24 * 1;
    }
    if (obj.score25 != null && obj.credit25 != null) {
      if (obj.score25 < 60) sum1 += 0;
      else sum1 += (4 - Math.pow(100 - obj.score25, 2) * 3 / 1600) * obj.credit25;
      sum2 += obj.credit25 * 1;
    }
    if (obj.score26 != null && obj.credit26 != null) {
      if (obj.score26 < 60) sum1 += 0;
      else sum1 += (4 - Math.pow(100 - obj.score26, 2) * 3 / 1600) * obj.credit26;
      sum2 += obj.credit26 * 1;
    }
    if (obj.score27 != null && obj.credit27 != null) {
      if (obj.score27 < 60) sum1 += 0;
      else sum1 += (4 - Math.pow(100 - obj.score27, 2) * 3 / 1600) * obj.credit27;
      sum2 += obj.credit27 * 1;
    }
    if (obj.score28 != null && obj.credit28 != null) {
      if (obj.score28 < 60) sum1 += 0;
      else sum1 += (4 - Math.pow(100 - obj.score28, 2) * 3 / 1600) * obj.credit28;
      sum2 += obj.credit28 * 1;
    }
    if (obj.score29 != null && obj.credit29 != null) {
      if (obj.score29 < 60) sum1 += 0;
      else sum1 += (4 - Math.pow(100 - obj.score29, 2) * 3 / 1600) * obj.credit29;
      sum2 += obj.credit29 * 1;
    }
    if (obj.score30 != null && obj.credit30 != null) {
      if (obj.score30 < 60) sum1 += 0;
      else sum1 += (4 - Math.pow(100 - obj.score30, 2) * 3 / 1600) * obj.credit30;
      sum2 += obj.credit30 * 1;
    }
    if (obj.score31 != null && obj.credit31 != null) {
      if (obj.score31 < 60) sum1 += 0;
      else sum1 += (4 - Math.pow(100 - obj.score31, 2) * 3 / 1600) * obj.credit31;
      sum2 += obj.credit31 * 1;
    }
    if (obj.score32 != null && obj.credit32 != null) {
      if (obj.score32 < 60) sum1 += 0;
      else sum1 += (4 - Math.pow(100 - obj.score32, 2) * 3 / 1600) * obj.credit32;
      sum2 += obj.credit32 * 1;
    }
    if (obj.score33 != null && obj.credit33 != null) {
      if (obj.score33 < 60) sum1 += 0;
      else sum1 += (4 - Math.pow(100 - obj.score33, 2) * 3 / 1600) * obj.credit33;
      sum2 += obj.credit33 * 1;
    }
    if (obj.score34 != null && obj.credit34 != null) {
      if (obj.score34 < 60) sum1 += 0;
      else sum1 += (4 - Math.pow(100 - obj.score34, 2) * 3 / 1600) * obj.credit34;
      sum2 += obj.credit34 * 1;
    }
    if (obj.score35 != null && obj.credit35 != null) {
      if (obj.score35 < 60) sum1 += 0;
      else sum1 += (4 - Math.pow(100 - obj.score35, 2) * 3 / 1600) * obj.credit35;
      sum2 += obj.credit35 * 1;
    }
    if (obj.score36 != null && obj.credit36 != null) {
      if (obj.score36 < 60) sum1 += 0;
      else sum1 += (4 - Math.pow(100 - obj.score36, 2) * 3 / 1600) * obj.credit36;
      sum2 += obj.credit36 * 1;
    }
    if (obj.score37 != null && obj.credit37 != null) {
      if (obj.score37 < 60) sum1 += 0;
      else sum1 += (4 - Math.pow(100 - obj.score37, 2) * 3 / 1600) * obj.credit37;
      sum2 += obj.credit37 * 1;
    }
    if (obj.score38 != null && obj.credit38 != null) {
      if (obj.score38 < 60) sum1 += 0;
      else sum1 += (4 - Math.pow(100 - obj.score38, 2) * 3 / 1600) * obj.credit38;
      sum2 += obj.credit38 * 1;
    }
    if (obj.score39 != null && obj.credit39 != null) {
      if (obj.score39 < 60) sum1 += 0;
      else sum1 += (4 - Math.pow(100 - obj.score39, 2) * 3 / 1600) * obj.credit39;
      sum2 += obj.credit39 * 1;
    }
    if (obj.score40 != null && obj.credit40 != null) {
      if (obj.score40 < 60) sum1 += 0;
      else sum1 += (4 - Math.pow(100 - obj.score40, 2) * 3 / 1600) * obj.credit40;
      sum2 += obj.credit40 * 1;
    }
    if (obj.score41 != null && obj.credit41 != null) {
      if (obj.score41 < 60) sum1 += 0;
      else sum1 += (4 - Math.pow(100 - obj.score41, 2) * 3 / 1600) * obj.credit41;
      sum2 += obj.credit41 * 1;
    }
    if (obj.score42 != null && obj.credit42 != null) {
      if (obj.score42 < 60) sum1 += 0;
      else sum1 += (4 - Math.pow(100 - obj.score42, 2) * 3 / 1600) * obj.credit42;
      sum2 += obj.credit42 * 1;
    }
    if (obj.score43 != null && obj.credit43 != null) {
      if (obj.score43 < 60) sum1 += 0;
      else sum1 += (4 - Math.pow(100 - obj.score43, 2) * 3 / 1600) * obj.credit43;
      sum2 += obj.credit43 * 1;
    }
    if (obj.score44 != null && obj.credit44 != null) {
      if (obj.score44 < 60) sum1 += 0;
      else sum1 += (4 - Math.pow(100 - obj.score44, 2) * 3 / 1600) * obj.credit44;
      sum2 += obj.credit44 * 1;
    }
    if (obj.score45 != null && obj.credit45 != null) {
      if (obj.score45 < 60) sum1 += 0;
      else sum1 += (4 - Math.pow(100 - obj.score45, 2) * 3 / 1600) * obj.credit45;
      sum2 += obj.credit45 * 1;
    }
    if (obj.score46 != null && obj.credit46 != null) {
      if (obj.score46 < 60) sum1 += 0;
      else sum1 += (4 - Math.pow(100 - obj.score46, 2) * 3 / 1600) * obj.credit46;
      sum2 += obj.credit46 * 1;
    }
    if (obj.score47 != null && obj.credit47 != null) {
      if (obj.score47 < 60) sum1 += 0;
      else sum1 += (4 - Math.pow(100 - obj.score47, 2) * 3 / 1600) * obj.credit47;
      sum2 += obj.credit47 * 1;
    }
    if (obj.score48 != null && obj.credit48 != null) {
      if (obj.score48 < 60) sum1 += 0;
      else sum1 += (4 - Math.pow(100 - obj.score48, 2) * 3 / 1600) * obj.credit48;
      sum2 += obj.credit48 * 1;
    }
    if (obj.score49 != null && obj.credit49 != null) {
      if (obj.score49 < 60) sum1 += 0;
      else sum1 += (4 - Math.pow(100 - obj.score49, 2) * 3 / 1600) * obj.credit49;
      sum2 += obj.credit49 * 1;
    }
    if (obj.score50 != null && obj.credit50 != null) {
      if (obj.score50 < 60) sum1 += 0;
      else sum1 += (4 - Math.pow(100 - obj.score50, 2) * 3 / 1600) * obj.credit50;
      sum2 += obj.credit50 * 1;
    }
    console.log(sum1);
    console.log(sum2);
    console.log(sum1/sum2);
    this.setData({
      gpa_sum:sum1,
      credit_sum:sum2,
      gpa_ave:sum1/sum2
    })
    // for (var i = 1;i<length;i++){
    //   sum1 += (4 - Math.pow(100 - obj.score1, 2) * 3 / 1600) * e.detail.value.credit1;
    //   sum2 += e.detail.value.crediti;
    //   i++;
    // }
    // console.log(e.detail.value[0]);
    // console.log(sum1);
    // console.log(sum2);
    // //计算
    // this.setData({
    //   gpa_sum: (4 - Math.pow(100 - e.detail.value.score, 2) * 3 / 1600) * e.detail.value.credit,
    //   credit_sum: e.detail.value.credit,
    //   gpa_ave: (4 - Math.pow(100 - e.detail.value.score, 2) * 3 / 1600) * e.detail.value.credit / e.detail.value.credit
    // })
  },
  formReset: function () {
    console.log('form发生了reset事件')
    this.setData({
      input_data: [{ score: '', credit: '' }],
      gpa_sum:'',
      credit_sum:'',
      gpa_ave:''
    })
  },
})
