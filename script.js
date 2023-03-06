function GetPrint() {
  /*For Print*/
  window.print();
}

function BtnAdd() {
  /*Add Button*/
  var v = $("#TRow").clone().appendTo("#TBody");
  $(v).find("input").val("");
  $(v).removeClass("d-none");
}

function BtnDel(v) {
  /*Delete Button*/
  $(v).parent().parent().remove();
  GetTotal();
}

function Calc(v) {
  /*Detail Calculation Each Row*/
  var index = $(v).parent().parent().index();

  var qty = document.getElementsByName("qty")[index].value;
  var rate = document.getElementsByName("rate")[index].value;

  var amt = qty * rate;
  document.getElementsByName("amt")[index].value = amt;

  GetTotal();
}

function GetTotal() {
  /*Footer Calculation*/

  var sum = 0;
  var amts = document.getElementsByName("amt");

  for (let index = 0; index < amts.length; index++) {
    var amt = amts[index].value;
    sum = +sum + +amt;
  }

  document.getElementById("FTotal").value = sum;

  var gst = document.getElementById("FGST").value;
  var net = +sum + +gst;
  document.getElementById("FNet").value = net;
}
